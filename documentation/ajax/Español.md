# Documentación ajax

## Método Básico
Esta es el método elemental de la funcion de ajax.

Solo tiene que pasar como parametro un string de una url de formato valido.
```
$.ajax([string URL])
```

## Método Avanzado 1
Con el metodo avanzado, podemos controlar de manera más especifica en el control de la consulta ajax.
```
$.ajax([string URL], [object OPTIONS])
```
**Información adicional**
> El objecto OPTIONS no requiere del parametro url, ja que la que prevalece es el string del primer parametro

## Método Avanzado 2
Con la segunda forma podemos eludir el string de la url, y esta insertarla en el objeto como opción obligatoria.
```
$.ajax([object OPTIONS])
```

### Parametros validos en el objecto OPTIONS

- **async:** Tipo de sincronia
- **beforeSend:** Función que se ejecuta antes de realizar la consulta
- **cache:** Guardado en cache
- **contentType:** Tipo de contenido a enviar, por defecto es *application/x-www-form-urlencoded; charset=UTF-8*
- **data:** Datos que se envia en la consulta
- **dataType:** Tipo de dato que se va a devolver 
- **header:** Cabezera adicional que se van a enviar con la consulta
- **method:** Metodo de envio de la consulta, por defectos es GET.
- **url:** Dirección de la consulta
- **complete:** Función que se ejecuta sin importat si la petición falló o no. Devuelve por parametro un objeto detallado de la consulta, el estado de la consulta.
- **success:** Función que se ejecuta si la petición fue satisfactoria. Devuelve por parametro la respuesta, el estado y un objecto más detallado.
- **error:** Función que se ejecuta si se observa algun tipo de error. Devuelve por parametro el error.
- **typeSend:** Tipo de envío ajax, por defecto esta una 'promesa'. Esta variable es inteligente si dectecta que es un navegador antiguo ejecuta una consulta tipo 'XMLHttpRequest'.
