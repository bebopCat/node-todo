const { argv } = require('./config/yargs');
const { crear, getList, updateList, deleteList } = require('./to-do/to-do');

const colors = require('colors');
const command = argv._[0];

if (command === undefined) {
    console.log('Debe ingresar un comando'.red);
    return
}
if (command != 'crear' && command != 'listar' && command != 'actualizar' && command != 'borrar') {
    console.log(`El comando ${command.red} no es valido`);
    return
}

switch (command) {
    case 'crear':
        let work = crear(argv.descripcion);
        console.log(work);
        break;
        
    case 'listar':
        let listado = getList(argv.completado);

        if (listado.length === 0) console.log("no hay tareas completas".green);

        listado.forEach(el => {
            console.log('========Por hacer========'.green);
            console.log(el.descripcion);
            console.log(`Estado: ${el.completado}`);
            console.log('========================='.green);
        });
    break;
            
    case 'actualizar':
        updateList(argv.descripcion, argv.completado);
    break;

    case 'borrar':
        deleteList(argv.descripcion);
    break;

    default:
        console.log(`${comand} no es un comando valido`.red);
    break;
}