import {useState, useEffect} from 'react'

import {
  BMICalculatorBgContainer,
  HomePageHeading,
  HomePageImage,
  ControllerBgContainer,
  ControllerCardsBgContainer,
  ControllerCard,
  ControllerCardHeading,
  ControllerCardDescription,
  ControllerCardButtonsContainer,
  ControllerIncreaseButton,
  ControllerDecreaseButton,
  BMIResultText,
  BMIResultSpanText,
} from './styledComponents'

const getBmiValue = (height, weight) => {
  const heightInMeters = height / 100
  const bmi = weight / heightInMeters ** 2
  return bmi.toFixed(2)
}

const BmiCalculator = () => {
  const defaultHeight = JSON.parse(localStorage.getItem('height'))
  const defaultWeight = JSON.parse(localStorage.getItem('weight'))

  const [height, setHeight] = useState(
    defaultHeight !== null ? defaultHeight : 170,
  )
  const [weight, setWeight] = useState(
    defaultWeight !== null ? defaultWeight : 60,
  )

  useEffect(() => {
    document.title = `Your BMI: ${getBmiValue(height, weight)}`
  }, [height, weight])

  useEffect(() => {
    localStorage.setItem('height', JSON.stringify(height), [height])
  })

  useEffect(() => {
    localStorage.setItem('weight', JSON.stringify(weight), [weight])
  })

  const onIncrementHeight = () => setHeight(prevHeight => prevHeight + 1)

  const onDecrementHeight = () => setHeight(prevHeight => prevHeight - 1)

  const onIncrementWeight = () => setWeight(prevWeight => prevWeight + 1)

  const onDecrementWeight = () => setWeight(prevWeight => prevWeight - 1)

  return (
    <BMICalculatorBgContainer>
      <HomePageHeading>BMI CALCULATOR</HomePageHeading>
      <HomePageImage
        src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png"
        alt="bmi"
      />
      <ControllerBgContainer>
        <ControllerCardsBgContainer>
          <ControllerCard>
            <ControllerCardHeading>Height</ControllerCardHeading>
            <ControllerCardDescription>{height} cms</ControllerCardDescription>
            <ControllerCardButtonsContainer>
              <ControllerDecreaseButton onClick={onDecrementHeight}>
                -
              </ControllerDecreaseButton>
              <ControllerIncreaseButton onClick={onIncrementHeight}>
                +
              </ControllerIncreaseButton>
            </ControllerCardButtonsContainer>
          </ControllerCard>
          <ControllerCard>
            <ControllerCardHeading>Weight</ControllerCardHeading>
            <ControllerCardDescription>{weight} kgs</ControllerCardDescription>
            <ControllerCardButtonsContainer>
              <ControllerDecreaseButton onClick={onDecrementWeight}>
                -
              </ControllerDecreaseButton>
              <ControllerIncreaseButton onClick={onIncrementWeight}>
                +
              </ControllerIncreaseButton>
            </ControllerCardButtonsContainer>
          </ControllerCard>
        </ControllerCardsBgContainer>
        <BMIResultText>
          BMI:{' '}
          <BMIResultSpanText>{getBmiValue(height, weight)}</BMIResultSpanText>
        </BMIResultText>
      </ControllerBgContainer>
    </BMICalculatorBgContainer>
  )
}

export default BmiCalculator
