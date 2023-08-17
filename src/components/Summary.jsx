import './Summary.scss'

export default function Summary() {
    return (
        <div className='summary'>
            <h3 className='title'>Summary</h3>

            <div className='category light-red'>
                <h5 className='category__name'>Reaction</h5>
                <h5 className='category__score'>80 <span className='out-of'>/ 100</span></h5>
            </div>

            <div className='category orangey-yellow'>
                <h5 className='category__name'>Memory</h5>
                <h5 className='category__score'>92 <span className='out-of'>/ 100</span></h5>
            </div>

            <div className='category green-teal'>
                <h5 className='category__name'>Verbal</h5>
                <h5 className='category__score'>61 <span className='out-of'>/ 100</span></h5>
            </div>

            <div className='category cobalt-blue'>
                <h5 className='category__name'>Visual</h5>
                <h5 className='category__score'>72 <span className='out-of'>/ 100</span></h5>
            </div>

            <button className='summary__cta'>Continue</button>
        </div>
    )
}
