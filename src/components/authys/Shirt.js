import React from 'react'
import Logo from '../../Assets/logo.jpg';
import { FaArrowRight } from "react-icons/fa";
import shirt from "../../Assets/7.jpg"

const Shirt = () => {
    return (
        <div>
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
                <div className='shop'>
                    <img className="shirt"
                        src={shirt} alt="shirt" />
                </div>
                <h1>هابنيس إسطنبول قميص أبيض</h1>
                <div className='text-container'>
                    <h2>trendyol من </h2>
                    <p>المقاسات المناسبة لك</p>
                    <p>الألوان المناسبة لك</p>
                    <p> </p>
                    <p>تفاصيل المنتج</p>
                    <p>النمط: بيسك</p>
                    <p>الطول: عادي</p>
                    <p>طول الكم: أكمام طويلة</p>
                    <p>القالب: مقاس عادي</p>
                    <p>نوع القماش: بوليستر %100</p>
                </div>
            </div>

        </div>
    )
}

export default Shirt