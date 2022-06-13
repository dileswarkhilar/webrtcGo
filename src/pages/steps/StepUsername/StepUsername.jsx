import React from "react";
import Button from "../../../components/shared/Button/Button";

const StepUsername = ({ onNext }) => {
  return (
    <>
      <div>StepUsername</div>
      <Button onClick={onNext}>Next</Button>
    </>
  );
};

export default StepUsername;
