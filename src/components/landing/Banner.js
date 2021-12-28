import React, {useState} from 'react'
import banner from '../../img/banner.svg';
import '../../css/banner.css';

function Banner() {
    const [scroll, setScroll] = useState(false);
    const setBanner = ()=>{
        if(window.scrollY>0){
            setScroll(true);
        }else{
            setScroll(false);
        }
    }
    window.addEventListener('scroll', setBanner);
    return (
        <>
            {scroll!== true && 
            <div className='banner-div'>
                <img src={banner} alt='banner' />
                <div className='banner-img-div'>
                    <p> cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue 
                    interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt 
                    id aliquet risus ||</p>
                </div>
            </div>
            }
        </>
    )
}

export default Banner
