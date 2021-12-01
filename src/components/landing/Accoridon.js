import React, {useState} from 'react'
import '../../css/faq.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Accoridon(props) {
    const {question, answer} = props;
    const [showAnswer, setShowAnswer] = useState(null)
    return (
        <div className='accoridon'>
            <div className={`question ${showAnswer ? 'q-dark' : 'q-light'} ${showAnswer===null && 'q-light-start'}`} onClick={()=>(showAnswer ? setShowAnswer(false) : setShowAnswer(true)) }>
                <h3>{question}</h3>
                <p>{showAnswer ? <RemoveIcon/> : <AddIcon/> }</p>
            </div>
            {showAnswer!==null && 
                <div className={`answer ${showAnswer ? 'active' : 'inactive' }`}>
                    <p>{answer}</p>
                </div>
            }
        </div>
    )
}

export default Accoridon
