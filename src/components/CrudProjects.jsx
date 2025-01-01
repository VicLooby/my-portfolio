// import { Box } from '@mui/material'
// import React from 'react'
import ConsoleApp from './ConsoleApp'
import ToDoApp from './ToDoApp'
import CarsApp from './CarsApp'
import MonkeyGame from './MonkeyGame'
import { Stack, Sheet  } from '@mui/joy'

const CrudProjects = () => {
return (
  <Sheet variant="" sx={{margin:'2rem', backgroundColor: '#000', textAlign: 'center'}}>
        <h2>Bootcamp <em>Projects</em></h2>
          <p>I have demonstrated application of CRUD operations in the Books Directory Console App and then built upon these with the To Do App DOM and Object Oriented Programming
          elements have been incorporated and then built upon these again in the Car’s Application using React’s Single Page Application and API data.</p>
          <p>The card flipping game was a fun excersie in trying to combine HTML, CSS and vanilla JavaScript elements to create a playable game.</p>

<Stack
  spacing={{ xs: 1, sm: 2 }}
  direction="row"
  useFlexGap
  sx={{ flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '2rem',  }}
>
  <ConsoleApp />
  <ToDoApp />
  <CarsApp />
  <MonkeyGame />

</Stack>
</Sheet>
)
}
export default CrudProjects
