// import Modal from "./UncontrolledModal"
// import { useState } from 'react';
// import ControlledModal from './ControlledModal';
import UncontrolledOnboardingFlow from './UncontrolledOnboardingFlow';

const StepOne = () => <h1>StepOne</h1>;
const StepTwo = () => <h1>StepTwo</h1>;
const StepThree = () => <h1>StepThree</h1>;

const App = () => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => {
  //     setShow(false);
  //   };
  return (
    <>
      {/* <button onClick={() => setShow(true)}>Open Controlled Modal</button>
      <ControlledModal show={show} handleClose={handleClose}>
        <h1>Controlled</h1>
      </ControlledModal> */}
      <UncontrolledOnboardingFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
};

export default App;
