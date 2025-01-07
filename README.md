# Servidor Nginx con Virtual Hosts

Bienvenido al proyecto de servidor Nginx con múltiples virtual hosts. Este proyecto está diseñado para servir cinco sitios web diferentes, cada uno con su propia estructura de carpetas organizada. A continuación, se detalla la estructura del proyecto, instrucciones para iniciar el servidor y cómo agregar nuevos virtual hosts.

---

## Estructura del Proyecto

```
nginx-server
├── sites
│   ├── site1
│   │   ├── index.html
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── scripts
│   │   │   └── main.js
│   │   └── media
│   │       └── image1.jpg
│   ├── site2
│   │   ├── index.html
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── scripts
│   │   │   └── main.js
│   │   └── media
│   │       └── image2.jpg
│   ├── site3
│   │   ├── index.html
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── scripts
│   │   │   └── main.js
│   │   └── media
│   │       └── image3.jpg
│   ├── site4
│   │   ├── index.html
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── scripts
│   │   │   └── main.js
│   │   └── media
│   │       └── image4.jpg
│   └── site5
│       ├── index.html
│       ├── css
│       │   └── styles.css
│       ├── scripts
│       │   └── main.js
│       └── media
│           └── image5.jpg
├── nginx.conf
└── README.md
```

---

## Instrucciones para Iniciar el Servidor Nginx

1. **Instalar Nginx**: Asegúrate de tener Nginx instalado en tu sistema. Puedes instalarlo usando el gestor de paquetes de tu distribución.
2. **Configurar Nginx**: Copia el archivo `nginx.conf` a la ubicación de configuración de Nginx (generalmente `/etc/nginx/nginx.conf`).
3. **Verificar la Configuración**: Ejecuta el siguiente comando para verificar que no haya errores en la configuración:

   ```
   sudo nginx -t
   ```
4. **Iniciar Nginx**: Si la configuración es correcta, inicia el servidor Nginx con:

   ```
   sudo systemctl start nginx
   ```
5. **Acceder a los Sitios**: Abre un navegador y accede a las siguientes URLs para ver cada sitio:

   - http://site1.local
   - http://site2.local
   - http://site3.local
   - http://site4.local
   - http://site5.local

---

## Cómo Agregar Nuevos Virtual Hosts

Para agregar un nuevo virtual host, sigue estos pasos:

1. **Crear una Nueva Carpeta**: Crea una nueva carpeta dentro de `sites` con el nombre de tu nuevo sitio (por ejemplo, `site6`).
2. **Agregar Archivos**: Dentro de la nueva carpeta, crea los archivos `index.html`, `css/styles.css`, `scripts/main.js`, y `media/image.jpg` según sea necesario.
3. **Modificar nginx.conf**: Abre el archivo `nginx.conf` y agrega un nuevo bloque de servidor similar a los existentes, apuntando a la nueva carpeta.
4. **Verificar y Reiniciar Nginx**: Repite los pasos de verificación y reinicio del servidor.

---

## Ejemplo de Contenido de `index.html`

Cada archivo `index.html` en los sitios contiene contenido de ejemplo que indica a cuál sitio se refiere. Por ejemplo, el contenido de `site1/index.html` podría ser:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>Sitio 1</title>
</head>
<body>
    <h1>Bienvenido al Sitio 1</h1>
    <img src="media/image1.jpg" alt="Imagen de ejemplo">
    <script src="scripts/main.js"></script>
</body>
</html>
```

---

¡Disfruta de tu servidor Nginx con múltiples virtual hosts! Si tienes alguna pregunta, no dudes en consultar la documentación o buscar ayuda en línea.
