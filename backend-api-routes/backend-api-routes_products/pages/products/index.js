import Link from 'next/link';
import React from 'react'
import useSWR from 'swr'

export default function Products() {
    const { data, error, isLoading } = useSWR('/api/products')

    return (<>
        {data && data.map((product, index) => <Link href={`/products/${product.id}`} key={index}>{product.name}</Link>)}
    </>
    )
}
