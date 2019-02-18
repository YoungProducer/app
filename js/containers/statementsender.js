import React, {Component}   from 'react'
import axios                from 'axios'
import PropTypes            from 'prop-types'
import { connect }          from 'react-redux'
import { async }            from 'q'

class StatementSender extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            pcusername: '',
            pcusernumber: '',
        }

        this._inputHandler  = this._inputHandler.bind(this)
        this.formSubmit     = this.formSubmit.bind(this)
    }

    _inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit() {
        const sendData = async() => {
            try {
                return await axios.post('/repair-request', {
                    price: this.props.totalprice,
                    name: this.state.pcusername,
                    number: this.state.pcusernumber,
                    services: this.props.services
                })
            } catch (error) {
                console.log(error)
            }
        }

        let { data } = sendData.data

        console.log(data)

        const getResponse = async () => {
            const srvResponse = sendData()
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }

        getResponse()
    }

    render() {
        return (
            <div className="side-bar">
                <div className="sidebar-content">
                    <form action="price.html" method="post" className="pcform" name="pc">
                        <h1>Ціна <span className="span-color">разом</span></h1>
                        <div className="price">
                            <h1 className="price-counter">{this.props.totalprice.length === 0 ? 0 : this.props.totalprice}</h1><span className="currency"> грн.</span>
                        </div>
                        <input onChange={this._inputHandler} className="price-counter-input" type="text" name="pcprice" value="0" />
                        <input onChange={this._inputHandler} className="pcinput" type="text" name="pcusername" placeholder="Ім'я" />
                        <input onChange={this._inputHandler} className="pcinput" type="text" name="pcusernumber" placeholder="Номер телефону" autoComplete="off" />
                        <hr />
                        <div className="desc-block">
                            <object data="img/location-pin.svg" type="image/svg+xml" className="reward-icon"></object>
                            <h2>Знаходимось поруч</h2>
                        </div>
                        <div className="desc-block">
                            <object data="img/clock.svg" type="image/svg+xml" className="reward-icon"></object>
                            <h2>Ремонтуємо за 20 хв</h2>
                        </div>
                        <div className="desc-block">
                            <object data="img/medal1.svg" type="image/svg+xml" className="reward-icon"></object>
                            <h2>Даємо гарантію на 1 рік</h2>
                        </div>
                        <input className="pcbtn" type="button" value="Записатись на ремонт" onClick={this.formSubmit}/>
                        {console.log(this.props.services)}
                    </form>          
                </div>
            </div>
        )
    }
}

StatementSender.propTypes = {
    services: PropTypes.array.isRequired,
    totalprice: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    services: state.services,
    totalprice: state.totalprice
})

export default connect(
    mapStateToProps,
    null
)(StatementSender)