import Link from '@mui/material/Link';
import { useState, useEffect } from 'react';
import { isNamedExports } from 'typescript';
import Grid from '@mui/material/Grid';

async function fetchData(setIsLoading: any, setData: any) {
  try {
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch('https://run.mocky.io/v3/0ba7658d-a566-4b29-889d-935fb5071492', {
      headers
    });
    if (response) {
      const { result } = await response.json();
      console.log({ result });
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
          <h2>INICIO</h2>
        </header>

        <main>
          <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data.map((item: any, index: number) => (
              <Link href="#" color="inherit" underline="none" key={index}>
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <h3>{item.title}</h3>
                  <figure>
                    <img src={item.image} alt={item.name} />
                  </figure>
                </Grid>
              </Link>
            ))}
          </Grid>
        </main>
      </>
    );
  }
  return <p>No hay informacion</p>;
}
export default Home;
