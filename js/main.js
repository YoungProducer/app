import submitForm from './ajax'

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
  videoPlay()
}