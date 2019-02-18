import React, {Component}   from 'react'
import posed                from 'react-pose' 

const PhoneElement = posed.li({
    hidden: {
        x: -100,
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
        delayChildren: 50,
        staggerChildren: 50,
        delay: 700,
        transition: {
            type: 'tween'
        }
    },
    visible: {
        height: '60px',
        delayChildren: 200,
        staggerChildren: 100,
        transition: {
            type: 'tween'
        }
    }
})

export default class PhonesList extends Component {
    state = {
        hidden: true,
        phones: [
            {name: 'iPhone 5S',  link: 'price.html'},
            {name: 'iPhone SE',  link: 'price.html'},
            {name: 'iPhone 6',   link: 'price.html'},
            {name: 'iPhone 6S',  link: 'price.html'},
            {name: 'iPhone 6+',  link: 'price.html'},
            {name: 'iPhone 6S+', link: 'price.html'},
            {name: 'iPhone 7',   link: 'price.html'},
            {name: 'iPhone 7+',  link: 'price.html'},
            {name: 'iPhone 8',   link: 'price.html'},
            {name: 'iPhone 8+',  link: 'price.html'},
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

    onClickHandle = (name) => {
        localStorage.setItem('selectedPhone', name)
    }

    render() {
        return(
            <>
                <PhList className="phones-list" pose={this.props.hidden ? 'hidden' : 'visible'}>
                    {/* {this.createElements()} */}
                    <PhoneElement>
                        <a 
                            href={this.state.phones[0].link}
                            onClick={() => this.onClickHandle(this.state.phones[0].name)}
                        >
                            {this.state.phones[0].name}
                        </a>
                    </PhoneElement>
                    
                    <PhoneElement>
                        <a 
                            href={this.state.phones[1].link}
                            onClick={() => this.onClickHandle(this.state.phones[1].name)}
                        >
                            {this.state.phones[1].name}
                        </a>
                    </PhoneElement>

                    <PhoneElement>
                        <a 
                            href={this.state.phones[2].link}
                            onClick={() => this.onClickHandle(this.state.phones[2].name)}
                        >
                            {this.state.phones[2].name}
                        </a>
                    </PhoneElement>

                    <PhoneElement>
                        <a 
                            href={this.state.phones[3].link}
                            onClick={() => this.onClickHandle(this.state.phones[3].name)}
                        >
                            {this.state.phones[3].name}
                        </a>
                    </PhoneElement>

                    <PhoneElement>
                        <a 
                            href={this.state.phones[4].link}
                            onClick={() => this.onClickHandle(this.state.phones[4].name)}
                        >
                            {this.state.phones[4].name}
                        </a>
                    </PhoneElement>

                    <PhoneElement>
                        <a 
                            href={this.state.phones[5].link}
                            onClick={() => this.onClickHandle(this.state.phones[5].name)}
                        >
                            {this.state.phones[5].name}
                        </a>
                    </PhoneElement>

                    <PhoneElement>
                        <a 
                            href={this.state.phones[6].link}
                            onClick={() => this.onClickHandle(this.state.phones[6].name)}
                        >
                            {this.state.phones[6].name}
                        </a>
                    </PhoneElement>

                    <PhoneElement>
                        <a 
                            href={this.state.phones[7].link}
                            onClick={() => this.onClickHandle(this.state.phones[7].name)}
                        >
                            {this.state.phones[7].name}
                        </a>
                    </PhoneElement>

                    <PhoneElement>
                        <a 
                            href={this.state.phones[8].link}
                            onClick={() => this.onClickHandle(this.state.phones[8].name)}
                        >
                            {this.state.phones[8].name}
                        </a>
                    </PhoneElement>

                    <PhoneElement>
                        <a 
                            href={this.state.phones[9].link}
                            onClick={() => this.onClickHandle(this.state.phones[9].name)}
                        >
                            {this.state.phones[9].name}
                        </a>
                    </PhoneElement>

                </PhList>
            </>
        )
    }
}