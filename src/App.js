import { RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import { router } from './routes/Router/Router';

function App() {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
