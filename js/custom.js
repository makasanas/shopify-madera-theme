$('.best-seller-list').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.customer-list').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        1000: {
            items: 1
        }
    }
})