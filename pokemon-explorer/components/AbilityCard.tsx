interface pokemonAbility{
  ability: {
    name: string;
  };
}

export default function Ability({ability}: {ability: pokemonAbility[]}){
    return   <div className="h-1/2 w-full flex-col   rounded-lg border border-gray-200 flex   "
    
    >
<h1 className="ml-3"><pre>Abilities</pre></h1>
  <div className="flex flex-row gap-1 h-full pb-2 pl-1 pr-1 pt-1">
  {
ability.map(abilit=>(
  <div key={abilit.ability.name} className="h-full  border-gray-300 border-2 text-black flex items-center transition transform duration-300 hover:-translate-y-2 justify-center text-xl rounded-lg " 
  style={{ width: `${100 / ability.length}%`, backgroundImage: "url('/ability.png')"}}

  >
{abilit.ability.name.toUpperCase()}
  </div>
))
    }
  </div>

    </div>
}