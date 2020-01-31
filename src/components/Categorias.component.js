import React, { Component } from 'react';
import Axios from 'axios';

class Categorias extends React.Component  {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
        
    }
    componentDidMount(){

    }

    handleLoad(){
        const wrapper = this.wrapperRef.current;
        wrapper.classList.add('fadeInLeft')
    }

  render(){
    return (
        
        <div className="container-fluid">
            
            <div className="row mt-5">
                <div className="col-12 img-banner pt-2">
                    <img className="w-100" src="https://mitienda.moda/img/login.34f12655.jpg" alt=""/>
                    <button className="btn btn-custom-category btn-success text-black">Ver Más</button>
                </div>
            </div>
            <div className="row mt-2">
                
                <div className="col-12 img-container p-3">
                <h5>LÍNEAS</h5>
                    <img className="w-100" src="https://mitienda.moda/img/login.34f12655.jpg" alt=""/>
                    <button className="btn btn-custom-category btn-success text-black">Ver Más</button>
                </div>
            </div>
            <div className="row mt-2">
                
                <div className="col-12 img-container p-3">
                    <img className="w-100" src="https://mitienda.moda/img/login.34f12655.jpg" alt=""/>
                    <button className="btn btn-custom-category btn-success text-black">Ver Más</button>
                </div>
            </div>
            <div className="row mt-2">
                
                <div className="col-12 img-container p-3">
                    <img className="w-100" src="https://mitienda.moda/img/login.34f12655.jpg" alt=""/>
                    <button className="btn btn-custom-category btn-success text-black">Ver Más</button>
                </div>
            </div>
            <div className="row mt-2">
                
                <div className="col-12 img-container p-3">
                    <img className="w-100" src="https://mitienda.moda/img/login.34f12655.jpg" alt=""/>
                    <button className="btn btn-custom-category btn-success text-black">Ver Más</button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 img-container p-2">
                    <img className="w-100" src="https://mitienda.moda/img/login.34f12655.jpg" alt=""/>
                    <button className="btn btn-custom-category btn-success text-black">Ver Más</button>
                </div>
            </div>

            <div className="row mt-2 pl-4 pr-4">
                <div className="col-6 img-thumbnail-container p-3">
                    <img className="w-100" src="https://mitienda.moda/img/login.34f12655.jpg" alt=""/>
                </div>
                <div className="col-6 img-thumbnail-container p-3">
                    <img className="w-100" src="https://mitienda.moda/img/login.34f12655.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
  }
}

export default Categorias;
