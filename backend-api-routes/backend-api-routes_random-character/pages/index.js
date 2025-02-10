import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function HomePage() {
  const { data, error, isLoading } = useSWR('/api/random-character', fetcher)
  return <>
  {data && <h1>{data.firstName}</h1>}
  </>;
}
