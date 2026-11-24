var sequelize = require('sequelize')
var productoModel = require('./models/producto');
//const producto = require('./models/producto');
//iuY5O4KkNJ3M4mJ7
///conexion en la base de datos
const conexion = new sequelize('productos', 'TTNBfyCAW6Jn2DC.root','iuY5O4KkNJ3M4mJ7',{
    host: 'gateway01.us-west-2.prod.aws.tidbcloud.com',
    port: '4000',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            minVersion: 'TLSv1.2',
            rejectUnauthorized: true
        }
    }
});

const producto = productoModel(conexion);

conexion.sync({force:false})
.then(() => {
    console.log('Conexion Exitosa con la BD');
})
.catch((e) => {
    console.log('Error en la conexion: '+e)
});



module.exports={
    producto
}