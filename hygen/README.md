# Dockerizando HYGEN_UD

## Contruir imagen

En este apartado se manejan tres etiquetas de versionamiento:
1. prod     ->  producción
2. develop  ->  Desarrollo 
3. test     ->  pruebas

Para construir la imagen se usa el comando
```bash
docker build -t hygen:test .
```

## Ejecutar contenedor

Después de contruir la imagen con una etiqueta de versión, puedes hacer referencia a esa versión especifica cuando ejecutes contenedores basados en ella. Por ejemplo:

```bash
docker run -d --network host --name hygen:test hygen:etiqueta
```

## Acceder al contenedor

Luego para hacer uso de la herramienta puedes acceder al contenedor

```bash
docker exec -it hygen:test bash
```

## CREAR APIS CON EL CONTENEDOR

### Crear api_mid

1. HOST
```bash
$ docker exec -it hygen:test bash
```
2. CONTAINER
```bash
$ hygen plantilla_api_mid with-prompt --appname nombre_api_mid
```
3. CONTAINER
```bash
$ exit
```
4. HOST
```bash
$ docker cp test_hygen:/go/src/github.com/udistrital/nombre_api_mid $GOPATH/src/github.com/udistrital
```

### Crear api_crud

1. HOST
```bash
$ docker exec -it hygen:test bash
```
2. CONTAINER
```bash
$ hygen plantilla_api_crud with-prompt --appname nombre_api_crud
```
3. CONTAINER
```bash
$ exit
```
4. HOST
```bash
$ docker cp test_hygen:/go/src/github.com/udistrital/nombre_api_crud $GOPATH/src/github.com/udistrital
```

