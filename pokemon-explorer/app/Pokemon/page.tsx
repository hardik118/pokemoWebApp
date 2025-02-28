import { getPokemonList } from "@/app/api/pokemonApi";
import Header from "@/components/Header";
import PokemonCard from "@/components/pokemonCard";
import  PokemonList from "@/components/PokemonList";

interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
  }
  
 export  interface Pokemon {
    name: string;
    url: string;
  }



export default async  function Home(){
    const pokomons: PokemonListResponse= await getPokemonList(0,21);
    console.log(pokomons);
    if(!pokomons) {
        return <div className="h-screen flex items-center justify-center">
            <h1>Opss some Eroor occured !!</h1>
        </div>
    }
    const pokemonsData: Pokemon[]= pokomons.results
    return <HomePage pokemonsData={pokemonsData}/>

    

}

const  HomePage=({pokemonsData}: {pokemonsData: Pokemon[]})=>{
    return  <div className=" h-screen overflow-y-auto" style={{ backgroundImage: "url('/bg.png')" }}
>
    <div className="flex items-center justify-center ">
    <PokemonList initialPokemons= {pokemonsData}></PokemonList>
    </div>
    </div>

}
