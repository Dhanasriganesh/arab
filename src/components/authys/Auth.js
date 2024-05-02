import React, { useState, useEffect } from 'react';
import './Authstyles.css'
import Logo from '../../Assets/logo.jpg'
import { AgeContainer, AgeSelectContainer, FormContainer, FormTextInput, StyledFlagSelect, StyledPhoneInput, StyledRegionSelect, LoginSub, AgeRadio, GenderRadio } from '../style/Formstyle'
import RegionDropdown from "react-country-region-selector"
import male from "../../Assets/Group 72.jpg";
import Female from "../../Assets/Group 35.jpg";
import img from "../../Assets/img.jpg";
import { Link } from 'react-router-dom';
import './Physicalchar'

const Auth = () => {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("Country");
    const [region, setRegion] = useState("City");
    const [phno, setPhno] = useState("");
    const [selected, setSelected] = useState(null); // State to track the selected radio button
    const [gender, setGender] = useState(null);

    useEffect(() => {
        setCountry("Country");
        setRegion("City");
        setPhno("");
        setSelected(null);
        setGender(null);
    }, []);

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        // update({ name: newName });
    };

    const handleCountrySelect = (code) => {

        setCountry(code);
        // setPhno(getCountryCallingCode(code));
        // update({ country: code });
    };

    const handleRegionSelect = (val) => {
        setRegion(val);
        // update({ region: val });
    };

    const handlePhoneChange = (data) => {
        setPhno(data);
        // update({ phoneNumber: data });
    };

    const handleAgeSelect = (value) => {
        setSelected(value);
        // update({ age: value });
    };

    const handleGenderSelect = (value) => {
        setGender(value);
        // update({ gender: value });
    };

    return (
        <div className='auth'>
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
                        src={img} alt="img" />
            </div>
            <div className='subernav'>
            <a href="/preferences" className='link'>
                <p>التفضيلات</p>
                </a>
                <a href="/Physicalchar" className='link'>
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
                            <h1>معلوماتي الشخصية</h1>
                        </div>
                        <div className='end'>
                            <FormContainer>
                                <div className='name'>
                                    <FormTextInput
                                        placeholder="سمية"
                                        type='text'
                                        // value={name}
                                        onChange={handleNameChange}
                                        required
                                    />
                                </div>
                                <div className='country'>
                                    <StyledFlagSelect
                                        selected={country}
                                        onSelect={handleCountrySelect}
                                        placeholder="السعودية"
                                        searchable
                                        searchPlaceholder='Select Country'
                                        className='CountrySelect'
                                        fullWidth={true}
                                        required
                                        // selectedSize={16}
                                    />
                                </div>
                                <div className='city'>
                                    <StyledRegionSelect
                                        country={country}
                                        countryValueType="short"
                                        placeholder='City'

                                        onChange={handleRegionSelect}
                                        required
                                    />
                                </div>
                                <div className='phone'>
                                    <StyledPhoneInput
                                        international
                                        onChange={handlePhoneChange}
                                        enableSearch={true}
                                        placeholder="Enter Number with Country Code"
                                        type='number'
                                        countryCodeEditable={true}
                                        required
                                    />
                                </div>
                                <AgeContainer>
                                    <div className='headd'>
                                       <LoginSub><h3>حدد فئتك العمرية</h3> </LoginSub>
                                    </div>
                                    <AgeSelectContainer>
                                        <AgeRadio active={selected === "12 to 14"} onClick={() => handleAgeSelect("12 to 14")} disabled={selected === "12 to 14"}>
                                        من 17 - 30 عام
                                        </AgeRadio>
                                        <AgeRadio active={selected === "15 to 17"} onClick={() => handleAgeSelect("15 to 17")} disabled={selected === "15 to 17"}>
                                        من 12 - 16 عام
                                        </AgeRadio>
                                    </AgeSelectContainer>
                                    <AgeSelectContainer>
                                        <AgeRadio active={selected === "18 to 20"} onClick={() => handleAgeSelect("18 to 20")} disabled={selected === "18 to 20"}>
                                        فوق 45 عام
                                        </AgeRadio>
                                        <AgeRadio active={selected === "21 to 25"} onClick={() => handleAgeSelect("21 to 25")} disabled={selected === "21 to 25"}>
                                        <p>من 31 - 45 عام</p>
                                        </AgeRadio>
                                    </AgeSelectContainer>
                                </AgeContainer>
                                <AgeContainer>
                                    <div className='subhead'>
                                        <LoginSub><h3>هل أنت؟</h3></LoginSub>
                                    </div>
                                    <AgeSelectContainer>
                                        <GenderRadio active={gender === "Male"} onClick={() => handleGenderSelect("Male")} disabled={gender === "Male"}>
                                            {/* <div>Male</div> */}
                                            <div><img className='boxicon' src={male} height={56} alt="Male" /></div>
                                        </GenderRadio>
                                        <GenderRadio active={gender === "Female"} onClick={() => handleGenderSelect("Female")} disabled={gender === "Female"}>
                                            {/* <div>Female</div> */}
                                            <div><img className='boxicon' src={Female} height={56} alt="Female" /></div>
                                        </GenderRadio>
                                    </AgeSelectContainer>
                                </AgeContainer>
                            
                                <div className='reg-button'>
                                <a href='/physicalchar'>
                                    <button className='register-button' >
                                   حفظ التغييرات 
                                    </button>
                                    </a>
                            
                            
                                </div>
                            
                            </FormContainer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth