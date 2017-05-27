# Documentación de jLib6

## Inicializar la libreria

La manera correcta para iniciar la libreria, hay dos manera:

- Método Básico
```
$( [function] )
```
Ejecutar una función sin parametro justo cargado tanto el DOM como las imagenes y iFrames.

- Método Avanzado

```
$( app => (app === 'interactive') ? [function A] : (app === 'complete') && [function B] )
```
Ejecutar una función con un parametro, es este caso 'app', donde 'app' devuelve dos datos: 
- ' interactive ' : Se lanza este dato una vez analizado y cargado el DOM
- ' complete ' : despues lanza este dato cuando ya ha cargado las imagenes y los iFrames

**Información adicional :**  
> *El método '$([function])' es igual que hacer '$( app => (app === 'complete') && [function] )'.*

## Control de eventos

- Método 'on'
```
$( [element] ).on([typeEvent], [function], [boolean = true])
```
**Información adicional :** 
> *Los elementos validos pueden ser ID, CLASS o elementos del DOM, **recomendamos la selección de los elemento por el ID***

### Eventos del raton
- **click** : Click sobre un elemento
- **dbclick** : Doble click sobre un elemento
- **mousedown** : Se pulsa un botón del ratón sobre un elemento
- **mouseenter** : El puntero del ratón entra en el área de un elemento
- **mouseleave** : El puntero del ratón sale del área de un elemento
- **mousemove** : El puntero del ratón se está moviendo sobre el área de un elemento
- **mouseover** : El puntero del ratón se sitúa encima del área de un elemento
- **mouseout** : El puntero del ratón sale fuera del área del elemento o fuera de uno de sus hijos
- **mouseup** : Un botón del ratón se libera estando sobre un elemento
- **contextmenu** : Se pulsa el botón derecho del ratón (antes de que aparezca el menú contextual)

### Eventos del teclado
- **keydown** : El usuario tiene pulsada una tecla (para elementos de formulario y body)
- **keypress** : El usuario pulsa una tecla (momento justo en que la pulsa) (para elementos de formulario y body)
- **keyup** : El usuario libera una tecla que tenía pulsada (para elementos de formulario y body)

### Eventos del formulario
- **focus** : Un elemento del formulario toma el foco
- **blur** : Un elemento del formulario pierde el foco
- **change** : Un elemento del formulario cambia
- **select** : El usuario selecciona el texto de un elemento input o textarea
- **submit** : Se pulsa el botón de envío del formulario (antes del envío)
- **reset** : Se pulsa el botón reset del formulario

### Eventos de ventanas o frames
- **load** : Se ha completado la carga de la ventana
- **unload** : El usuario ha cerrado la ventana
- **resize** : El usuario ha cambiado el tamaño de la ventana


## Control de Ajax

- Método 'load'

```
$( [element] ).load([url])
```

Carga contenido de una pagina en un elemento

## Control de Formulario

- Método 'val'
- Método 'serialize'
- Método 'serializeArray'
- Método 'blur'
- Método 'focus'
- Método 'submit'

## Control del DOM

- Método 'hover'
- Método 'remove'

## Control de los estilo CSS

- Método 'css'
- Método 'hasClass'
- Método 'addClass'
- Método 'removeClass'
- Método 'toggleClass'

## Control de los datos del DOM

- Método 'data'
- Método 'attr'
- Método 'prop'

## Control del DOM (Insite)

- Método 'append'
- Método 'appendTo'
- Método 'prepend'
- Método 'prepemdTo'
- Método 'text'
- Método 'html'

## Control del DOM (Outsite)

- Método 'after'
- Método 'before'
- Método 'insertAfter'
- Método 'insertBefore'

## Control del arbol DOM 

- Método 'parent'
- Método 'parents'
- Método 'map'
- Método 'join'
- Método 'children'
- Método 'find'
- Método 'prev'
- Método 'next'

## Control de filtros

- Método 'first'

## Metodos prototipados

Metodos que no requieren de un elemento inicializador

- Método 'ajax'
- Método 'cookie'
- Método 'for'
- Método 'forIn'
- Método 'forOf'
- Método 'lorem'
- Método 'plugin'
- Método 'random'
- Método 'serialize'
- Método 'serializeArray'
- Método 'storage'
- Método 'waitForSecond'
