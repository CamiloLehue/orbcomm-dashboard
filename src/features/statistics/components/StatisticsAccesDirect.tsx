import TiempoXDistancia from './DesarrolloData'

function StatisticsAccesDirect() {
    return (
        <div className="relative flex flex-col h-full gap-2 bg-bgt overflow-hidden justify-between rounded-xs ">
            <div className="flex flex-col w-full p-5 ">
                <h4 className="leading-4">
                    Estadisticas
                </h4>
                <small className="text-xs text-gray">
                    Medición de tiempo y distancia recorrida
                </small>
            </div>
            <div className="relative w-full px-10 ">
                <div className='absolute opacity-25 bottom-0 right-20 w-90 h-90 blur-3xl bg-gradient-to-t from-secondary/40 to-primary/30'></div>
                <TiempoXDistancia />
            </div>
        </div>
    )
}

export default StatisticsAccesDirect