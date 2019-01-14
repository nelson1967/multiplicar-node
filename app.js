const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);
// console.log(module);
let comando = argv._[0];
switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then( archivo => {console.log(`Archivo creado: ${archivo.green}`)})
      .catch( e => {console.log(e);})
    break;
  default:
    console.log('Comando no reconocido');
}


// let args2 = process.argv;
// el parametro es el 1ero explicito de la forma 'instr=valor'
// la base recibe 'valor'
// console.log('Process.argv:', args2);
// console.log('Yargs.argv: ', argv);
// console.log('Base:', argv.base);
// console.log('Limite:', argv.limite);

// let parametro = argv[2];
// let base = parametro.split("=")[1];
// // se deberia validar que base tenga un valor... que no sea undefined


//console.log(module);
