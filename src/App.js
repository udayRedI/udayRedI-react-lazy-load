import { Suspense, lazy } from 'react';
import './App.css';
// import { Header } from './Header';
const Header = lazy(() => import('./Header').then((module) => ({ default: module.Header })));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header</div>}>
        <Header />
      </Suspense>
      <div>
        <h1>Body</h1>
      </div>
    </div>
  );
}

export default App;
