import Image from "next/image";
// import divisoriaImg from "../public/divisoria.png"

export default function Cover(){
    return(
        <div id="cover" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full  mx-auto p-2 flex justify-center items-center">
                <div> 
                        {/* <Image src="/favicon.ico" alt="/" width="160" height="169" /> */}
                    <p className="uppercase tracking-widest text-gray-600 pb-12">
                        Plantar Paisagismo
                    </p>
                    <h1 className="py-2 text-gray-700">Soluções em <span className="text-[#65a30d]">Paisagismo</span></h1>
                    <p className="py-2 text-gray-600 max-w-[70%] m-auto">
                        A vida é mais bonita com paisagismo.
                        Eleve o <i>valor do seu imóvel</i> com um projeto de  <i>paisagismo</i>.
                    </p>
                    
                </div>
            </div>
            {/* <Image className="w-full h-[15%]" src={divisoriaImg} alt="/" /> */}
        </div>
    )
}