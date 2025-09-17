import { Router, Routes, Route} from 'react-router-dom';

import PublicHome from './PublicHome';
import Diploma from './Diploma';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<PublicHome />} />
        <Route path='/diploma' element={<Diploma />} />
      </Routes>
    </div>
  );
}

export default App
