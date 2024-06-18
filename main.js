function solicitarNombre() {
    let nombreCompleto = prompt("Ingrese su nombre completo");
    alert("Hola " + nombreCompleto + ". Bienvenido a mi tienda online");
}

solicitarNombre();

let askAgain = true
let email = ""
let confirmEmail = ""

function solicitarEmail() {
    let correo = confirm("¿Desea brindar su email para recibir cupones de descuentos para sus compras futuras?")
    if (correo != true) {
        alert("Sigamos entonces visualizando la tienda online")
    } else {
        do {
            let email = prompt("Ingrese su correo electrónico");
            let confirmEmail = prompt("Confirme su correo electrónico");

            if (email == confirmEmail) {
                alert("El correo " + email + " se guardó exitosamente para enviarle futuros cupones");
                askAgain = false;
            } else {
                alert("Los correos no coinciden. Volve a ingresarlos");
            }
        } while (askAgain);
    }
}

solicitarEmail();

let producto = ""

function comprarMerchandising() {
    producto = prompt("Elija la escudería de la que desea comprar: \n -Ferrari \n -Red Bull \n -Mercedes");
    if (producto == "Ferrari") {
        alert("Elegiste la escudería Ferrari");
    } else if (producto == "Red Bull") {
        alert("Elegiste la escudería Red Bull");
    } else if (producto == "Mercedes") {
        alert("Elegiste la escudería Mercedes");
    } else {
        alert("Debe elegir una escudería para continuar")
    }
    compra = confirm("¿Desea finalizar con la compra?")
    if (compra != true) {
        producto2 = prompt("Vuelva a seleccionar una escudería: \n -Ferrari \n -Red Bull \n -Mercedes");
        if (producto2 == "Ferrari") {
            alert("Elegiste la escudería Ferrari");
        } else if (producto2 == "Red Bull") {
            alert("Elegiste la escudería Red Bull");
        } else if (producto2 == "Mercedes") {
            alert("Elegiste la escudería Mercedes");
        } else {
            alert("Debe elegir una escudería para continuar comprando")
        }
    } else {
        alert("Su carrito de compra se ha cerrado con éxito");
        alert("Gracias " + nombreCompleto + " por su compra");
    }
}

comprarMerchandising();





