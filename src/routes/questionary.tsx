import { useParams } from 'react-router-dom';

function Questionary() {
  let { id } = useParams();
  return (
    <>
      <main>
        <header>
          <h1 className="text-center">Video Cuestionario</h1>
          <p> {id}</p>
        </header>
      </main>
    </>
  );
}
export default Questionary;
