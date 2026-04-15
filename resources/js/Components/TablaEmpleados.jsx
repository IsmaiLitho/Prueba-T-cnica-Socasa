import React from 'react';
import Swal from 'sweetalert2'
import { Link, router } from '@inertiajs/react';

const TablaEmpleados = ({ user, data }) => {

    const alert = (e, id) => {
       
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro de eliminar este registro?',
            text: 'Este cambio no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminar(id);
            }
        });
    }

    const eliminar = (id) => {

        router.visit('/eliminar-empleado/' + id, {
            method: 'delete',
            onSuccess: response => console.log(response),
            onError: errorsResponse => console.log(errorsResponse),
        })
    }

    return (
        <div className="mt-5 relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-medium">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Correo
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Telefono
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Dirección
                        </th>
                        { user.isAdmin && (
                            <th scope="col" className="px-6 py-3 font-medium">
                                Operaciones
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, key) => (
                        <tr className="bg-neutral-primary border-b border-default">
                            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                {item.id}
                            </th>
                            <th className="px-6 py-4">
                                {item.nombre} {item.apellido_paterno} {item.apellido_materno}
                            </th>
                            <td className="px-6 py-4">
                                {item.email}
                            </td>
                            <td className="px-6 py-4">
                                {item.telefono}
                            </td>
                            <td className="px-6 py-4">
                                {item.direccion}
                            </td>
                            { user.isAdmin && (
                                <th className="px-6 py-4">
                                    <Link href={`/editar-empleado/${item.id}`}>
                                        <button type="button" className="bg-brand box-border border shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5">Editar</button>
                                    </Link>
                                    <button onClick={
                                            (e) => { alert(e,item.id) }
                                        } 
                                        type="button" className="bg-danger box-border border shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5">
                                        Eliminar
                                    </button>
                                </th>
                            )}
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default TablaEmpleados;

