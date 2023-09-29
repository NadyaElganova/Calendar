import FetchUser from "./FetchUser";
import OneUser from "./OneUser";
import {useState} from 'react';

export default function Users({propsUsers}) {
    const
        [stateUsers, setStateUsers] = useState([]);


    return <>
        <button onClick={evt=>setStateUsers(stateUsers
            .concat(1+propsUsers.length+stateUsers.length)
        )}>addUser</button>
        {propsUsers.map(user => <OneUser user={user}/>)}
        {stateUsers.map(id=><FetchUser id={id}/>)}
    </>
}