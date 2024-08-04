var express = require('express');
const req = require('express/lib/request');
const async = require('hbs/lib/async');
var router = express.Router();

var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Ámbar', isIndexPage: true, isSuscripcionPage: false });
});

/* POST contacto */
router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

  console.log(req.body);

  var obj = {
    to: 'sofiang04@gmail.com',
    subject: 'Contacto desde la web',
    html: `${nombre} ${apellido} se contactó a través de la web y quiere más info a este correo: ${email} <br> Además, hizo el siguiente comentario: ${mensaje} . <br> Su tel es ${telefono}`
  }; // cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  }); // cierra transporter

  var info = await transporter.sendMail(obj);
  console.log('Mensaje enviado: %s', info.messageId);

  const refererUrl = req.header('Referer');
  const viewName = refererUrl ? refererUrl.split('/').pop() : 'index'; // Extrae el nombre de la vista desde la URL o usa 'index'

  res.render(viewName, { // Renderiza la misma URL desde donde se hizo la solicitud
    title: viewName.charAt(0).toUpperCase() + viewName.slice(1), // Asigna un título basado en la vista
    isIndexPage: viewName === 'index',
    isSuscripcionPage: viewName === 'suscripcion',
    message: 'Mensaje enviado correctamente',
  });
}); //cierra peticion del POST


/* POST suscripción */
router.post('/suscripcion', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var documento = req.body.documento;
  var check = req.body.check ? "Sí" : "No";

  console.log(req.body);

  var obj = {
    to: 'sofiang04@gmail.com',
    subject: 'Suscripción al Newsletter',
    html: `${nombre} ${apellido} se ha suscrito con el correo: ${email}.<br> Documento: ${documento}.<br> Acepta recibir información: ${check}`
  };

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  var info = await transporter.sendMail(obj);
  console.log('Mensaje enviado: %s', info.messageId);

  res.render('suscripcion', {
    title: 'Suscripción',
    isIndexPage: false,
    isSuscripcionPage: true,
    message: 'Suscripción enviada correctamente',
  });
});


/* GET otras páginas. */

router.get('/beauty', function (req, res, next) {
  res.render('beauty', { title: 'Beauty', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/smileyWorld', function (req, res, next) {
  res.render('smileyWorld', { title: 'Smiley World', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/theKidsShop', function (req, res, next) {
  res.render('theKidsShop', { title: 'The Kids Shop', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/accesorios', function (req, res, next) {
  res.render('accesorios', { title: 'Accesorios', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/accesoriosPelo', function (req, res, next) {
  res.render('accesoriosPelo', { title: 'Accesorios de Pelo', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/accesoriosTextiles', function (req, res, next) {
  res.render('accesoriosTextiles', { title: 'Accesorios Textiles', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/bijou', function (req, res, next) {
  res.render('bijou', { title: 'Bijou', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/carterasMochilas', function (req, res, next) {
  res.render('carterasMochilas', { title: 'Carteras y Mochilas', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/makeup', function (req, res, next) {
  res.render('makeup', { title: 'Makeup', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/nuevo', function (req, res, next) {
  res.render('nuevo', { title: 'Nuevo', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/rebajas', function (req, res, next) {
  res.render('rebajas', { title: 'Rebajas', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/skincare', function (req, res, next) {
  res.render('skincare', { title: 'Skincare', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/suscripcion', function (req, res, next) {
  res.render('suscripcion', { title: 'Suscripción', isIndexPage: false, isSuscripcionPage: true });
});

router.get('/tiendas', function (req, res, next) {
  res.render('tiendas', { title: 'Tiendas', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/accesoriosInfantiles', function (req, res, next) {
  res.render('accesoriosInfantiles', { title: 'Accesorios Infantiles', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/gorrosPilusos', function (req, res, next) {
  res.render('gorrosPilusos', { title: 'Gorros y Pilusos', isIndexPage: false, isSuscripcionPage: false });
});

router.get('/libreria', function (req, res, next) {
  res.render('libreria', { title: 'Librería', isIndexPage: false, isSuscripcionPage: false });
});

module.exports = router;
