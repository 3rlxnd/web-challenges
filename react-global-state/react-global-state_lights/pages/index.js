import Link from "../components/Link";

export default function HomePage({isOn}) {
  return (
    <div>
      <h1>Home</h1>
      <p>{isOn.filter(light => light.isOn).length} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
