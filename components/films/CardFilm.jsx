import {
    Card,
    Image,
    Text,
    CardBody, 
    CardFooter,
    Stack,
    Divider,
    Heading,
    ButtonGroup,
    Button
  } from '@chakra-ui/react';

export default function CardFilm({film}){
const { Title, Year, ImdbID,  Type, Poster } = film;

    return <>
    <Card maxW='sm'>
        <CardBody>
            <Image
            src={Poster}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{Title}</Heading>
            <Text>Janre:{Type}</Text>
            <Text>Year:{Year}</Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
            Detail
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    </>
}