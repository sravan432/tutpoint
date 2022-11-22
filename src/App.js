import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/java/whatisjava"><Button variant="primary">Java</Button>{' '}</Link>
    </div>
  );
}

export default App;
