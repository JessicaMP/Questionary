import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey, pink } from '@mui/material/colors';
// import { Link } from 'react-router-dom';
// import Link from '@mui/material/Link';

interface Props {
  title: string;
  image: string;
  id: number;
}

function CardQuestionary(prop: { title: string; image: string; id: number }) {
  return (
    <Card sx={{ maxWidth: 345, background: grey[900] }}>
      <CardMedia component="img" alt={prop.title} height="140" image={prop.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={grey['A100']}>
          {prop.title}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Link href={`questionary/${prop.id}`} underline="none"> */}
        <Button
          href={`questionary/${prop.id}`}
          size="small"
          sx={{ background: pink[900], color: grey['A100'] }}>
          Ver
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
}

export default CardQuestionary;
