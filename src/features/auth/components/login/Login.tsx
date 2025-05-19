import { useEffect, useRef, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import Button from "../../../../components/ui/Button";
import { useNavigate } from "react-router";
import Loading from "../../../../components/ui/Loading";

function Login() {
    const navigate = useNavigate();
    const imageRef = useRef<HTMLImageElement>(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!imageRef.current) return;
            const { clientX, clientY } = e;

            // Obtenemos el tamaño de la ventana
            const { innerWidth, innerHeight } = window;

            // Calculamos el movimiento relativo (-1 a 1)
            const moveX = (clientX / innerWidth - 0.5) * 20;
            const moveY = (clientY / innerHeight - 0.5) * 20;

            // Aplicamos transform a la imagen
            imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleClickLogin = () => {
        localStorage.setItem("authToken", "demo@wisensor.cl");
        setTimeout(() => {
            setLoad(false);
        }, 2000);
    };

    if (load) return <Loading />;
    navigate("/dashboard");

    return (
        <div className="relative flex justify-center items-center bg-gradient-to-bl from-bgt to-bgp h-full min-h-screen max-h-screen overflow-hidden w-full">
            <div className="relative flex flex-col justify-center items-center gap-20">
                <div className="relative flex flex-col justify-center items-center">

                    <div className="absolute left-[50%] -translate-1/2 top-0 bg-gradient-to-b from-blue-600  rounded-full opacity-30 h-100 w-100 blur-3xl"></div>
                    <h3 className="font-bold"><span className="text-danger">WI</span>SENSOR</h3>
                    <small>Presenta</small>
                    <img
                        ref={imageRef}
                        src="strack8.png"
                        alt="logo"
                        className="w-[35%] transition-transform duration-100 ease-out will-change-transform"
                    />
                    <small className="text-gray">D E M O v1.0</small>
                </div>
                <div className="flex flex-col gap-2 mt-5 justify-center items-center">
                    <label className="text-gray ">Correo Electronico</label>
                    <input
                        type="text"
                        value={"demo@wisensor.cl"}
                        className="border border-gray/20 bg-bgt shadow text-gray focus:text-white rounded-lg p-2 w-full focus:outline-none outline-none active:outline-none"
                    />
                    <Button
                        onClick={() => { setLoad(true); handleClickLogin() }}
                        rounded="lg"
                        className="bg-bgp px-5 w-[200px] h-10 border border-secondary hover:bg-secondary/5">
                        <GrFormNextLink />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;