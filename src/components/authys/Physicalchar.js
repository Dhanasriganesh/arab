import './Physical.css'
import React, { useState, useEffect } from 'react';
import { LoginHeading, LoginSub } from '../style/Formstyle.js';
import { AgeContainer, FormContainer, HeightDropdown } from '../style/Formstyle.js';
import { RadioColorOption, RadioContainer, RadioOptionImage, RadioOptionText, RadioOptionsCharacteristics } from '../style/Formstyle.js';
import { bodyTypeOptions, skinColorOptions, hairColorOptions } from '../data/data.js'; // Importing options
import pinkCheck from "../../Assets/pinkCheck.png";
import Logo from '../../Assets/logo.jpg';
import imge from "../../Assets/img.jpg" ;
import { Link } from 'react-router-dom';

function PhysicalCharacteristics({ updateUserInfo, userInfo }) 
{
  const [selected, setSelected] = useState(null); // State to track the selected body type
  const [selectedSkin, setSelectedSkin] = useState(null); // State to track the selected skin color
  const [selectedHair, setSelectedHair] = useState(null); // State to track the selected hair color

  useEffect(() => {
    // setSelected(userInfo.bodyType || null);
    // setSelected(userInfo.height || null);
    // setSelectedSkin(userInfo.SkinColor || null);
    // setSelectedHair(userInfo.HairColor || null);
    // if (typeof userInfo.height === 'undefined') {
    //   updateUserInfo({ height: '' });
    // }
  }, [userInfo]);

  const handleBodyTypeSelect = (value) => {
    setSelected(value);

  };

  const handleSkinColorSelect = (value) => {
    setSelectedSkin(value);
    // updateUserInfo({ SkinColor: value });
  };

  const handleHairColorSelect = (value) => {
    setSelectedHair(value);
    // updateUserInfo({ HairColor: value });
  };

  const handleHeightSelect = (e) => {
    // updateUserInfo({ height: e.target.value });
  };

  const handleWeightSelect = (e) => {
    // updateUserInfo({ weight: e.target.value });
  };

  return (
    <div>
      <div className='nav'>
        <a href="/" className='link'>
          <>الرئيسية</>
        </a>
        <a href="/" className='link'>

          <img className="logo"
            src={Logo} alt="logo" />
        </a>
      </div>
      <div className='subnav'>
        <p>سمية الحربي</p>
        <img className="iconimg"
            src={imge} alt="imge" />
      </div>
      <div className='subernav'>
      <a href="/preferences" className='link'>
      <p>التفضيلات</p>
        </a>
        <a href="/physicalchar" className='link'>
          <p> التفضيلات الجسدية</p>
        </a>
        <a href="/" className='link'>
          <p className='tab-active'>معلوماتي الشخصية</p>
        </a>
      </div>

      <div className='main-content'>
        <div className='auth-box'>
          <div className='auth-content'>
            <div className='heading'>
              <h1>الخصائص الجسدية</h1>
            </div>
            <FormContainer style={{ marginBottom: "2vh" }}>
              <HeightDropdown
                type='number'
                placeholder='طولك'
                onChange={handleHeightSelect}
                required
              />
              <HeightDropdown
                type='number'
                placeholder='وزنك'
                onChange={handleWeightSelect}
                required
              />
            </FormContainer>
            <div className='characteristics-sty'>
              <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                <LoginSub><b>شكل جسمك</b></LoginSub>
                <div className='body-type'>
                  <RadioContainer>
                    {bodyTypeOptions.map(option => (
                      <RadioOptionsCharacteristics key={option.value} active={selected === option.value} onClick={() => handleBodyTypeSelect(option.value)} disabled={selected === option.value}>
                        {selected === option.value && <img src={pinkCheck} style={{ marginBottom: "-13px", alignSelf: "flex-start", zIndex: "1", paddingLeft: "5px" }} />}
                        <RadioOptionImage src={option.image} />
                        <RadioOptionText>{option.label}</RadioOptionText>
                      </RadioOptionsCharacteristics>
                    ))}
                  </RadioContainer>
                </div>
              </AgeContainer>
              <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                <LoginSub><b>لون بشرتك</b></LoginSub>
                <div className='body-type'>
                  <RadioContainer>
                    {skinColorOptions.map(color => (
                      <RadioColorOption key={color} color={color} active={selectedSkin === color} onClick={() => handleSkinColorSelect(color)} disabled={selectedSkin === color}>
                        {selectedSkin === color && <img src={pinkCheck} style={{ paddingTop: 5, paddingLeft: 5 }} />}
                      </RadioColorOption>
                    ))}
                  </RadioContainer>
                </div>
              </AgeContainer>
              <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                <LoginSub><b>لون شعرك
</b></LoginSub>
                <div className='body-type'>
                  <RadioContainer>
                    {hairColorOptions.map(color => (
                      <RadioColorOption key={color} color={color} active={selectedHair === color} onClick={() => handleHairColorSelect(color)} disabled={selectedHair === color}>
                        {selectedHair === color && <img src={pinkCheck} style={{ paddingTop: 5, paddingLeft: 5 }} />}
                      </RadioColorOption>
                    ))}
                  </RadioContainer>
                </div>
                <div className='reg-button'>
                <a href='/preferences'>
                    <button className='register-button' name=''>
                   
                    حفظ التغييرات
                    
                    </button>
                    </a>
                </div>
              </AgeContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalCharacteristics;
