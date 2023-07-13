import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@solutionsweb.com",
            empresa: 'Solutions Web'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@gamers.com",
            empresa: 'Gamers Creating'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@xalto.com",
            empresa: 'Xalto Gap'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@playing.com",
            empresa: 'Shot Playing'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@videosgaming.com",
            empresa: 'Videos Game'
        },
    ];
    return clientes;
}


const Index = () => {
    const clientes = useLoaderData();
    console.log(clientes)
    return (
        <>
            <h1 className="font-black text-4xl text-blue-800"> Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>

            {clientes.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Cliente</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
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
                <p className='text-center mt-10'>No hay clientes Aún</p>
            )}
        </>
    )
}

export default Index