$(document).ready(() => {
    $(".bloki").change(function(){
        //pojawianie się bloków
        let id = $(this).attr("id")                                //odnosi się do poszczególnego id
        if($(this).is(":checked")){
            $("#kolory").append(`<div class="bloczek" id="blok${id}"></div>`);
        }else{
            $(`#blok${id}`).remove();
        }

        //licznik:
        let liczba = $(".bloczek").length;
        $("#licznik").text(liczba);

        //odmiana  0,5pól  1pole 2,3,4pola
        if(liczba == 0 || liczba == 5){
            $("#licznik").text(`${liczba} pól`);
        }else if(liczba == 1){
            $("#licznik").text(`${liczba} pole`);
        }else if(liczba == 2 || liczba == 3 || liczba == 4){
            $("#licznik").text(`${liczba} pola`);
        }
    });
})