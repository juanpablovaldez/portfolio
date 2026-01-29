# Usamos Node 20 en Alpine (ligero y actual)
FROM node:20-alpine

# Instalamos dependencias del sistema necesarias para "sharp" y "webpack"
# Strapi necesita estas librerías para procesar imágenes correctamente
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Definimos variables de entorno para producción/desarrollo
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Directorio de trabajo dentro del contenedor
WORKDIR /opt/app

# Copiamos primero los archivos de dependencias (para aprovechar el caché de Docker)
COPY package.json package-lock.json* ./

# Instalamos dependencias y configuramos el PATH
RUN npm install
ENV PATH /opt/app/node_modules/.bin:$PATH

# Copiamos el resto del código
COPY . .

# Construimos el panel de administración (admin panel)
RUN npm run build

# Exponemos el puerto por defecto de Strapi
EXPOSE 1337

# Comando para iniciar en modo desarrollo (con hot-reload)
CMD ["npm", "run", "start"]