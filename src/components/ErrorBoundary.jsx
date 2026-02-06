import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-solace-bg p-6 text-center">
                    <div className="glass-panel p-10 max-w-lg border-red-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
                        <p className="text-solace-text-secondary mb-6">
                            We encountered an unexpected error. This might be due to a browser privacy setting or extension blocking necessary resources.
                        </p>
                        <div className="bg-black/30 p-4 rounded text-left text-xs text-red-300 font-mono mb-6 overflow-auto max-h-32">
                            {this.state.error && this.state.error.toString()}
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="glass-button px-6 py-3 rounded-full hover:bg-solace-neon-blue/20 hover:shadow-neon-blue"
                        >
                            Reload Application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
