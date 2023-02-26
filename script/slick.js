<<<<<<< HEAD
$(document).ready(function () {
    $('.slider_body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
=======
$(document).ready(function(){
    $('.slider_body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.slider_btnMoreCircle').click(function(){
        console.log('safasfasf')
    })
  });
>>>>>>> 8aae912095638aa44a3e9e02ebba229777813809
