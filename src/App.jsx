import Results from './components/Results'
import Summary from './components/Summary'

function App() {
    return (
        <div className='App'>
            <main className='container'>
                <div className='card-container'>
                    <Results />
                    <Summary />
                </div>
            </main>

            <footer className='attribution'>
                <div>
                    Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.<br />
                    Coded by <a href='https://natejonah.com' target='_blank' rel='noreferrer'>Nate</a>.
                </div>
            </footer>
        </div>
    )
}

export default App
