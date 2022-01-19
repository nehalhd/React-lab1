import React from "react";
import './HeroSectionStyle.css';
import logo from './images/ee7493467b11a597da884bdd3a15f443.png';
import 'bootstrap/dist/css/bootstrap.min.css';
class HeroSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="">
                    <div className="card bg-dark text-white">
                        <img
                            className="card-img"
                            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
                            alt="Card image"
                        ></img>
                        <div className="card-img-overlay text-center col-3 ms-5 ">
                            <h1 className="card-title  "> Nehal Muhammed</h1>
                            <p className="card-text ">
                                Python Full-Stack Developer
                            </p>
                            <button className="btn btn-dark btn-lg card-text">Contact Me</button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default HeroSection;