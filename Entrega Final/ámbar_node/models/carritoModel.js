var pool = require('./bd');

/* Obtener todos los productos en el carrito */
async function getCarrito(id_usuario) {
    try {
        var query = `
        SELECT carrito.id, carrito.cantidad, carrito.fecha, productos.nombre, productos.precio
        FROM carrito 
        JOIN productos ON carrito.id_producto = productos.id 
        WHERE carrito.id_usuario = ?`;

        var rows = await pool.query(query, [id_usuario]);

        if (!Array.isArray(rows)) {
            rows = [rows];
        }

        return rows.map(row => ({
            ...row,
            total: row.precio * row.cantidad
        }));
    } catch (error) {
        console.error('Error al obtener el carrito:', error);
        throw error;
    }
}

// Obtener un ítem específico del carrito por ID
async function getCarritoItemById(id) {
    try {
        var query = 'SELECT * FROM carrito WHERE id = ?';
        var rows = await pool.query(query, [id]);

        return rows[0];
    } catch (error) {
        console.error('Error al obtener el item del carrito:', error);
        throw error;
    }
}

// Agregar un producto al carrito
async function addToCarrito(id_usuario, id_producto, cantidad) {
    try {
        // Verificar si el producto ya está en el carrito del usuario
        var queryCheck = 'SELECT * FROM carrito WHERE id_usuario = ? AND id_producto = ?';
        var rows = await pool.query(queryCheck, [id_usuario, id_producto]);

        if (rows.length > 0) {
            // Si el producto ya está en el carrito, actualizamos la cantidad
            var nuevaCantidad = rows[0].cantidad + cantidad;
            var queryUpdate = 'UPDATE carrito SET cantidad = ? WHERE id = ?';
            await pool.query(queryUpdate, [nuevaCantidad, rows[0].id]);
        } else {
            // Si el producto no está en el carrito, lo agregamos
            var queryInsert = 'INSERT INTO carrito (id_usuario, id_producto, cantidad, fecha) VALUES (?, ?, ?, NOW())';
            await pool.query(queryInsert, [id_usuario, id_producto, cantidad]);
        }
        console.log(`Añadiendo al carrito: ${id_usuario}, ${id_producto}, ${cantidad}`);
    } catch (error) {
        console.error('Error al agregar el producto al carrito:', error);
        throw error;
    }
}

// Actualizar la cantidad de un producto en el carrito
async function updateCantidad(id, nuevaCantidad) {
    try {
        var query = 'UPDATE carrito SET cantidad = ? WHERE id = ?';
        await pool.query(query, [nuevaCantidad, id]);
    } catch (error) {
        console.error('Error al actualizar la cantidad del carrito:', error);
        throw error;
    }
}

/* Eliminar un producto del carrito por ID */
async function deleteCarritoById(id) {
    try {
        var query = 'delete from carrito where id = ?';
        var result = await pool.query(query, [id]);
        return result;
    } catch (error) {
        console.error('Error al eliminar el producto del carrito:', error);
        throw error;
    }
}

module.exports = { getCarrito, addToCarrito, deleteCarritoById, getCarritoItemById, updateCantidad };