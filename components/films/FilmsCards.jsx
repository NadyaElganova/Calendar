import { ChakraProvider, Input, Grid, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Cards from './Cards';

export default function FilmsCards(){
    const
        [value, setValue]=useState(),
        [data, setData]=useState([]),
        [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                setError(null);
                if(!value) return;
                const response = await fetch("https://omdbapi.com/?apikey=a2b07930&s="+value);
                if(!response.ok) throw new Error('error');
                const jsonData = await response.json();
                setData(jsonData.Search);
            }catch(err){
                setError(err)
            }
        }
        fetchData();
    }, [value]);


    return <>
    <ChakraProvider>
    <InputGroup mt={5} p={5}>
        <InputLeftAddon children='Name film' />
        <Input pr='4.5rem' onInput={(event) => setValue(event.target.value)} />
    </InputGroup>
    {error &&
        <h2 style={{color:'red'}}>{error.toString()}</h2>}
    {data && 
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        <Cards data={data}/> 
        </Grid>}        
    </ChakraProvider>
    </>
}