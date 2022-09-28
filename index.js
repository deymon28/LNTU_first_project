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


function spiner_ochered(){
    let text_input = document.querySelector("input");
    let button = document.querySelector("button");

    let ochered = document.querySelector(".ochered");
    let spinner = document.querySelector(".spinner-border");


    text_input.classList.add("visually-hidden");
    button.classList.add("visually-hidden");

    ochered.classList.remove("visually-hidden");
    spinner.classList.remove("visually-hidden");


    let rand = random_int();
    rand = Math.floor(Math.random() * 41);

    console.log("черга, " + rand);

    let b = 1000;

    async function defend() {
        while (rand>1){
            document.getElementById("p1").innerHTML = "Ти в черзі: " + (rand - 1);

            rand -= 1;
            console.log("+"+ rand);
            b = random_int() * 5;

            await sleep(b);

        }
        //console.log("AAAA", a);
        return progress_bar();
    }

    defend();
    //return a;

}

function progress_bar() {
    let ochered = document.querySelector(".ochered");
    let spinner = document.querySelector(".spinner-border");

    let progress = document.querySelector(".progress");


    ochered.classList.add("visually-hidden");
    spinner.classList.add("visually-hidden");

    progress.classList.remove("visually-hidden");


    let aria_valuenow = document.getElementById("prog");

    let ty = 0;
    let q = 1000;

    aria_valuenow.classList.remove("visually-hidden");

    async function fery() {
        while (ty < 100){
            q = random_int();
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
        return all_result();
    }

    fery();

}


function all_result() {
    let progress = document.querySelector(".progress");

    progress.classList.add("visually-hidden");


    let a;
    let person_name = document.getElementById("name").value;
    console.log(person_name)

    function random() {
        a = Math.random();
        return console.log(a);
    }
    random();

    let ran = random_int();

    if (person_name === "Юлія" || person_name === "Юля" || person_name === "Yulia") {
        document.getElementById("1").classList.remove("visually-hidden");
        document.getElementById("head").classList.add("visually-hidden");
        document.getElementById("1").classList.add("rek");
        document.getElementById("1").innerHTML = `Повстяна Юлія Славомирівна - найкращий викладач!`;
    } else if (a > 0.5) {
        //alert(person_name + ", nice");
        document.getElementById("1").classList.remove("visually-hidden");
        document.getElementById("1").innerHTML = `${person_name}, ти не бовдур`;
    } else {
        //alert(person_name + ", ebat tu loh");
        document.getElementById("1").classList.remove("visually-hidden");
        document.getElementById("1").innerHTML = `${person_name}, ти бовдур на ${ran}%. Я не можу з тебе...`;
    }

}


function show_hide_elements() {
    let button = document.querySelector("button");
    let input = document.querySelector("input");

    function start_ev() {


        spiner_ochered();

        //progress_bar();

        //all_result();

    }

    button.addEventListener("click", start_ev);


    input.onkeydown = function (pres) {
        if (pres.which === 13){
            console.log("enter press");
            button.click();
        }
    };

}


function some_main_start_point(){

    show_hide_elements();

}
