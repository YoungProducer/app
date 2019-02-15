import posed from 'react-pose'
import React, {Component} from 'react'

const SwitchBg = posed.label({
    active: { 
        background: '#4CD562'
    },
    inactive: {
        background: '#ddd'
    }
})

const SwitchBtn = posed.div({
    active: {
        x: '24px',
        transition: {
            type: 'tween',
            duration: 300,
            ease: 'easeInOut'
        }
    },
    inactive: {
        x: '0px',
        transition: {
            type: 'tween',
            duration: 300,
            ease: 'easeInOut'
        }
    }
})

export default class Switcher extends Component {
    state = {
        active: false
    }

    onMouseClickHandle = () => {
        this.setState({active: !this.state.active})
        
    }

    render() {
        return(
            <>
                <input 
                    type="checkbox"
                    id={"check" + this.props.swid} 
                    className="checkboxbtn"
                />
                <SwitchBg
                    pose={this.state.active ? 'active' : 'inactive'}
                    id={"lblcheck" + this.props.swid}
                    className="labelcheckboxbtn"
                    htmlFor={"check" + this.props.swid}
                    onClick={this.onMouseClickHandle}
                >
                    <SwitchBtn 
                        pose={this.state.active ? 'active' : 'inactive'}
                        className="switchbtn"
                    />
                </SwitchBg>
           </>
        )
    }
}

//ReactDOM.render(<Switcher />, document.getElementById('acc'))
