const moment = require('moment');
moment.locale('es');
console.log('Naci ' + moment('10/03/2004','DD/MM/YYYY') .fromNow());