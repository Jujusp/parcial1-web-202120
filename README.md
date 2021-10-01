# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

Para poder acceder a la opción de buscar las parejas de jugadores se habilita el siguiente Endpoint:
   ```GET
   /api?goal={queryParam}
   ```
 Como se puede observar hay un parámetro que se llama goal y define cuanto se espera que sea la suma.
 
 La respuesta satisfactoria en este caso para el ejemplo con 139 es:
 ```
 {
    "players": [
        [
            "Brevin Knight",
            "Nate Robinson"
        ],
        [
            "Nate Robinson",
            "Mike Wilks"
        ]
    ]
}
```

La respuesta cuando no hay parejas es:

```
{
    "msg": "No matches found"
}
```

 
