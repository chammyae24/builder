import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <h1>Hello</h1>
      <Link href="/builder">Builder</Link>
    </main>
  );
}
