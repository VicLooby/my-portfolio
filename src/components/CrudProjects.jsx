// import { Box } from '@mui/material'
// import React from 'react'
import ConsoleApp from './ConsoleApp'
import ToDoApp from './ToDoApp'
import CarsApp from './CarsApp'
import MonkeyGame from './MonkeyGame'
import Hackathon24 from './Hackathon24'
import { Stack, Sheet  } from '@mui/joy'

const CrudProjects = () => {
return (
  <Sheet variant="" sx={{margin:'2rem', backgroundColor: '#000', textAlign: 'center'}}>
        <h2>Bootcamp <em>Projects</em></h2>
          <p>Demonstrated application of CRUD operations in the Books Directory Console App and then built upon these with the  To Do App where we incirporated DOM and OOP elements and then incporated React SPA and API data to make the Cars Application. </p>

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
  <Hackathon24 />
</Stack>
</Sheet>
)
}
export default CrudProjects
