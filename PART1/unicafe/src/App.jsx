import { useState } from 'react'


const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ( {text, onClick} ) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ( {text, value} ) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics = (props) => {
  const [good, neutral, bad] = props.feedback;
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all * 100) + " %";

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value ={good} />
        <StatisticLine text='neutral' value ={neutral} />
        <StatisticLine text='bad' value ={bad} />
        <StatisticLine text='all' value ={all} />
        <StatisticLine text='average' value ={average} />
        <StatisticLine text='positive' value ={positive} />
      </tbody>
    </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  return (
    <>
      <Header text='give feedback' />
      <Button text='good' onClick={ () => {setGood(good + 1)} }/>
      <Button text='neutral' onClick={ () => {setNeutral(neutral + 1)} }/>
      <Button text='bad' onClick={ () => {setBad(bad + 1)} }/>

      <Header text='statistics' />
      <Statistics feedback={[good, neutral, bad]} />
    </>
  )
}

export default App
