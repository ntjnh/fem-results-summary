import './Results.scss'

export default function Results() {
    return (
        <div className='results'>
            <h3 className='title'>Your Result</h3>

            <div className='score-circle'>
                <h1 className='score'>76<span className='score-out-of'>of 100</span></h1>
            </div>

            <h4 className='feedback-title'>Great</h4>
            <p className='feedback'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}
