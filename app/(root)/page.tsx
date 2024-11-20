import Hello from "../components/Hello";


export default function Home() {
  console.log('What I am? -- SERVER/CLIENT')
  return (
    <>
      <h1 className="text-center text-pretty">Hello</h1>
      <Hello />
    </>
  );
}
