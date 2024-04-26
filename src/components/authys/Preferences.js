import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { LoginHeading, LoginSub } from '../style/Formstyle.js';
import { AgeContainer, AstheticCaroseul, DisLike, Like } from '../style/Formstyle.js';
import { ColorOptionImage, PartImage, PartsOptions, PatternOptionImage, PatternsOptions, RadioContainer, RadioOptionText } from '../style/Formstyle.js';
import { patternData, colorsData, RevealData } from '../data/data.js';
import { TopData, BottomData, FootData } from '../data/data.js';
import { SliderContainer, SliderImageContainer, SliderImage, SliderContainer1 } from '../style/Formstyle.js';
import { LikeContainer } from '../style/Formstyle.js';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { LikePreferencesData } from '../data/data.js';
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import pinkCheck from "../../Assets/pinkCheck.png"
import Logo from '../../Assets/logo.jpg';
import imges from '../../Assets/img.jpg';

function Preferences({ updateUserInfo, userInfo }) {
    const [likedItems, setLikedItems] = useState([]);
    const [dislikedItems, setDislikedItems] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedParts, setSelectedParts] = useState([]);
    const [selectedTops, setSelectedTops] = useState([]);
    const [selectedBottom, setSelectedBottom] = useState([]);
    const [selectedFootwear, setSelectedFootwear] = useState([]);
    const handleLikeSelect = (item) => {
        const isLiked = likedItems.includes(item);
        const isDisliked = dislikedItems.includes(item);
        if (!isLiked) {
            const newLiked = [...likedItems, item];
            const newDisliked = dislikedItems.filter(name => name !== item);
            setLikedItems(newLiked);
            setDislikedItems(newDisliked);
        } else {
            const newLiked = likedItems.filter(name => name !== item);
            setLikedItems(newLiked);
        }
    };

    const handleDislikeSelect = (item) => {
        const isDisliked = dislikedItems.includes(item);
        const isLiked = likedItems.includes(item);

        if (!isDisliked) {
            const newDisliked = [...dislikedItems, item];
            const newLiked = likedItems.filter(name => name !== item);
            setDislikedItems(newDisliked);
            setLikedItems(newLiked);
 } else {
         const newDisliked = dislikedItems.filter(name => name !== item);
            setDislikedItems(newDisliked);    }
    };
    const handlePatternSelect = (patternName) => {};

    const handleColorSelect = (colorName) => {
        const updatedColors = selectedColors.includes(colorName)
            ? selectedColors.filter(name => name !== colorName)
            : [...selectedColors, colorName];
        setSelectedColors(updatedColors);
    };

    const handlePartSelect = (partName) => {
        const updatedParts = selectedParts.includes(partName)
            ? selectedParts.filter(name => name !== partName)
            : [...selectedParts, partName];
        setSelectedParts(updatedParts);
    };

    const handleTopSelect = (TopName) => {
        const updatedTops = selectedTops.includes(TopName)
            ? selectedTops.filter(name => name !== TopName)
            : [...selectedTops, TopName];
        setSelectedTops(updatedTops);
    };

    const handleBottomSelect = (BottomName) => {
        const updatedBottoms = selectedBottom.includes(BottomName)
            ? selectedBottom.filter(name => name !== BottomName)
            : [...selectedBottom, BottomName];
        setSelectedBottom(updatedBottoms);
    };

    const handleFootwearSelect = (FootwearName) => {
        const updatedFootwear = selectedFootwear.includes(FootwearName)
            ? selectedFootwear.filter(name => name !== FootwearName)
            : [...selectedFootwear, FootwearName];
        setSelectedFootwear(updatedFootwear);
    };

    useEffect(() => {
    }, [userInfo]);

    const CustomPrevArrow = (props) => {
        const { onClick, style } = props;
        return (
            <div
                className="slick-prev"
                style={{ ...style, left: 10, zIndex: 999, color: 'black', fontSize: '25px' }}
                onClick={onClick}
            >
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick, style } = props;
        return (
            <div
                className="slick-next"
                style={{ ...style, right: 10, zIndex: 999, color: 'black', fontSize: '25px' }}
                onClick={onClick}
            >
            </div>
        );
    };

    const settings = {
        infinite: true,
        dots: true,
        speed: 700,
        cssEase: "linear",
        slidesToShow: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        appendDots: dots => (
            <div style={{ borderRadius: "10px", padding: "0px", alignContent: "center", marginLeft: "-4%" }}>
                <ul style={{ margin: "0px" }}>
                    {dots.map((dot, index) => (
                        <li key={index} style={{ display: "inline-block", margin: "0 5px" }}>
                            {dot.props.className === "slick-active" ? <GoDotFill size={24} /> : <GoDot />}
                        </li>
                    ))}
                </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
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
                        src={imges} alt="imges" />
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
                            <h1><div className='heading'>
                            <p>التفضيلات</p>
                            </div></h1>
                        </div>
                        <div className='characteristics-sty'>
                            {/* <div className='preferences-1'>
                                <LoginSub>اختاري ستايلات الملابس المفضلة لك</LoginSub>
                                <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                                     </AgeContainer>
                                <AstheticCaroseul>
                                    <SliderContainer1>
                                        <SliderContainer>
                                            <Slider {...settings}>
                                                {LikePreferencesData.map((item, index) => (
                                                    <SliderImageContainer key={index}>
                                                        <SliderImage src={item.imageUrl} alt={`Preference ${item.name}`} />
                                                        <LikeContainer>
                                                            <DisLike
                                                                isDisliked={dislikedItems.includes(item.name)}
                                                                onClick={() => handleDislikeSelect(item.name)}
                                                                disabled={dislikedItems.includes(item.name)}
                                                            >
                                                                <IoHeartDislikeOutline color={'black'} />
                                                            </DisLike>
                                                            <Like
                                                                isLiked={likedItems.includes(item.name)}
                                                                onClick={() => handleLikeSelect(item.name)}
                                                                disabled={likedItems.includes(item.name)}
                                                            >
                                                                <IoMdHeartEmpty color={'black'} />
                                                            </Like>
                                                        </LikeContainer>
                                                    </SliderImageContainer>
                                                ))}
                                            </Slider>
                                        </SliderContainer>
                                    </SliderContainer1>
                                </AstheticCaroseul>
                            </div> */}
                            <div className='preferences-2'>
                                {/* <LoginHeading style={{ paddingTop: "2vh" }}>Personal Preferences</LoginHeading> */}
                                {/* <LoginSub>Hey there! We'd love to get to know you better to personalize your experience.</LoginSub> */}
                                <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                                    {/* <LoginSub><b>Select your Favorite Pattern</b> (you can select more than one)</LoginSub> */}
                                    <RadioContainer>
                                        {/* {patternData.map((pattern, index) => (
                                            // <PatternsOptions key={index} active={selectedPatterns.includes(pattern.name)} onClick={() => handlePatternSelect(pattern.name)} disabled={selectedPatterns.includes(pattern.name)}>
                                            //     {selectedPatterns.includes(pattern.name) && <img src={pinkCheck} style={{
                                            //         marginRight: "-10px",
                                            //         alignSelf: "flex-start",
                                            //         zIndex: "1",
                                            //         marginTop: "7px",
                                            //         marginLeft: "-10px"
                                            //     }} />}
                                            //     <PatternOptionImage src={pattern.imageUrl} />
                                            // </PatternsOptions>
                                        ))} */}
                                    </RadioContainer>
                                </AgeContainer>
                                <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                                    <LoginSub className='single'><b>حددي الألوان المفضلة لك </b>(يُمكنك اختيار أكثر من خيار واحد)</LoginSub>
                                    <div className='body-type'>
                                        <RadioContainer>
                                            {colorsData.map((color, index) => (
                                                <PatternsOptions key={index} active={selectedColors.includes(color.name)} onClick={() => handleColorSelect(color.name)} disabled={selectedColors.includes(color.name)}>
                                                    {selectedColors.includes(color.name) && <img src={pinkCheck} style={{
                                                        marginRight: "-10px",
                                                        alignSelf: "flex-start",
                                                        zIndex: "1",
                                                        marginTop: "7px",
                                                        marginLeft: "-10px"
                                                    }} />}
                                                    <ColorOptionImage src={color.imageUrl} />
                                                </PatternsOptions>
                                            ))}
                                        </RadioContainer>
                                    </div>
                                </AgeContainer>
                                <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                                    <LoginSub className='single'><b>مستوى الاحتشام </b>(حددي الأجزاء التي لاتمانعين في إظهارها)</LoginSub>
                                    <div className='body-type'>
                                        <RadioContainer>
                                            {RevealData.map((part, index) => (
                                                <PartsOptions key={index} active={selectedParts.includes(part.name)} onClick={() => handlePartSelect(part.name)} disabled={selectedParts.includes(part.name)}>
                                                    {selectedParts.includes(part.name) && <img src={pinkCheck} style={{
                                                        marginBottom: "-15px",
                                                        alignSelf: "flex-start",
                                                        zIndex: "1",
                                                        marginTop: "-5px",
                                                        marginLeft: "5px"
                                                    }} />}
                                                    <PartImage src={part.imageUrl} />
                                                    <RadioOptionText>{part.name}</RadioOptionText>
                                                </PartsOptions>
                                            ))}
                                        </RadioContainer>
                                    </div>
                                </AgeContainer>
                            </div>
                            <div className='preferences-3'>
                                {/* <LoginHeading style={{ paddingTop: "2vh" }}>Personal Preferences</LoginHeading> */}
                                {/* <LoginSub>Hey there! We'd love to get to know you better to personalize your experience.</LoginSub> */}
                                <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                                    <LoginSub><b>حددي اللباس العلوي المفضل لك</b></LoginSub>
                                    <div className='body-type'>
                                        <RadioContainer>
                                            {TopData.map((Top, index) => (
                                                <PatternsOptions key={index} active={selectedTops.includes(Top.name)} onClick={() => handleTopSelect(Top.name)} disabled={selectedTops.includes(Top.name)}>
                                                    {selectedTops.includes(Top.name) && <img src={pinkCheck} style={{
                                                        marginRight: "-10px",
                                                        alignSelf: "flex-start",
                                                        zIndex: "1",
                                                        marginTop: "7px",
                                                        marginLeft: "-10px"
                                                    }} />}
                                                    <PatternOptionImage src={Top.imageUrl} />
                                                </PatternsOptions>
                                            ))}
                                        </RadioContainer>
                                    </div>
                                </AgeContainer>
                                <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                                    <LoginSub><b>حددي اللباس السفلي المفضل لك</b></LoginSub>
                                    <div className='body-type'>
                                        <RadioContainer>
                                            {BottomData.map((Bottom, index) => (
                                                <PatternsOptions key={index} active={selectedBottom.includes(Bottom.name)} onClick={() => handleBottomSelect(Bottom.name)} disabled={selectedBottom.includes(Bottom.name)}>
                                                    {selectedBottom.includes(Bottom.name) && <img src={pinkCheck} style={{
                                                        marginRight: "-10px",
                                                        alignSelf: "flex-start",
                                                        zIndex: "1",
                                                        marginTop: "7px",
                                                        marginLeft: "-10px"
                                                    }} />}
                                                    <ColorOptionImage src={Bottom.imageUrl} />
                                                </PatternsOptions>
                                            ))}
                                        </RadioContainer>
                                    </div>
                                </AgeContainer>
                                <AgeContainer style={{ padding: "10px", marginLeft: "-8vh" }}>
                                    <LoginSub><b>حددي الأحذية المفضلة لك</b></LoginSub>
                                    <div className='body-type'>
                                        <RadioContainer>
                                            {FootData.map((Footwear, index) => (
                                                <PartsOptions key={index} active={selectedFootwear.includes(Footwear.name)} onClick={() => handleFootwearSelect(Footwear.name)} disabled={selectedFootwear.includes(Footwear.name)}>
                                                    {selectedFootwear.includes(Footwear.name) && <img src={pinkCheck} style={{
                                                        marginBottom: "-15px",
                                                        alignSelf: "flex-start",
                                                        zIndex: "1",
                                                        marginTop: "-5px",
                                                        marginLeft: "5px"
                                                    }} />}
                                                    <PartImage src={Footwear.imageUrl} />
                                                </PartsOptions>
                                            ))}
                                        </RadioContainer>
                                    </div>
                                    <div className='reg-button'>
                 
                 <button className='register-button' name=''>
                 <a href='/home'>
                 حفظ التغييرات
                   </a>
                 </button>
               
             </div>
                                </AgeContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Preferences;

