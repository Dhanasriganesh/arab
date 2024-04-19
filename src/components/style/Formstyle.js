import styled from "styled-components";
import ReactFlagsSelect from 'react-flags-select';
import { media } from "../utils";



const inputStyles = `
width:355px;
height:40px;
border: 1px solid rgba(91, 98, 117, 0.25);
border-radius:4px;
font-size:14px;
font-weight:400;
`;

export const StyledFlagSelect = styled(ReactFlagsSelect)`
  ${inputStyles}
  
  border:none;
  height:35px;
  margin-bottom:10px;
  background:white;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  margin-bottom:-2vh;
`;

export const FormTextInput = styled.input`
  ${inputStyles}
  padding-left:2vh;
  width:335px;
  margin-bottom:0.5vh;
  `;

export const StyledRegionSelect = styled.input`
  width:335px;
height:40px;
border: 1px solid rgba(91, 98, 117, 0.25);
border-radius:4px;
font-size:14px;
font-weight:400;
  padding-left:2vh;
  `;

export const Phone2Input = styled.input`
    &.react-tel-input {
      margin: 10px 5%;
      padding: auto 10px;
      width: 60%;
      height: 52px;
      background-color: white;
      border: 1px solid #64676;
      direction: ltr;
      ${media("small")} {
        height: 64px;
      }
    }
    &.react-tel-input .flag-dropdown {
      height: 40px;
      background-color: white;
      border: none;
      margin: auto 7px;
      ${media("small")} {
        height: 50px;
      }
    }
    &.react-tel-input .selected-flag {
      width: 100%;
      height: 115%;
      background-color: white;
      border: none;
      &.hover {
        background-color: white;
      }
    }
    &.react-tel-input .sa {
      scale: 1.5;
      padding: auto 5px;
      margin-top: -8px;
      border: none;
    }
    &.react-tel-input .arrow {
      scale: 1.5;
      padding: auto 5px;
      direction: ltr;
    }
  
    &.react-tel-input .form-control {
      height: 52px;
      width: 100%;
      font-size: 0.8rem;
      border-radius: 0;
      background-color: white;
      border: none;
      padding-right: 0px;
      padding-left: 56px;
      border-right-width: 0px;
      direction: ltr;
      ${media("small")} {
        height: 64px;
      }
    }
  `;

export const StyledPhoneInput = styled(Phone2Input)`
  width:345px;
height:40px;
border: 1px solid rgba(91, 98, 117, 0.25);
border-radius:4px;
font-size:14px;
font-weight:400;
  &.react-tel-input {
    margin: 10px 5%;
    padding: auto 10px;
    width: 435px;
    height: 52px;
    background-color: white;
    border: 1px solid #64676;
    direction: ltr;
    ${media("small")} {
      height: 64px;
    }
  }
  &.react-tel-input .flag-dropdown {
    height: 40px;
    background-color: white;
    border: none;
    margin: auto 7px;
    ${media("small")} {
      height: 50px;
    }
  }
  &.react-tel-input .selected-flag {
    width: 100%;
    height: 115%;
    background-color: white;
    border: none;
    &.hover {
      background-color: white;
    }
  }
  &.react-tel-input .sa {
    scale: 1.5;
    padding: auto 5px;
    margin-top: -8px;
    border: none;
  }
  &.react-tel-input .arrow {
    scale: 1.5;
    padding: auto 5px;
    direction: ltr;
  }

  &.react-tel-input .form-control {
    height: 52px;
    width: 100%;
    font-size: 0.8rem;
    border-radius: 0;
    background-color: white;
    border: none;
    padding-right: 0px;
    padding-left: 56px;
    border-right-width: 0px;
    direction: ltr;
    ${media("small")} {
      height: 64px;
    }
  }
`;


export const AgeContainer = styled.div`
width:335px;
text-align:left;
display:flex;
flex-direction:column;
`;

export const AgeSelectContainer = styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:1vh;
padding-bottom:1vh;

`;

export const GenderRadio = styled.div`
    cursor:pointer;
  width: 142px;
  height: 70px;
  border-radius: 8px;
  border: ${({ active }) => (active ? '1px solid #ff50f0' : '1px solid black')} ;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:disabled {
    opacity: 0.2; /* Dim the button when disabled */
    pointer-events: none; /* Disable pointer events when disabled */
  }
`;

export const RadioOptionsCharacteristics = styled.div`
width:100px;
height:140px;
cursor:pointer;
border-radius:10px;
background:#5B627533 /* Set background color based on active state */;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:5px;
`;

export const RadioOptionImage = styled.img`
height:70%;
`;
export const RadioOptionText = styled.span`
font-size:13px;
font-weight:600;
font-family:{Montserrat};
`;

export const RadioColorOption = styled.div`
  width: 107px;
  height: 45px;
  border-radius: 19px;
  cursor: pointer;
  background-color: ${props => props.color};
`;

export const PatternsOptions = styled.div`
width: 110px;
height: 110px;
background: #5B627533;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
border-radius: 10px;
`;

export const PatternOptionImage = styled.img`
width:82px;
height:82px;
border-radius:50%;
`;

export const ColorOptionImage = styled.img`
width:75px;
height:65px;
`;

export const PartsOptions = styled.div`
width: 110px;
height: 110px;
background: #5B627533;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-radius: 10px;
cursor:pointer;
`;

export const PartImage=styled.img`
width:60%;
height:60%;
`;

export const LoginHeading = styled.div`
font-family: {Montserrat};
font-size: 40px;
color:#693BD7;
font-weight: 700;
line-height: 55.8px;
text-align: left;
padding-top:8vh;
padding-bottom:2vh;
`;

export const LoginSub = styled.div`
font-family: {Montserrat};
font-size: 15px;
font-weight: 500;
line-height: 21.94px;
text-align: left;
color:#646476;
padding-bottom:2vh;
`;
export const RadioContainer = styled.div`
width:335px;
display:grid;
grid-template-columns: 20% 20% 20% 20% 20%;
gap:14%;
`;

export const AgeRadio = styled.div`
cursor:pointer;
  width: 142px;
  height: 40px;
  border-radius: 40px;
  border: ${({ active }) => (active ? '1px solid #ff50f0' : '1px solid black')} ;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')}; /* Set background color based on active state */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:disabled {
    opacity: 0.5; /* Dim the button when disabled */
    pointer-events: none; /* Disable pointer events when disabled */
  }
`;

export const HeightDropdown=styled.input`
${inputStyles}
padding-left:10px;
margin-bottom:10px;
`;

export const AstheticCaroseul=styled.div`
width:500px;
`;

export const SliderContainer1 = styled.div`
  position: relative; /* Ensure position context for absolute positioning */
  width: 100%;
  height: 470px;
  padding-bottom: 60px;
  background: #D9D9D9;
  border-radius: 18px;
  z-index: 1; /* Set lower z-index */
`;

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 18px;
  z-index: 2; /* Set higher z-index */
`;

export const SliderImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  flex-direction: column;
`;

export const SliderImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  margin-left: 11%;
`;

export const LikeContainer = styled.div`
  width: 500px;
  display: flex;
  margin-top:20px;
  margin-bottom:50px;
  justify-content:center;
  margin-left:-20px;
  gap:10px;
  /* Add additional styles for icons if needed */
`;

export const DisLike = styled.div`
  background: ${props => props.isDisliked ? '#f74a59' : 'white'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Like = styled.div`
  background: ${props => props.isLiked ? '#67cf6e' : 'white'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
