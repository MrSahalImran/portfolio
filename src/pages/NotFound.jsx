import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "404 — Page Not Found | Sahal Imran";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a href="/" className="cosmic-button">
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
