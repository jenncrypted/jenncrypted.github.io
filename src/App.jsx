import styles from './App.module.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { Projects } from './Components/Projects/Projects';
import { About } from './Components/About/About';
import { Footer } from './Components/Footer/Footer';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Footer />
        </div>
    );
}

export default App;
