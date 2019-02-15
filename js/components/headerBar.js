import React, {Component} from 'react'
import posed from 'react-pose'

import PhoneList from './Phones-list'
import CCForm from './closedclubform'

export default class HeaderBar extends Component {
    state = {
        phoneListHidden: true
    }

    render() {
        return(
            <>
                <section className="header-bar">
                    <div className="wrapper">
                        <div className="header">
                            <div className="header-content">
                                <div className="logo">
                                    <h1 className="logo-text"><a href="#">MobiFix</a></h1>
                                </div>
                            
                                <div className="navigation">
                                    <ul className="nav-bar">
                                        <li><a href="#" id="repair" 
                                        onClick={() => {this.setState({phoneListHidden: !this.state.phoneListHidden})}}>Ремонт</a></li>
                                        <li><a href="#">Аксесуари</a></li>
                                        <li><a href="#">Необхідно знати</a></li>
                                        <li><a href="#">Контакти</a></li>
                                        <li><a href="#">Чому ми?</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PhoneList hidden={this.state.phoneListHidden}/>
                    <CCForm description={this.props.desc}/>
                </section>
            </>
        )
    }
}
{/* <input onChange={this.inputChange} className="ccinput" type="tel" name="ccusernumber" placeholder="Номер телефону" autoComplete="off" /> */}
{/* <input onChange={this.inputChange} className="ccinput" type="text" name="ccsername" placeholder="Ім'я" /> */}

