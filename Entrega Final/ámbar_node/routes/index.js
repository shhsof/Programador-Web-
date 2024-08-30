var express = require('express');
const req = require('express/lib/request');
const async = require('hbs/lib/async');
var router = express.Router();

var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    layout: '/layout',
    title: 'Ámbar',
    persona: req.session.nombre,
    isIndexPage: true,
    isSuscripcionPage: false
});
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
    html: `${nombre} ${apellido} se contactó a través de la web y quiere más info a este correo: ${email} <br> Además, hizo el siguiente comentario: ${mensaje} . <br> Su teléfono es ${telefono}`
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
  res.render('beauty', {
    layout: '/layout',
    title: 'Beauty',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/smileyWorld', function (req, res, next) {
  res.render('smileyWorld', {
    layout: '/layout',
    title: 'Smiley World',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/theKidsShop', function (req, res, next) {
  res.render('theKidsShop', {
    layout: '/layout',
    title: 'The Kids Shop',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/accesorios', function (req, res, next) {
  res.render('accesorios', {
    layout: '/layout',
    title: 'Accesorios',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/accesoriosPelo', function (req, res, next) {
  res.render('accesoriosPelo', {
    layout: '/layout',
    title: 'Accesorios de Pelo',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/accesoriosTextiles', function (req, res, next) {
  res.render('accesoriosTextiles', {
    layout: '/layout',
    title: 'Accesorios Textiles',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/bijou', function (req, res, next) {
  res.render('bijou', {
    layout: '/layout',
    title: 'Bijou',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/carterasMochilas', function (req, res, next) {
  res.render('carterasMochilas', {
    layout: '/layout',
    title: 'Carteras y Mochilas',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/makeup', function (req, res, next) {
  res.render('makeup', {
    layout: '/layout',
    title: 'Makeup',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/nuevo', function (req, res, next) {
  res.render('nuevo', {
    layout: '/layout',
    title: 'Nuevo',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/rebajas', function (req, res, next) {
  res.render('rebajas', {
    layout: '/layout',
    title: 'Rebajas',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});  
});

router.get('/skincare', function (req, res, next) {
  res.render('skincare', {
    layout: '/layout',
    title: 'Skincare',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/suscripcion', function (req, res, next) {
  res.render('suscripcion', {
    layout: '/layout',
    title: 'Suscripción',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: true
});
});

router.get('/tiendas', function (req, res, next) {
  res.render('tiendas', {
    layout: '/layout',
    title: 'Tiendas',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/accesoriosInfantiles', function (req, res, next) {
  res.render('accesoriosInfantiles', {
    layout: '/layout',
    title: 'Accesorios Infantiles',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/gorrosPilusos', function (req, res, next) {
  res.render('gorrosPilusos', {
    layout: '/layout',
    title: 'Gorros y Pilusos',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

router.get('/libreria', function (req, res, next) {
  res.render('libreria', {
    layout: '/layout',
    title: 'Librería',
    persona: req.session.nombre,
    isIndexPage: false,
    isSuscripcionPage: false
});
});

module.exports = router;
