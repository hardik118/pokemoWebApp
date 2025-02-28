
const typeColors: Record<string, string> = {
    grass: "bg-green-500",
    poison: "bg-purple-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    flying: "bg-blue-300",
    bug: "bg-lime-600",
    normal: "bg-gray-400",
    ground: "bg-yellow-700",
    fairy: "bg-pink-300",
    fighting: "bg-orange-700",
    psychic: "bg-pink-500",
    rock: "bg-gray-700",
    ghost: "bg-indigo-600",
    ice: "bg-cyan-300",
    dragon: "bg-indigo-800",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
  };

  interface TypesOfPokemon{
      slot: number;
      type: {
        name: string;
      };
    
  }

export default function TypesOfPokemon({PokemonType}:{PokemonType: TypesOfPokemon[]}){
  
    return <div className="h-1/6 pt-2 pb-1 w-full rounded-md  flex flex-row">
    {
        PokemonType.map((type)=>(
            <div
            key={type.slot}
            className={`${typeColors[type.type.name] || "bg-gray-300"} text-sm pb-2 font-semibold text-white rounded-lg text-center `}
            style={{ width: `${100 / PokemonType.length}%` }}
          >{type.type.name}</div>
        ))
    }
    
    </div>
}