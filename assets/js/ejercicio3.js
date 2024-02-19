function sumar() {
  let valor1 = parseInt(document.getElementById("valor1").value);
  let valor2 = parseInt(document.getElementById("valor2").value);
  let datosValidos = true;

  if (isNaN(valor1) || isNaN(valor2)) {
    document.write(
      "Ingresa un número, por favor. REFRESCA LA PÁGINA PARA INTENTARLO NUEVAMENTE"
    );
    datosValidos = false;
  }
  if (datosValidos) {
    let resultado = valor1 + valor2;
    document.querySelector(".resultado").textContent = resultado;
  }
}

function restar() {
  let valor1 = parseInt(document.getElementById("valor1").value);
  let valor2 = parseInt(document.getElementById("valor2").value);
  if (isNaN(valor1) || isNaN(valor2)) {
    document.write(
      "Ingresa un número, por favor. REFRESCA LA PÁGINA PARA INTENTARLO NUEVAMENTE"
    );
    return;
  }
  let resultado = valor1 - valor2;
  resultado = Math.max(resultado, 0);
  document.querySelector(".resultado").textContent = resultado;
  if (resultado < 0) {
    return resultado;
  }
}

let botonSumar = document.getElementById("btn-sumar");
botonSumar.addEventListener("click", sumar);
let botonRestar = document.getElementById("btn-restar");
botonRestar.addEventListener("click", restar);