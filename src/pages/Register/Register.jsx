import React from 'react'
import style from '../Register/Register.module.css'
import StepPhoneEmail from '../steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../steps/StepOtp/StepOtp'
import StepName from '../steps/StepName/StepName'
import StepAvatar from '../steps/StepAvatar/StepAvatar'
import StepUsername from '../steps/StepUsername/StepUsername'
import { useState } from 'react'


const steps = {
    1: StepPhoneEmail, 
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername,
};



const Register = () => {

    const [step, setStep] = useState(1);
    const Step = steps[step]

function onNext(){
    setStep(step + 1)
}

  return (
    <Step onNext={onNext}/>
  );
}

export default Register