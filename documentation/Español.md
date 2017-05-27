# Documentación de jLib6

## Inicializar la libreria

La manera correcta para iniciar la libreria, hay dos manera:

- Metodos Básico
```
$( [function] )
```
Ejecutar una función sin parametro justo cargado tanto el DOM como las imagenes y iFrames.

- Metodo Avanzado

```
$( app => (app ==='interactive') ? [function A] : (app ==='complete') && [function B] )
```
Ejecutar una función con un parametro, es este caso 'app', donde 'app' devuelve dos datos: 
- 'interactive': Se lanza este dato una vez analizado y cargado el DOM
- 'complete': despues lanza este dato cuando ya ha cargado las imagenes y los iFrames
