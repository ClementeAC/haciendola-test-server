# Servidor Node.js Express con API REST

Este servidor Node.js Express proporciona una API REST para gestionar productos y usuarios. Está desarrollado como parte de una prueba técnica.

## Requisitos

Antes de ejecutar el servidor, asegúrate de tener instalado lo siguiente:

- Node.js
- PostgreSQL

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

        PORT=3001
        SECRET_KEY=7yCb}Dv60XcF

2. Abre el archivo `src/db/connection.ts` y actualiza la configuración de la conexión a la base de datos con tu información:

## Instala las dependencias:

    npm install

## Uso

Compila el código TypeScript:

    npm run typescript

Esto iniciará el proceso de compilación de TypeScript en modo observación (watch).

Inicia el servidor:

    npm run dev

El servidor se ejecutará en http://localhost:3001.

Puebla la base de datos con información:

    node dist/seed.js

Esto agregará datos de ejemplo a la base de datos.


## Prueba técnica

Puedes encontrar la prueba técnica en el siguiente enlace:
[Enlace a la prueba técnica](https://drive.google.com/file/d/1n5pdMNEt3OsIep-FXoe58nJQsQdUvCkk/view)


