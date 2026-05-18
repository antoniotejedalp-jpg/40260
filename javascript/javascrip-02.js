// let b1 = document.getElementById("b1")
// let b2 = document.getElementById("b2")
// let b3 = document.getElementById("b3")
// let b4 = document.getElementById("b4")
// let b5 = document.getElementById("b5")
// let b6 = document.getElementById("b6")
// let b7 = document.getElementById("b7")
// let b8 = document.getElementById("b8")
// let b9 = document.getElementById("b9")
// let b0 = document.getElementById("b0")

let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)){
        const boton = botones[key];
        if (boton.className != "operadores")
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", operadores)
        //console.log(boton)

    }
}

function pintar(e){
    console.log(e.target.innerText)
    resultado.value += e.target.innerText
}

// let operadores = document.getElementsByClassName("operadores")
//     for (const key in operadores) {
//         if (Object.prototype.hasOwnProperty.call(operadores, key)){
//             const boton = operadores[key];
//             boton.addEventListener("click", pintar2)
//             //console.log(boton)

//         }
//     }

function operadores(e){
    let operador = e.target.innerText
    if (operador == "=")
        igual()
    else
        almacena_parametro(operador)
}

let prm1
let operacion
function almacena_parametro(prm){
    //prm1 = resultado.value
    parametros.push(resultado.value)
    resultado.value = ""
    operacion = prm

}


function igual(){
    //prm2 = resultado.value
    let variable = 0
    parametros.push(resultado.value)
    for (const key in parametros) {
        if (Object.prototype.hasOwnProperty.call(parametros, key)) {

                    
            const prm = parametros[key];

            if (operacion == "+")
                variable += parseInt(prm)

        
        }

        
    }

    resultado.value=variable
    // if (operacion == "+")
    //     resultado.value = parseInt(prm1) + parseInt(prm2)
    // if (operacion == "-")
    //     resultado.value = parseInt(prm1) - parseInt(prm2)
    // if (operacion == "*")
    //     resultado.value = parseInt(prm1) * parseInt(prm2)
    // if (operacion == "/")
    //     resultado.value = parseInt(prm1) / parseInt(prm2)
}

let parametros = []


// let resultado = document.getElementById("resultado");
// let botones = document.getElementsByTagName("button");

// // Variables para almacenar los valores y la operación
// let prm1 = 0;
// let operacion = "";

// for (const key in botones) {
//     if (Object.prototype.hasOwnProperty.call(botones, key)) {
//         const boton = botones[key];
//         if (boton.className != "operadores")
//             boton.addEventListener("click", pintar);
//         else
//             boton.addEventListener("click", pintar2);
//     }
// }

// function pintar(e) {
//     resultado.value += e.target.innerText;
// }

// function pintar2(e) {
//     let signo = e.target.innerText;
    
//     if (signo === "=") {
//         igual();
//     } else if (signo === "Ce") {
//         limpiar();
//     } else {
//         // Guardamos el primer número y el tipo de operación
//         prm1 = resultado.value;
//         operacion = signo;
//         resultado.value = "";
//     }
// }

// function igual() {
//     let prm2 = resultado.value;
//     let calculo = 0;
//     let n1 = parseFloat(prm1);
//     let n2 = parseFloat(prm2);

//     if (operacion === "+") calculo = n1 + n2;
//     if (operacion === "-") calculo = n1 - n2;
//     if (operacion === "*") calculo = n1 * n2;
//     if (operacion === "/") calculo = n1 / n2;

//     resultado.value = calculo;
// }

// function limpiar() {
//     resultado.value = "";
//     prm1 = 0;
//     operacion = "";
// }