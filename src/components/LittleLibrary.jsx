import { Stack, Sheet, Button } from '@mui/joy';
import Link from '@mui/joy/Link';


const LittleLibrary = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ margin: '40px' }}>
      <Sheet
        sx={{
          backgroundColor: 'black',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h2>The <em>Little Library</em> Project</h2>

        <h2>Then and <em>Now</em></h2>
        <p>When I finished the Introduction to Web Development course with Code First Girls, I built the first iteration of The Little Library to exhibit the skills I learnt and to build on them.
        The foundation of the site was constructed using HTML and CSS, with Bootstrap elements to elevate the UI.</p>
        <p>Since finishing The Jump Bootcamp, I developed the second iteration of The Little Library. This time I used React and Vite as the project framework and built upon this using MUI library for
        the UI elements.</p>
        <p>I’ve enjoyed the project, redesigning the site and working to produce the same views with more efficient code. Although I’m still working on finishing the second iteration, already I’ve
        experienced the tangible benefit of a Single Page Application and developing re-useable code.</p>

        <p>
          I wanted to challenge myself, after completing this Bootcamp, to remake the website
          using the new knowledge and skills I have learned.
        </p>
      </Sheet>

      <Stack direction="row" spacing={2}>
        {/* First Image and Buttons */}
        <Sheet
          variant=""
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            padding: '20px',
            border: '2px solid pink', // Adds pink border
            borderRadius: '8px', // Optional: Rounds corners
          }}
        >
          <img src="./assets/tll-v1.png" alt="Little Library Version 1" style={{ maxWidth: '100%' }} />
          <Stack direction="row" spacing={1} sx={{ marginTop: '10px' }}>
            <Button
              variant="outlined"
              size="sm"
              sx={{
                color: 'pink',
                borderColor: 'pink',
                textTransform: 'none',
                fontSize: '14px',
                width: 'fit-content',
                '&:hover': {
                  backgroundColor: 'pink',
                  color: 'white',
                },
              }}>
              <Link>
              <a href="https://github.com/VicLooby/the-little-library-v1"
              target="_blank">GitHub</a>
            </Link>
            </Button>
            <Button
              variant="outlined"
              size="sm"
              sx={{
                color: 'pink',
                borderColor: 'pink',
                textTransform: 'none',
                fontSize: '14px',
                width: 'fit-content',
                '&:hover': {
                  backgroundColor: 'pink',
                  color: 'white',
                },
              }}>
              <Link>
              <a href="https://dapper-crostata-f42a71.netlify.app/"
              target="_blank"
            >Website</a>
              </Link>
            </Button>
          </Stack>
        </Sheet>

        {/* Second Image and Buttons */}
        <Sheet
          variant=""
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            padding: '20px',
            border: '2px solid pink', // Adds pink border
            borderRadius: '8px', // Optional: Rounds corners
          }}
        >
          <img src="./assets/tll-v2.png" alt="Little Library Version 2" style={{ maxWidth: '100%' }} />
          <Stack direction="row" spacing={1} sx={{ marginTop: '10px' }}>
            <Button
              variant="outlined"
              size="sm"
              sx={{
                color: 'pink',
                borderColor: 'pink',
                textTransform: 'none',
                fontSize: '14px',
                width: 'fit-content',
                '&:hover': {
                  backgroundColor: 'pink',
                  color: 'white',
                },
              }}>
              <Link>
              <a href="https://github.com/VicLooby/the-little-library-2312"
              target="_blank"
            >GitHub </a></Link>
            </Button>
            <Button
              variant="outlined"
              size="sm"
              sx={{
                color: 'pink',
                borderColor: 'pink',
                textTransform: 'none',
                fontSize: '14px',
                width: 'fit-content',
                '&:hover': {
                  backgroundColor: 'pink',
                  color: 'white',
                },
              }}>
              <Link>
              <a href="https://visionary-medovik-389818.netlify.app/"
              target="_blank"
            >Website </a>
              </Link>
            </Button>
          </Stack>
        </Sheet>
      </Stack>
    </Stack>
  );
};

export default LittleLibrary;
