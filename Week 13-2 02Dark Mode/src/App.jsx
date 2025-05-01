// change in index.html, added a class dark on top
// change in tailwind.config.js, added a darkmode selector
export default function App() {
  return (
    <>
      <div className="h-screen bg-white dark:bg-blue-950 text-black dark:text-white">
        <button onClick={()=>{
          document.querySelector("html").classList.toggle("dark")
        }}>Toggle theme</button>

      </div>
    </>
  )
}