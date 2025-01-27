import React from 'react'
import { introduction, volumes } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export default function index() {
  return (
    <>
    <h1>Volumes</h1>
    <p>{introduction}</p>
    <h2>All Volumes</h2>
    <ul>
      {volumes.map(volume => <Link href={`/volumes/${volume.slug}`}>
      <Image width={140} height={230} src={volume.cover} alt={volume.title} />
      {volume.title}
      
      </Link>)}
    </ul>
    </>
  )
}
