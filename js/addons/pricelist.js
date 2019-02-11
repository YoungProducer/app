import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import posed from 'react' 
import Switcher from './switcher'

function TableEl(props) {
    return (
        <>
            <tr>
                <td className="service-iphone-btn">
                    <Switcher swid={props.elid}/>
                </td>
                <td className="service-name">{props.service.name}</td>
                <td className="service-price">{props.service.price}</td>
            </tr>
        </>
    )
}

export default class PriceList extends Component {
    state = {
        pricelist: [
            {name: "Заміна екрану (Оригінал)", price: "850 грн."},
            {name: "Реставрація дисплея", price: "550 грн."},
            {name: "Заміна корпусу", price: "800 грн."},
            {name: "Заміна акумулятора", price: "397 грн."},
            {name: "Заміна основної камери", price: "350 грн."},
            {name: "Заміна фронтальної камери", price: "350 грн."},
            {name: "Заміна кнопки Home", price: "250 грн."},
            {name: "Заміна кнопки Увімкнення", price: "250 грн."},
            {name: "Заміна динаміка", price: "197 грн."},      
            {name: "Заміна слухового динаміка", price: "197 грн."},
            {name: "Заміна гнізда lighting", price: "350 грн."},
            {name: "Поклейка захисного скла", price: "99 грн."}      
        ]
    }

    createElelemnts() {
        return this.state.pricelist.map((service, index) => {
            return (
                <TableEl 
                    service={service}
                    elid={index}
                    key={index}
                />
            )
        })
    }

    render() {
        return (
            <table className="service-table">
                <tbody>
                    { this.createElelemnts() }
                </tbody>
            </table>
        )
    }
}
