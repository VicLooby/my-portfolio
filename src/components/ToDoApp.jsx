// import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';

export default function ProductCard() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg', backgroundColor: 'black', border: '2px solid pink' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src="./assets/to-do-app.png"
            loading="lazy"
            alt="To-Do App"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ color: 'pink' }}>DOM To Do App</CardContent>
      <CardOverflow
        sx={{
          display: 'flex', // Flexbox layout
          justifyContent: 'center', // Aligns buttons to the center
          alignItems: 'center', // Ensures vertical alignment
          gap: '10px', // Adds space between buttons
          padding: '8px 0', // Optional: Adjust padding for spacing
        }}
      >
        <Button
          variant="outlined"
          size="sm"
          sx={{
            color: 'pink',
            borderColor: 'pink',
            textTransform: 'none', // Removes uppercase transformation
            fontSize: '14px', // Smaller font
            width: 'fit-content', // Adjusts button width
            '&:hover': {
              backgroundColor: 'pink',
              color: 'white',
            },
          }}>
<Link><a href="https://github.com/VicLooby/To-Do-App"
          target="_blank"
        >GitHub </a></Link>
        </Button>
        <Button
          variant="outlined"
          size="sm"
          sx={{
            color: 'pink',
            borderColor: 'pink',
            textTransform: 'none', // Removes uppercase transformation
            fontSize: '14px', // Smaller font
            width: 'fit-content', // Adjusts button width
            '&:hover': {
              backgroundColor: 'pink',
              color: 'white',
            },
          }}>
          <Link><a href="https://effervescent-naiad-17d53b.netlify.app/"
          target="_blank"> Website</a></Link>
        </Button>
      </CardOverflow>
    </Card>
  );
}
