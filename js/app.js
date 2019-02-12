import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import posed from 'react-pose'
import PriceList from './addons/pricelist'
import './price'
import {priceContentWrapperSetUp, scroll } from './price'
import ImageList from './addons/image-list'
import {setPhotoListWraperSize} from './addons/image-list'

ReactDOM.render(<PriceList />, document.getElementById('price-list-form'))
ReactDOM.render(<ImageList />, document.getElementById('photo-list'))




setPhotoListWraperSize()
// Set up price wrapper size
priceContentWrapperSetUp()

 $('.image-wrapper:eq(0)').click(function() {
    scroll()
})
