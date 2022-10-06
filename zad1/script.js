$(document).ready(() =>{
    $('#bialy').on("click",function(){
        $('#kolo').css("background-color", "white");
    })
    $('#czarny').on("click",function(){
        $('#kolo').css("background-color", "black");
    })
    $('#zielony').on("click",function(){
        $('#kolo').css("background-color", "green");
    })
    $('#niebieski').on("click",function(){
        $('#kolo').css("background-color", "blue");
    })
    $('#czerwony').on("click",function(){
        $('#kolo').css("background-color", "red");
    })
});