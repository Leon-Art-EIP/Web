import { Test } from "../components/test";

export default function Home(): JSX.Element {
  let n = 0;
  let arr = ["test"];

  let result = n + arr.length;

  return (
    <>
      <h1>You're using Next.js</h1>
      <a href="/register" className="underline text-blue-400">
        Register page
      </a>
      <Test r={result} />
    </>
  );
}
