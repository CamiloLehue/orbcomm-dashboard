import TiempoXDistancia from './DesarrolloData'

function StatisticsAccesDirect() {
    return (
        <div className="col-span-3 relative flex flex-col gap-2 justify-between rounded-2xl ">
            <div className="flex flex-col w-full p-5 border rounded-2xl bg-bgt border-gray/20">
                <h4 className="leading-4">
                    Estadisticas
                </h4>
                <small className="text-xs text-gray">
                    Medición de tiempo y distancia recorrida
                </small>
            </div>
            <div className="relative w-full ">
                {/* <div className='absolute top-0 left-50 w-[300px] h-[300px] rounded-full bg-danger/20 blur-3xl'></div> */}
                <TiempoXDistancia />
            </div>
        </div>
    )
}

export default StatisticsAccesDirect