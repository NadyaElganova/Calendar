import Link from "next/link";
import style from './Header.module.css'

const pages = [
    {href: '/', title: "Index"},
    {href: '/test-users', title: 'Test fetch'},
    {href: '/users', title: 'Users'},
    {href: '/table', title: 'Table users'},
    {href: '/calendar', title: 'Calendar'},
    {href: '/films', title: 'Films'}
]

export default function Header(){
    return <header className={style.header}>
            <ul>
                {pages.map(({href,title})=>
                <li key={href}>
                <Link href={href}>{title}</Link>
                </li>)}
            </ul>
    </header>
}