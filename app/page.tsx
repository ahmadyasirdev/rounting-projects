import Link from "next/link";

export default function Home() {
  return (
<>
<p><Link href="/">Home</Link></p>
<p><Link href="/about">About</Link></p>
<p><Link href="contect">Contect</Link></p>
<p><Link href="services">Services</Link></p>
</>
  );
}
