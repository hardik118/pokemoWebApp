

import Imagecard from "@/components/ImageCard";
import NameCard from "@/components/Namecard";
import Size from "@/components/SizeCard";
import TypesOfPokemon from "@/components/TypeCard";
import Experiance from "@/components/ExperianceCard";
import StatCard from "@/components/StatChart";
import Ability from "@/components/AbilityCard";
import Moves from "@/components/Moves";
import { PokemonDetails } from "@/app/api/pokemonApi";


  
  export interface PokemonDetail {
    name: string;
    weight: number;
    height: number;
    base_experience: number;
    abilities: {
      ability: {
        name: string;
      };
    }[];
    moves: {
      move: {
        name: string;
      };
    }[];
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
      };
    }[];
  }
  
  export const revalidate = 3600; 
  

export default async function Details({params}: {params:{id: string }}){

    const id=  params.id;

  const response: PokemonDetail | null = await PokemonDetails(id);
  if(!response) return <div className="h-screen flex items-center justify-center">
    <h1>Seems like Api is not reachable!!</h1>
  </div>

    return <div className="h-screen w-full " >
    <div className="h-auto  text-white text-xl p-2 bg-blue-400 ">
        <h1><pre>Pokemon</pre></h1>
    </div>
    <div className="h-[80vh] w-full flex items-center justify-center  ">
            <div className="h-5/6 w-1/2  grid grid-cols-3">
  <div  className="col-span-1  p-1"  >

    <Imagecard id={id}></Imagecard>

    <div className="h-1/2 flex flex-col gap-1 pt-1">

    <NameCard name={response.name}></NameCard>
    
   <div className="h-2/6 w-full flex flex-row gap-1">

   <Size label={'Weight'} value={response.weight}></Size>
   <Size label={'Height'} value={response.height}></Size>

   </div>
    
<TypesOfPokemon PokemonType={response.types}></TypesOfPokemon>

<Experiance value={response.base_experience} label="Base Experiance"></Experiance>
    </div>
    

  </div>
  <div className=" col-span-2 p-1 ">
    <StatCard stats={response.stats} ></StatCard>

    <div className="h-1/2  pt-1  flex flex-col gap-1">
  <Ability ability={response.abilities} ></Ability>


 <Moves moves={response.moves}></Moves>
    </div>

  </div>
  
</div>


        </div>
    </div>
}