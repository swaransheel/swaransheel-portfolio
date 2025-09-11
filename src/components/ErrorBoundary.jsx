import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Model Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full w-full bg-gray-100 border-2 border-gray-300">
          <div className="text-center p-4">
            <h3 className="text-lg font-bold text-red-600 mb-2">
              3D Model Loading Error
            </h3>
            <p className="text-sm text-gray-600">
              Failed to load 3D model. Please check console for details.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm border-2 border-gray-400"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
