import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useSmoothScroll} from 'momentumfx';
import { appRoute } from './routes/index';
import { Loading } from './components/index';
import './App.css';
import './index.css';

function App() {

  const [smoothScroll] = useSmoothScroll();

  smoothScroll(0.04, 0.02,4);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          {appRoute.map((route, index) => (<Route key={index} c path={route.path} exact={route.exact} element={route.element} />))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
