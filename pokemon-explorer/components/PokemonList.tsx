"use client"


import { getPokemonList } from "@/app/api/pokemonApi";
import { useEffect, useRef, useState } from "react"
import { Pokemon } from "@/app/Pokemon/page";
import PokemonCard from "./pokemonCard";
import Header from "./Header";



export default  function PokemonList({initialPokemons}: {initialPokemons: Pokemon[]}) {
    const[pokemon, setPokemons]= useState<Pokemon[]>(()=>initialPokemons);
    const [offset, setOffset]= useState(21);
    const[loading, setloading]= useState(false);
    const loadMore = useRef<HTMLDivElement | null>(null);


   

        useEffect(()=>{
            const observer= new IntersectionObserver((entries)=>{
                const entry= entries[0];
                if(entry.isIntersecting && !loading){
                    getMorePokemonData();
                }

            })
            if(loadMore.current){
                observer.observe(loadMore.current);
            }
            return ()=>{
                if(loadMore.current){
                    observer.unobserve(loadMore.current);

                }
            }

        });
    
        
    

    // getting more data on scroll
    const getMorePokemonData= async ()=>{
        if(loading) return;
     setloading(true);
     const newPokemons= await getPokemonList(offset, 21);
     setPokemons((prev)=>[...prev, ...newPokemons.results]);
     setOffset(offset + 21);
     setloading(false);



    }



    return <div className="w-full  items-center justify-center flex flex-col  ">
       <Header pokemon= {pokemon}></Header>

        <div className="grid grid-cols-3 gap-3 mt-5 ">

{pokemon.map((p, index) => (
       <PokemonCard key={index} name={p.name} id={p.url} />
     ))
 }
     <div ref={loadMore} className=" h-5  bg-transparent  " >
     </div>

   </div>
    </div>
    
}