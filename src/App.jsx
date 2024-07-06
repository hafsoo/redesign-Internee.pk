
import './App.css'
import {  createBrowserRouter ,RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar'
import Front from './components/Front'
import Internship from './components/Internship'
import Intro from './components/Intro'
import CompanyRev from './components/CompanyRev'
import Footer from './components/Footer'
import Login from './components/Login'
function App() {
 let router=createBrowserRouter([
{
      path:'/',
      element:
      <>
      <div className='internee max-w-[100vw] overflow-hidden'>
      <Navbar/>
       <Front/>
       <Intro />
       <Internship/>
       <CompanyRev/>
       <Footer />
       </div>
       </>  
},{
  path:'/login',
  element:<Login/>
},
{
 path:'/internships',
 element:<><Navbar/> <Internship/></>
},
{
path:'/reviews',
element:<div className='overflow-hidden'><Navbar/> <CompanyRev/></div>
},
{
path:'/contact',
element:<><Navbar/> <Footer/></>
}
 ])
  return (
    <>
  
    <RouterProvider router={router}/> 
    </>
  )
}

export default App
