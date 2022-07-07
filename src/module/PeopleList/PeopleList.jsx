import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPeople } from '../../service/API/people';

function PeopleList() {
    const [state, setState] = useState({
        list: [],
        loading: false,
        error: null,
    })

    useEffect(() => {
        setState(prevState =>({...prevState, loading: true}))
        
        async function fetchPeople() {
        try {
            const arr = await getPeople();
            setState(prevState=>({...prevState, list:[...arr]}))
            }
        catch(error) {
            setState(prevState =>({...prevState, error: true}))
         }
        finally {
            setState(prevState => ({...prevState, loading:false,}))
        }
        }
        fetchPeople();
    }, [])

    const { list, loading, error } = state;

    const elements = list.map(({ name }, idx) => <li key={name}><p>{name}</p><Link to={`/people/${idx+1}`}><button type="button">Подробнее...</button></Link></li> )

    return (<>
    {loading && <p>Loading...</p>}
    {error && <p>Something goes wrong...</p>}
    <ul>{elements}</ul>
    </>
        )

 }

export default PeopleList;