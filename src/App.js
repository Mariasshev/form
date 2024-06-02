import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { AuthorizationForm } from './Components/Form';

function App() {
  return (
    <div className="container p-3">
      <div className='row justify-content-center'>
        <AuthorizationForm/>
      </div>
    </div>
  );
}

export default App;
