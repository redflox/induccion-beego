# Dockerizando HYGEN_UD


## CREAR APIS CON EL CONTENEDOR

### crear api_mid

```bash
docker exec -it name_container bash
hygen plantilla_api_mid with-prompt --appname nombre_api_mid
exit
docker cp test_hygen:/go/src/github.com/udistrital/nombre_api_mid $GOPATH/src/github.com/udistrital
```

### crear api_crud

```bash
docker exec -it name_container bash
hygen plantilla_api_crud with-prompt --appname nombre_api_crud
exit
docker cp test_hygen:/go/src/github.com/udistrital/nombre_api_crud $GOPATH/src/github.com/udistrital
```

## Contruir imagen

En este apartado se manejan tres etiquetas de vercionamiento:
1. prod     ->  producción
2. develop  ->  Desarrollo 
3. test     ->  pruebas

Para contruir la imagen se usa el comando
```bash
docker build -t hygen:etiqueta .
```

## Ejecutar contenedor

Despues de contruir la imagen con una etiqueta de versión, puedes hacer referencia a esa versión especifica cuando ejecutes contenedores basados en ella. Por ejemplo:

```bash
docker run -d --network host -v ./generated:/home --name name_container hygen:etiqueta
```

## Acceder al contenedor

Luego para hacer uso de la herramienta puedes acceder al contenedor

```bash
docker exec -it name_container bash
```