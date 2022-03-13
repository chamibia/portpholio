import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function RenderPage({ currentPage }) {
  
    if(currentPage === 'Home') {
      return <Home />;
    
    }
    if(currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects'){
      return <Projects />;
    }

    if (currentPage === 'Contact'){
      return <ContactForm/>;
    }
    console.log("Hello World");
    return null;
  }



function App() {
  
  const [currentPage, setCurrentPage] = useState(null);
  useEffect(function() {
    const splitUrl = window.location.href.split("/")
    if (splitUrl[splitUrl.length - 1] === '#home') {
    setCurrentPage('Home');
    }
    if (splitUrl[splitUrl.length - 1] === '#about') {
      setCurrentPage('About');
    }
    if (splitUrl[splitUrl.length - 1] === '#projects') {
      setCurrentPage('Projects');
    }
    if (splitUrl[splitUrl.length - 1] === '#contact') {
      setCurrentPage('Contact');
    }
}, [] 


  ) 
  //MEthod to check value of 'currentPage => return value of currentPage, corresponding to compent to render 
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <RenderPage currentPage={currentPage} />
      <Footer></Footer>
    </div>
  );
}

export default App;
