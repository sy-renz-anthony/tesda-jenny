import { Router, Routes, Route} from 'react-router-dom';

import PublicHome from './PublicHome';
import Diploma from './Diploma';
import NewNormal from './NewNormal';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<PublicHome />} />
        <Route path='/diploma' element={<Diploma />} />
        <Route path='/new-normal' element={<NewNormal />} />
      </Routes>
    </div>
  );
}

export default App
