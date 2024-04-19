import React from 'react'
import Logo from '../../Assets/logo.jpg'
import "./Homemainsty.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Blue from "../../Assets/4.jpg"
import yellow from "../../Assets/1.jpg"
import Bag from "../../Assets/2.jpg"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Doll from "../../Assets/3.jpg"
import Skirt from "../../Assets/6.jpg"
import frock from "../../Assets/5.jpg"
import shirt from "../../Assets/7.jpg"
const Homemain = () => {
  return (
    <div>

      <div className='nav'>
        <div className='icons'>
          <a href="/" className='link'>
            <FaUser />
          </a>
          <FaShoppingCart />

        </div>
        المتجر
        الأكثر شيوعًا
        مقترحات لك
        {/* <a href="/home" className='link'>
                    <>الرئيسية</>
                </a> */}
        <a href="/home" className='link'>

          <img className="logo"
            src={Logo} alt="logo" />
        </a>
      </div>
      <div className='dress-content'>
        <h1>مقترحات مخصصة لك</h1>
        <p>مقترحات ملابس متنوعة ومرتبة تمامًا حسب تفضيلاتك، لتجربة أسلوبك
          <p></p>الجديد بكل سهولة وابتكار!</p>

        <div className='images'>
          <FaArrowLeft />
          <img className="Yellow"
            src={yellow} alt="yellow" />
          <img className="Blue"
            src={Blue} alt="blue" />
          <img className="Bag"
            src={Bag} alt="bag" />
          <FaArrowRight />
        </div>
        <h1>...</h1>

      </div>
      <div className='footer'>
        <h1>الأكثر شيوعاً</h1>
        <p>مقترحات ملابس شائعة تتناسب مع أذواقك، لتجربة أسلوبك</p>
        <p>بكل أناقة وجمال!</p>
      </div>
      <div className='sub-footer'>
        
        <div className='img-text'>
          <img className="doll"
              src={Doll} alt="doll"
              />
              <p>تيشيرت بقصة يوكسي وطبعة سنوبي</p>
              <p>Splash من </p>
              <div className='sar'>
                <p>التفاصيل</p>
                <p>34.00 SAR</p>
              </div>
        </div>
        <div  className='img-text'>
            <img className="skirt"
            src={Skirt} alt="skirt" />
           
              <p>فستان أزرق مزين بأكمام واسعة</p>
              <p>REDTAG من </p>
              <div className='sar'>
                  <p>التفاصيل</p>
                  <p>69.00 SAR</p>
                </div>
            </div>
            <div className='img-text'>
            <img className="frock"
            src={frock} alt="frock" />
           
              <p>فستان مضلع باللون الأسود للنساء</p>
              <p>REDTAG من </p>
              <div className='sar'>
                    <p>التفاصيل</p>
                    <p>69.00 SAR</p>
                  </div>
            </div>
            <a href='/shirt'>
            <div className='img-text'>
              <img className="shirt"
              src={shirt} alt="shirt" />
              <p>هاينيس إسطنبول قميص أبيض</p>
              <p>trendyol من </p>
              <div className='sar'>
                      <p>التفاصيل</p>
                      <p>62.99 SAR</p>
                    </div>
            </div>
            </a>

      </div>
    </div>
  )
}

export default Homemain