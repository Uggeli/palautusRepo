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
  let total = parts.reduce((prev, cur) => prev + cur.exercises, 0)
  return <strong>total of {total} exercises</strong>
}


const Part = ({name, exercises}) =>{
  return <p>{name} {exercises}</p>
}

const Course = ({course}) =>{
  return(
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course;