import { Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";

export default function SideBar() {
    
    let pathy = usePathname().slice(1);
    pathy = pathy[0].toUpperCase() + pathy.slice(1);
    
    return (
        <div className="flex flex-col w-72 flex-none m-3">
            <div className="flex mb-5">
                <Typography placeholder="Ir para página inicial" as="a" href="/" style={{ color: "#00A8A9" }}>
                    Página inicial
                </Typography>
                <span className='mx-2' style={{ color: "#ACACAC" }}> &gt; </span>
                <Typography placeholder="Página sapatos" style={{ color: "#CB0D1F" }}>
                    {pathy}
                </Typography>
            </div>
            <div className="border border-gray-300 md:w-64">
                <div className="m-3">
                    <Typography className="font-bold my-3" placeholder="Texto de filtrar por" variant="lead" style={{ color: "#ED1A39" }}>
                        FILTRE POR
                    </Typography>
                    <div className="categorias">
                        <Typography className="font-semibold text-base lg:text-black md:text-teal-600 sm:text-teal-600 xs:text-teal-600" placeholder="Texto categorias" variant="lead">
                            CATEGORIAS
                        </Typography>
                        <div className="text-gray-700 mt-2">
                            <Typography placeholder="Filtro de roupas">
                                &#x2022; Roupas
                            </Typography>
                            <Typography placeholder="Filtro de sapatos">
                                &#x2022; Sapatos
                            </Typography>
                            <Typography placeholder="Filtro de acessórios">
                                &#x2022; Acessórios
                            </Typography>
                        </div>
                    </div>
                    <div className="tipo mt-10">
                        <Typography className="font-semibold text-base lg:text-black md:text-teal-600 sm:text-teal-600 xs:text-teal-600" placeholder="Texto categorias" variant="lead">
                            CORES
                        </Typography>
                        <div className="flex flex-row mt-2 ml-1 space-x-1">
                            <div className="w-10 h-5" style={{ backgroundColor: "#CB0D1F" }}></div>
                            <div className="w-10 h-5" style={{ backgroundColor: "#F26324" }}></div>
                            <div className="w-10 h-5" style={{ backgroundColor: "#27A3A9" }}></div>
                        </div>
                    </div>
                    <div className="tipo mt-7">
                        <Typography className="font-semibold text-base lg:text-black md:text-teal-600 sm:text-teal-600 xs:text-teal-600" placeholder="Texto categorias" variant="lead">
                            TIPO
                        </Typography>
                        <div className="text-gray-700 mt-2">
                            <Typography placeholder="Filtro de corrida">
                                &#x2022; Corrida
                            </Typography>
                            <Typography placeholder="Filtro de caminhada">
                                &#x2022; Caminhada
                            </Typography>
                            <Typography placeholder="Filtro de casual">
                                &#x2022; Casual
                            </Typography>
                            <Typography placeholder="Filtro de social">
                                &#x2022; Social
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}