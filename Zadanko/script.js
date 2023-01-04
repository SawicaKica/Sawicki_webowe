$(function() {
    $("a").on("click", function() {
        const id = $(this).attr("id");
        const pageData = getPageData(id);

        $("#page").html(pageData);

        changeMenuOption($(this));
    });

    function changeMenuOption(elem) {
        $("a").css({
            "font-weight": "normal",
        })
        elem.css({
            "font-weight": "bold",            
        })
    }
    function getPageData(id) {
        if(id == "konst") {
            return (`
                <div class="row innerContent">
                    <article class="innerContent">
                        <div class="title text-center"><b>Przykład klasy ComplexNumber z kilkoma różnymi konstruktorami:</b></div>
                            <img src="wiele.png" class="ss" class="title text-center">
                        <div class="h6">
                        Konstruktor domyślny tworzy obiekt z domyślnymi wartościami 0.0 dla pola real i imaginary.<br>
                        Konstruktor z jednym argumentem tworzy obiekt z podaną wartością dla pola real i domyślną wartością 0.0 dla pola imaginary.<br>
                        Konstruktor z dwoma argumentami tworzy obiekt z podanymi wartościami dla pól real i imaginary.<br>
                        Konstruktor kopiujący tworzy obiekt z takimi samymi wartościami pól jak w podanym obiekcie c.<br>
                        </div>
                    </article>
                </div>
            `)
        }
        if(id == "hermetyzacja") {
            return (`
                <div class="row innerContent">
                    <article class="innerContent">
                        <div class="title text-center"><b>Hermetyzacja</b></div>
                        <div class="h6"> 
                            Hermetyzacja to mechanizm, który umożliwia ograniczenie dostępu do pól klasy z zewnątrz. Może to być wykonane za pomocą modyfikatora dostępu private, który ogranicza dostęp do pól klasy tylko do własnych metod i konstruktorów tej klasy.<br>
                            Oto przykład klasy Person z hermetyzowanymi polami: <br> <br>
                        <div class="text-center">
                            <img src="wiele.png" class="ss">
                        </div>
                        <div>
                            <br>Aby uzyskać dostęp do pól name i age z zewnątrz, można użyć odpowiednich metod getName() i getAge(). Bezpośredni dostęp do pól z zewnątrz jest zabroniony za pomocą modyfikatora dostępu private.
                        </div>
                    </article>
                </div>
            `)
        }
        if(id == "publiczna") {
            return (`
            <div class="row innerContent">
            <article class="innerContent">
                <div class="title text-center"><b>Metoda publiczna</b></div>
                <div class="h6"> 
                    Metoda publiczna to metoda, która jest dostępna dla wszystkich klas. Można ją używać zarówno wewnątrz, jak i na zewnątrz klasy, w której została zdefiniowana. Można ją również używać w klasach pochodnych (dziedziczących po tej klasie).<br>
                    Oto przykład klasy Calculator z metodą publiczną add():<br><br>
                <div class="text-center">
                    <img src="publiczna.png" class="ss">
                </div>
                <div>
                    <br>Można użyć metody add() zarówno wewnątrz klasy Calculator, jak i na zewnątrz:<br><br>
                </div>
                <div class="text-center">
                    <img src="publiczna_uzycie.png" class="ss">
                </div>
                <div>
                    <br>Metoda publiczna jest używana do udostępnienia konkretnej funkcjonalności innym klasom. W przeciwieństwie do metod prywatnych, które są dostępne tylko wewnątrz klasy, metody publiczne są dostępne dla wszystkich klas.<br><br>
                </div>
            </article>
        </div>
            `);
        }
        if(id == "prywatna") {
            return (`
            <div class="row innerContent">
            <article class="innerContent">
                <div class="title text-center"><b>Metoda prywatna</b></div>
                <div class="h6"> 
                Metoda prywatna to metoda, która jest dostępna tylko wewnątrz klasy, w której została zdefiniowana. Nie można jej używać z zewnątrz tej klasy ani w klasach pochodnych.<br>
                Oto przykład klasy Calculator z metodą prywatną subtract():<br><br>
                <div class="text-center">
                    <img src="prywatna.png" class="ss">
                </div>
                <div>
                    <br>Można użyć metody subtract() tylko wewnątrz klasy Calculator:<br><br>
                </div>
                <div class="text-center">
                    <img src="prywatna_uzycie.png" class="ss">
                </div>
                <div>
                    <br>Metoda prywatna jest używana do ukrycia szczegółów implementacyjnych i ograniczenia dostępu do nich z zewnątrz. Może być używana wewnątrz klasy do obliczeń lub innych operacji, które nie są bezpośrednio udostępniane innym klasom.<br><br>
                </div>
            </article>
        </div>
            `);
        }
    }
});