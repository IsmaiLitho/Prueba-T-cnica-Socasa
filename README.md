# Prueba Técnica Socasa

## Descripción
Este proyecto es un sistema de gestión de órdenes con productos y descuentos, desarrollado con **Laravel 10**.  
Permite crear órdenes, validar códigos de descuento y manejar múltiples productos por orden.

---

## Requisitos
- PHP >= 8.1
- Composer
- Postman o cliente API para probar endpoints

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/IsmaiLitho/nullData-prueba-backend.git
```

2. Entrar al proyecto:

```bash
cd nullData-prueba-backend
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

6. Iniciar servidor

```bash
php artisan serv
```

7. Entrar al endpoin mediante Postman o cliente API para probar endpoints, el endpoin es api/orders/calculate