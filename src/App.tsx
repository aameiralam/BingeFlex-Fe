import { Routes, Route } from 'react-router-dom'
import Register from './Auth/register.tsx'
import MovieList from './Component/MovieList.tsx'
import {Navbar} from './Static/Navbar.tsx'
import Login from './Auth/Login.tsx'
import UpdateMovie from './Component/UpdateMovie.tsx'; 
import About from './Component/About.tsx'
import Footer from './Static/Footer.tsx'
import Home from './Component/Home.tsx'
// import AdminLogin from './Auth/AdminLogin.tsx'


function App() {
  

  return (
    <>
    
    
      
      <Routes>
      
      
   
      <Route path='/' element={<MovieList/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/adminLogin' element={<AdminLogin/>}/> */}
      <Route path='/home' element={<Home/>}/>
      <Route path='/update/:id' element={<UpdateMovie/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/' element={<Footer/>}/> */}
     
  
      </Routes>
      {/* <Footer/> */}

    </>
  )
}

export default App
