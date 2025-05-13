import clsx from "clsx"
import Button from "../../../components/ui/Button"
import dataNotification from "../data/data"
import { NotificationData } from "../types/Notification"
import { GrCircleQuestion, GrPhone } from "react-icons/gr"

function Notification() {

    return (
        <div className="relative flex flex-col justify-between rounded-2xl bg-bgp border border-bgt p-5 w-full">
            <div>
                <div className="flex flex-col w-full">
                    <h5 className="leading-1.5">
                        Notificaciones
                    </h5>
                    <small className="text-xs text-gray">
                        del sistema
                    </small>
                </div>
                <div className="w-full relative  overflow-y-auto h-[200px] mt-5">
                    <NotificationItem data={dataNotification} />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-bgp from-55%"></div>
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
            <Button className="bg-bgt px-5 shadow" rounded="full">
                Todas
            </Button>
            <Button className="px-5 text-gray" rounded="full">
                No Leidas
            </Button>
            <Button className="px-5 text-gray" rounded="full">
                Leidas
            </Button>
        </>
    )
}

type NotificationItemProps = {
    data: NotificationData[];
}

const NotificationItem = ({ data }: NotificationItemProps) => {
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
            "h-40 bg-danger/20 border border-danger/30 hover:border-gray/20": status === 1,
            "h-25 bg-warning/20": status === 2,
            "h-15 bg-bgs": status === 3,
            "h-15 bg-bgs/100": status === 4,
            else: "h-15 bg-bgs/100",
        })
    }

    return (
        <>
            <div className="relative flex flex-col gap-2  bg-bgp pe-2 pb-5">
                {
                    data.map((item, i) => (
                        <div key={i} className={`relative py-2 transition-all duration-500 cursor-pointer hover:bg-transparent rounded-lg  grid grid-cols-5 ${getStyleColor(item.status)}`}>
                            <div className={`flex justify-center items-center gap-2 ${getTextColor(item.status)}`}>
                                A
                            </div>
                            <span className="absolute right-5 top-5 text-xs text-white/40">{item.time}</span>
                            <div className="relative col-span-3 flex flex-col justify-center items-start gap-1">
                                <span className="text-gray text-xs">E-90032{item.id} </span>
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
                                            <GrCircleQuestion size={14} />
                                            <p>Contactar</p>
                                        </Button>
                                        <Button rounded="lg" className="bg-transparent font-light flex justify-center items-center  hover:bg-bgt">
                                            <GrPhone size={14} />
                                            <p>Llamar cliente</p>
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