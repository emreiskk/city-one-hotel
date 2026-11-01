import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-hotel-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md p-6 rounded-2xl bg-hotel-900 border border-gold-500/30">
            <h2 className="font-serif text-xl font-bold text-gold-400 mb-2">City One Hotel</h2>
            <p className="text-sm text-slate-300 mb-4">Bir bileşen yüklenirken hata oluştu.</p>
            <pre className="text-xs text-rose-400 bg-black/60 p-3 rounded-lg text-left overflow-x-auto mb-4">
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-lg bg-gold-500 text-hotel-950 font-semibold text-xs cursor-pointer hover:bg-gold-400"
            >
              Yeniden Yükle
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

