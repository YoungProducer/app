import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import posed from 'react-pose'
import cubicBezier from 'react-pose'

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


export default class ImageWrapper extends Component {
    state = {
        hovered: false
    }

    render() {
        return (
            <Wrapper className="image-wrapper img-fluid" 
                    onMouseEnter={() => {this.setState({hovered: !this.state.hovered})}}
                    onMouseLeave={() => {this.setState({hovered: !this.state.hovered})}}
                
            >
                <Eclipse className="eclipse" pose={this.state.hovered ? 'visible' : 'hidden'}/>
                <Image 
                    src={this.props.link} 
                    pose={this.state.hovered ? 'hovered' : 'unhovered'}    
                />
            </Wrapper>
        )
    }
}
