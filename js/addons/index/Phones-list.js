import React, {Component} from 'react'
import posed from 'react-pose' 

//import Phone from './Phone'

const PhoneElement = posed.li({
    hidden: {
        x: -30,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    },
})

const PhList = posed.ul({
    hidden: {
        height: '0px',
        y: '-30%',
        opacity: 0,
        delayChildren: 200,
        staggerChildren: 50
    },
    visible: {
        height: '60px',
        y: '0%',
        opacity: 1,
        delay: 300
    }
})

export default class PhonesList extends Component {
    state = {
        hidden: true,
        phones: [
            {name: 'iPhone 5S',  link: '#'},
            {name: 'iPhone SE',  link: '#'},
            {name: 'iPhone 6',   link: '#'},
            {name: 'iPhone 6S',  link: '#'},
            {name: 'iPhone 6+',  link: '#'},
            {name: 'iPhone 6S+', link: '#'},
            {name: 'iPhone 7',   link: '#'},
            {name: 'iPhone 7+',  link: '#'},
            {name: 'iPhone 8',   link: '#'},
            {name: 'iPhone 8+',  link: '#'},
        ]
    }

    createElements() {
        return this.state.phones.map((phone) => {
            return(
                <PhoneElement
                    key={phone.name + Math.random()}
                >
                    <a href={phone.link}>{phone.name}</a>
                </PhoneElement>
            )
        })
    }

    changeHidden() {
        this.setState({hidden: !this.state.hidden})
    }

    render() {
        let repairButton = $('#repair')

        repairButton.click(function() {
            this.changeHidden()
            console.log(this.state.hidden)
        })

        return(
            <>
                <PhList className="phones-list" pose={this.state.hidden ? 'hidden' : 'visible'}>
                    {this.createElements()}
                </PhList>
            </>
        )
    }
}