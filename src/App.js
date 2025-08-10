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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <Header />
          <main className="pb-12">
            <RandomImage />
            <Search />
            <FavList />
          </main>
          <footer className="flex items-center justify-center border-t border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-6">
            <p className="text-sm text-gray-600">
              &copy; Desarrollado por Sebaavt95 | {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
