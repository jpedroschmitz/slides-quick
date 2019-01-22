import React from 'react';

import './Textarea.css';

const Textarea = (props) => {
    return (
        <textarea onChange={props.changed} className="textarea" placeholder={props.placeholder} value={props.text}></textarea>
    );
};

export default Textarea;