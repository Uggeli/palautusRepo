import { useState } from "react"




const Statistics = ({good, neutral, bad}) => {
  const calculateAvg = () =>{
    return (good - bad) / (good + bad + neutral)
  }

  const positive = () =>{
    return (good / (good + bad + neutral)) * 100
  }


  return(
    <>
      <h1>statistics</h1>
      {good | neutral | bad ?(
        <table>
          <StatisticLine name={'good'} stat={good}/>
          <StatisticLine name={'neutral'} stat={neutral}/>
          <StatisticLine name={'bad'} stat={bad}/>
          <StatisticLine name={'avarage'} stat={calculateAvg()}/>
          <StatisticLine name={'positive'} stat={`${positive()}%`}/>
        </table>
      ):(
        <div>No feedback Given</div>
      )}

    </>
  )

}

const StatisticLine = ({name, stat}) => {
  return(
  <tr>
    <td>{name}</td>
    <td>{stat}</td>
  </tr>
  ) 
}


function App() {
  const [Good, setGood] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(Good + 1)}>good</button>
      <button onClick={() => setNeutral(Neutral + 1)}>neutral</button>
      <button onClick={() => setBad(Bad + 1)}>bad</button>
      <Statistics
       good={Good}
       neutral={Neutral}
       bad={Bad}
       />
    </div>
  );
}

export default App;
