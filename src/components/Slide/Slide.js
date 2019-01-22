import React from 'react';

const Slide = (props) => {
    const style = {
        backgroundColor: '#7f8fa6',
        color: '#FFFFFF',
        width: '75vw',
        height: '400px',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    if (props.isFull) {
        style.height = '100vh';
        style.width = '100vw';
        style.fontSize = '6rem';
        style.margin = '0';
    }

    const data = props.children.replace(/[\n\r]/g, "<br>");

    return (
        <div style={style} dangerouslySetInnerHTML={{__html: data}}></div>
    );
};

export default Slide;