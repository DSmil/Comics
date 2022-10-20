
import {React} from 'react';
//import CircularProgress from 'react-native-circular-progress-indicator';
import 'react-circular-progressbar/dist/styles.css';
import './card.scss';
import Popup from './Popup/Popup'


function Card({title, element, release_date, rateing}) {

    return (
        <div className='Card' >
            <div className='upper-container'>
                
                <img src={`${element.thumbnail.path}.${element.thumbnail.extension}`} alt='' height="100px" width="100px"/>
            </div>
            <div className="lower-container">

                <h4 className='title'>{element.title}</h4> 
                {element.prices && element.prices.map((price) => (
                    < h4 className='price'>{price.price} €</h4>   
                ))}
                           
                <Popup element={element}/>
            </div>
        </div>
    )
}

export default Card