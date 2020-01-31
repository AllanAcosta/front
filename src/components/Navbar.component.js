import React, { Component } from 'react';

class Header extends React.Component  {

  render(){
    
    return (
      
      <header className="w-100">
        <nav className="d-flex justify-content-center align-items-center background-white">

        <div className="w-100 p-1">
          <h1 className="ml-2 mt-2">Cliente Pruebas</h1>
        </div>
      <div className="icons-container d-flex">
        <div className="top-icon p-2"><i className='fa fa-phone'></i></div>
        <div className="top-icon p-2"><i className="fa fa-sign-out"></i></div>
      </div>  
        </nav>
        
      </header>

    );
    
  }
}

export default Header;
