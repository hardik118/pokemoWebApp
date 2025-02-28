export default function Experiance({label, value}:{label: string , value: number}){
    return <div className="h-2/6 rounded-lg border border-gray-200 pl-4 ">
    <h1 className="text-sm text-gray-500 "><pre>{label} </pre> </h1>
    <h1 className="text-2xl text-center font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
      {value} </h1>
        </div>
}