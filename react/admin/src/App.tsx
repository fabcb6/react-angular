import './App.css';
import { CreatePizzaForm } from './components/CreatePizzaForm';
import { Header } from './components/Header';

function App() {
  return (
    <div className="container mt-5">
      <Header />
      <CreatePizzaForm />
    </div>
  );
}

export default App;
