import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-main text-center">
        <p
          className="font-display font-semibold text-black-border"
          style={{ fontSize: 'clamp(120px, 20vw, 240px)', letterSpacing: '-0.05em', lineHeight: 1, WebkitTextStroke: '1px #1e1e1e', color: 'transparent' }}
        >
          404
        </p>
        <h1 className="heading-md mt-4 mb-6">Page not found</h1>
        <p className="body-lg mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    </main>
  );
}
