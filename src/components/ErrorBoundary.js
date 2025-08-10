import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError)
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden animate-slide-up">
            <div className="bg-red-500 text-white p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-exclamation-triangle text-2xl"></i>
              </div>
              <h2 className="text-xl font-bold text-white">
                ¡Oops! Algo salió mal
              </h2>
            </div>

            <div className="p-6">
              <p className="text-gray-600 text-center mb-6">
                Ocurrió un error inesperado. Intentá nuevamente.
              </p>
              <div className="space-y-3">
                <button
                  className="w-full btn-secondary flex items-center justify-center space-x-2"
                  onClick={() => window.location.reload()}
                >
                  <i className="fas fa-refresh"></i>
                  Recargar página
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
