import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Fullscreen from "react-full-screen";

import SlideNavigation from '../../components/SlideNavigation/SlideNavigation';
import PlaygroundBase from '../../components/PlaygroundBase/PlaygroundBase';
import Slide from '../../components/Slide/Slide';

class PlaygroundSlides extends Component {
    state = {
        isFull: false,
        slideVisibleIndex: 0,
        slideData: '',
    };

    componentWillMount() {
        let data = localStorage.getItem('@playground:text');

        if (data) {
            this.setState({ slideData: JSON.parse(data) });
        }
    }

    goFull = () => {
        this.setState({ isFull: true });
    };

    goPrev = () => {
        if (this.state.slideVisibleIndex > 0) {
            this.setState({ slideVisibleIndex: (this.state.slideVisibleIndex - 1) });
        }
    };

    goNext = () => {
        if (this.state.slideVisibleIndex < (this.state.slideData.length - 1)) {
            this.setState({ slideVisibleIndex: (this.state.slideVisibleIndex + 1) });
        }
    };

    render() {
        let slides = <h4>Hey, you need to <Link to="/">write</Link> something!</h4>;

        let { slideData } = this.state;
        if (this.state.slideData) {
            slideData = JSON.parse(localStorage.getItem('@playground:text'));
            slides = <Slide isFull={this.state.isFull}>{slideData[this.state.slideVisibleIndex]}</Slide>;
        }

        return (
            <PlaygroundBase title="Playground - Slide Presentation">
                <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>
                    {slides}
                </Fullscreen>
                {this.state.slideData &&
                    <SlideNavigation goFull={this.goFull} goNext={this.goNext} goPrev={this.goPrev} slideVisibleIndex={this.state.slideVisibleIndex} slideDataLength={this.state.slideData.length}/>}
            </PlaygroundBase>
        );
    }
}

export default PlaygroundSlides;