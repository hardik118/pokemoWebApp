"use client";

import { Pokemon } from "@/app/Pokemon/page";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header({ pokemon }: { pokemon: Pokemon[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
 

  // Filter Pokémon based on search query
  const filteredPokemon = searchQuery
    ? pokemon.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="h-auto top-0  w-full p-2 bg-blue-400 flex flex-row justify-between relative">
      <h1 className="text-xl text-white">
        <pre>Pokemon</pre>
      </h1>

      
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} 
          className="bg-white text-sm text-center border border-blue-400 focus:ring outline-none focus:ring-blue-300 focus:border-blue-300 rounded-md ml-2 placeholder:ml-2 p-1"
          placeholder="Find the Pokemon"
        />

        {showSuggestions && filteredPokemon.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-blue-400 rounded-md  ml-2 mt-1 max-h-40 overflow-y-auto shadow-lg">
            {filteredPokemon.map((p) => (
              <li
                key={p.name}
                onClick={() => {
                  setSearchQuery(p.name);
                  setShowSuggestions(false);
                  const id= p.url.split('/').slice(-2,-1)[0];
                  router.push(`Pokemon/Details/${id}`)
                  // Redirect or do something with selected Pokémon
                }}
                className="px-3 py-1 cursor-pointer hover:bg-blue-100"
              >
                {p.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
