import './App.css'

function CondtionalRender() {
  const odd = 1;

  let OddComponent;

  if(odd % 2 == 1) {
    return <div>Odd</div>
  }
  else {
    return <div>Even</div>
  }

  return (
    <>
      <OddComponent />
    </>
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
      {`${first_name} ${last_name}`}
      <CondtionalRender />
      <SameChild content={content} />
      <ListLooper />
      <button onClick={handleClick} > Click me to say hello world! </button>
    </div>
  )
}

export default App
