export default function NameCard({name}: {name: string }){
    return <div className="h-1/6 rounded-lg border border-gray-200  ">
    <h1 className="text-lg font-sans text-center"><pre>{name}</pre> </h1>
        </div>
}