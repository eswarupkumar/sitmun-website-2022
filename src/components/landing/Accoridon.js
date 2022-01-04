import React, {useState} from 'react'
import '../../css/faq.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Accoridon(props) {
    const {question, answer} = props;
    const [showAnswer, setShowAnswer] = useState(null)
    return (
        <div className='accoridon'>
            <div className={`question ${showAnswer ? 'q-dark' : 'q-light'} ${showAnswer===null && 'q-light-start'}`} onClick={()=>(showAnswer ? setShowAnswer(false) : setShowAnswer(true)) }>
                <h3>{question}</h3>
                {/* <p>{showAnswer ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }</p> */}
                <p><KeyboardArrowDownIcon/></p>
            </div>
            {showAnswer!==null && 
                <div className={`answer ${showAnswer ? 'faqactive' : 'inactive' }`}>
                    <p>{answer}</p>
                </div>
            }
        </div>
    )
}

export default Accoridon
