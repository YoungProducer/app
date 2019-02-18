import React, {Component}   from 'react'
import axios                from 'axios'
import { connect }          from 'react-redux'
import PropTypes            from 'prop-types'

import Switcher             from '../containers/switcher'
import { addService }       from '../actions/actions'

class ServicesList extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            selectedPhone: localStorage.getItem('selectedPhone'),

            pricelist: [
                // ["Заміна екрану (Оригінал)", 850],
                // ["Реставрація дисплея",  550],
                // ["Заміна корпусу",  800],
                // ["Заміна акумулятора",  397],
                // ["Заміна основної камери",  350],
                // ["Заміна фронтальної камери",  350],
                // ["Заміна кнопки Home",  250],
                // ["Заміна кнопки Увімкнення",  250],
                // ["Заміна динаміка",  197],      
                // ["Заміна слухового динаміка",  197],
                // ["Заміна гнізда lighting",  350],
                // ["Поклейка захисного скла",  99]
            ]
        }
    }

    componentDidMount() {
        // console.log(this.state.selectedPhone.slice(this.state.selectedPhone.indexOf(" ")))



        axios
            .get('http://127.0.0.1/price.php?name=' + this.state.selectedPhone.slice(this.state.selectedPhone.indexOf(" ") + 1))
            .then((response) => {
                this.setState({pricelist: response.data})
            })
            .catch((response) => {
                console.log(response)
            })
    }

    createElelemnts() {
        return this.state.pricelist.map((service, index) => {
            return (

                <tr key={index}>
                    <td className="service-iphone-btn">
                        <Switcher swid={index} sname={service[0]} sprice={service[1]}/>
                    </td>
                    <td className="service-name">{service[0]}</td>
                    <td className="service-price">{service[1] + ' грн.'}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="price-list-content">
                <h1 className="phone-name">
                    { this.state.selectedPhone }
                </h1>
                <form action="price.html" method="post" id="price-list-form" name="price-list">
                    <table className="service-table">
                        <tbody>
                            { this.createElelemnts() }
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default ServicesList
