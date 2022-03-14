import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  const [currentPage, setCurrentPage] = useState('Home');
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
