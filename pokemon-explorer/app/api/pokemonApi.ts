import axios from "axios";
import https from "https";

const Api= `https://pokeapi.co/api/v2/pokemon`;

export  async function getPokemonList(offset:number , limit: number ) {

    try {
        const response= await axios.get(Api+`?offset=${offset}&limit=${limit}`)
    return response.data;
    } catch (error) {
        console.log(error);
        return { results: [], error: "Failed to fetch Pokémon list" };

        
    }

    

    
}

export async function PokemonDetails(id: string) {
    try {
        const response = await axios.get(Api+`/${id}`);
        console.log(response);
    return response.data;
    } catch (error) {
        console.log(error);
        return null
        


        
    }

    
}