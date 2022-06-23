const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de las tarea'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Muestra las tareas', {
        completado: {
            deault: true,
            alias: 'c',
            desc: 'Muestra tareas completas'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}