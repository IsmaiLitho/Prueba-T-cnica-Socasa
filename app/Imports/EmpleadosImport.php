<?php

namespace App\Imports;

use App\Models\Empleado;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EmpleadosImport implements ToModel, WithValidation, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Empleado([
            'nombre' => $row['nombre'],
            'apellido_paterno' => $row['apellido_paterno'],
            'apellido_materno' => $row['apellido_materno'],
            'email' => $row['email'],
            'telefono' => $row['telefono'],
            'calle' => $row['calle'],
            'numero_interior' => $row['numero_interior'],
            'estado' => $row['estado'],
            'municipio' => $row['municipio'],
        ]);
    }

    public function rules(): array
    {
        return [
            'nombre' => 'required',
            'apellido_paterno' => 'required',
            'apellido_materno' => 'required',
            'email' => 'required',
            'telefono' => 'required',
            'calle' => 'required',
            'numero_interior' => 'required',
            'estado' => 'required',
            'municipio' => 'required',
        ];
    }
}
