import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  //MEthod to check value of 'currentPage => return value of currentPage, corresponding to compent to render 
  const renderPage = () => {
    
    if(currentPage === 'Home') {
      return <Home />;
    
    }
    if(currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects'){
      return <Projects />;
    }
    if (currentPage === 'ContactForm'){
      return <ContactForm/>;
    };
    const handlePageChange = (page) => setCurrentPage(page);
  }
  return (
    <div>
      {/* Passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

export default App;
