import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useEffect, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm, router, usePage } from '@inertiajs/react';

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

    const cargarFolios = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        setFileFolios(file);
        
        const formData = new FormData();
        formData.append('fileFolios', file);
        
        try {
            const response = await axios.post('/cargar-folios', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            console.log('respueta de folios ',response.data);
            setData('folios',response.data.data);
            setErrorFolios(null);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrorFolios(error.response.data.errors);
            } else {
                setErrorFolios({ general: 'Error inesperado' });
            }
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cargar empleados</h2>}
        >
            <Head title="Cargar empleados" />

            <div className="py-1">
                <div className="max-w-[80%] mx-auto">
                    <form onSubmit={guardarDatos} >
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                            <div>
                                                <InputLabel htmlFor="nombre" value="Archivo de excel" />
                                                <input
                                                    type="file"
                                                    id="nombre"
                                                    name="nombre"
                                                    value={data.nombre}
                                                    className="mt-1 block w-full"
                                                    onChange={(e) => setData('nombre', e.target.value)}
                                                />
                                                <InputError message={errors.nombre} className="mt-2" />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
                            
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Crear;