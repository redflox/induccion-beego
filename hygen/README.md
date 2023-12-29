# Dockerizando HYGEN_UD

## Contruir imagen

En este apartado se manejan tres etiquetas de vercionamiento:
1. prod     ->  producción
2. develop  ->  Desarrollo 
3. test     ->  pruebas

Para contruir la imagen se usa el comando
```bash
docker build -t hygen:etiqueta .
```