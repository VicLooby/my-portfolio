// import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';

export default function ProductCard() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg'}}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
        <img
            src="./assets/to-do-app.png"
            srcSet=""
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>DOM To Do App
      </CardContent>
      <CardOverflow>
      <Button variant="outlined" size="md"><Link>
        <a href="https://github.com/VicLooby/To-Do-App" target="_blank">GitHub</a>
        </Link></Button>
        <Button variant="outlined" size="md"><Link>
        <a href="https://effervescent-naiad-17d53b.netlify.app/" target="_blank">Website</a>
        </Link></Button>
      </CardOverflow>
    </Card>
  );
}
