import React from "react";

function PokemonList({ pokemons }) {
    return (
        <div className="Pokemon-list">
            {pokemons.map(p => (
                <div className="pokemon" key={p.name}>
                    {p.name}
                    <br />
                    {p.url}
                </div>
            ))}
        </div>
    );
}

export default PokemonList;