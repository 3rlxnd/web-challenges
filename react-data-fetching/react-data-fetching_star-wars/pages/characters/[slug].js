import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";


export default function Character() {
  const router = useRouter();
  const id = router.query.slug;
  const URL = `https://swapi.py4e.com/api/people/${id}`
  const fetcher = (...args) => fetch(...args).then((response) => response.json());
  const { data, error, isLoading } = useSWR(URL, fetcher)
  return (
    <Layout>
      {data &&
        <Card
          id={id}
          name={data.name}
          height={data.height}
          eyeColor={data.eye_color}
          birthYear={data.birth_year}
        />}
      {error && <p>
        Error Loading Data
      </p>}
      {isLoading && <p>
        Loading...
      </p>}
    </Layout>
  );
}
