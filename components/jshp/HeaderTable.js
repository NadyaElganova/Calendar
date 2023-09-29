import { Thead, Tr, Th } from '@chakra-ui/react'


export default function TableHeader() {
    return (
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Adress</Th>
          <Th>Phone</Th>
          <Th>Website</Th>
          <Th>Company</Th>
        </Tr>
      </Thead>
    );
  }