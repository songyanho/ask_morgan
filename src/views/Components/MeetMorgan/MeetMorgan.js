import React, { Component } from 'react';
import d3 from 'd3';

//<script type="text/javascript" src="d3/d3.js"></script>
    // <script type="text/javascript" src="d3/d3.geom.js"></script>
    // <script type="text/javascript" src="d3/d3.layout.js"></script>
const relatedTopicStyle = {
    borderRadius: '50%',
    color: '#ffffff',
    width: '150px',
    height: '150px',
    backgroundColor: 'rgb(85, 119, 157)',
    fontSize: '16px',
    fontWeight: 900,
    textAlign: 'center',
    display: 'inline-block',
    margin: '10px'
};

const relatedTopicSpanStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '140px'
};

class MeetMorgan extends Component {
    render() {
        return (
            <div className="animated fadeIn" style={{margin: '0 auto', textAlign: 'center'}}>
            <img src="./img/meet_morgan.png" style={{width: '400px'}}/>
            <iframe src="./meet_morgan.html" style={{width: '100%', height: '900px', border:0}}></iframe>
            </div>
        )
    }
}

export default MeetMorgan;
