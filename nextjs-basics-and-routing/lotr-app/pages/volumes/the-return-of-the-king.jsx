import React from 'react'
import Link from 'next/link'
import { volumes } from '@/lib/data'

export default function Collection3() {
    return (
        <>
            <Link href='/volumes'>← All Volumes</Link>
            <h1>The Return of the King</h1>
            <p>The Return of the King is the third and final volume of J. R. R. Tolkien's epic adventure The Lord of the Rings. It is preceded by The Fellowship of the Ring and The Two Towers.</p>
            <ul>
                {volumes[2].books.map(book => <li>{book.ordinal}<br />{book.title}</li>)}
            </ul>
            <Link href={'/volumes/the-two-towers'}>← Previous Volume</Link>
        </>
    )
}
