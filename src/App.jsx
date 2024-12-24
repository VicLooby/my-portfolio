import './App.css'
import Navbar from './components/Navbar'
import { Sheet  } from '@mui/joy'
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
      <Sheet
        className="image-container"
        sx={{
          backgroundColor: '#000',
          height: '20%',
          width: '20%',
        }} >
      <img
        src="./assets/profilepicture.png"
        loading="lazy"
        alt="Profile Picture"
        height="80%"
        width="80%"
        className="profile-image"
      />
      </Sheet>

      <Sheet sx={{margin:'6rem', backgroundColor: '#000', textAlign: 'center'}}>
        <h2>About<em>ME</em></h2>
        <h3>I’m <em>Vic</em> and I’m an aspiring <em>Junior Software Engineer</em></h3>
          <p>I’ve been working in Tech for five years in various roles but most recently as a Business Analyst.</p>
          <p>The bredth of my experience has enabled me to build a strong foundation in teamwork and collaboration, I have extensive experience working across departments to align business needs with technical solutions.</p>
          <p>My time at Jet2 has honed my communication and problem-solving skills, enabling me to build strong relationships with stakeholders and facilitate productive discussions in dynamic, fast-paced environments.</p>
          <p>Through completing a comprehensive software engineering course, I have gained hands-on experience with HTML, CSS, JavaScript as well as API’s, React and GitHub.</p>
          <p>I am passionate about leveraging my combined skills to contribute to creating scalable, user-focused systems that deliver value to both businesses and customers.</p>
          <p>I thrive in collaborative settings, enjoy tackling challenges with a solution-oriented mindset, and am eager to bring my technical expertise and deep understanding to a role where I can grow and make a meaningful impact.</p>
      </Sheet>

      <Sheet variant="" sx={{margin:'6rem', backgroundColor: 'black'}}>
      <Skills />
      </Sheet>

      <Sheet variant="" sx={{margin:'6rem', backgroundColor: 'black'}}>
      <CrudProjects />
      </Sheet>

      <Sheet variant="" sx={{margin:'6rem', backgroundColor: 'black'}}>
      <LittleLibrary />
      </Sheet>

      <Sheet variant="" sx={{margin:'6rem', backgroundColor: 'black'}}>
      <Experience />
      </Sheet>

      <Footer />

      </div>
    </>
  )
}

export default App
