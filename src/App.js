// // 
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//    );
//  }

// export default App;
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Navbar from './Navbar'; // Ensure this is the correct path
import './App.css';

const App = () => {
  return (


    <>
      <BrowserRouter>


      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
// // import ImageSection from './pages/imageSection';

// import Home from './pages/Home';
// // import About from './pages/Onas';
// //  import Oferta from './pages/offer';
 
// import './App.css';
// // import AdminPage from './AdminPage1';
// // import Books from './components/Books';
// // import AdminDashboard from './AdminDashboard';
// // import Login from './login';
// // import AdminPage from './AdminPage';

// const App = () => {
//   return (


//     <>
//       <BrowserRouter>


//         <Outlet />
//         <Routes>

//           <Route exact path="/" element={<Home />} />
//            {/* <Route exact path="/offer" element={<Oferta />} />
//           <Route exact path="/onas" element={<About />} /> */}
          
          
          
          
          
          
          
          
          
        
          
          
//           {/* <Route path='*' element={<Navigate to='/' />} /> */}
// {/* <Route path="/admin" element={<AdminPage />} /> */}
//  {/* <Route path="/Books" element={<Books />} />
// <Route path="/AdminDashboard" element={<AdminDashboard />} />
// <Route path="/AdminPage" element={<AdminPage />} />
// <Route path="/login" element={<Login />}  */}



//         </Routes>

//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

// src/App.js
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import './App.css'
// // import Cart from './pages/Cart';
// // import Checkout from './pages/Checkout';
// // import About from './pages/About';
// // import Contact from './pages/Contact';
// // import Header from './components/Header';
// // import Footer from './components/Footer';

// function App() {
//   return (
//    <Router>
//       {/* <Header /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} /> */}
//       </Routes>
//       {/* <Footer /> */}
//      </Router> 
//   );
// }

// export default App;

// 