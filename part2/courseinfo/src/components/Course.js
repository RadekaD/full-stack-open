
const Course = ({ course }) => {
    

    return (
        <div>
            <h1>Web Developer Course</h1>
            <Header name={course[0].name} />
            <Content parts={course[0].parts}/>
            <Total  parts={course[0].parts}/>
            <Header name={course[1].name}/>
            <Content parts={course[1].parts}/>
            <Total parts={course[1].parts}/>
        </div>
        )
}


const Header = ({name}) => {
    
    
    return (
      <>
        <h2>{name}</h2>
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

    let sum = parts.reduce((a, b) => a + b.exercises, 0)

    return (
      <>

        <p>
          Total number of exercises: {sum}
        </p>
      </>
    )
  }

export default Course;