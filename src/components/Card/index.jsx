import './style.css';

export function Card({name, time}){
    return(
        <div className='container'>
            <div className='card'>
                <p>{name}</p>
                <small>{time}</small>
            </div>

        </div>
    )
}

