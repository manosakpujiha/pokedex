import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    const {pokemon, hand, isWinner} = this.props;
    let title = isWinner ? 'Pokedex-win': 'Pokedex-lose';
    return (
      <div className='Pokedex'>
          <h3 className={title}>Hand {hand} {isWinner ? '(Winner)' : '(Loser)'} </h3>
          <div>Total Experience: {this.props.exp}</div>
          <div className='Pokedex-cards'> 
            {pokemon.map((p, index) => <Pokecard pokemon={p} key={index}/>)}
          </div>
      </div>
    )
  }
}
export default Pokedex;