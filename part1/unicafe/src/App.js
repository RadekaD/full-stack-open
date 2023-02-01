import { useState } from 'react';



const Button = ( {handleClick, message} ) => {
  return (
    <button onClick={handleClick}>
      {message}
    </button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <h1>
        Give Feedback
      </h1>
      <Button handleClick={goodClick} message={"good"}/>
      <Button handleClick={neutralClick} message={"neutral"}/>
      <Button handleClick={badClick} message={"bad"}/>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )

}




export default App;
