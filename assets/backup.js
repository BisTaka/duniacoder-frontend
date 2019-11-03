$('#Hero3,#Hero4,#Hero2,#Button-kenal,#Carousel2,#ButtonLanjut2,#Sub,#Hero5').each(function () {
    $(this).hide()
})
$('#Intro').click(function () {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: black;')
    let typed = new Typed('#Sub', {
        startDelay: 3000,
        strings: ["Hai, Selamat Datang di Web kami!!! 🥰", "Web ini dibuat karena iseng juga tidak ada pekerjaan 🤣", 'Ingin Mengenal kami lebih lanjut? 🤔'],
        typeSpeed: 50,
        fadeOut: true,
    });
    $(this).addClass('gradient', 1000)
    $('#Hero').removeClass('is-dark')
    $('#Hero').addClass('is-white', 2000)
    $('#Hero').attr('style', 'background-image: url("assets/wallpaper.png");')
    $('#Sub').show()
    $('#Button-kenal').fadeIn(5000)
})

$('#Button-kenal').click(() => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: black;')
    $('#Hero').fadeOut(1000)
    $('#Hero2').fadeIn(3000)
    $(".owl-carousel").owlCarousel({
        items: 3,
        dots: false,
        margin: 10,
    });
})

$('#ButtonLanjut').click(() => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: black;')
    $('#Hero2').fadeOut(1000)
    $('#Hero3').fadeIn(2500)
})

$('#ButtonCarousel').click( () => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: black;')
    $('#Carousel2').fadeIn(2000)
    $('#ButtonLanjut2').fadeIn(4000)
})

$('#ButtonLanjut2').click(() => {
    console.log('%cDeveloped by: Bismantaka Aldila', 'color: purple; font-style: bold; background-color: black;')
    $('#Hero3').fadeOut(1000)
    $('#Hero4').fadeIn(2500)
})

$('#ButtonLanjut4').click(() => {
    $('#Hero4').fadeOut(1000)
    $('#Hero5').fadeIn(2500)
})