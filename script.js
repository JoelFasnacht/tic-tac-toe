var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;

function checkWin(){
    if( $(".row-1 .X").length === 3 || $(".row-2 .box.X").length === 3 
    || $(".row-3 .box.X").length === 3 || $(".col-1 .box.X").length === 3 ||
    $(".col-1.X").length === 3 || $(".col-2.X").length === 3 || $(".col-3.X").length === 3 ||
    $("#box-1").hasClass("X") && $("#box-5").hasClass("X") && $("#box-9").hasClass("X") || 
    $("#box-3").hasClass("X") && $("#box-5").hasClass("X") && $("#box-7").hasClass("X") ||
    $(".row-1 .O").length === 3 || $(".row-2 .box.O").length === 3 
    || $(".row-3 .box.X").length === 3 || $(".col-1 .box.O").length === 3 ||
    $(".col-1.O").length === 3 || $(".col-2.O").length === 3 || $(".col-3.O").length === 3 ||
    $("#box-1").hasClass("O") && $("#box-5").hasClass("O") && $("#box-9").hasClass("O") || 
    $("#box-3").hasClass("O") && $("#box-5").hasClass("O") && $("#box-7").hasClass("O") ){
        console.log("working")
    }
}


$(".box").click(function(){
    if(turn === 1)
    {
        $(this).text("X")
        $(this).addClass("X")
        turn = 2;
        $("#turn").text("Turn: Player-2")
        checkWin();
    }
    else
    {
        $(this).text("O")
        $(this).addClass("O")
        turn = 1;
        $("#turn").text("Turn: Player-1")
        checkWin();
    }
})