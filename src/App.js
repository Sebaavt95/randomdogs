import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import RandomImage from './components/RandomImage';
import Search from './components/Search';
import FavList from './components/FavList';

const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="main">
          <div className="container">
            <div className="row">
              <Header />
            </div>
            <RandomImage />
            <Search />
            <FavList />
            <div className="row mt-4 d-flex justify-content-center">
              <p className="text-muted m-0">
                &copy; Desarrollado por Sebaavt95 | {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
