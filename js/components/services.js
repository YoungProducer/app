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
                {name: "Заміна екрану (Оригінал)", price: 850},
                {name: "Реставрація дисплея", price: 550},
                {name: "Заміна корпусу", price: 800},
                {name: "Заміна акумулятора", price: 397},
                {name: "Заміна основної камери", price: 350},
                {name: "Заміна фронтальної камери", price: 350},
                {name: "Заміна кнопки Home", price: 250},
                {name: "Заміна кнопки Увімкнення", price: 250},
                {name: "Заміна динаміка", price: 197},      
                {name: "Заміна слухового динаміка", price: 197},
                {name: "Заміна гнізда lighting", price: 350},
                {name: "Поклейка захисного скла", price: 99}  
            ]
        }
    }

    componentDidMount() {
        console.log(this.state.selectedPhone)
        axios
            .get('price.html/phone?phone=' + this.state.selectedPhone)
            .then(({ data }) => {
                this.setState({pricelist: data})
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
                        <Switcher swid={index} sname={service.name} sprice={service.price}/>
                    </td>
                    <td className="service-name">{service.name}</td>
                    <td className="service-price">{service.price + ' грн.'}</td>
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
