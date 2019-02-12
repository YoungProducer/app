export function cc() {
    let photoListSection = $('#photo-list')

    if (photoListSection.length !== 0) {
        let headerBarHeight = $('.header-bar').css('height')
        let windowHeight = window.innerHeight

        photoListSection.height(windowHeight - parseInt(headerBarHeight))
        // photoListSection.css('backgroundColor', '#000')
    } 
}

export function priceContentWrapperSetUp() {
    let priceContentWrapper = $('.content-wrapper')

    if (priceContentWrapper !== 0) {
        priceContentWrapper.height(window.innerHeight)
    }
}

export function scroll() {
    $('body, html').animate({scrollTop: window.innerHeight}, 1500, "easeOutExpo")
}
