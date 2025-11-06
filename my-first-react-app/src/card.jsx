import './card.css'
import king from './assets/king.png'

function Card(){
    return(
        <div className='cardContainer'>
            <img className='profilePic' src={king}></img>
            <h2>Filip</h2>
            <p>Filip is student right now</p>
        </div>
    )
}

export default Card