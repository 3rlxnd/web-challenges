import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter()
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)].slug;
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(volume => <li>
          <Link href={`/volumes/${volume.slug}`}>
            {volume.title}
          </Link>
        </li>)}
      </ul>
      <button onClick={() => router.push(`/volumes/${getRandomElement(volumes)}`)}>Show Random</button>
    </>
  );
}
