import { Grid } from './components/Grid'

function App() {
  const columns = [
    { field: 'Full name' },
    { field: 'Email address' }
  ];

  const rows = [
    { 
      'Full name': "Allistair Vilakazi",
      'Email address': "allistar@mybusinessapp.co.za",
     }
  ];

  return (
    <Grid width={1000} columns={columns} rows={rows}></Grid>
  )
}

export default App
