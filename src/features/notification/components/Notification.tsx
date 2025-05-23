import clsx from "clsx"
import Button from "../../../components/ui/Button"
import dataNotification from "../data/data"
import { NotificationData } from "../types/Notification"
import { GrCircleAlert, GrPhone } from "react-icons/gr"
import { useNavigate } from "react-router"

function Notification() {
    return (
        <div className="relative flex flex-col justify-between overflow-hidden bg-bgp p-1 border border-bgt py-5 w-full">
            {/* <div className="absolute left-0 top-0 h-[1000px] w-[1000px] bg-gray/30 rounded-full blur-3xl "></div> */}
            <div>
                <div className="flex justify-between items-center w-full px-2">
                    <div className="relative flex flex-col w-full">
                        <h5 className="leading-3">
                            Notificaciones
                        </h5>
                        <small className="text-xs text-gray">
                            del sistema
                        </small>
                    </div>
                </div>
                <div className="w-full relative  overflow-y-auto h-[592px] mt-5">
                    <NotificationItem data={dataNotification} />
                </div>
                <div className="absolute bottom-17 left-0 w-full h-10 bg-gradient-to-t from-bgt from-5%"></div>
            </div>
            <div className="relative flex justify-center items-center gap-2 text-xs pt-5">
                <ButtonsList />
            </div>
        </div>
    )
}

const ButtonsList = () => {
    return (
        <>
            <Button className="bg-bgp hover:bg-bgs px-5 shadow" rounded="full">
                Todas
            </Button>
            <Button className="px-5 text-nowrap text-gray border  border-gray/10" rounded="full">
                No Leidas
            </Button>
            <Button className="px-5 text-gray border  border-gray/10" rounded="full">
                Leidas
            </Button>
        </>
    )
}

type NotificationItemProps = {
    data: NotificationData[];
}

const NotificationItem = ({ data }: NotificationItemProps) => {
    const navigate = useNavigate();
    const getTextColor = (status: number) => {
        return clsx({
            "text-danger": status === 1,
            "text-warning": status === 2,
            "text-primary": status === 3,
            "text-secondary": status === 4,
        })
    }

    const getStyleColor = (status: number) => {
        return clsx({
            "h-40 bg-danger/40 border border-danger/50 hover:border-gray/20": status === 1,
            "h-25 bg-warning/40 border border-warning/50 hover:border-gray/20": status === 2,
            "h-15 bg-bgs": status === 3,
            "h-15 bg-bgs/100": status === 4,
        })
    }

    return (
        <>
            <div className="relative flex flex-col gap-2 pe-2 pb-5">
                {
                    data.map((item, i) => (
                        <div
                            onClick={() => { navigate(`/viajes/ver/${item.idTrip}`) }}
                            key={i}
                            className={`relative py-2 transition-all duration-500 cursor-pointer hover:bg-transparent rounded-xs   grid grid-cols-5 ${getStyleColor(item.status)}`}>
                            <div className={`flex justify-center items-center gap-2 ${getTextColor(item.status)}`}>
                                <GrCircleAlert />
                            </div>
                            <span className="absolute right-2 top-2 text-xs text-white/40">{item.time}</span>
                            <div className="relative col-span-3 flex flex-col justify-center items-start gap-1">
                                <span className="text-primary text-xs">{item.idTrip} </span>
                                <h5 className="flex justify-start items-center gap-1 text-nowrap font-semibold">
                                    {item.title}
                                </h5>
                                {
                                    item.status === 1 || item.status === 2 ? (
                                        <small className="flex text-white/60">
                                            {item.description}
                                        </small>
                                    ) : ""
                                }
                            </div>
                            {
                                item.status === 1 && (
                                    <div className="col-span-5 flex justify-center items-center gap-2 w-full">
                                        <Button rounded="lg" className="bg-transparent font-light flex justify-center items-center  hover:bg-bgt">
                                            <GrPhone size={14} />
                                            <p>Conductor</p>
                                        </Button>
                                        <Button rounded="lg" className="bg-transparent font-light flex justify-center items-center  hover:bg-bgt">
                                            <GrPhone size={14} />
                                            <p>Cliente</p>
                                        </Button>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }

            </div>
        </>
    )
}
export default Notification