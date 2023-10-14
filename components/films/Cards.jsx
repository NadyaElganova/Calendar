import CardFilm from './CardFilm'

export default function Cards({data}){
    return <>
    {data.map((film)=>(
        <CardFilm key={film.imdbID} film={film}/>
    ))}
</>
}