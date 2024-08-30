var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var carritoModel = require('../../models/carritoModel');

// Formatear números
function formatNumber(num) {
    return num.toLocaleString('de-DE', { minimumFraction1Digits: 0, maximumFraction1Digits: 0 });
}
 
/* GET carrito page. */
router.get('/', async function (req, res, next) {
    try {
        // Obtener detalles del carrito del usuario
        var carrito = await carritoModel.getCarrito(req.session.id_usuario);
        console.log('Productos en el carrito:', carrito);

        // Calcular el total
        var totalNumeric = carrito.reduce((acc, item) => acc + (Number(item.precio) * item.cantidad), 0);

        // Formatear los precios y totales en el carrito
        carrito = carrito.map(item => {
            return {
                ...item,
                precio: formatNumber(item.precio),
                total: formatNumber(Number(item.precio) * item.cantidad)
            };
        });

        res.render('admin/carrito', {
            layout: 'admin/layout',
            title: 'Carrito',
            persona: req.session.nombre,
            carrito,
            total: formatNumber(totalNumeric)
        });
    } catch (error) {
        next(error);
    }
});

/* AGREGAR productos al carrito */
router.post('/agregar', async function (req, res, next) {
    try {
        // Obtener datos desde el formulario o solicitud
        var id_usuario = req.session.id_usuario; // Usamos el ID del usuario logueado
        var id_producto = req.body.id_producto;
        var cantidad = parseInt(req.body.cantidad, 10); // Asegurarnos de que sea un número

        // Verificar si el usuario está logueado
        if (!id_usuario) {
            return res.redirect('/login');
        }

        // Llamar a la función para agregar el producto al carrito
        await carritoModel.addToCarrito(id_usuario, id_producto, cantidad);

        // Inserta el producto en la tabla 'carrito' de la base de datos
    const query = 'INSERT INTO carrito (id_usuario, id_producto, cantidad) VALUES (?, ?, 1)';

    res.redirect('/admin/carrito');

    } catch (error) {
        next(error);
    }
});


/* ACTUALIZAR las Cantidades en el Carrito */
router.post('/actualizar/:id', async function(req, res, next) {
    try {
        var id = req.params.id;
        var action = req.body.action;

        var carritoItem = await carritoModel.getCarritoItemById(id);

        if (!carritoItem) {
            return res.status(404).send('Producto no encontrado en el carrito.');
        }
        
        let nuevaCantidad = carritoItem.cantidad;

        if (action === 'increase') {
            nuevaCantidad++;
        } else if (action === 'decrease' && nuevaCantidad > 1) {
            nuevaCantidad--;
        }

        // Actualizar la cantidad en la base de datos
        await carritoModel.updateCantidad(id, nuevaCantidad);

        // Redirigir al carrito para reflejar los cambios
        res.redirect('/admin/carrito');
    } catch (error) {
        next(error);
    }
});

/* ELIMINAR productos del carrito */
router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        await carritoModel.deleteCarritoById(id);
        res.redirect('/admin/carrito');
    } catch (error) {
        next(error);
    }
}); //cierre get de eliminar

module.exports = router;