import {Td} from '@chakra-ui/react'

export default function NameColumn({name, username}){
    return <Td>{name}, {username}</Td>;
}