import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-sunray-100">
                <Logo/>
            </div>
            Second Brain App
        </div>
        <div className="pt-8 pl-4">
            <SidebarItems text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItems text="YouTube" icon={<YoutubeIcon/>}/>
        </div>
    </div>
}
//02:18:09 