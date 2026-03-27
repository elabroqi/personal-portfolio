import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Career } from './pages/Career';
import { Projects } from './pages/Projects';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
