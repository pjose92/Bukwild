import React from 'react';
import Buk from './Buk';
import logo from './abc_logo.svg';
import dataContent from './data/db.json';

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

                <Buk index={this.state.index} />
        );
    }
}

export default App;