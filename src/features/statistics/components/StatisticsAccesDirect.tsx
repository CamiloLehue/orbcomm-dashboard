import { GrFormFolder } from 'react-icons/gr'

function StatisticsAccesDirect() {
    return (
        <div className="col-span-3 relative flex flex-col gap-2 justify-between rounded-2xl bg-bgp ">
            <div className="flex flex-col w-full p-5 border rounded-2xl bg-bgt border-gray/20">
                <h4 className="leading-4">
                    Estadisticas
                </h4>
                <small className="text-xs text-gray">
                    Por viaje
                </small>
            </div>
            <div className=" w-full h-full rounded-2xl flex flex-col gap-2 p-2">
                {
                    Array(5).fill(0).map((_, i) => (
                        <div key={i} className="group cursor-pointer  hover:bg-transparent rounded-lg h-13 flex justify-center items-center gap-1 transition-all duration-500">
                            <GrFormFolder className="group-hover:text-secondary transition-all duration-500" />
                            <h5>Reporte {i + 1}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StatisticsAccesDirect