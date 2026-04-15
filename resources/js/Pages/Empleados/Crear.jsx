import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useEffect, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm, router, usePage } from '@inertiajs/react';

const Crear = ({ auth }) => {

    const { data, setData, get, processing, reset } = useForm({
        nombre: '',
        apellido_paterno:'',
        apellido_materno:'',
        email:'',
        telefono:'',
        calle:'',
        numero_interior:'',
        estado:'',
        municipio:'',
    });

    const { errors } = usePage().props;

    const guardarDatos = (e) => {
        e.preventDefault();
        
        router.visit('/guardar-empleado', {
            method: 'post',
            data: data,
            forceFormData: true,
            //onBefore: () => setLoader(true),
            onSuccess: response => console.log(response),
            onError: errorsResponse => console.log(errorsResponse),
            //onFinish: () => setLoader(false),
        })
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Nuevo empleado</h2>}
        >
            <Head title="Nuevo empleado" />

            <div className="py-12">
                <div className="max-w-[80%] mx-auto">
                    <form onSubmit={guardarDatos} >
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                            <div>
                                                <InputLabel htmlFor="nombre" value="Nombre" />
                                                <input
                                                    type="text"
                                                    id="nombre"
                                                    name="nombre"
                                                    value={data.nombre}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('nombre', e.target.value)}
                                                />
                                                <InputError message={errors.nombre} className="mt-2" />
                                            </div>
                                        
                                            <div>
                                                <InputLabel htmlFor="apellido_paterno" value="Apellido Paterno" />
                                                <input
                                                    type="text"
                                                    id="apellido_paterno"
                                                    name="apellido_paterno"
                                                    value={data.apellido_paterno}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('apellido_paterno', e.target.value)}
                                                />
                                                <InputError message={errors.apellido_paterno} className="mt-2" />
                                            </div>
                                        
                                            <div>
                                                <InputLabel htmlFor="apellido_materno" value="Apellido Materno" />
                                                <input
                                                    type="text"
                                                    id="apellido_materno"
                                                    name="apellido_materno"
                                                    value={data.apellido_materno}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('apellido_materno', e.target.value)}
                                                />
                                                <InputError message={errors.apellido_materno} className="mt-2" />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="email" value="Correo" />
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('email', e.target.value)}
                                                />
                                                <InputError message={errors.email} className="mt-2" />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="telefono" value="Telefono" />
                                                <input
                                                    type="text"
                                                    id="telefono"
                                                    name="telefono"
                                                    value={data.telefono}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('telefono', e.target.value)}
                                                />
                                                <InputError message={errors.telefono} className="mt-2" />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="calle" value="Calle" />
                                                <input
                                                    type="text"
                                                    id="calle"
                                                    name="calle"
                                                    value={data.calle}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('calle', e.target.value)}
                                                />
                                                <InputError message={errors.calle} className="mt-2" />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="numero_interior" value="Numero interior" />
                                                <input
                                                    type="text"
                                                    id="numero_interior"
                                                    name="numero_interior"
                                                    value={data.numero_interior}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('numero_interior', e.target.value)}
                                                />
                                                <InputError message={errors.numero_interior} className="mt-2" />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="estado" value="Estado" />
                                                <input
                                                    type="text"
                                                    id="estado"
                                                    name="estado"
                                                    value={data.estado}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('estado', e.target.value)}
                                                />
                                                <InputError message={errors.estado} className="mt-2" />
                                            </div>
                                            <div>
                                                <InputLabel htmlFor="municipio" value="Municipio" />
                                                <input
                                                    type="text"
                                                    id="municipio"
                                                    name="municipio"
                                                    value={data.municipio}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('municipio', e.target.value)}
                                                />
                                                <InputError message={errors.municipio} className="mt-2" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                                            <PrimaryButton
                                                type="submit"
                                                className={`w-full btn mx-0 flex items-center justify-center md:mx-auto border-2  py-2 px-4 rounded-md`}
                                            >
                                                Guardar
                                                <svg className="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
                                                </svg>
                                            </PrimaryButton>
                                        </div>

                                    </div>
                                </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Crear;