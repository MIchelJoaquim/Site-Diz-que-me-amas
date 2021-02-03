// alert(window.pageYOffset);

// document.documentElement.onscroll = onScroll;

// function onScroll(){
//     alert("rolou");
// }

const slide = [
    {title: "", text: "", img: "", obs: ""}
]

// document.onscroll = onscroll;
$(document).ready(function () {
    // alert("pronto")
    let x = 0
    let yPosition = 0
    console.log(yPosition);
    let scrol = $("#container").scroll()
    console.log(scrol)
    if(yPosition == 0){
        // $(".slide3").hide()
        // $(".slide").offset({top: 769})
        // $(".slide2").offset({top: -769})
    }

    $("#container").scroll(
        function () {
            
            yPosition = $(".slide2").offset()
            // $(".slide2").offset({top: (yPosition * -1), left: 0})
            
            if(yPosition.top == -796) {
                x++
                console.log(x);
            }
            $(".slide2").offset({top: yPosition.top})
            $(".slide").offset({top: yPosition.top * -1})
        }
    )
    
});

function slideUm(){
    $(".slide").slideUp(100, function () {
        console.log("subindo");
    })
}