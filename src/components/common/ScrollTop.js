import React, {useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../../css/scroll.css';

function ScrollTop() {
    const [showScrollBtn, setshowScrollBtn] = useState(false)
    const showBtn = ()=>{
        if(window.scrollY>86){
            setshowScrollBtn(true);
        }else{
            setshowScrollBtn(false);
        }
    }
    window.addEventListener('scroll', showBtn);
    return (
        <>
            {showScrollBtn && 
                <div className='scroll-top' onClick={()=>window.scrollTo(0, 0)}>
                    <ArrowUpwardIcon fontSize="large" />
                </div>
            }
        </>
    )
}

export default ScrollTop
