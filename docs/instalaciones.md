### 1. Iniciamos el proyecto (creamos un package.json para el proyecto y tener sus dependencias)
```bash
npm init
```

### 2. Instalamos express (framework)
```bash
npm install express
```

### 3. Instalamos nodemon (para no recargar cada momento el servidor)
```bash
npm install nodemon
```

### 4. Instalamos dotevn (para disponer de variables de entorno)
```
npm install dotenv --save
```

4.1. Creamos el archivo `.env` para tener variables de entorno

### 5. Para usar la sintaxis `import` debemos poner en package.json, lo siguiente:
```
"type": "module",
```

### 6. Instalamos sequelize para poder maneja la base de datos
```
npm install -g sequelize sequelize-cli
```
Vamos a crear un archivo nuevo en la raiz del proyecto`.sequelizerc`
```
const path = require('path');

module.exports = {
  'config': path.resolve('src/config', 'config.json'),
  'models-path': path.resolve('src/database/models'),
  'seeders-path': path.resolve('src/database/seeders'),
  'migrations-path': path.resolve('src/database/migrations')
};
```
Ahora necesitamos crear algunas carpetas asi que usaremos
```
sequelize init
```

### 7. En phpmyadmin creo una base de datos con el nombre `proyecto_inf281`, modifico el archivo `config/config.json`, ademas instalo un paquete para que podemos interactuar con mysql
```
npm install -g mysql2
```

### 8. Llega el momento de hacer los modelos y migraciones
1. El modelo va a estar en singular: user
2. La migracion va a estar en plural y minuscula : users

Migraciones con sequelize
```bash
sequelize model:generate --name Usuario --attributes ci:string,nombre:string,fecha_nac:date,genero:string,direccion:string,correo:string,telefono:string,nom_usuario:string,contrasenia:string
```

Lleva las migraciones a la Base de Datos, aunque es posible que nos genere un error, por eso hay que seguir con el paso 9 
```bash
sequelize db:migrate

sequelize db:migrate:undo:all
```

### 9. Instalamos babel/core (para poder usar la sintaxis import express)
```
npm install -D @babel/core @babel/preset-env @babel/cli @babel/node
npm uninstall  @babel/core @babel/preset-env @babel/cli @babel/node
```
Creamos el archivo `.babelrc` con la raiz del proyecto
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ]
  ]
}
```

Modificamos el archivo package.json con la linea
`"dev" : "nodemon --exec babel-node src/index.js"`


> es posible que despues de clonar de git, salga error por los paquetes, asi que recomiendo poner
  ```
  npm install  mysql2
  npm install  sequelize sequelize-cli
  ```
