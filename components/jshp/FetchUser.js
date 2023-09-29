import {useEffect, useState} from 'react';
import OneUser from './OneUser';
import Spinner from '../Spinner';

export default function FetchUser({id}){
    const
        [user, setUser]=useState(null),
        [error, setError] = useState(null);
    
    useEffect(()=>{
        async function f(){
            try {
                setError(null);
                const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
                if(!res.ok) throw new Error('fetch error');                
                setUser(await res.json());
            } catch(err) {
                setError(err)
            }
        }
        f();
    }, [id]);

    // useEffect(
    //     ()=>{
    //         fetch('https://jsonplaceholder.typicode.com/users/'+id)
    //         .then(res=>res.json())
    //         .then(obj=>setUser(obj))
    //         .catch(err=>setError(err))
    //     },
    //     []
    // );
    if(error) return <h2 style={{color:'red'}}>{error.toString()}</h2>
    if(user) return <OneUser user={user}/>
    return <Spinner/>

}