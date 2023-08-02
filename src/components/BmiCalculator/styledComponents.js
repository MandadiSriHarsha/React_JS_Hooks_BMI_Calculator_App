import styled from 'styled-components'

export const BMICalculatorBgContainer = styled.div`
  min-height: 100vh;
  background-color: rgb(10, 14, 33);
  padding: 20px 25px 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomePageHeading = styled.h1`
  color: #ffffff;
  padding: 0px 0px 0px 0px;
  margin: 30px 0px 60px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
`

export const HomePageImage = styled.img`
  width: 95%;
  max-width: 700px;
  margin: 0px 0px 30px 0px;
`

export const ControllerBgContainer = styled.div`
  width: 95%;
  max-width: 700px;
  background-color: rgb(29, 30, 51);
  padding: 15px 20px 15px 20px;
  margin: 10px 7px 10px 7px;
  font-family: 'Roboto';
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid skyblue;
`

export const ControllerCardsBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`

export const ControllerCard = styled.div`
  width: 100%;
  max-width: 270px;
  background-color: rgb(10, 14, 33);
  color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px 10px 10px 10px;
  padding: 12px 15px 20px 15px;
`
export const ControllerCardHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 23px;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const ControllerCardDescription = styled.h1`
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 576px) {
    font-size: 25px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const ControllerCardButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ControllerIncreaseButton = styled.button`
  background-color: rgb(29, 30, 51);
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  padding: 5px 15px 5px 15px;
  margin: 10px 10px 10px 10px;
  border: 2px solid #ffffff;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const ControllerDecreaseButton = styled(ControllerIncreaseButton)``

export const BMIResultText = styled.h1`
  color: rgb(74, 222, 128);
  font-size: 16px;
  text-align: center;
  padding: 0px 0px 0px 0px;
  margin: 20px 0px 20px 0px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`

export const BMIResultSpanText = styled.span`
  font-size: 18px;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
