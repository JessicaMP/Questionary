import Link from '@mui/material/Link';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CardQuestionary from '../components/CardQuestionary';
import Typography from '@mui/material/Typography';
import { grey, pink } from '@mui/material/colors';

async function fetchData(setIsLoading: any, setData: any) {
  try {
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch('https://run.mocky.io/v3/af371364-86cc-47b5-bbdf-53b974908310', {
      headers
    });
    if (response) {
      const { result } = await response.json();
      setData(result);
      setIsLoading(false);
    }
  } catch (error) {
    console.log('No pudimos hacer la solicitud para obtener la informacion');
  }
}

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([] as any[]);
  useEffect(() => {
    fetchData(setIsLoading, setData);
  }, []);
  console.log({ data });
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (data) {
    return (
      <>
        <header>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            align="center"
            sx={{ color: grey['A100'] }}>
            CUESTIONARIOS
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: grey['A100'] }}>
            Selecciona el que desees responder
          </Typography>
        </header>

        <main>
          <Grid container spacing={{ xs: 1, sm: 2, lg: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            {data.map((item: any, index: number) => (
              <Grid item xs={1} sm={4} md={4} key={index}>
                <Link href="#" color="inherit" underline="none">
                  <CardQuestionary image={item.image} title={item.title} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </main>
      </>
    );
  }
  return <p>No hay informacion</p>;
}
export default Home;
