export default function Size({label, value}: {label: string, value: number}){
    return <div className="h-full w-1/2  rounded-lg border border-gray-200 ">
    <h1 className="text-sm ml-3 text-gray-500"><pre>Weight</pre> </h1>
    <h1 className="text-2xl text-center font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
        {value}
        </h1>    </div>
}