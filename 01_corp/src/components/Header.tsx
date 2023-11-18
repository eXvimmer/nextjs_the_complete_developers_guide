import Link from "next/link";

function Header() {
  return (
    <div className="absolute z-10 w-full text-white">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8">
        <Link href="/" className="text-3xl font-bold">
          Cloud Corp
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
