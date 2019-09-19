import React from 'react';

class Pokemon extends React.Component {
    render() {
      const { pokemon } = this.props
        return(
            <div  className="pokemon__card">
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
        )
    }
}

export default Pokemon;