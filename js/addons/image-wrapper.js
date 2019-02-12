import React, {Component} from 'react'
import posed from 'react-pose'
import cubicBezier from 'react-pose'

const ImageText = posed.h1({
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 300,
            type: 'spring'
        }
    },
    hidden: {
        opacity: 0,
        x: 30,
        transition: {
            duration: 300,
            type: 'spring'
        }
    }
})

const Wrapper = posed.div({
    init: {

    }
})

const Image = posed.img({
    hovered: { 
        scale: 1.1,
        transition: {
            duration: 1200,
            ease: 'linear'
        }
    },
    unhovered: {
        scale: 1,
        transition: {
            duration: 1200,
            ease: 'linear'
        }
    }
})

const Eclipse = posed.div({
    visible: {
        opacity: 0.7,
        transition: {
            duration: 200,
            ease: 'linear'
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 200,
            ease: 'linear'
        }
    }
})

const Style = {
    height: window.innerHeight - parseInt($('.header-bar').css('height')) / 3, 
    lineHeight: window.innerHeight - parseInt($('.header-bar').css('height')) / 3
}

export default class ImageWrapper extends Component {
    state = {
        hovered: false,
    }

    render() {
        return (
            <Wrapper 
                className="image-wrapper img-fluid"
                onMouseEnter={() => {this.setState({hovered: !this.state.hovered})}}
                onMouseLeave={() => {this.setState({hovered: !this.state.hovered})}}
                
            >
                <Eclipse className="eclipse" pose={this.state.hovered ? 'visible' : 'hidden'}/>
                <div className="over-image">
                    <ImageText pose={this.state.hovered ? 'visible' : 'hidden'}>{this.props.phoneName}</ImageText>
                </div>
                <Image 
                    src={this.props.link} 
                    pose={this.state.hovered ? 'hovered' : 'unhovered'}    
                />
            </Wrapper>
        )
    }
}
