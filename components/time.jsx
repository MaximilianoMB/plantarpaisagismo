import Image from "next/image";
import {MdOutlineUnfoldMore} from "react-icons/md";
import React, {useState} from "react";

export default function Services(){

    const [navWag, setNavWag] = useState(false)

    const handleNavWag = () => {
        setNavWag(!navWag)
    }

    const [navFel, setNavFel] = useState(false)

    const handleNavFel = () => {
        setNavFel(!navFel)
    }

    return(
        <div id="time" className="w-full md:h-screen light-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">               
                <p className="mt-5 text-xl tracking-widest uppercase text-[#65a30d]">Plantas</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div  className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                {/* <Image src="/equipe/1.jpg" alt="/" width="150px" height="150px"/> */}
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-2xl pb-2">A vida é mais bonita</h3>
                                <p className="text-center">Com Paisagismo</p>
                            </div>
                        </div>
                        <div onClick={handleNavWag} className="mx-[25%] mt-4 flex  items-center justify-center rounded-full bg-stone-300 shadow-lg shadow-lime-800 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <MdOutlineUnfoldMore className="ml-3 text-[#65a30d]" size={30} />
                            Saber Mais
                        </div>
                        <div className={navWag ? "col-span-2 mt-10" : "hidden"}>
                            <p 
                            className="m-4 "
                            >
                            Phoenix Canariensis é muito usada
                            </p>
                            <p className="m-4">
                                Diversas composições e benefícios
                            </p>
                        </div>
                    </div>
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto rounded-full">
                                {/* <Image src="/equipe/2.jpg" alt="/" width="150px" height="150px"/> */}
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-2xl pb-2">Paisagismo</h3>
                                <p>Eleva o valor do imóvel</p>
                            </div>
                        </div>
                        <div onClick={handleNavFel} className="mx-[25%] mt-4 flex items-center justify-center rounded-full bg-stone-300 shadow-lg shadow-lime-800 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <MdOutlineUnfoldMore className="ml-3 text-[#65a30d]" size={30} />
                            Mais Curiosidades
                        </div>
                        <div className={navFel ? "col-span-2 mt-10" : "hidden"}>
                            <p 
                            className="m-4"
                            >
                            Grama São Carlos é boa na sombra.
                            </p>
                            <p className="m-4">Gramado ajuda o sistema imonológico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}