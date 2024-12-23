import { Stack, Sheet, Button, Link } from '@mui/joy';

const SocialBanner = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ margin: '40px' }}>
      <Sheet
        sx={{
          backgroundColor: 'hsla(39, 90%, 64%, 1)',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h2>The Little Library Case Study</h2>
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
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#A0A38E',
            padding: '20px',
          }}
        >
          <img src="./assets/tll-v1.png" alt="Little Library Version 1" style={{ maxWidth: '100%' }} />
          <Stack direction="row" spacing={1} sx={{ marginTop: '10px' }}>
            <Button variant="outlined" size="md">
              <Link href="https://github.com/VicLooby/the-little-library-v1" target="_blank">
                GitHub
              </Link>
            </Button>
            <Button variant="outlined" size="md">
              <Link href="https://dapper-crostata-f42a71.netlify.app/" target="_blank">
                Website
              </Link>
            </Button>
          </Stack>
        </Sheet>

        {/* Second Image and Buttons */}
        <Sheet
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#A0A38E',
            padding: '20px',
          }}
        >
          <img src="./assets/tll-v2.png" alt="Little Library Version 2" style={{ maxWidth: '100%' }} />
          <Stack direction="row" spacing={1} sx={{ marginTop: '10px' }}>
            <Button variant="outlined" size="md">
              <Link href="https://github.com/VicLooby/the-little-library-2312" target="_blank">
                GitHub
              </Link>
            </Button>
            <Button variant="outlined" size="md">
              <Link href="https://visionary-medovik-389818.netlify.app/" target="_blank">
                Website
              </Link>
            </Button>
          </Stack>
        </Sheet>
      </Stack>
    </Stack>
  );
};

export default SocialBanner;
