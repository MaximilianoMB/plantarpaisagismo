import Image from "next/image";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import {AiOutlineWhatsApp} from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import Router from "next/router";

export default function Contato(){

    const {register, handleSubmit, errors, reset} = useForm();
    const router = useRouter();
    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/formulario`,
            headers: {
                'Content-Type' : 'application/json',
            },
            data: values,
        };

        try {
            const response = await axios(config);
            if(response.status == 200) {
                reset();
                Router.push('/')
            }
        } catch (err) {
            console.error(err);
        }

        
    }

    return(
        <div id="contato" className="w-full lg:h-screen bg-gradient-to-r from-stone-300 to-stone-400 rounded-tr-full rounded-bl-full">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#65a30d]">
                    Contato
                </p>
                <h2 className="py-4">
                    Fale conosco!
                </h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* ESQUERDA */}
                    <div className="col-span-3 lg:col-span-5 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full text-center">
                            <div>
                                {/* <Image className="rounded-xl" src="/favicon.ico" width="160px" height="169px" alt="/" /> */}
                            </div>
                            <div>
                                <h2 className="py-2">
                                    Plantar Paisagismo
                                </h2>                              
                            </div>
                            <div className="py-8">
                                <p className="uppercase pt-8 text-[#65a30d]">
                                    Fale no Whatsapp!
                                </p>
                                <div className="flex justify-center py-4">
                                    <div className="rounded-full bg-lime-500 size-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                                        <AiOutlineWhatsApp className="text-[#f5f5f4]" size={42}/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#65a30d]" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}