import posed                        from 'react-pose'
import React, {Component}           from 'react'
import { connect }                  from 'react-redux'
import PropTypes                    from 'prop-types'

import { 
    addService, 
    addPrice, 
    subtractPrice,
    removeService} from '../actions/actions'

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

class Switcher extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active: false
        }

        this.onMouseClickHandle = this.onMouseClickHandle.bind(this)
    }

    onMouseClickHandle = (sname, sprice) => {
        this.setState({active: !this.state.active})

        if (this.state.active !== true) {
            this.props.onAddService(sname, sprice)
            this.props.onAddPrice(sprice)
        } else {
            this.props.onRemoveService(sname)
            this.props.onSubPrice(sprice)
        }
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
                    onClick={() => this.onMouseClickHandle(this.props.sname, this.props.sprice)}
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

Switcher.propTypes = {
    onAddService: PropTypes.func.isRequired,
    onRemoveService: PropTypes.func.isRequired,
    onAddPrice: PropTypes.func.isRequired,
    onSubPrice: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        onAddService: (name, price) => {
            dispatch(addService(name, price))
        },

        onRemoveService: (name) => {
            dispatch(removeService(name))
        },

        onAddPrice: (price) => {
            dispatch(addPrice(price))
        },

        onSubPrice: (price) => {
            dispatch(subtractPrice(price))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Switcher)
