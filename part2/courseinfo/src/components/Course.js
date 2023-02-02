
const Course = ({ course }) => {
    

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts}/>
            {/* <Total  parts={course.parts}/> */}
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
  
  const Total = (props) => {
    return (
      <>
        <p>
          Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
        </p>
      </>
    )
  }

export default Course;