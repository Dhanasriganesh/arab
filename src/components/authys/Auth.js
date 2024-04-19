import React, { useState, useEffect } from 'react';
import './Authstyles.css'
import Logo from '../../Assets/logo.jpg'
import { AgeContainer, AgeSelectContainer, FormContainer, FormTextInput, StyledFlagSelect, StyledPhoneInput, StyledRegionSelect, LoginSub, AgeRadio, GenderRadio } from '../style/Formstyle'
import RegionDropdown from "react-country-region-selector"
import male from "../../Assets/Male.png";
import Female from "../../Assets/Female.png";
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
                <p>Image</p>
            </div>
            <div className='subernav'>
            <a href="/preferences" className='link'>
                <p>الخصائص</p>
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
                        {/* 
                        <div className='boxes'>
                        <form className='form-content'>
                            <input
                            className='input-box'
                            name=''
                            placeholder='Name'
                            />
                                            <StyledFlagSelect
                    selected={country}
                    onSelect={handleCountrySelect}
                    placeholder="Country"
                    searchable
                    searchPlaceholder='Select Country'
                    className='CountrySelect'
                    fullWidth={true}
                    selectedSize={16}
                />
                             <input
                            name=''
                            className='input-box'
                            placeholder='Region'
                            type=''
                            />
                             <input
                            name=''
                            className='input-box'
                            placeholder='Number'
                            type='number'
                            />
                            <h3>Select Your Age</h3>
                            <div>
                                <div className='age-gap'>
                                    <div className='age'>
                                        <p className='age-selection'>Age 17-30</p>
                                        <p className='age-selection'>Age 16-12</p>
                                        </div>
                                        <div className='age-sub'>
                                            <p className='age-selection'>Above 45</p>
                                            <p className='age-selection'>Age 31-45</p>
                                        </div>
                                                                </div>
                                </div>
                            
                            <h3>Gender</h3>
                            <div className='gender'>
                                <p>Male
                                </p>
                                <p>
                                    Female
                                </p>
                            </div>
                            <div>
                                <button className='register-button' name=''>
                                    Register
                                </button>
                            </div>
                        </form>
                        </div> */}
                        <div className='heading'>
                            <h1>معلوماتي الشخصية</h1>
                        </div>
                        <FormContainer>
                            <FormTextInput
                                placeholder="Tell us your name"
                                type='text'
                                // value={name}
                                onChange={handleNameChange}
                                required
                            />
                            <StyledFlagSelect
                                selected={country}
                                onSelect={handleCountrySelect}
                                placeholder="Country"
                                searchable
                                searchPlaceholder='Select Country'
                                className='CountrySelect'
                                fullWidth={true}
                                // selectedSize={16}
                            />
                            <StyledRegionSelect
                                country={country}
                                countryValueType="short"
                                placeholder='City'
                                onChange={handleRegionSelect}
                            />
                            <StyledPhoneInput
                                international

                                onChange={handlePhoneChange}
                                enableSearch={true}
                                placeholder="Enter Number with Country Code"
                                countryCodeEditable={true}
                            />

                            <AgeContainer>
                                <LoginSub>Select Your Age Group</LoginSub>
                                <AgeSelectContainer>
                                    <AgeRadio active={selected === "12 to 14"} onClick={() => handleAgeSelect("12 to 14")} disabled={selected === "12 to 14"}>
                                       Age 17 to 30
                                    </AgeRadio>
                                    <AgeRadio active={selected === "15 to 17"} onClick={() => handleAgeSelect("15 to 17")} disabled={selected === "15 to 17"}>
                                       Age 12 to 16
                                    </AgeRadio>
                                </AgeSelectContainer>
                                <AgeSelectContainer>
                                    <AgeRadio active={selected === "18 to 20"} onClick={() => handleAgeSelect("18 to 20")} disabled={selected === "18 to 20"}>
                                       Age 31 to 45
                                    </AgeRadio>
                                    <AgeRadio active={selected === "21 to 25"} onClick={() => handleAgeSelect("21 to 25")} disabled={selected === "21 to 25"}>
                                       Age Above 45
                                    </AgeRadio>
                                </AgeSelectContainer>
                            </AgeContainer>
                            <AgeContainer>
                                <LoginSub>Are You</LoginSub>
                                <AgeSelectContainer>
                                    <GenderRadio active={gender === "Male"} onClick={() => handleGenderSelect("Male")} disabled={gender === "Male"}>
                                        <div>Male</div>
                                        <div><img src={male} height={56} alt="Male" /></div>
                                    </GenderRadio>
                                    <GenderRadio active={gender === "Female"} onClick={() => handleGenderSelect("Female")} disabled={gender === "Female"}>
                                        <div>Female</div>
                                        <div><img src={Female} height={56} alt="Female" /></div>
                                    </GenderRadio>
                                </AgeSelectContainer>
                            </AgeContainer>
                            
                            <div className='reg-button'>
                            
                                <button className='register-button' >
                                <a href='/physicalchar'>Next  </a>
                                </button>
                                
                                
                            </div>
                            
                        </FormContainer>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth