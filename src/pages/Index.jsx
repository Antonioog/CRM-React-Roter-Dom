import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente';

export function loader() {
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@microsoft.com",
            empresa: 'Front-end Microsoft'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@facebook.com",
            empresa: 'Front-end Facebook'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@twitter.com",
            empresa: 'Back-end Twitter'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@amz.com",
            empresa: 'Back-end Amazon'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@google.com",
            empresa: 'Full-stack Google'
        },
    ];
    return clientes;
}
function Index() {
    const clientes = useLoaderData();
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus Clientes</p>

            {clientes.length ? (
                <table className='w-full bg-white shadow mt-5 table-auto'>
                    <thead className='bg-blue-800 text-white'>
                        <tr>
                            <th className='p-2'>Cliente</th>
                            <th className='p-2'>Contacto</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {clientes.map(cliente => (
                            <Cliente
                                cliente={cliente}
                                key={cliente.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10">No Hay Clientes aún</p>
            )}
        </>
    )
}


export default Index