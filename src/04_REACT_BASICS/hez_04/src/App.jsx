import './App.css'

function UsingProps(props){
    return(
      <div>
        {props.sentence}
      </div>
    )
}

function OddEven(props){
  if(props.num %2 >= 1){
    return(
      <div>
       Odd
      </div>
    )
  }
  return(
    <div>
      Even
    </div>
  )
}

function LoopingList(props){
  const array = ['Hez', 'Charlie', 'Pluto', 'Venus', 'Gary'];

  return(
    <ul>
      {array.map(name => <li key={name}>{name}</li>)}
    </ul>
  )

}

function App() {
  const first = 'Hezekiah';
  const last = 'Gitenyi';

  const setence = 'Hello World';
  const odd = 1;
  const even = 2;

  return (
    <div>
      <h1>Using Javascript variables in React </h1>
      <p>
        {`${first} ${last}`}
      </p>

      <h1>Conditonally rendering an odd component</h1>
      <OddEven num={odd}/>
      <OddEven num={even}/>
      <OddEven num={odd}/>
      <OddEven num={even}/>

      <h1>Using Props</h1>
      <UsingProps sentence={setence}/>

      <h1>Looping Through a List</h1>
      <LoopingList/>
    </div>
  )
}

export default App
