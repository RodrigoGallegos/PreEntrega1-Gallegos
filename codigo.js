let nombreUsuario = prompt("Bienvenido Ingrese su nombre por favor");
alert("Hola " + nombreUsuario+ "  !! " );



//                             Esto era lo que venia haciendo con las clases pero no me salia muy bien asi que fui a lo seguro espero cuando comprenda mas poder terminarlo                                     //

// alert("Bienvenido a Tu Tienda de Instrumentos !, puedo ofrecer estos instrumentos, Guitarra Bajo o Bateria");
 
// const productos =[
//     {nombre: "guitarra", precio: 40000},
//     {nombre: "bajo", precio: 20000},
//     {nombre: "bateria", precio: 60000},
// ];

// const carrito = []

// let seleccion = prompt("Hola Desea Comprar algun producto, si o no?");


// while(seleccion != "si" && seleccion != "no"){
//     alert("por favor ingresa si o no");
//     seleccion = prompt("Hola Desea comprar algun producto; si o no?")
// }

// if(seleccion == "si"){
//     alert("a continuacion nuestra lista de instrumentos");

//     let todoslosProductos = productos.map(
//         (producto) =>   producto.nombre + " " + "$" + producto.precio);
//     alert(todoslosProductos.join(" - " ))
// }else if (seleccion == "no"){
//     alert("gracias por venir, hasta pronto !!")
// }

// while(seleccion != "no"){
//     let producto = prompt("agrega un producto a tu carrito")
//     let precio = 0

//     if(producto == "guitarra" || producto == "bajo" || producto == "bateria"){
//         switch(producto){
//             case "guitarra":
//             precio = 40000;
//             break;
//             case "bajo":
//             precio = 20000;
//             break;
//             case "bateria": 
//             precio = 60000;
//             break;
//             default :
//             break;
//         }
//     let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

//     carrito.push({producto, unidades, precio})
//     console.log(carrito)
//     }else {
//         alert("no tenemos ese producto")
//     }

//  seleccion= prompt("desea seguir comprando?")

//  if(seleccion == "no"){
//     alert("gracias por la compra ! hasta pronto")
//  }
 
 
// }



let total = 0;
let mensaje = prompt(nombreUsuario+' deseas comprar un producto? (si / no)');

while(mensaje != "si" && mensaje != "no"){
    alert("por favor ingresa si o no");
    mensaje = prompt("Hola Desea comprar algun producto; si o no?")
}


while(mensaje == 'si' || mensaje == "s"){
    let producto = prompt('1-Guitarra gibson Les Paul \n2-Bajo Texas Standard\n3-Bateria Fender Full\n4-Teclado Yamaha f-100\n5-Microfono Cort H-95');
    switch(producto){
        case '1' :
            alert('Agregaste Guitarra gibson Les paul al carrito .... $4000');
            incrementarTotal(4000);
            break;
        case '2' :
            alert('Agregaste Bajo Texas al carrito .... $3000');
            incrementarTotal(3000);
            break;
        case '3' :
            alert('Agregaste Bateria Fender al carrito .... $2000');
            incrementarTotal(2000);
            break;
        case '4' :
            alert('Agregaste Teclado Yamaha al carrito .... $1000');
            incrementarTotal(1000);
            break;
        case '5' :
            alert('Agregaste Microfono Cort al carrito .... $500');
            incrementarTotal(500);
            break;
        default:
            alert('Codigo Inexistente');
            break;
    }
    mensaje = prompt('Desea Comprar Otro Producto? (s-si/ n-no)');
    
}

alert('Total de la compra $' +total);

function incrementarTotal(precio){
    total = total + precio;
    alert('Llevas gastando $'+total);
}

    
