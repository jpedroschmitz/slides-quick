import React, { Component } from 'react';

import Textarea from '../../components/Textarea/Textarea';
import PlaygroundBase from '../../components/PlaygroundBase/PlaygroundBase';

import { List } from 'antd';

const data = [
    '- Paste your text or write it on the textarea above;',
    '- Separate slides by paragraphs;',
];

class Playground extends Component {
    state = {
        text: '',
    };

    componentWillMount() {
        let data = localStorage.getItem('@playground:text');
        if (data) {
            data = JSON.parse(data);
            data = data.join('\n\n');
            this.setState({text: data});
        }
    }

    handleTextarea = (event) => {
        const value = event.target.value;
        if (value === "") {
            localStorage.removeItem('@playground:text');
            this.setState({text: ''});
        } else {
            localStorage.setItem('@playground:text', JSON.stringify(value.split('\n\n')));
            this.setState({text: value});
        }
    };

    render() {
    return (
        <PlaygroundBase title="Playground - Slide Text">
            <Textarea placeholder="Paste or write your text here" changed={this.handleTextarea} text={this.state.text}></Textarea>
            <List size="large" header={<div>Instructions:</div>} bordered style={{margin: '24px 0'}} dataSource={data} renderItem={item => (<List.Item>{item}</List.Item>)}/>
        </PlaygroundBase>
        );
    }
}

export default Playground;
