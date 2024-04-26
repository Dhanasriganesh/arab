import React from 'react'
import Logo from '../../Assets/logo.jpg';
import { FaArrowRight } from "react-icons/fa";
import shirt from "../../Assets/7.jpg"
import but from "../../Assets/Try on button.jpg"
import small from "../../Assets/image (1) 3.jpg"
import smalll from "../../Assets/image (1) 4.png"
import smallll from "../../Assets/image (1) 5.png"
import smalllll from "../../Assets/image (1) 6.png"
import smallllll from "../../Assets/image (1) 7.png"
const Shirt = () => {
    return (
        <div className='shirt-content'>
            <div className='nav'>
                <a href="/home" className='link'>
                    <>الرئيسية</>
                </a>
                <a href="/home" className='link'>

                    <img className="logo"
                        src={Logo} alt="logo" />
                </a>
            </div>
            <div className='arrow'>
                <FaArrowRight />
            </div>
            <div className='text-img'>
                <div className='text-container'>
                    <div className='imghead'>
                        <h2><b>هابنيس إسطنبول قميص أبيض</b></h2>
                           <b>trendyol من </b>
                    </div>
                    <div className='bottom-text'>
                        <div>
                            <p>المقاسات المناسبة لك</p>
                            <p>الألوان المناسبة لك</p>
                            <b><p>تفاصيل المنتج</p></b>
                            <p>النمط: بيسك</p>
                            <p>الطول: عادي</p>
                            <p>طول الكم: أكمام طويلة</p>
                            <p>القالب: مقاس عادي</p>
                            <p>نوع القماش: بوليستر %100</p>
                            
                            {/* <br/> */}
                            
                        </div>
                        
                    </div>
                    <div><img className='but' src={but}/></div>
                    <div className='reg-button'>
                 
                 <div className='but-text'>
                     <button className='register-button'>
                     <a href='/size'>
                     إضافة للسلة
                       </a>
                     </button>
                     <h2>62.99 SAR</h2>
                 </div>
             </div>
                            <br/> 
                             
                </div>

                <div className='shop'>
                    <img className="shirt"
                        src={shirt} alt="shirt" />
                        <div className='small-icons'>
                            <img className='small'
                            src={small}/>
                            <img className='smalll'
                            src={smalll}/>
                            <img className='smallll'
                            src={smallll}/>
                            <img className='smalllll'
                            src={smalllll}/>
                            <img className='smallllll'
                            src={smallllll}/>

                        </div>
                </div> 
                
            </div>


        </div>
    )
}

export default Shirt