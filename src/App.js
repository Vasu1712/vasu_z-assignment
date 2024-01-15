import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChipsArray from './routes/Chip';

function App() {
  return (
    <div className='w-screen h-screen font-poppins bg-app-bg'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/chips'
            element=<ChipsArray />
          />

          <Route
            path='*'
            element=<Navigate to='/chips' />
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;