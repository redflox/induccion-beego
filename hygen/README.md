# Dockerizando Hygen

## Contruir imagen

En este apartado se manejan tres etiquetas de versionamiento:
1. prod     ->  producción
2. develop  ->  Desarrollo 
3. test     ->  pruebas

Ubiquese en el directorio donde esta el Dockerfile, de lo contrario no funciona. Para construir la imagen se usa el comando: 
```bash
docker build -t hygen:test .
```

## Ejecutar contenedor

Después de contruir la imagen con una etiqueta de versión, puedes hacer referencia a esa versión especifica cuando ejecutes contenedores basados en ella. Por ejemplo:

```bash
docker run -d --network host --name test_hygen hygen:test
```


## CREAR APIS CON EL CONTENEDOR

### Crear api_mid

1. HOST
```bash
docker exec -it test_hygen bash
```
2. CONTAINER (edite "nombre_api_mid")
```bash
hygen plantilla_api_mid with-prompt --appname nombre_api_mid
```
3. CONTAINER
```bash
exit
```
4. HOST (edite "nombre_api_mid")
```bash
docker cp test_hygen:/go/src/github.com/udistrital/nombre_api_mid $GOPATH/src/github.com/udistrital
```

### Crear api_crud

1. HOST
```bash
docker exec -it test_hygen bash
```
2. CONTAINER (edite "nombre_api_crud")
```bash
hygen plantilla_api_crud with-prompt --appname nombre_api_crud
```
3. CONTAINER
```bash
exit
```
4. HOST (edite "nombre_api_crud")
```bash
docker cp test_hygen:/go/src/github.com/udistrital/nombre_api_crud $GOPATH/src/github.com/udistrital
```

