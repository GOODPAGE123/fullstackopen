import React from 'react'

const Header = (props) => {
   return <h2>{props.course.name}</h2>
}


const Content = (props) => {
   return <p>{props.part.name} {props.part.exercises}</p>
}

const Total = (props) => {
   return <p>total of {props.course.parts.reduce((sum, part)=>{return sum + part.exercises},0 )} exercises</p>
}

const Course = (props) => {
   return (
      <div>
         {props.courses.map(course=>
               <div key={course.id}>
                  <Header course={course} />
                  {course.parts.map(part=>
                     <Content key={part.id} part={part} />
                  ) }
                  <b><Total course={course} /></b>
               </div>)
            }
      </div>
   )
}

export default Course
