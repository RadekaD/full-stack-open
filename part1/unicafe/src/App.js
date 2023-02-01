import { useState } from 'react';



const Button = ( {handleClick, message} ) => {
  return (
    <button onClick={handleClick}>
      {message}
    </button>
  )
}

const StatisticsLine = ({ text, num }) => {
  return (
    <p>{text} {num}</p>
  )
}


const Statistics = ({ good, neutral, bad, scores }) => {

  
  //Adds all the elements of an array and then divides by the length of the array, 
  // 0 is there so that reduce doesn't return an "empty array" error

  const getAverage = array => array.reduce((a, b) => a + b, 0) / array.length;

  let average = getAverage(scores)
  let allScores = good + neutral + bad;
  let positivePercentage = good / allScores * 100;

  if (allScores === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <h3>No feedback given</h3>
      </>
    )
  } else {

    return (
      <>
      <h2>Statistics</h2>
	  <table>
		<tbody>
			<StatisticsLine text="Good:" num={good} />
			<StatisticsLine text="Neutral:" num={neutral} />
			<StatisticsLine text="Bad:" num={bad} />
			<StatisticsLine text="All:" num={allScores} />
			<StatisticsLine text="Average:" num={average} />
			<StatisticsLine text="Positive:" num={positivePercentage} />
		</tbody>	
	  </table>
        
      </>
    )
  }

 
  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [scores, setScores] = useState([])

  const goodClick = () => {
    setGood(good + 1)
    setScores(scores.concat(1))
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
    setScores(scores.concat(0))
  }

  const badClick = () => {
    setBad(bad + 1)
    setScores(scores.concat(-1))
  }
  

  //The code below has an error where if the good and bad score match, it displays the string specified below

  return (
    <div>
      <h1>
        Give Feedback
      </h1>
      <Button handleClick={goodClick} message={"good"}/>
      <Button handleClick={neutralClick} message={"neutral"}/>
      <Button handleClick={badClick} message={"bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad} scores={scores}/>


    </div>
  )

}




export default App;
