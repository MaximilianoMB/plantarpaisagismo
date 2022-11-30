import Image from "next/image";

export default function Sobre(){
    return(
        <div id="sobre" className=" relative w-full md:h-screen p-2 flex items-center py-16 bg-gradient-to-r from-stone-300 to-stone-400 rounded-tr-full rounded-bl-full">
            <p className="absolute pl-6 top-4 left-0 uppercase text-xl font-bold py-2 tracking-widest text-[#65a30d]">Sobre nós</p>
            <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-0 ">    
                <div className="col-span-2 text-center"> 
                    <Image src="/favicon.ico" alt="/" width="60" height="69" /><h2 className="py-4">Plantar Paisagismo</h2>
                    <p className="pb-8 italic text-gray-600">
                        Serviços de paisagismo
                    </p>
                    <ul className=" list-disc text-left pl-16">
                        <li className="py-2 text-[#4d7c0f]">
                            <span className="pl-2 font-bold">Experiênca</span>
                            <p className="py-2 text-gray-800">Com mais de 20 anos de atuação, temos extensa expertise no paisagismo</p>
                        </li>
                        <li className="py-2 text-[#4d7c0f]">
                            <span className="pl-2 font-bold">Design Moderno</span>
                            <p className="py-2 text-gray-800">Nossos projetos seguem padrões arquitetônicos modernos.</p>
                        </li>
                        <li className="py-2 text-[#4d7c0f]">
                            <span className="pl-2 font-bold">Biodiversidade</span>
                            <p className="py-2 text-gray-800">Aproveite a biodiversidade brasileira e torne seu jardim em uma obra de arte</p>
                        </li>
                    </ul>
                    
                </div>
                <div className="col-span-2 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-3xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    {/* <Image className="rounded-3xl" src="/imagemSobre.png" alt="/" width="400" height="300" /> */}
                </div>
            </div>
        </div>
    )
}