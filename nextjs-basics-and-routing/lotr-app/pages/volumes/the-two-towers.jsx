import React from 'react'
import Link from 'next/link'
import { volumes } from '@/lib/data'

export default function Collection2() {
    return (
        <>
            <Link href='/volumes'>← All Volumes</Link>
            <h1>The Two Towers</h1>
            <p>The Two Towers is the second volume of J. R. R. Tolkien's epic adventure The Lord of the Rings. It is preceded by The Fellowship of the Ring and followed by The Return of the King.</p>
            <ul>
                {volumes[1].books.map(book => <li>{book.ordinal}<br />{book.title}</li>)}
            </ul>
            <Link href={'/volumes/the-fellowship-of-the-ring'}>← Previous Volume</Link>
            <Link href={'/volumes/the-return-of-the-king'}>Next Volume →</Link>
        </>
    )
}
