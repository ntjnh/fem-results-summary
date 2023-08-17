import React from 'react'
import './App.css'
import Results from './components/Results'
import Summary from './components/Summary'

function App() {
    return (
        <div>
            <main>
                <div>
                    <Results />
                    <Summary />
                </div>
            </main>

            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://natejonah.com" target="_blank" rel="noreferrer">Nate</a>.
            </footer>
        </div>
    )
}

export default App
