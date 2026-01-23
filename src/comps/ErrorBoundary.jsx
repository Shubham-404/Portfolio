import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="h-screen w-full flex flex-col items-center justify-center bg-indigo-950 text-white p-5 text-center font-ub">
                    <h1 className="text-4xl mb-4">Oops! 😵</h1>
                    <p className="text-xl mb-6">I think I broke the internet... or just this page.</p>
                    <p className="text-lg opacity-80 italic">"It works on my machine!"</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full font-bold transition-all"
                    >
                        Refresh to Fix My Mess
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
