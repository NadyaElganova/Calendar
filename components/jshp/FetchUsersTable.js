import {useEffect, useState} from 'react';
import Spinner from '../Spinner';
import TableUsers from './TableUsers';

export default function FetchUsersTable(){
    const
        [data, setData]=useState([]),
        [error, setError] = useState(null);
    
    useEffect(()=>{
        async function fetchData(){
            try {
                setError(null);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok) throw new Error('fetch error');                
                setData(await response.json());
            } catch(err) {
                setError(err)
            }
        }
        fetchData();
    }, []);

    const handlerDeleteUser = (id)=>{       
       setData((oldData)=>oldData.filter(element=>element.id!=id));
    }

    if(error) return <h2 style={{color:'red'}}>{error.toString()}</h2>
    if(data) return <TableUsers data={data} deleteUser={handlerDeleteUser}/>
    return <Spinner/>
}