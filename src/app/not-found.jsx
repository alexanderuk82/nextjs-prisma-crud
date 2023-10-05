import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex h-screen justify-center items-center">
      <div className="text-center flex flex-col gap-7">
        <h1 className=" text-6xl">Not Found 😔</h1>
        <p>
          This page does not exist. Please, go back to the home page and try
          again.
        </p>
        <Link className='text-2xl bg-sky-700 py-5 hover:bg-blue-700 rounded font-semibold text-slate-900 '
        href="/">Go To Main Page</Link>
      </div>
    </section>
  );
}
