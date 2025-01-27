import React from 'react'
import Link from 'next/link'
import { volumes } from '@/lib/data'

export default function Collection1() {
    return (
        <>
            <Link href='/volumes'>← All Volumes</Link>
            <h1>The Fellowship of the Ring</h1>
            <p>The Fellowship of the Ring is the first volume of J. R. R. Tolkien's epic adventure The Lord of the Rings. It is followed by The Two Towers and The Return of the King.</p>
            <ul>
                {volumes[0].books.map(book => <li>{book.ordinal}<br />{book.title}</li>)}
            </ul>
            <Link href={'/volumes/the-two-towers'}>Next Volume →</Link>
        </>
    )
}
