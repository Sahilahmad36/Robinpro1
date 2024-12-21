import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <div>
   <Header />
   <Home />
   <Footer />
   </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
// import About from "./pages/About";
// import Service from "./pages/Service";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<About />} />
//         <Route path="/" element={<Service />} />

//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;
