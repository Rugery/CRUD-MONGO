const empleado = require('../model/Empleado');

module.exports.mostrar = (req, res) => {
    empleado.find({})
        .then(empleados => {
            if(req.get('Accept') === 'application/json'){
                return res.status(200).json(empleados);
            }
            else {
                return res.render('index', { empleados: empleados});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Error al mostrar los empleados'
            });
        });
};

module.exports.crear = (req, res)=>{
  
    const nuevoEmpleado = new empleado({
        name: req.body.nombre,
        email: req.body.email,
        age: req.body.edad
    })
    nuevoEmpleado.save()
    .then(() => {
        console.log('Empleado creado exitosamente!');
        res.redirect('/')
    })
    .catch((error) => {
        console.error(error);
    });
}

module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const name = req.body.name_editar
    const email = req.body.email_editar
    const age = req.body.age_editar
    empleado.findByIdAndUpdate(id, {name, email, age})
  .then(updatedEmpleado => {
    console.log('Empleado actualizado:', updatedEmpleado);
    res.redirect('/');
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({
      message: 'Error actualizando el Empleado'
    });
  });
}


module.exports.borrar = (req, res)=>{
const id = req.params.id;
empleado.findByIdAndRemove(id)
  .then((empleado) => {
    if (empleado) {
      res.redirect('/');
    } else {
      res.status(404).json({ message: 'Empleado no encontrado' });
    }
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ message: 'Error eliminando el registro' });
  });

}


