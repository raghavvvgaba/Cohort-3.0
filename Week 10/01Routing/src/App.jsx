
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
function App() {

  return (
    <>
      {/* <a href="/">Allen</a>
      | 
      <a href="/neet/online-coaching-class-11">Class 11</a> 
      | 
      <a href="/neet/online-coaching-class-12">Class 12</a> */}
      {/*This a href reloads the page to navigate to different routes, killing the purpose of SPA (single page applications) i.e Good UX */}


      <BrowserRouter>
        <Routes>
            <Route path="*" element={<ErrorPage />} />
          <Route path="/neet" element={<Layout />}>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="/neet" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
function Layout() {
  return <div style={{ height: "100vh" }}>
    <Header />
    <div style={{ height: "90vh",background:"#1B0F27" }}>
      <Outlet />  {/*rendering the children routes in the parent route */}
    </div>
    Footer | Contact Us
  </div>
}

function Header() {
  return <div>
    <Link to="/">Allen</Link>
    |
    <Link to="/neet/online-coaching-class-11">Class 11</Link>
    |
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
  </div>
}

function ErrorPage() {
  return <div>
    Sorry page not found
  </div>
}

function Landing() {
  return <div>
    Welcome to landing page
  </div>
}
function Class11Program() {
  return <div>
    NEET programs for Class 11
  </div>
}
function Class12Program() {
  //Let's assume we want the user to navigate back to the landing page after 10 seconds from this page

  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }
  return <div>
    NEET programs for Class 12
    <button onClick={redirectUser}>Redirect to Home</button>
  </div>
}


export default App
