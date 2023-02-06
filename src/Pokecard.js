import React, { Component } from 'react';
import './Pokecard.css';
class Pokecard extends Component {
    render() {
        const {id, name, type, base_experience: exp} = this.props.pokemon;
        const digits = (num) => {
            let numStr = Number(num).toString();
            while (numStr.length < 3) {
                numStr = "0" + numStr;
            }
            return numStr;
        };
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digits(id)}.png`;
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{name}</h1>
                <div className='Pokecard-image' ><img src={image} alt={name}/></div>
                
                <div className='Pokecard-data'>TYPE: {type}</div>
                <div className='Pokecard-data'>EXP: {exp}</div>
            </div>
        )
    }
}
export default Pokecard;