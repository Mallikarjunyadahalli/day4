import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Mallu Bro</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="badge">CI/CD Demo Project</span>

            <h1>
              Mallu
              <span> Ready for CI</span>
            </h1>

            <p>
              This is a simple React application that you can use to test
              your Continuous Integration pipeline.
            </p>

            <div className="buttons">
              <button
                className="primary-btn"
                onClick={() => setCount(count + 1)}
              >
                Clicked {count} times
              </button>

              <button
                className="secondary-btn"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="status-card">
            <div className="status-header">
              <span className="status-dot"></span>
              <span>Build Status</span>
            </div>

            <h2>All Systems Ready</h2>

            <div className="status-item">
              <span>✓</span>
              React Application
            </div>

            <div className="status-item">
              <span>✓</span>
              Frontend Build
            </div>

            <div className="status-item">
              <span>✓</span>
              Automated Testing
            </div>

            <div className="status-item">
              <span>✓</span>
              CI Pipeline
            </div>
          </div>
        </section>

        <section className="features" id="about">
          <h2>Project Features</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>Fast</h3>
              <p>
                Lightweight React frontend with a simple and clean structure.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">🔧</div>
              <h3>CI Ready</h3>
              <p>
                Perfect for testing automated build, test and deployment
                workflows.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>Deployable</h3>
              <p>
                Build the application and deploy it to your preferred hosting
                platform.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <p>React CI Demo © 2026</p>
        <p>Built for CI/CD practice</p>
      </footer>
    </div>
  );
}

export default App;