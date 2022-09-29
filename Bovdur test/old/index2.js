function all_result() {
    let a;
    let person_name = document.getElementById("name").value;
    console.log(person_name)

    function random() {
        a = Math.random();
        return console.log(a);
    }
    random();

    if (a > 0.5) {
        //alert(person_name + ", nice");
        document.getElementById("1").classList.remove("visually-hidden");
        document.getElementById("1").innerHTML = `${person_name}, nice`;
    } else {
        //alert(person_name + ", ebat tu loh");
        document.getElementById("1").classList.remove("visually-hidden");
        document.getElementById("1").innerHTML = `${person_name}, ebat tu loh`;
    }

}

function random_int(){
    let int_number = Math.random();
    int_number = 100 * int_number;
    int_number = Math.floor(int_number);
    console.log(int_number);
    return int_number;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function how_many_bl(){

    let a = random_int();

    console.log("черга, " + a);

    let b = 1000;

    async function defend() {
        while (a>1){
            document.getElementById("p1").innerHTML = "вы в очереди: " + (a - 1);

            a -= 1;
            console.log("+"+ a);
            b = random_int() * 10;

            await sleep(b);

        }
        console.log("AAAA", a);
        return a;
    }

    defend();
    //return a;

}

function forse() {
    let aria_valuenow = document.getElementById("prog");
    let ty = 0;
    let q = 1000;

    aria_valuenow.classList.remove("visually-hidden");

    async function fery() {
        while (ty < 100){
            q = random_int() * 2;
            ty += 1;
            await sleep(q);
            console.log("a% - ", ty);

            let z = `${ty}%`;
            //let r = a.toString();

            //aria_valuenow.ariaValueNow.at(r);
            aria_valuenow.innerHTML = z;
            aria_valuenow.style.width = z;

        }

        console.log("BBBBBB", ty);
        return ty;
    }

    fery();

}

function show_hide_elements() {
    let contenyVue = document.querySelector("input");
    let button = document.querySelector("button");

    let ochered = document.querySelector(".ochered");
    let spinner = document.querySelector(".spinner-border");
    let progress = document.querySelector(".progress");

    function start_ev(evt) {
        function number_one() {
            ochered.classList.add("visually-hidden");
            spinner.classList.add("visually-hidden");

            progress.classList.remove("visually-hidden");

            forse();

            function number_two(){
                progress.classList.add("visually-hidden");

                all_result();

            }
            number_two();
        }


        evt.preventDefault();

        contenyVue.classList.add("visually-hidden");
        button.classList.add("visually-hidden");

        ochered.classList.remove("visually-hidden");
        spinner.classList.remove("visually-hidden");


        how_many_bl();

        number_one();




        // if (document.getElementById("p1").innerText === "вы в очереди: 1"){
        //     ochered.classList.add("visually-hidden");
        //     spinner.classList.add("visually-hidden");
        //
        //     progress.classList.remove("visually-hidden");
        //
        //     forse();
        //
        //     if (document.getElementById("prog").innerHTML === "100%"){
        //         progress.classList.add("visually-hidden");
        //
        //         all_result();
        //
        //     }
        // }




    }

    button.addEventListener("click", start_ev);
}


function some_main_start_point(){

    //all_result();
    show_hide_elements();
    // document.getElementById("poper").classList.remove("visually-hidden")
    // forse();

}
