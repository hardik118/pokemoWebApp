"use client"

import Link from "next/link";
import Image from "next/image";

interface  PokemonCardTypes{
    name : string
    id: string
}

export default function PokemonCard(props: PokemonCardTypes){
    const id= props.id.split('/').slice(-2,-1)[0];

    return <div className="h-[40vh] w-[40vh] bg-gray-50 transition transform duration-300 hover:-translate-y-2 border border-gray-200 shadow-md rounded-md p-2">
         
<div className="w-full h-[30vh] flex justify-center items-center border-b-1 border-gray-200">
<Image className="h-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={props.name}  priority  height={200} width={200}/>
</div>  
        <div className="h-1/4  border-gray-300 flex items-center justify-between flex-row gap-2  ">
<h1 className=" text-lg  font-sans  text-black">{props.name}</h1>
<button className="underline text-blue-400"><Link  href={`/Pokemon/Details/${id}`}><pre>Info</pre></Link></button>
        </div>

    </div>
}