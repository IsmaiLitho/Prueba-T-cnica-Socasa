import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, usePage } from '@inertiajs/react';
import axios from 'axios';

const Crear = ({ auth }) => {
    const { errors } = usePage().props;
    const [errorExcelEmpleados, setErrorExcelEmpleados] = useState(null);
    const [fileEmpleados, setFileEmpleados] = useState(null);
    const [cargando, setCargando] = useState(false);

    const cargarArchivo = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        // Validar que sea un archivo Excel
        const extensionesValidas = ['.xlsx', '.xls',];
        const nombreArchivo = file.name;
        const extension = nombreArchivo.substring(nombreArchivo.lastIndexOf('.')).toLowerCase();
        
        if (!extensionesValidas.includes(extension)) {
            setErrorExcelEmpleados({ archivo: 'Solo se permiten archivos Excel (.xlsx, .xls)' });
            setFileEmpleados(null);
            e.target.value = ''; // Limpiar el input
            return;
        }
        
        setFileEmpleados(file);
        setErrorExcelEmpleados(null);
    };

    const cargarEmpleados = async (e) => {
        e.preventDefault();

        if (!fileEmpleados) {
            setErrorExcelEmpleados({ msg: 'Se debe cargar un archivo para continuar' });
            return;
        }
        
        setCargando(true);
        const formData = new FormData();
        formData.append('fileEmpleados', fileEmpleados);
        
        try {
            const response = await axios.post('/cargar-empleados', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            console.log('Respuesta de empleados:', response.data);
            
            // Éxito - limpiar formulario
            setFileEmpleados(null);
            setErrorExcelEmpleados(null);
            // Limpiar el input file
            const fileInput = document.getElementById('fileEmpleados');
            if (fileInput) fileInput.value = '';
            
            // Mostrar mensaje de éxito (opcional)
            alert('Empleados importados correctamente');
            
        } catch (error) {
            console.error('Error al cargar empleados:', error);
            
            if (error.response && error.response.data && error.response.data.errors) {
                setErrorExcelEmpleados(error.response.data.errors);
            } else if (error.response && error.response.data && error.response.data.message) {
                setErrorExcelEmpleados({ general: error.response.data.message });
            } else {
                setErrorExcelEmpleados({ general: 'Error inesperado al procesar el archivo' });
            }
        } finally {
            setCargando(false);
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
                    <form onSubmit={cargarEmpleados}>
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="col-span-2">
                                            <InputLabel htmlFor="fileEmpleados" value="Archivo de Excel" />
                                            <input
                                                type="file"
                                                id="fileEmpleados"
                                                name="fileEmpleados"
                                                accept=".xlsx,.xls,.csv"
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                onChange={cargarArchivo}
                                                disabled={cargando}
                                            />
                                            {errorExcelEmpleados && (
                                                <div className="mt-2">
                                                    {Object.values(errorExcelEmpleados).map((error, index) => (
                                                        <InputError key={index} message={error} className="mt-1" />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex items-end">
                                            <PrimaryButton
                                                type="submit"
                                                className="w-full py-2 px-4 rounded-md"
                                                disabled={cargando || !fileEmpleados}
                                            >
                                                {cargando ? 'Importando...' : 'Importar registros'}
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm text-blue-700">
                                        <strong>Formato permitido:</strong> Archivos Excel (.xlsx, .xls)
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