import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <About />
        <WorkExperience />
        <Projects />
        <Education />
      </main>
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400">
          © 2026 Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
