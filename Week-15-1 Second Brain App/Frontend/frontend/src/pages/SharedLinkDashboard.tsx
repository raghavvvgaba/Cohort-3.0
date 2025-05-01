import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useParams } from "react-router-dom";



function SharedLinkDashboard() {
  const { shareLink } = useParams();
  const shareURL = `localhost:5173/share/${shareLink}`;
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  
  useEffect(()=>{
    refresh();
  }, [modalOpen])
  //state management library replaces this useEffect

  return (
    <>
      <div>
        <Sidebar/>
      </div>
      <div className="p-4 ml-72 min-h-screen bg-white border-2">
        <CreateContentModal open={modalOpen} onClose={()=>{
          setModalOpen(false)
        }}/>
        <div className="flex justify-end gap-4">
          
        {/* <Button onClick={()=>{setModalOpen(true)}} variant="primary" text="Add Content" startIcon={<PlusIcon />}></Button> */}
        {/* button not needed as content cannot be added by a viewer*/}
          
          <Button onClick={()=>{
            if(shareURL == "")
                alert("Link not available")
            else
            navigator.clipboard.writeText(shareURL!);
            alert("Link copied to clipboard")
          }} variant="secondary" text="Share" startIcon={<ShareIcon />}></Button>
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({type, link, title}) => <Card 
          type={type} 
          link={link} 
          title={title}
          />)}
          

        </div>
      </div>
    </>
  )
}

export default SharedLinkDashboard