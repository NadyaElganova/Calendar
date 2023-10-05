import {Td, Button} from '@chakra-ui/react'

export default function DeleteButton({id, deleteUser}){
    return <Td>
    <Button id={id} colorScheme='red' variant='outline' onClick={(e)=>deleteUser(e.target.id)}>Delete</Button>
    </Td>;
}