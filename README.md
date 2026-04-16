# Prueba Técnica Socasa

## Descripción
Este proyecto es un sistema de gestión de empleados, desarrollado con **Laravel 10 y ReactJs**.  
Permite crear órdenes, validar códigos de descuento y manejar múltiples productos por orden.

---

## Requisitos
- PHP >= 8.1
- Composer
- NodeJs

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/IsmaiLitho/Prueba-T-cnica-Socasa.git
```

2. Entrar al proyecto:

```bash
cd Prueba-T-cnica-Socasa
```

3. Instalar dependencias de PHP:

```bash
composer install
```

4. Crear archivo .env y copiar el contenido del archivo .env.example

5. Generar key

```bash
php artisan key:generate
```

6. Instalar dependencias de node

```bash
npm run dev
```

7. Ejecutar migraciones y vistas de sql

```bash
php artisan migrate
```

8. Ejecutar seeders para usuarios de prueba (opcional)

```bash
php artisan serv
```

9. Iniciar servidor de Laravel

```bash
php artisan serv
```

10. Iniciar servidor para compilacion del front end 

```bash
npm run dev
```