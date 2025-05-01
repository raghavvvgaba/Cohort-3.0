export function SideBarClass1(){
    return <div className="flex">
        <div className="transition-all duration-150 md:block md:w-1/6 w-0 h-screen">
            Sidebar
        </div>
        <div className="bg-green-800 w-full h-screen">
            Content
        </div>
    </div>
}