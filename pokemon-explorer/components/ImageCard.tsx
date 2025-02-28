export default function Imagecard({id}: {id: string}){
    return <div className="bg-white border border-gray-200 rounded-md h-1/2  w-full">
    <img className="p-4" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} 
    alt=""
    
    />
        </div>
}