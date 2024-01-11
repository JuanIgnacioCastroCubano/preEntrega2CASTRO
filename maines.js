class Producto {
    constructor(modelo, nombre, precio, cantidad) {
        this.modelo = modelo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    Info() {
        return `Modelo: ${this.modelo}\nNombre: ${this.nombre}\nPrecio: ${this.precio}\nCantidad Disponible: ${this.cantidad}`;
    }

    vender() {
        if (this.cantidad > 0) {
            this.cantidad -= 1;
            return true;
        } else {
            return false;
        }
    }
}

const Mondeo = new Producto(
    "Mondeo",
    "Ford Mondeo",
    70000,
    3
);

const Ranger = new Producto(
    "Ranger",
    "Ford Ranger",
    50000,
    7
);

const Maverick = new Producto(
    "Maverick",
    "Ford Maverick",
    45000,
    5
);

const Kuga = new Producto(
    "Kuga",
    "Ford Kuga",
    30000,
    2
);

const autos = [Mondeo, Ranger, Maverick, Kuga];

const carritoCompras = [];

function Informacion() {
    let Data = 'Detalles de los vehículos disponibles:\n\n';

    autos.forEach((auto) => {
        Data += `${auto.Info()}\n\n`;
    });

    alert(Data);
}

function VerCarrito() {
    if (carritoCompras.length === 0) {
        alert('El carrito esta vacío.');
    } else {
        let detallesCarrito = 'Detalles del carrito:\n\n';

        carritoCompras.forEach((item) => {
            detallesCarrito += `${item}\n\n`;
        });

        const SumaTotal = carritoCompras.reduce((total, item) => total + autos.find(auto => auto.nombre === item.split(" - ")[0]).precio, 0);

        alert(`${detallesCarrito}\nSuma Total de la Compra: ${SumaTotal}`);
    }
}

function comprarAutos() {
    while (true) {
        let opciones = 'Opciones de compra:\n\n';

        autos.forEach((auto, index) => {
            opciones += `${index + 1}. ${auto.Info()}\n\n`;
        });

        const seleccion = prompt(`${opciones}Por favor, ingresa el número correspondiente al auto que deseas comprar o 'carrito' para ver el carrito de compras o 'fin' para finalizar`);

        if (seleccion === 'fin') {
            break;
        } else if (seleccion === 'carrito') {
            VerCarrito();
        } else if (seleccion >= 1 && seleccion <= autos.length) {
            const autoSeleccionado = autos[seleccion - 1];

            if (autoSeleccionado.vender()) {
                carritoCompras.push(`${autoSeleccionado.nombre} - Precio: ${autoSeleccionado.precio}`);
                alert(`¡Has añadido ${autoSeleccionado.nombre} por un precio de ${autoSeleccionado.precio}!`);
            } else {
                alert('Se agotaron las existencias de esta unidad, seleccione otra o espere hasta actualizar stock');
            }
        } else {
            alert('¡Opción inválida! Por favor, selecciona un número válido o ingresa "fin" para salir.');
        }
    }
}

comprarAutos();