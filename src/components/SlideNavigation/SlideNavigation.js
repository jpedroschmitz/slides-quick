import React, { Component } from 'react';

import {Button} from 'antd';

class SlideNavigation extends Component {

    componentDidMount() {
        document.addEventListener('keyup', this.handleEventKeyboard);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleEventKeyboard);
    }

    handleEventKeyboard = (event) => {
        if (event.key === 'ArrowRight') {
            this.props.goNext();
        } else if (event.key === 'ArrowLeft') {
            this.props.goPrev();
        }
    };

    render() {
        return (
            <React.Fragment>
                <Button type="primary" style={{margin: '1rem 0'}} onClick={this.props.goFull}>Slideshow</Button>
                <Button type="primary" style={{margin: '1rem 0 0 1rem'}} disabled={this.props.slideVisibleIndex === 0} onClick={this.props.goPrev}>Prev</Button>
                <Button type="primary" style={{margin: '1rem 0 0 1rem'}} disabled={this.props.slideVisibleIndex === (this.props.slideDataLength - 1)} onClick={this.props.goNext}>Next</Button>
            </React.Fragment>
        );
    }
}

export default SlideNavigation;