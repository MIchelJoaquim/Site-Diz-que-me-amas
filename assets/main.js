// alert(window.pageYOffset);

// document.documentElement.onscroll = onScroll;

// function onScroll(){
//     alert("rolou");
// }

const slide = [
    { title: "", text: "", img: "", obs: "" }
]

// document.onscroll = onscroll;
$(document).ready(function () {
    // alert("pronto")
    let x = 0
    let yPosition = 0
    console.log(yPosition);
    let scrol = $("#container").scroll()
    console.log(scrol)
    if (yPosition == 0) {
        // $(".slide3").hide()
        // $(".slide").offset({top: 769})
        // $(".slide2").offset({top: -769})
    }

    $("#container").scroll(
        function () {

            yPosition = $(".slide2").offset()
            // $(".slide2").offset({top: (yPosition * -1), left: 0})

            if (yPosition.top == -796) {
                x++
                console.log(x);
            }
            $(".slide2").offset({ top: yPosition.top })
            $(".slide").offset({ top: yPosition.top * -1 })
        }
    )

});

function slideUm() {
    $(".slide").slideUp(100, function () {
        console.log("subindo");
    })
}

AOS.init(
    {
        // offset: 120, // offset (in px) from the original trigger point
        // delay: 0, // values from 0 to 3000, with step 50ms
        // duration: 400, // values from 0 to 3000, with step 50ms
        // easing: 'ease', // default easing for AOS animations
        // once: false, // whether animation should happen only once - while scrolling down
        // mirror: false, // whether elements should animate out while scrolling past them
        // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    }
);