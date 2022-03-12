import React from 'react';

function Nav() {

    const handleClick = () => {
        console.log("click handled")
    }

  return (
    <header data-testid="header" className="flex-row px-1">
        
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about" onClick={() => handleClick()}>
          About 
        </a>
      </li>
      <li className={"mx-2"}>
          <span onClick={() => handleClick()}>Contact
          </span>
      </li>
      <li className="mx-2">
        <a href="#portfolio" onClick={() => handleClick()}>
          Portfolio
        </a>
      </li>

      <li className={"mx-2"}>
          <a href="#resume" onClick={() => handleClick()}>
              Resume
          </a>
      </li>
    </ul>
  </nav>
    </header>
  );
}

export default Nav;