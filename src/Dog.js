import { Component } from "react";
import img from './text.JPG'
import './Dog.css'

class Dog extends Component {
    render () {
        return (
            <div className="Dog">
                <h1>Dog</h1>
                <img className="Dog-img" src={img} alt={img}/>
            </div>
        )
    }
}
export default Dog;