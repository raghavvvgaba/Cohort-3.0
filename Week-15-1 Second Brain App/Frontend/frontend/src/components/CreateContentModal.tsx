import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
    YouTube = "youtube",
    Twitter = "twitter"
}


export function CreateContentModal({ open, onClose }) {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null)
    const [type, setType] = useState(ContentType.YouTube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            title,
            link,
            type
        },{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();
    }

    return (
        <div>
            {open && (
                // Modal background overlay
                <div>
                    <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>
                    {/* Modal content container */}
                    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                        <div className="flex flex-col justify-center">
                            <span className="bg-white opacity-100 p-4 rounded fixed">
                                {/* Close button */}
                                <div className="flex justify-end">
                                    <div onClick={onClose} className="cursor-pointer">
                                        <CrossIcon />
                                    </div>
                                </div>
                                {/* Input fields for title and link */}
                                <div>
                                    <Input ref={titleRef} placeholder="Title" />
                                    <Input ref={linkRef} placeholder="Link" />
                                </div>
                                {/* Content type selection */}
                                <div>
                                    <h1>Type</h1>
                                    <div className="flex gap-1 justify-center pb-2">
                                        {/* Button to select YouTube type */}
                                        <Button
                                            text="Youtube"
                                            variant={type === ContentType.YouTube ? "primary" : "secondary"}
                                            onClick={() => setType(ContentType.YouTube)}
                                        />
                                        {/* Button to select Twitter type */}
                                        <Button
                                            text="Twitter"
                                            variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                            onClick={() => setType(ContentType.Twitter)}
                                        />
                                    </div>
                                </div>
                                {/* Submit button */}
                                <div className="flex justify-center">
                                    <Button onClick={addContent} variant="primary" text="Submit" />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
