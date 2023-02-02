
const Course = ({ course }) => {
    

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts}/>
            <Total  parts={course.parts}/>
        </div>
        )
}


const Header = ({name}) => {
    
    
    return (
      <>
        <h1>{name}</h1>
      </>
    )
  }
  
  const Part = ({ name, exercise }) => {
    

    return (
      <>
        <p>
          {name} {exercise}
        </p>  
      </>
    )
  }
  
  const Content = ({ parts }) => {
    
    return (
      <>
        {parts.map((part) => 
            <Part key={part.id} name={part.name} exercise={part.exercises}/>
         )}   
      </>
    )
  }
  
  const Total = ({ parts }) => {
    let sum = 0;
    return (
      <>
        {parts.map((part) => {
            sum += part.exercises   
        })}
        <p>
          Total number of exercises: {sum}
        </p>
      </>
    )
  }

export default Course;