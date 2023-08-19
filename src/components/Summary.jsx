import './Summary.scss'
import data from '../data.json';
import memory from '../assets/images/icon-memory.svg'
import reaction from '../assets/images/icon-reaction.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'

const icons = [reaction, memory, verbal, visual]

export default function Summary() {

    const categories = data.map((cat, i) => {
        return (
            <div key={i} className={`category ${cat.category.toLowerCase()}`}>
                <span className='icon' style={{backgroundImage: `url(${icons[i]})`}}></span>

                <h5 className='category__name'>{cat.category}</h5>
                <h5 className='category__score'>{cat.score} <span className='out-of'>/ 100</span></h5>
            </div>
        )
    })

    return (
        <div className='summary'>
            <h3 className='title'>Summary</h3>

            {categories}

            <button className='summary__cta'>Continue</button>
        </div>
    )
}
