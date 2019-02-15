import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import posed from 'react-pose'

import PriceList from './components/price/pricelist'
import {priceContentWrapperSetUp, scroll } from './price'
import HeaderBar from './components/headerBar'
import submitForm from './ajax'
import App from './app'

function videoPlay() {
  $('video').get(0).play()
  
}

function inputResize() {
  let input = $('price-counter-input')
  let buffer = $('input-buffer')

  input.on('input', function() {
    buffer.text(input.val())
    input.width(buffer.width())
  })
}

$('.pcbtn:eq(0)').click(function() {
  submitForm('price-list', 'pc')
})

window.onload = function() {
  //videoPlay()
}


let phonesBar = document.getElementById('phones-bar')
let priceListForm = document.getElementById('price-list-form')

let repairButton = $('#repair')
let listHidden = true


if (priceListForm !== null) {
    ReactDOM.render(<PriceList/>, priceListForm)
}

ReactDOM.render(<App />, document.getElementById('root'))



priceContentWrapperSetUp()
