import React from 'react';
import Buk from './Buk';
import logo from './assets/abc_logo.svg';
import dataContent from './data/db.json';

// this will map through the db.json file to get new background image
var images = dataContent.pages.map(value => require(`./backgrounds/${value.blocks[0].background}`));
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            index : 0
        }
    }
 
    render(){
        return(
            //assigning the bg image
            <div style={{
                backgroundImage: `url(${images[this.state.index].default})`
                }} className="main-container">
                <div className="top-ui">
                    <div className="logo-contact-box">
                        <img id="logo" src={logo} alt="website-logo"/>
                        <div id="contact-button">
                          Contact Us
                        </div>
                    </div>
                    <div onClick={() => this.setState({index: 0})} className="nav-link">Industries</div>
                    <div onClick={() => this.setState({index: 1})} className="nav-link">Services</div>
                    <div onClick={() => this.setState({index: 2})} className="nav-link">About Us</div>
                </div>
                <Buk index={this.state.index} />
            </div>
        );
    }
}

export default App;