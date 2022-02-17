import './styles.css'
import Pokemon from './Pokemon'

import { useGetTopicQuery } from './services/ikea';

function GetData() {
  const {
    data: pages,
    isError,
    isLoading,
  } = useGetTopicQuery();
  return (
    <>
    <h3>Get Data component</h3>
    { isLoading && <p>Loading IKEA</p>}
    { isError && <p>Error</p>}
    { pages && <p>Arrives data</p>}
    <hr/>
    </>
  );
}

export default function App() {

  return (
    <div className="App">
      <GetData/>
      <Pokemon/>
    </div>
  )
}

