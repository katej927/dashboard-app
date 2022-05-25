import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Dashboard from './dashboard';
import AdManagement from './adManagement';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='adManagement' element={<AdManagement />} />
        <Route path='*' element={<div>404</div>} />
      </Route>
    </Routes>
  );
};

export default App;
