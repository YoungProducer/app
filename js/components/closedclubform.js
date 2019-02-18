import React, {Component} from 'react'
import axios from 'axios'


export default class CCForm extends Component {
    constructor() {
        super()

        this.state = {
            form: 'name',
            url: 'closedclub.php',
            resPlace: 'success',
            ccusername: '',
            ccusernumber: ''
        }
    }

    sendAjaxQuery = () => {
        console.log('click');

        axios.post(this.state.url, {
            name: this.state.ccusername,
            number: this.state.ccusernumber
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    inputHadler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div className="wrapper">
                <div className="closed-club">
                <div className="closed-club-content">
                    {this.props.isDescription ? <h1>{this.props.description}</h1> : <></>}
                        <form action="" name="club">
                            <input className="ccinput" onChange={this.inputHadler} type="text" name="ccname" placeholder="Ім'я"/>
                            <input className="ccinput" onChange={this.inputHadler} type="tel" name="ccusernumber" placeholder="Номер телефону"/>
                            <input className="ccbtn" type="button" name="ccbutton" value="Приєднатися" onClick={this.sendAjaxQuery}/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// <h1>{this.props.description}</h1>
