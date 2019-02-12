import React, {Component} from 'react'
import ImageWrapper from './image-wrapper'

export function setPhotoListWraperSize() {
    let photoListSection = $('#photo-list')

    if (photoListSection.length !== 0) {
        let headerBarHeight = $('.header-bar').css('height')
        let windowHeight = window.innerHeight

        photoListSection.height(windowHeight - parseInt(headerBarHeight))
        // photoListSection.css('backgroundColor', '#000')
    } 
}

export default class ImageList extends Component {
    state = {
        firstRow: [
            {url: '../img/5s.jpg', name: 'iPhone 5S'}, 
            {url: '../img/se.jpg', name: 'iPhone SE'},
            {url: '../img/6.1.jpg', name: 'iPhone 6'}
        ],
        secondRow: [
            {url: '../img/6s.jpg', name: 'iPhone 6S'},
            {url: '../img/6.3.jpg', name: 'iPhone 6+'},
            {url: '../img/6s+.jpg', name: 'iPhone 6S+'},
            {url: '../img/7.1.jpg', name: 'iPhone 7'}
        ],
        thirdRow: [
            {url: '../img/7+.jpg', name: 'iPhone 7+'},
            {url: '../img/8+.jpg', name: 'iPhone 8'},
            {url: '../img/8.1.jpg', name: 'iPhone 8+'}
        ]
    }

    createElements(row) {
        return row.map((phone) => {
            return (
                 <ImageWrapper 
                    link={phone.url}
                    phoneName={phone.name}
                    key={phone.name + Math.random()}
                />
            )
        })
    }

    render() {
        return (
            <>
                <div className="d-flex flex-row image-row" key={Math.random()}>
                    {this.createElements(this.state.firstRow)}
                </div>
                <div className="d-flex flex-row image-row" key={Math.random()}>
                    {this.createElements(this.state.secondRow)}
                </div>
                <div className="d-flex flex-row image-row" key={Math.random()}>
                    {this.createElements(this.state.thirdRow)}
                </div>
            </>
        )
    }
}