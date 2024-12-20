// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Sheet  } from '@mui/joy'
// import { ListItem } from '@mui/material'
import SocialBanner from './components/SocialBanner'
import BookCategories from './components/BookCategories'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div>
      <Navbar />
      <Sheet sx={{margin:'2rem'}}>
<h2>About Me</h2>
<p>I’m Vic and I’m an aspiring Junior Software Developer. I’ve been working in Tech for five years in various roles but most recently as a Business Analyst. The bredth of my experience has enabled me to build a strong foundation in teamwork and collaboration, I have extensive experience working across departments to align business needs with technical solutions. My time at Jet2 has honed my communication and problem-solving skills, enabling me to build strong relationships with stakeholders and facilitate productive discussions in dynamic, fast-paced environments.</p>
</Sheet>
<Sheet variant="outlined" sx={{margin:'2rem', backgroundColor: '#93857C'}}>
<h2>CRUD Projects</h2>
<p>Demonstrated application of CRUD operations in the Books Directory Console App and then built upon these with the  To Do App where we incirporated DOM and OOP elements and then incporated React SPA and API data to make the Cars Application. </p>
<BookCategories />
</Sheet>

<Sheet variant="outlined" sx={{margin:'2rem', backgroundColor: '#323226'}}>
  <SocialBanner />
</Sheet>

      <Footer />
    </div>
    </>
  )
}

export default App
