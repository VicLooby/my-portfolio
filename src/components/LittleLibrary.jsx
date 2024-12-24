import { Stack, Sheet, Button } from '@mui/joy';

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
        <p>
          I completed the first Little Library website (on the left) after completing an intro to
          web development course with Code First Girls
        </p>
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
              }}
              href="https://github.com/VicLooby/the-little-library-v1"
              target="_blank"
            >
              GitHub
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
              }}
              href="https://dapper-crostata-f42a71.netlify.app/"
              target="_blank"
            >
              Website
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
              }}
              href="https://github.com/VicLooby/the-little-library-2312"
              target="_blank"
            >
              GitHub
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
              }}
              href="https://visionary-medovik-389818.netlify.app/"
              target="_blank"
            >
              Website
            </Button>
          </Stack>
        </Sheet>
      </Stack>
    </Stack>
  );
};

export default LittleLibrary;
