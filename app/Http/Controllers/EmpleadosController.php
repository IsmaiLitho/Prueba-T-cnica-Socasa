<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Inertia\Inertia;
use App\Models\Empleado;

class EmpleadosController extends Controller
{
    public function index(){
        $data = DB::table("empleados_view")->get();
        $empleados = collect($data);

        return Inertia::render('Empleados/Index', [
            'empleados' => $empleados,
        ]);
    }

    public function create(){
        $data = DB::table("empleados_view")->get();
        $empleados = collect($data);

        return Inertia::render('Empleados/Crear', [
            'empleados' => $empleados,
        ]);
    }

    public function store(Request $request){
        $this->validate($request, [
            'nombre' => 'required',
            'apellido_paterno' => 'required',
            'apellido_materno' => 'required',
            'email' => 'required',
            'telefono' => 'required',
            'calle' => 'required',
            'numero_interior' => 'required',
            'estado' => 'required',
            'municipio' => 'required',
        ]);
        
        Empleado::create([
            'nombre' => $request->nombre,
            'apellido_paterno' => $request->apellido_paterno,
            'apellido_materno' => $request->apellido_materno,
            'email' => $request->email,
            'telefono' => $request->telefono,
            'calle' => $request->calle,
            'numero_interior' => $request->numero_interior,
            'estado' => $request->estado,
            'municipio' => $request->municipio,
        ]);

        return redirect('/empleados');
    }

    public function edit($id){
        $empleado = Empleado::find($id);
        
        return Inertia::render('Empleados/Editar', [
            'empleado' => $empleado,
        ]);
    }

    public function update(Request $request){
        $this->validate($request, [
            'id' => 'required',
            'nombre' => 'required',
            'apellido_paterno' => 'required',
            'apellido_materno' => 'required',
            'email' => 'required',
            'telefono' => 'required',
            'calle' => 'required',
            'numero_interior' => 'required',
            'estado' => 'required',
            'municipio' => 'required',
        ]);
        
        $empleado = Empleado::where('id', $request->id)->first();
        
        $empleado->update([
            'nombre' => $request->nombre,
            'apellido_paterno' => $request->apellido_paterno,
            'apellido_materno' => $request->apellido_materno,
            'email' => $request->email,
            'telefono' => $request->telefono,
            'calle' => $request->calle,
            'numero_interior' => $request->numero_interior,
            'estado' => $request->estado,
            'municipio' => $request->municipio,
        ]);

        return redirect('/empleados');
    }
    
    public function delete ($id){
        
        $empleado = Empleado::where('id', $id)->first();
        
        $empleado->delete();

        return redirect('/empleados');
    }
}
