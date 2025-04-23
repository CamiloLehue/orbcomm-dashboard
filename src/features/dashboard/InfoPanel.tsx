
import Button from '../../components/ui/Button'

function InfoPanel() {
    return (
        <div className="bg-zinc-900 rounded-2xl px-5 py-2">
            <div className="h-12 flex flex-col justify-center items-start">
                <h3 className="font-light text-zinc-400">
                    Información del camión
                </h3>

            </div>
            <div className=" w-full">
                <div className="overflow-x-auto  ">
                    <table className="min-w-full text-left text-xs  w-full">
                        <thead className="tracking-wider border-b-4  dark:border-zinc-800">
                            <tr>
                                <th scope="col" className="px-6 py-2">
                                    <h4 className="font-light text-red-600">Resúmen</h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b dark:border-zinc-800">
                                <th scope="row" className="px-6 py-4">
                                    Tipo de mensaje
                                </th>
                                <td className="px-6 py-4">Blocked Status</td>
                            </tr>
                            <tr className="border-b dark:border-zinc-800">
                                <th scope="row" className="px-6 py-4">
                                    Modo de mensaje
                                </th>
                                <td className="px-6 py-4 text-lime-300">Satelital</td>
                            </tr>
                            <tr className="border-b dark:border-zinc-800">
                                <th scope="row" className="px-6 py-4">
                                    Duración desde la hora del mensaje
                                </th>
                                <td className="px-6 py-4">44</td>
                            </tr>
                            <tr className="border-b dark:border-zinc-800">
                                <th scope="row" className="px-6 py-4">
                                    Dirección
                                </th>
                                <td className="px-6 py-4">216, Antonio Varas, Población Esmeralda, Puerto Montt, Los Lagos, Chile</td>
                            </tr>
                            <tr className="border-b dark:border-zinc-800">
                                <th scope="row" className="px-6 py-4">
                                    Ciudad
                                </th>
                                <td className="px-6 py-4">Puerto Montt</td>
                            </tr>
                            <tr className="border-b dark:border-zinc-800">
                                <th scope="row" className="px-6 py-4">
                                    Región
                                </th>
                                <td className="px-6 py-4">Los Lagos</td>
                            </tr>
                            <tr className="border-b dark:border-zinc-800">
                                <th scope="row" className="px-6 py-4">
                                    País
                                </th>
                                <td className="px-6 py-4">Chile</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button className="mx-auto pt-4 text-xs">
                        Ver más
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InfoPanel