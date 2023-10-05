import Link from 'next/link';

function NavBar() {
  return (
    <nav className="bg-slate-900 ">
      <div className="container mx-auto flex justify-between items-center py-8">
        <Link href="/">
          <h3 className="font-bold text-3xl">Next Crud</h3>
        </Link>
        <ul className="flex gap-9 text-lg">
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-400">
              New
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-400">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
