import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex  items-center justify-center  bg-gray-200 w-full flex-col">
      <h1 className="text-xl font-semibold">Opps You landed here Let Go find Pokemons </h1>
      <div className="flex  items-center justify-center  w-1/2 border-2 rounded-2xl border-gray-500 h-1/2">
<Link href={`/Pokemon`}><button className="text-blue-500   text-6xl underline" > Go</button></Link>

      </div>
    </div>
  );
}
