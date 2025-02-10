import { useRouter } from "next/router";
import useSWR from "swr";

export default function Product() {
    const router = useRouter()
    const { id } = router.query
    const { data, error, isLoading } = useSWR(`/api/products/${id}`)
    
    return <>
    {data && <div>
        <h2>{data.name}</h2>
        </div>}
    </>
}