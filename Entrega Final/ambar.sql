-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 30-08-2024 a las 20:21:28
-- Versión del servidor: 8.0.35
-- Versión de PHP: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ambar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` float NOT NULL,
  `fecha` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `id_usuario`, `id_producto`, `cantidad`, `fecha`) VALUES
(1, 1, 1, 5, '2024-08-13 05:26:57.000000'),
(2, 3, 1, 1, '2024-08-14 21:50:13.000000'),
(4, 1, 2, 3, '2024-08-16 18:11:16.000000'),
(5, 1, 12, 4, '2024-08-19 22:51:06.000000'),
(6, 1, 89, 1, '2024-08-30 13:29:07.000000'),
(7, 1, 76, 2, '2024-08-30 15:40:26.000000'),
(8, 1, 3, 1, '2024-08-30 15:47:35.000000'),
(9, 1, 7, 1, '2024-08-30 15:51:24.000000'),
(10, 1, 58, 1, '2024-08-30 16:49:32.000000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int NOT NULL,
  `titulo` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'El escándalo de Alberto Fernández agudiza al máximo la crisis del PJ, y el gobierno aprovecha para disimular las peleas internas', 'Las disputas palaciegas en el oficialismo quedaron en un segundo plano por la grave denuncia de Fabiola Yañez contra el ex presidente. El shock en su entorno. El posicionamiento de Axel Kicillof. La puja cada vez menos silenciosa en el corazón del poder', '“¿Quién cree que es el líder de la oposición?”, preguntó la consultora Casa Tres en su último estudio, de julio. El podio se lo disputaron la opción “nadie”, Axel Kicillof en segundo lugar, seguido por Cristina Kirchner. Más relegados, los consultados se inclinaron por Juan Grabois, Guillermo Moreno o Sergio Massa, y en otras respuestas aparecieron resultados dispares. Es decir, en el proceso actual de atomización del peronismo y crisis de representatividad, no se identifica ninguna alternativa nítida de oposición a Javier Milei por parte del PJ, un casillero que, a todas luces, pretende ocupar el gobernador bonaerense.'),
(3, 'Cómo va a sostener el Gobierno la recaudación luego de la eliminación del Impuesto PAIS', 'El tributo resultó un pilar fundamental para las cuentas públicas durante el primer semestre en medio de la caída de la recaudación por el desplome de la actividad económica. Pero el Ejecutivo decidió su reducción ahora y eliminación el año próximo', 'El Gobierno reducirá del 17,5% al 7,5% el Impuesto PAIS en septiembre para eliminarlo por completo en diciembre, lo que implicará un impacto en la recaudación, aún deprimida por la recesión. Al menos así lo confirmaron tanto el presidente Javier Milei como su ministro de Economía, Luis “Toto” Caputo.\r\n\r\nSe trata de un tributo que aportó casi $700.000 millones en julio y en promedio $610.000 millones por mes este año, sumando 0,7% del PBI.\r\n\r\nDesde la consultora Econviews señalaron que “no está claro si la modificación de septiembre también alcanza al turismo. Aún con la brecha entre el dólar tarjeta y el blue que incentivaba a viajar con efectivo, los egresos por turismo rondaron USD 573 millones por mes entre enero y junio, solo 11% menos que en 2023. En mayo y junio fueron más de 700″.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` float NOT NULL,
  `imagen` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `imagen`, `categoria`) VALUES
