import React from 'react'


const Header = ({course}) =>{
  return (
    <h1>
      {course}
    </h1>
  )
}

const Content = ({parts}) =>{
  let key = 0
  return (
    <div>
      {parts.map((i) => 
      <Part key={++key}  name={i.name} exercises={i.exercises}/>)}
    </div>
  )
}

const Total = ({parts}) =>{
  let sum = 0
  parts.map((i) => sum += i.exercises)
  return <p>Number of exercises {sum}</p>
}

const Part = ({name, exercises}) =>{
  return <p>{name} {exercises}</p>

}

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts:[
      {
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }]
    }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App