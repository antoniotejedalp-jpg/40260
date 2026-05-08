let resultado = document.getElementById("resultado");
let botones = document.getElementsByTagName("button");
let prm1 = 0;
let operador = "";

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className !== "operadores") {
            boton.addEventListener("click", pintar);
        }
        else {
            boton.addEventListener("click", pintar2);
        }
    }
}

function pintar(e) {
    resultado.value += e.target.innerText;
}

function pintar2(e) {
    let tecla = e.target.innerText;
    
    if (tecla === "Ce") {
        resultado.value = "";
        prm1 = 0;
        operador = "";
    }
    else if (tecla === "=") {
        igual();
    }
    else {
        // Es un operador (+, -, *, /)
        if (resultado.value !== "") {
            prm1 = resultado.value;
            operador = tecla;
            resultado.value = "";
        }
    }
}

function igual() {
    if (operador === "" || resultado.value === "") return;
    
    let prm2 = resultado.value;
    let res = 0;
    
    switch (operador) {
        case "+":
            res = parseInt(prm1) + parseInt(prm2);
            break;
        case "-":
            res = parseInt(prm1) - parseInt(prm2);
            break;
        case "*":
            res = parseInt(prm1) * parseInt(prm2);
            break;
        case "/":
            res = parseInt(prm1) / parseInt(prm2);
            break;
    }
    
    resultado.value = res;
    operador = "";
    prm1 = 0;
}