(1, 'Choker de corazón bubble', 3700, 'ChokerCorazón.jpg', 'Nuevo'),
(2, 'Set de aros gota', 6200, 'SetAros.jpg', 'Nuevo'),
(3, 'Aros chunky', 2500, 'ArosChunky.jpg', 'Nuevo'),
(4, 'Choker de corazón bubble', 3700, 'ChokerCorazón2.jpg', 'Nuevo'),
(5, 'Aros cortos chunky', 2500, 'ArosCortosChunky.jpg', 'Nuevo'),
(6, 'Choker de perlas', 4700, 'ChokerPerlas.jpg', 'Nuevo'),
(7, 'Aros de moño', 3700, 'ArosMoño.jpg', 'Nuevo'),
(8, 'Argollas con corazones', 4700, 'ArgollasCorazones.jpg', 'Nuevo'),
(9, 'Bolso reutilizable con estampa', 9000, 'BolsoReutilizable.jpg', 'Carteras y mochilas'),
(10, 'Bolso plegable', 25000, 'BolsoPlegable.jpg', 'Carteras y mochilas'),
(11, 'Mochila plegable', 21000, 'MochilaPlegable2.jpg', 'Carteras y mochilas'),
(12, 'Mochila plegable', 21000, 'MochilaPlegable.jpg', 'Carteras y mochilas'),
(13, 'Pouch con cierre', 18000, 'PouchCierre.jpg', 'Carteras y mochilas'),
(14, 'Bandolera con cierre', 23000, 'Bandolera.jpg', 'Carteras y mochilas'),
(15, 'Pouch con cierre', 18000, 'PouchCierre2.jpg', 'Carteras y mochilas'),
(16, 'Bandolera con cierre', 23000, 'Bandolera2.jpg', 'Carteras y mochilas'),
(17, 'Aros cortos vintage', 4700, 'ArosVintage.jpg', 'Bijou'),
(18, 'Argollas con dijes \"smileyworld®\"', 4700, 'ArgollasDijes.jpg', 'Bijou'),
(19, 'Set de pulseras \"smileyworld®\"', 6200, 'SetPulseras.jpg', 'Bijou'),
(20, 'Set de chokers \"smileyworld®\"', 7700, 'SetChokers.jpg', 'Bijou'),
(21, 'Choker textil', 3700, 'ChokerTextil.jpg', 'Bijou'),
(22, 'Collar con dije de corazón', 4700, 'CollarCorazón.jpg', 'Bijou'),
(23, 'Pulsera con corazón', 4700, 'PulseraCorazón.jpg', 'Bijou'),
(24, 'Aros con dijes circulares', 3700, 'ArosDijes.jpg', 'Bijou'),
(25, 'Gomita de flor de denim', 3700, 'GomitaFlor.jpg', 'Accesorios de pelo'),
(26, 'Scrunchie', 3700, 'Scrunchie.jpg', 'Accesorios de pelo'),
(27, 'Gomita de flor de denim', 3700, 'GomitaFlor2.jpg', 'Accesorios de pelo'),
(28, 'Scrunchie xl', 3700, 'ScrunchieXl1.jpg', 'Accesorios de pelo'),
(29, 'Scrunchie xl', 3700, 'ScrunchieXl2.jpg', 'Accesorios de pelo'),
(30, 'Set de horquillas \"disney\"', 6200, 'SetHorquillas.jpg', 'Accesorios de pelo'),
(31, 'Set de broches \"disney\"', 4700, 'SetBroches.jpg', 'Accesorios de pelo'),
(32, 'Broche con strass', 3700, 'BrocheStrass.jpg', 'Accesorios de pelo'),
(33, 'Bufanda básica', 25000, 'BufandaBásica.jpg', 'Accesorios textiles'),
(34, 'Bufanda classic', 20000, 'BufandaClassic.jpg', 'Accesorios textiles'),
(35, 'Bufanda básica', 25000, 'BufandaBásica2.jpg', 'Accesorios textiles'),
(36, 'Cap con tachas', 9000, 'CapTachas.jpg', 'Accesorios textiles'),
(37, 'Piluso con estampa', 13900, 'PilusoEstampa.jpg', 'Accesorios textiles'),
(38, 'Gorro de gatito', 9000, 'GorroGatito2.jpg', 'Accesorios textiles'),
(39, 'Bufanda classic', 20000, 'BufandaClassic2.jpg', 'Accesorios textiles'),
(40, 'Cuello acanalado', 16000, 'CuelloAcanalado.jpg', 'Accesorios textiles'),
(41, 'Sérum hidratante para labios #lipcare', 6200, 'SérumHidratante.jpg', 'Cuidado de la piel'),
(42, 'Set de mini pinzas', 3700, 'SetPinzas.jpg', 'Cuidado de la piel'),
(43, 'Primer hidratante', 4700, 'PrimerHidratante.jpg', 'Cuidado de la piel'),
(44, 'Primer matificante de base \"#skinsaver', 9900, 'PrimerMatificante.jpg', 'Cuidado de la piel'),
(45, 'Serum humectante vol. 1 acf by dadatina', 20900, 'SerumHumectante.jpg', 'Cuidado de la piel'),
(46, 'Fotoprotector acf by dadatina', 25700, 'Fotoprotector.jpg', 'Cuidado de la piel'),
(47, 'Bruma reparadora acf by dadatina', 17900, 'BrumaReparadora.jpg', 'Cuidado de la piel'),
(48, 'Tónico exfoliante \"oh my skin hero\"', 7700, 'TonicoExfoliante.jpg', 'Cuidado de la piel'),
(49, 'Paleta de sombras para ojos \"preppy cool\"', 14500, 'PaletaSombras.jpg', 'Makeup'),
(50, 'Paleta de sombras para ojos \"preppy cool\"', 11900, 'PaletaSombras2.jpg', 'Makeup'),
(51, 'Gel de cejas', 6200, 'GelCejas.jpg', 'Makeup'),
(52, 'Máscara de pestañas y cejas \"natural lash\"', 7700, 'MáscaraPestañas.jpg', 'Makeup'),
(53, 'Óleo para labios \"#oil i ever wanted\"', 7700, 'ÓleoLabios.jpg', 'Makeup'),
(54, 'Delineador de ojos en gel negro', 4700, 'Delineador.jpg', 'Makeup'),
(55, 'Máscara para pestañas extra volumen', 7700, 'MáscaraPestañas2.jpg', 'Makeup'),
(56, 'Lip oil hidratante y nutritivo efecto glossy', 7700, 'LipOil.jpg', 'Makeup'),
(57, 'Cap de minnie mouse \"disney\"', 11900, 'Cap Minnie.jpg', 'Gorros y pilusos'),
(58, 'Piluso de minnie mouse \"disney\"', 15900, 'Piluso Minnie.jpg', 'Gorros y pilusos'),
(59, 'Gorro Infantil Tejido', 6000, 'GorroTejido.jpg', 'Gorros y pilusos'),
(60, 'Cap de minnie mouse \"disney\"', 11900, 'CapMinnie Mouse2.jpg', 'Gorros y pilusos'),
(61, 'Cap de minnie mouse \"disney\"', 11900, 'CapMinnieMouse3.jpg', 'Gorros y pilusos'),
(62, 'Piluso infantil con animalitos', 13900, 'pilusoInfantil.jpg', 'Gorros y pilusos'),
(63, 'Cap de gatito', 9900, 'CapGatito.jpg', 'Gorros y pilusos'),
(64, 'Gorro con pompón', 10000, 'GorroPompón.jpg', 'Gorros y pilusos'),
(65, 'Cartuchera de minnie mouse \"disney\"', 11500, 'CartucheraMinnieMouse.jpg', 'Libreria'),
(66, 'Set de librería de unicornio', 14000, 'Set Unicornio.jpg', 'Libreria'),
(67, 'Juego gameboy', 3700, 'Juego Gameboy.jpg', 'Libreria'),
(68, 'Cartuchera candy lover', 5000, 'CartucheraCandy.jpg', 'Libreria'),
(69, 'Cartuchera de gatito', 10500, 'CartucheraGatito.jpg', 'Libreria'),
(70, 'Set de librería infantil', 7700, 'SetLibreríaInfantil1.jpg', 'Libreria'),
(71, 'Set de librería infantil', 7700, 'SetLibreríaInfantil2.jpg', 'Libreria'),
(72, 'Set de libreria infantil unicornio', 5900, 'SetLibreríaInfantil3.jpg', 'Libreria'),
(73, 'Mochila de Minnie Mouse \"Disney\"', 32000, 'MochilaMinnie.jpg', 'Accesorios infantiles'),
(74, 'Mochila de Minnie Mouse \"Disney\"', 32000, 'MochilaMinnie2.jpg', 'Accesorios infantiles'),
(75, 'Billetera infantil con cierre', 9900, 'BilleteraInfantil.jpg', 'Accesorios infantiles'),
(76, 'Billeteras de animalitos', 9900, 'BilleteraAnimalitos.jpg', 'Accesorios infantiles'),
(77, 'Monedero de gatito unicornio', 7700, 'MonederoGatito.jpg', 'Accesorios infantiles'),
(78, 'Paraguas con nubes', 10000, 'ParaguasNubes.jpg', 'Accesorios infantiles'),
(79, 'Paraguas de unicornios', 10000, 'ParaguasUnicornios.jpg', 'Accesorios infantiles'),
(80, 'Paraguas con arcoíris', 10000, 'ParaguasArcoíris.jpg', 'Accesorios infantiles'),
(81, 'Cuello infinito', 11200, 'CuelloInfinito.jpg', 'Rebajas'),
(82, 'Bufanda básica', 17500, 'BufandaBásica3.jpg', 'Rebajas'),
(83, 'Bufanda con flecos', 17500, 'BufandaFlecos.jpg', 'Rebajas'),
(84, 'Bufanda tejida', 8400, 'BufandaTejida.jpg', 'Rebajas'),
(85, 'Gorro tejido', 6300, 'GorroTejido1.jpg', 'Rebajas'),
(86, 'Bufanda con flecos', 17500, 'BufandaFlecos2.jpg', 'Rebajas'),
(87, 'Bufanda con textura', 17500, 'BufandaTextura.jpg', 'Rebajas'),
(88, 'Gorro con pompón', 7000, 'GorroPompón2.jpg', 'Rebajas'),
(89, 'Mochila con cierre \"smileyworld®\"', 38000, 'MochilaSmiley1.jpg', 'Smiley World'),
(90, 'Bolsa reutilizable \"smileyworld®\"', 15000, 'BolsaSmiley1.jpg', 'Smiley World'),
(91, 'Mochila con cierre \"smileyworld®\"', 38000, 'MochilaSmiley2.jpg', 'Smiley World'),
(92, 'Mochila con cierre \"smileyworld®\"', 38000, 'MochilaSmiley3.jpg', 'Smiley World'),
(93, 'Billetera con cierre \"smileyworld®\"', 15000, 'BilleteraSmiley.jpg', 'Smiley World'),
(94, 'Bolsa reutilizable \"smileyworld®\"', 15000, 'BolsaSmiley2.jpg', 'Smiley World'),
(95, 'Porta cosméticos \"smileyworld®\"', 15000, 'PortaCosméticosSmiley.jpg', 'Smiley World'),
(96, 'Billetera con cierre \"smileyworld®\"', 15000, 'BilleteraSmiley2.jpg', 'Smiley World');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `usuario` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Laura', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'Sofía', '827ccb0eea8a706c4c34a16891f84e7b');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_carrito_usuario` (`id_usuario`),
  ADD KEY `fk_carrito_producto` (`id_producto`);

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_carrito_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_carrito_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
