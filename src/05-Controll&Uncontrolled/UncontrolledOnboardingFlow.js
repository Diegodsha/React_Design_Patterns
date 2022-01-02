import React, {useState} from 'react'

const UncontrolledOnboardingFlow = ({children, onFinish}) => {
const [onBoardingData, setOnBoardingData] = useState({})
const [currentIndex, setCurrentIndex] = useState(0)

const currentChild = React.Children.toArray(children)[currentIndex]

    return currentChild
}

export default UncontrolledOnboardingFlow
