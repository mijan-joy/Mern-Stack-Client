import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Authentication/Login';
import RequiredAdmin from './Pages/Authentication/RequiredAdmin';
import RequiredAuth from './Pages/Authentication/RequiredAuth';
import SignUp from './Pages/Authentication/SignUp';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Dashboard from "./Pages/DashBoard/Dashboard";
import MyOrders from "./Pages/DashBoard/MyOrders";
import MyProfile from "./Pages/DashBoard/MyProfile";
import MyReview from "./Pages/DashBoard/MyReview";
import Users from './Pages/DashBoard/Users';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/PortFolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';







const App = () => {
  return (
    <div className="max-w-7xl	mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
         
        <Route path="/dashboard" element={ 
        <RequiredAuth>
            <Dashboard></Dashboard>
        </RequiredAuth> }

                >
                    <Route index element={<MyProfile></MyProfile>}></Route>
                    <Route
                        path="myOrders"
                        element={<MyOrders></MyOrders>}
                    ></Route>
                    <Route
                        path="myReviews"
                        element={<MyReview></MyReview>}
                    ></Route>
                     <Route
                        path="users"
                        element={
                            <RequiredAdmin>
                                <Users></Users>
                            </RequiredAdmin>
                        }
                    ></Route>
                
                    
                </Route>
        
        <Route path="/purchase/:id" element={ <Purchase></Purchase> }         ></Route>
        
       
        
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;