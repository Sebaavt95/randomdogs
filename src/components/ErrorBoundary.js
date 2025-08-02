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
        <div className="container mt-5">
          <div className="alert alert-danger text-center">
            <h4>¡Oops! Something went wrong</h4>
            <p>Unexpected error. Please reload the page.</p>
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Reload page
            </button>
          </div>
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
