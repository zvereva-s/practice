import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getHumanById } from '../../service/API/people';


function SingleHuman() {
    const [state, setState] = useState({
        item: {},
        loading: false,
        error: null,
    })
    const {id} = useParams();

    useEffect(() => { 
        async function fetchHuman() {
            setState(prevState => ({ ...prevState, loading: true }))
            try {
                const data = await getHumanById(id);
                setState(prevState => ({ ...prevState, item: data, }))
            }
            catch (error) {
                setState(prevState => ({ ...prevState, error: true }))
            }
            finally {
                setState(prevState => ({ ...prevState, loading: false }))
            }
        }
        fetchHuman();
    }, [])

    const { item } = state;
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = item;

    return (
        <div>
            <h2>{name}</h2>
            <p>height: {height}</p>
            <p>mass: {mass}</p>
            <p>hair_color: {hair_color}</p>
            <p>skin_color: {skin_color}</p>
            <p>eye_color: {eye_color}</p>
            <p>birth_year: {birth_year}</p>
            <p>gender:  {gender}</p>

        </div>)
 }
export default SingleHuman;