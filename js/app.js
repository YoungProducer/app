import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import posed from 'react-pose'

import PriceList from './addons/price/pricelist'
import {priceContentWrapperSetUp, scroll } from './price'
import PhonesList from './addons/index/Phones-list'

let phonesBar = document.getElementById('phones-bar')
let priceListForm = document.getElementById('price-list-form')

if (phonesBar !== null) {
    ReactDOM.render(<PhonesList />, phonesBar)
}

if (priceListForm !== null) {
    ReactDOM.render(<PriceList/>, priceListForm)
}




priceContentWrapperSetUp()
