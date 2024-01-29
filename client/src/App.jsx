import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
// import LoginSignup from './pages/LoginSignup/LoginSignup';

function App() {
  return (
    <>
    
  <BrowserRouter>
  <Navbar/>  
  <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path="/signup" element={<LoginSignup />} /> */}
    {/* <Route path="/login" element={<LoginSignup />} /> */}
     {/* <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/about' element={<About/>} />
    <Route element={< PrivateRoute/>} >
    <Route path='/profile' element={<Profile/>} /> 
    </Route> */}
  </Routes>
  <Footer/>
  </BrowserRouter>
    
    </>
  );
}

export default App;



// ////SRISTI

// // App.jsx
// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home/Home';
// import Footer from './components/Footer';
// import LoginSignup from './pages/LoginSignup/LoginSignup';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/signup" component={LoginSignup} />
//         <Route path="/login" component={LoginSignup} />
//         {/* Add more routes as needed */}
//       </Switch>
//     </Router>
//   );
// };

// export default App;


