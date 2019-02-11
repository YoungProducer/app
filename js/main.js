import submitForm from './ajax'

export default function iphoneRepairResize() {
  let iphonerepcontent = $('.iphone-repair-bar')

  if (iphonerepcontent !== 0) {
    let height =
    parseFloat($('.iphone-repair-content > h1').css('height')) +
    parseFloat($('.iphone-repair-content > h1').css('margin-top')) +
    parseFloat($('.iphone-repair-content > h1').css('margin-bottom')) +
    parseFloat($('.iphone-repair-content > img').css('height'))

    iphonerepcontent.css('height', height)
  }
}

function inputResize() {
  let input = $('price-counter-input')
  let buffer = $('input-buffer')

  input.on('input', function() {
    buffer.text(input.val())
    input.width(buffer.width())
  })
}

window.onload = function() {
  iphoneRepairResize()
}

window.onresize = function() {
  iphoneRepairResize()
}

$('.pcbtn:eq(0)').click(function() {
  submitForm('price-list', 'pc')
})