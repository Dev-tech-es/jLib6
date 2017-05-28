# Documentación de jLib6


## INDICE
- [Incializar la libreria](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#inicializar-la-libreria)
- [Selector de elementos](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#selector-de-elementos)
- [Control de eventos](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-de-eventos)
- [Control de ajax](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-de-ajax)
- [Control de formulario](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-de-formulario)
- [Control del DOM](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-del-dom)
- [Control de los estilos CSS](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-de-los-estilo-css)
- [Control de los datos del DOM](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-de-los-datos-del-dom)
- [Control del DOM (Insite)](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-del-dom-insite)
- [Control del DOM (Outsite)](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-del-dom-outsite)
- [Control del arbol DOM](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-del-arbol-dom)
- [Control de filtros](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#control-de-filtros)
- [Metodos prototipados](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/Espan%CC%83ol.md#metodos-prototipados)

## Inicializar la libreria

La manera correcta para iniciar la libreria, hay dos manera:

- Método Básico

Ejecutar una función sin parametro justo cargado tanto el DOM como las imagenes y frames.

```
$( [función] )
```

- Método Avanzado

Ejecutar una función con un parametro, es este caso 'app', donde 'app' devuelve dos datos: 
- ' interactive ' : Se lanza este dato una vez analizado y cargado el DOM
- ' complete ' : despues lanza este dato cuando ya ha cargado las imagenes y los iFrames

```
$( app => (app === 'interactive') ? [función A] : (app === 'complete') && [función B] )
```


**Información adicional :**  
> *El método '$([función])' es igual que hacer '$( app => (app === 'complete') && [función] )'.*

## Selector de elementos

Como en el CSS podemos seleccionar un elemento por su elemento HTML, ID o CLASE.

```
$( [elemento] )
```

**Información adicional :**  
> Se recomienda la selección por el ID, para garantizar una sintaxis correcta


## Control de eventos

- Método 'on'
```
$( [elemento] ).on([typeEvent], [función], [boolean = true])
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
$( [elemento] ).load([url])
```

Carga contenido de una pagina en un elemento

## Control de Formulario

- Método 'val'

Devuelve el valor del elemento
```
$( [elemento] ).val()
```
Inserta un valor en el elemento
```
$( [elemento] ).val([string])
```
- Método 'serialize'

Genera un string , llave y valor (?[key]=[value]&key]=[value]) para enviar datos por formulario.
```
$( [elemento] ).serialize()
```
- Método 'serializeArray'

Genera un arreglo , llave y valor para enviar datos por formulario.

```
$( [elemento] ).serializeArray()
```
- Método 'blur'
```
$( [elemento] ).blur()
```
- Método 'focus'
```
$( [element] ).focus()
```
- Método 'submit'
```
$( [elementoForm] ).submit([función])
```

## Control del DOM

- Método 'hover'
```
$( [elemento] ).hover([función A], [función B])
```
- Método 'remove'
```
$( [elemento] ).remove()
```


## Control de los estilo CSS

- Método 'css'
```
$( [elemento] ).css([string key], [string value])
```
```
$( [elemento] ).css([object])
```
- Método 'hasClass'
```
$( [elemento] ).hasClass([string nameClass])
```
- Método 'addClass'
```
$( [elemento] ).addClass([string nameClass])
```
- Método 'removeClass'
```
$( [elemento] ).removeClass([string nameClass])
```
- Método 'toggleClass'
```
$( [elemento] ).toggleClass([string nameClass])
```

## Control de los datos del DOM

- Método 'data'
```
$( [elemento] ).data([string nameData])
```
```
$( [elemento] ).data([string nameData], [string newData])
```
- Método 'attr'
```
$( [elemento] ).attr([string nameAttr])
```
```
$( [elemento] ).attr([string nameAttr], [string newAttr)
```
- Método 'prop'
```
$( [elemento] ).prop([string nameProp])
```
```
$( [elemento] ).prop([string nameProp], [boolean newProp])
```

## Control del DOM (Insite)

- Método 'append'
```
$( [elemento] ).append([string HTML])
```
- Método 'appendTo'
```
$( [elemento] ).appendTo([string HTML])
```
- Método 'prepend'
```
$( [elemento] ).prepend([string HTML])
```
- Método 'prependTo'
```
$( [elemento] ).prependTo([string HTML])
```
- Método 'text'
```
$( [elemento] ).text([string text])
```
- Método 'html'
```
$( [elemento] ).html([string HTML])
```

## Control del DOM (Outsite)

- Método 'after'
```
$( [elemento] ).after([string HTML])
```
- Método 'before'
```
$( [elemento] ).before([string HTML])
```
- Método 'insertAfter'
```
$( [element] ).insertAfter([string HTML])
```
- Método 'insertBefore'
```
$( [elemento] ).insertBefore([string HTML])
```

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
```
$.ajax([string URL])
```
```
$.ajax([string URL], [objecto OPTIONS])
```
```
$.ajax([objecto OPTIONS])
```
**Información Adicional :**
> Para poder comprender mejor el metodo prototipado de ajax, a continuación podrá acceder a la documentación especial sobre este metodo. [Ver documentación $.ajax](https://github.com/Dev-tech-es/jLib6/blob/master/documentation/ajax/Espan%CC%83ol.md)

- Método 'cookie'

Crear una cookie
```
$.cookie([string KEY],[string VALUE],[objecto OPTIONS])
```
Devolver el valor de una cookie
```
$.cookie([string KEY])
```
Eliminar una cookie
```
$.cookie([string KEY],[boolean = false])
```
- Método 'for'
```
$.for([arreglo],[función])
```
- Método 'forIn'
```
$.forIn([objecto],[función])
```
- Método 'forOf'
```
$.forOf([objecto],[función])
```
- Método 'lorem'
```
$.lorem([typeElement DOM])
```
- Método 'plugin'
```
$.plugin([function])
```
- Método 'random'
```
$.random([number = 0 INIT],[number = 100 END])
```
- Método 'serialize'
```
$.serialize([objecto])
```
- Método 'serializeArray'
```
$.serializeArray([objecto])
```
- Método 'storage'
```
$.cookie([string KEY],[string VALUE],[objecto OPTIONS])
```
Devolver el valor de una cookie
```
$.cookie([string KEY])
```
Eliminar una cookie
```
$.cookie([string KEY],[boolean = false])
```
- Método 'waitForSecond'
```
$.waitForSecond([función],[number = 1 SECOND])
```
