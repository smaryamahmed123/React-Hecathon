import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import { LogIn } from './Pages/LogIn';
import AuthRoute from './Routes/AuthRoutes';
import ProtectedRoute from './Routes/ProtectedRoutes';
import  Home  from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import DetailedPg from './Pages/DetailedPg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route element={<AuthRoute/>}>
      <Route index element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      </Route>
     {/* <Route element={<ProtectedRoute/>}>
        <Route path="/home">
            <Route index element={<Home />} />
             <Route path='DetailedPg/:id' element={<DetailedPg/>}/>
      </Route>

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>  */}

<Route
          path="/"
          element={<ProtectedRoute />}
        >
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="//aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="DetailedPg/:id" element={<DetailedPg />} />
        </Route>


    </Routes>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
     />
     <ToastContainer />
    </>
  )
}

export default App
