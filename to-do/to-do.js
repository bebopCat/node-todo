const fs = require('fs');

let toDoList = [];

const guardarDb = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile(`./db/data.json`, data, (err) => {
        if(err) throw new Error('No se pudo grabar', err);
        console.log('Base de datos actualizada');
    })
}

const cargarDb = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
}

const crear = (descripcion) => {

    cargarDb();
    
    let toDo = {
        descripcion,
        completado: false
    };
    
    toDoList.push(toDo);
    
    guardarDb();
    
    return toDo;
}

const getList = (completado) => {
    cargarDb();

    if (completado) {

        let completedWork = []
        
        toDoList.forEach(el => {
            if (el.completado) completedWork.push(el);
        });
        return completedWork;
    } else {
        return toDoList;
    }

}

const updateList = (descripcion, completado = true) => {
    cargarDb();
    let work = toDoList.find(el => el.descripcion === descripcion);
    work.completado = completado;
    guardarDb();
}

const deleteList = (descripcion) => {
    cargarDb();
    let index = toDoList.findIndex(el => el.descripcion === descripcion);
    console.log(index);
    if (index >= 0) {
        toDoList.splice(index, 1);
    } else {
        throw new Error(`descripcion ${descripcion} no se pudo encontrar`);
    }
    guardarDb();
}

module.exports = {
    crear,
    getList,
    updateList,
    deleteList
}

