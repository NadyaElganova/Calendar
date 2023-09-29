import TableHeader from "./HeaderTable";
import TableRow from "./TableRow";
import {
    ChakraProvider,
    Table,
    Tbody,
    TableContainer,
    Heading
  } from '@chakra-ui/react'

export default function TableUsers({data}){
        return <>
            <ChakraProvider>
                    <Heading as='h3' size='lg'>Users:</Heading>
                    <TableContainer>
                        <Table size='sm' variant='simple'>
                        <TableHeader/>
                        <Tbody>
                            {data.map((user) => (
                                <TableRow key={user.id} user={user}/>
                            ))}
                        </Tbody>
                    </Table>
                    </TableContainer>
                </ChakraProvider>
            </>
}