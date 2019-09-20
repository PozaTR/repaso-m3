import React from 'react';
import './App.scss';
import { pokemonService } from './services/pokemonService';
import { Route, Switch, Link } from 'react-router-dom';
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      pokemonFiltered: []
    }

    this.searchPokemon=this.searchPokemon.bind(this);
  }

  componentDidMount() {
    pokemonService()
    .then(data => {
      this.setState({
        pokemons: data,
        pokemonFiltered: data
      })
    });
  }

  searchPokemon(event) {
    event.preventDefault();
    const namePokemon = event.currentTarget.value;
    const pokemonFiltered = this.state.pokemons.filter(pokemon => pokemon.name.indexOf(namePokemon) >= 0);
    this.setState({
      pokemonFiltered: pokemonFiltered
    })
  }



  render() {
    return (
    <div className="App">
      <header>
        <h1 className="pokemons__main-title">Mi lista de pokemons</h1>
      </header>
      <main className="pokemons__main-container">
        <Switch>
          <Route exact path="/" render={routerProps => (
              <PokeList match={routerProps.match} pokemonFiltered={this.state.pokemonFiltered} searchPokemon={this.searchPokemon}/>     
          )}/>
          <Route path="/pokemon/:id" render={routerProps => {
            const pokemonCard = this.state.pokemons.find(pokemon => pokemon.id === parseInt(routerProps.match.params.id))
            return (
              <React.Fragment>
                { pokemonCard ? <Pokemon pokemon={pokemonCard}/> : <div>No he encontrado tu pokemon</div> }
                <Link to="/">Volver al listado de Pokemons</Link>
              </React.Fragment>
          )}} />
        </Switch>
      </main>
    </div>
    );
  }
}

export default App;
