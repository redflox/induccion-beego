# Se hace uso de una imagen base de Ubuntu 22.04
FROM ubuntu:22.04

# Actualizamos los repositorios
RUN apt-get update

# Actualizamos el sistema
RUN apt-get upgrade -y

# Comando para mantener el contenedor en ejecucion de forma indefinida
CMD ["tail", "-f", "/dev/null"]