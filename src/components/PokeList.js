import React from 'react';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';

class Pokelist extends React.Component {
    render() {
      const { searchPokemon, pokemonFiltered} = this.props

        return(
          <React.Fragment>
            <form onSubmit={(event) => {event.preventDefault()}}>
              <label htmlFor="pokemonName">Busca un pokemon</label>
              <input className="pokemons__selector" type="text" name="pokemonName" onChange={searchPokemon}></input>
            </form>
            <div className="pokemons__container">
            <ol className="pokemons__list">
              {pokemonFiltered.map(pokemon => 
                <li key={pokemon.id} className="pokemons__list__element">
                  <Link to={`/pokemon/${pokemon.id}`}>
                    <Pokemon  pokemon={pokemon}/>
                  </Link>
                </li>
              )}
            </ol>
          </div>
        </React.Fragment>
    
        );
    }
}

export default Pokelist;