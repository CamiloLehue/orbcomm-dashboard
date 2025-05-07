import BgBlur from "../../../components/ui/BgBlur"

function Configuration() {
    return (
        <div className="relative h-full w-full flex flex-col gap-5 justify-start items-start  ">
            <BgBlur />
            <h1 className="text-white">Configuración</h1>
            <div className="relative flex flex-col justify-start items-start gap-5 w-full h-full">
                <div className="relative w-full h-100 bg-bgp grid grid-cols-8 gap-2 p-4">
                    <article className="bg-gray/10 hover:bg-transparent hover:border-transparent transition-all duration-300 rounded-lg border border-gray/10 text-gray hover:text-white cursor-pointer flex justify-center items-center">
                        <h3>Empresas</h3>
                    </article>
                    <article className="bg-gray/10 hover:bg-transparent hover:border-transparent transition-all duration-300 rounded-lg border border-gray/10 text-gray hover:text-white cursor-pointer flex justify-center items-center">
                        <h3>Conductores</h3>
                    </article>
                    <article className="bg-gray/10 hover:bg-transparent hover:border-transparent transition-all duration-300 rounded-lg border border-gray/10 text-gray hover:text-white cursor-pointer flex justify-center items-center">
                        <h3>Vehiculos</h3>
                    </article>
                    <article className="bg-gray/10 hover:bg-transparent hover:border-transparent transition-all duration-300 rounded-lg border border-gray/10 text-gray hover:text-white cursor-pointer flex justify-center items-center">
                        <h3>GeoCercas</h3>
                    </article>
                    <article className="bg-gray/10 hover:bg-transparent hover:border-transparent transition-all duration-300 rounded-lg border border-gray/10 text-gray hover:text-white cursor-pointer flex justify-center items-center">
                        <h3>Ubicaciones</h3>
                    </article>
                    <article className="bg-gray/10 hover:bg-transparent hover:border-transparent transition-all duration-300 rounded-lg border border-gray/10 text-gray hover:text-white cursor-pointer flex justify-center items-center">
                        <h3>Tramos</h3>
                    </article>
                    <article className="bg-gray/10 hover:bg-transparent hover:border-transparent transition-all duration-300 rounded-lg border border-gray/10 text-gray hover:text-white cursor-pointer flex justify-center items-center">
                        <h3>Roles</h3>
                    </article>
                    <article className="bg-gray/10 hover:bg-transparent hover:border-transparent transition-all duration-300 rounded-lg border border-gray/10 text-gray hover:text-white cursor-pointer flex justify-center items-center">
                        <h3>Paradas</h3>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Configuration