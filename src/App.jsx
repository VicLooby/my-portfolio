// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Sheet  } from '@mui/joy'
// import { ListItem } from '@mui/material'
import LittleLibrary from './components/LittleLibrary'
import CrudProjects from './components/CrudProjects'
import Footer from './components/Footer'
import '@fontsource/roboto/400.css';
import Background from './components/Background'
import Experience from './components/Experience'
import Skills from './components/Skills'
function App() {

  return (
    <>
      <div>
      <Background />
      <Navbar />
      <Sheet sx={{margin:'4rem', backgroundColor: '#000', height: "20%", width: "20%"}}>
      <img
            src="./assets/profilepicture.png"
            srcSet=""
            loading="lazy"
            alt=""
            height="80%"
            width= "80%"
            align="center"
          />
      </Sheet>
      <Sheet sx={{margin:'4rem', backgroundColor: '#000'}}>
<h2>About<em>ME</em></h2>
<p>I’m Vic and I’m an aspiring Junior Software Developer. I’ve been working in Tech for five years in various roles but most recently as a Business Analyst. The bredth of my experience has enabled me to build a strong foundation in teamwork and collaboration, I have extensive experience working across departments to align business needs with technical solutions. My time at Jet2 has honed my communication and problem-solving skills, enabling me to build strong relationships with stakeholders and facilitate productive discussions in dynamic, fast-paced environments.</p>
</Sheet>
<Skills />
<Sheet variant="" sx={{margin:'2rem', backgroundColor: '#000'}}>
<h2>CRUD Projects</h2>
<p>Demonstrated application of CRUD operations in the Books Directory Console App and then built upon these with the  To Do App where we incirporated DOM and OOP elements and then incporated React SPA and API data to make the Cars Application. </p>
<CrudProjects />
</Sheet>

<Sheet variant="" sx={{margin:'4rem', backgroundColor: 'black'}}>
  <LittleLibrary />
</Sheet>
<Experience />

      <Footer />
    </div>
    </>
  )
}

export default App
