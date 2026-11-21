import './App.css'

function ConditionalRender(props){
  if (props.num % 2 == 1) {
    return <li>Odd</li>
  }
  else {
    return <li>Even</li>
  }
}

function CondtionalRenderList(props) {
  return (
    <ol>
    {
      [...Array(props.num)].map((_, i) => <ConditionalRender key={i} num={i} />)
    }
    </ol>
  )
}

function SameChild (props) {
  return (
    <div>{props.content}</div>
  )
}

function ListLooper() {
  const names = [
    "Naveen", "Eric", "Justin"
  ]

  return (
    <ul>
      {names.map(name => <li key={name}>{name}</li>)}
    </ul>
  )
}

function App() {
  const first_name = "Eric"
  const last_name = "Li"

  const content = "Hello world!"

  const handleClick = () => {
    alert("Hello world!")
  }

  return (
    <div>
      <h2>Using Javascript variables in React</h2>
      {`${first_name} ${last_name}`}
      <h2>Conditonally rendering an odd component </h2>
      <CondtionalRenderList num={5} />
      <h2>Using props</h2>
      <SameChild content={content} />
      <h2>Looping through a list</h2>
      <ListLooper />
      <h2>Calling an event</h2>
      <button onClick={handleClick} > Click me to say hello world! </button>
    </div>
  )
}

export default App
