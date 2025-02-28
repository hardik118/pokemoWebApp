const MovesColors: Record <number, string>={
    0: 'border-red-400',
    1: 'border-orange-400',
    2: 'border-purple-400',
    3: 'border-green-400',
    4: 'border-blue-400',
    5: 'border-yellow-400',
    6: 'border-cyan-400',

  }

  interface PokemonMoves{
    move: {
      name: string;
    };
  }

export default function Moves({moves}: {moves: PokemonMoves[]}){
  let NewMoves;
  if(moves.length>6) NewMoves= moves.slice(0,4);
  else NewMoves= moves.slice(0,2);

   

    return    <div className="h-1/2 w-full p-1  text-md rounded-lg border border-gray-200 flex flex-col  ">
    <h1 className="ml-3 text-lg"><pre>Moves</pre></h1>

<div className="flex flex-row pb-2 pt-3 pr-1 pl-1 gap-2 text-xl h-full ">
{
NewMoves.map((move, index)=>(
<div className={`h-full flex items-center justify-center shadow-gray-300 transition transform duration-300 hover:scale-150 hover:z-50  hover:shadow-gray-300 hover:shadow-md hover: bg-  border-2 border-gray-200 ${MovesColors[index]} rounded-lg `}
style={{ width: `${100 / NewMoves.length}%`}}

>
<div className="pl-1 pr-1 w-full text-xs font-semibold bg-white   text-center rounded-lg">{move.move.name.toUpperCase().split('-')} </div>
</div>
))
}
</div>

</div>
}