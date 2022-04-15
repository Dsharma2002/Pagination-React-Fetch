import React from "react";

function PokemonList({ pokemons }) {
    return (
        <div className="Pokemon-list">
            {pokemons.map(p => (
                <div className="pokemon" key={p.name}>
                    {p.name}
                    <br />
                    <a href={p.url}>{p.url}</a>
                </div>
            ))}
        </div>
    );
}

export default PokemonList;