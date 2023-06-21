import React, {useState} from 'react';
import WeatherPanel from './WeatherPanel';

const Form = ({newLocation}) => {
    const [city, setCity] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;

        newLocation(city);
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <br />
                <div className='input-group mb-3 mx-auto'>
                    <input type="text" className='form-control bg-light text-black' placeholder='City' onChange={(e) => setCity(e.target.value)} />
                    <button className='btn btn-primary input-group-text bg-dark text-white'  type="submit">Search</button>

                </div>

            </form>
        </div>
    );
}

export default Form;