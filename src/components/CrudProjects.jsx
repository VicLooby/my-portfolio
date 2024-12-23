// import { Box } from '@mui/material'
// import React from 'react'
import ConsoleApp from './ConsoleApp'
import ToDoApp from './ToDoApp'
import CarsApp from './CarsApp'
import { Stack  } from '@mui/joy'

const CrudProjects = () => {
return (
<Stack
  spacing={{ xs: 1, sm: 2 }}
  direction="row"
  useFlexGap
  sx={{ flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '2rem',  }}
>
  <ConsoleApp />
  <ToDoApp />
  <CarsApp />
</Stack>
)
}
export default CrudProjects
