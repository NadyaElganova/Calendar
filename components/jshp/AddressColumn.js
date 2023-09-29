import {Td} from '@chakra-ui/react'

export default function AddressColumn({street, suite, city, zipcode}){
    return <Td>{street}, {suite}, {city}, {zipcode}</Td>;
}