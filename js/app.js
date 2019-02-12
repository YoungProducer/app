import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import posed from 'react-pose'
import PriceList from './addons/pricelist'
import './price'
import {cc, priceContentWrapperSetUp, scroll } from './price'
import ImageWrapper from './addons/image-wrapper'

ReactDOM.render(<PriceList />, document.getElementById('price-list-form'))

cc()
priceContentWrapperSetUp()

$('.image-wrapper:eq(0)').click(function() {
    scroll()
})
