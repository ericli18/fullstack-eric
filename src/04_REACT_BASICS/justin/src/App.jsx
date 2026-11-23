import "./App.css";

function Parity({ index }) {
  return (
    <>
      {index % 2 == 0 ? (
        <li>Even</li>
      ) : (
        <li>Odd</li>
      )}
    </>
  );
}

function ParityList({ length }) {
  return (
    <ol aria-label="Parity List">
      {
        [...Array(length)].map((_, i) => <Parity key={i} index={i} />)
      }
    </ol>
  )
}

function Title({ title }) {
  return <h2>{title}</h2>
}

function PassProps({ description }) {
  return <p>{description}</p>
}

function App() {
  const name = "Justin Le";

  const alert_world = () => {
    alert("Hello world!")
  }

  const list = ["Hello", "my", "name", "is", "Justin"]

  return (
    <main>
      <h1 className="sr-only"></h1>
      <Title title="Using Javascript variables in React" />
      <p>{name}</p>
      <Title title="Conditionally rendering an odd component"></Title>
      <ParityList length={15} />
      <Title title="Using props" />
      <PassProps description="Hello world!" />
      <Title title="Looping through a list" />
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))
        }
      </ul>
      <Title title="Calling an event" />
      <button onClick={alert_world}>Click me to say hello world!</button>
    </main>
  )
}

export default App
