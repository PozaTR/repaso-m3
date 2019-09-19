import React from 'react';
import './App.scss';
import { pokemonService } from './services/pokemonService';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    pokemonService()
    .then(data => {
      this.setState({
        pokemons: data
      }, () => console.log(data))
    });
  }

  render() {
    return (
    <div className="App">
      <h1 className="pokemons__main-title">Mi lista de pokemons</h1>
      <div className="pokemons__container">
      <ol className="pokemons__list">
        {this.state.pokemons.map(pokemon => 
          <li key={pokemon.id} className="pokemons__list__element"> 
          <div className="pokemon__card">
          <img className="pokemon__image" src={pokemon.url} alt={pokemon.name}/>
            <h2 className="pokemon__name" >{pokemon.name}</h2>
            <ul >
              {pokemon.types.map((type, index) => 
                <li className="pokemon__types" key={`${pokemon.id}-${index}`}>
                <p className="pokemon__types__element">{type}</p>
                </li>
              )}
            </ul>
          </div>
          </li>
        )}
      </ol>
      </div>
    </div>
    );
  }
}

export default App;
