# plugin-Rut-AngularJs
##Plugin desarrollado en AngularJs para validar ruts chilenos

###### Instalación
```
bower install AnguarJsRutValidador

```
######Luego que la libraría se termine de descargar  se debe incluir en el archivo app.js

######Esto es agregando 'RutValidador' al angular.module, que generalmente esta ubicado en un arhcivo llamado app.js

```
angular.module('starter', ['ionic', 'starter.controllers','ionic.contrib.drawer','RutValidador'])

```

## Funcionamiento
######Una vez instalada la libreria se debe incluir el siguiente input, el cual se debe crear una variable mediante ng-model que se llama rutValido, esta servirá para poder almacenar y formatear el rut ingresado por el ususario

```
 <input type="text" ng-model="rutValido">

```
######Luego se debe colocar una etiqueta <rut> , la cual desplegará un mensaje diciendo si el rut es válido o no.
```
<rut ng-model="rutValido"></rut>

```

###### Configuración


