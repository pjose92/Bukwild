import React from 'react';
import dataContent from './data/db.json';
import arrow from './assets/right-arrow.svg';

class Buk extends React.Component{
    render(){
     return(
            <>  
                <div id="test" className="headings">
                    {/* Headline on the page  */}
                    <div className="headline">
                        {dataContent.pages[this.props.index].blocks[0].headline}
                    </div>
                    {/* this is the subhead line on the page  */}
                    <div className="subhead">
                        {dataContent.pages[this.props.index].blocks[0].subhead}
                    </div>
                </div>
                <div className="cta-box fade-up">
                    {/* text on the white bottom box */}
                    <div className="cta-text">
                        {dataContent.pages[this.props.index].blocks[0].cta}
                    </div>
                    <div className="lets-talk-button">
                        <span className="LETS-TALK">LET'S TALK.</span>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div> 
            </>
        );
    }
}

export default Buk;