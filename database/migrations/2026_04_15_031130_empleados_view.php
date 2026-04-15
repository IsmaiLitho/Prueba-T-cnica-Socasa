<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

use Illuminate\Support\Facades\DB;
use Staudenmeir\LaravelMigrationViews\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //consulta para crear la vista

        $query = DB::table('empleados')->select(
            'id',
            'apellido_paterno',
            'apellido_materno',
            'email',
            'telefono',
            DB::raw("CONCAT(calle,' ',numero_interior,', ',municipio,', ',estado) as direccion"),
        );

        // Crear vista
        Schema::createView('empleados_view', $query);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropViewIfExists('empleados_view');
    }
};
