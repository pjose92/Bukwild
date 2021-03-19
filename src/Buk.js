import React from 'react';
import dataContent from './data/db.json';
import arrow from './right-arrow.svg';

class Buk extends React.Component{
    render(){
     return(
            <>  
                <div id="test" className="headings">
                </div>

                <div className="cta-box fade-up">
                    <div className="cta-text">{dataContent.pages[this.props.index].blocks[0].cta}</div>
                    <div className="lets-talk-button">
                        <span>LET'S TALK.</span>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div> 
            </>
        );
    }
}

export default Buk;