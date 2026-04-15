<?php

use App\Http\Controllers\EmpleadosController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/empleados', [EmpleadosController::class, 'index'])->name('empleados');
    Route::get('/nuevo-empleado', [EmpleadosController::class, 'create'])->name('nuevo-empleado');
    Route::post('/guardar-empleado', [EmpleadosController::class, 'store'])->name('guardar-empleado');
    Route::get('/editar-empleado/{id}', [EmpleadosController::class, 'edit'])->name('editar-empleado');
    Route::post('/actualizar-empleado', [EmpleadosController::class, 'update'])->name('actualizar-empleado');
    Route::delete('/eliminar-empleado/{id}', [EmpleadosController::class, 'delete'])->name('eliminar-empleado');
});

require __DIR__.'/auth.php';
