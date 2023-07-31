import './App.css'
import Box from '@mui/material/Box'
import ChoreCard from './components/ChoreCard'
import Container from '@mui/material/Container'

function App() {
  let list = [
    { id: '1', name: 'Dishes' },
    { id: '2', name: 'Vacuum' },
    { id: '3', name: 'Laundry' }
  ];

  return (
    <div className="App">
      <Container>
        <Box>
          { list.map((item) => {
            return <ChoreCard sx={{ my: 4 }} chore={item} />;
          }) }
        </Box>
      </Container>
    </div>
  );
}

export default App;
