import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="text-white py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <div className="row justify-content-center">
          
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light h-100 shadow border-light">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">🌐 Portfolio Website</h5>
                <p className="card-text">A personal website built with React and Bootstrap.</p>
                <a
                  href="https://patepayal289.github.io/my-portfolio" // Live Demo link
                  className="btn btn-primary btn-sm me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/patepayal289/my-portfolio" // GitHub link
                  className="btn btn-outline-light btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          {/* <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light h-100 shadow border-light">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">☁️ Weather Vibes</h5>
                <p className="card-text">A React weather app using OpenWeather API and stylish UI.</p>
                <a
                  href="https://patepayal289.github.io/weather-app"
                  className="btn btn-primary btn-sm me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/patepayal289/weather-app"
                  className="btn btn-outline-light btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div> */}

          {/* Project 3 */}
          {/* <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light h-100 shadow border-light">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">📚 Mini Course Platform</h5>
                <p className="card-text">An interactive platform for mini-courses built with React and a backend API.</p>
                <a
                  href="https://patepayal289.github.io/mini-course-platform"
                  className="btn btn-primary btn-sm me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/patepayal289/mini-course-platform"
                  className="btn btn-outline-light btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div> */}

          {/* Project 4 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light h-100 shadow border-light">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">📝 Notes App</h5>
                <p className="card-text">A simple and efficient notes app built with React, Firebase for authentication, and local storage.</p>
                <a
                  href="https://rajptl12.github.io/noteapp/"
                  className="btn btn-primary btn-sm me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/rajptl12/noteapp"
                  className="btn btn-outline-light btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 - Feedback Form */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light h-100 shadow border-light">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">📝 Feedback Form</h5>
                <p className="card-text">A feedback form app built with React, Firebase, and Bootstrap to collect user feedback.</p>
                <a
                  href="https://rajptl12.github.io/feedback-form-"
                  className="btn btn-primary btn-sm me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/rajptl12/feedback-form"
                  className="btn btn-outline-light btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
