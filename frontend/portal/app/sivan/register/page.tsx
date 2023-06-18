"use client"
import { ReactNode } from 'react';

import { TutimWizard, defaultFields } from "@tutim/fields";
import { FormProvider } from "@tutim/headless";
import pageColor from "../components/pageColor";

type MyComponentProps = {
  children: ReactNode;
};

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  // JSX implementation
  return <div>{children}</div>;
};



const Registration = () => {
  const selectedColor = localStorage.getItem('selectedColor');
  const divStyle = selectedColor ? { backgroundColor: selectedColor } : {};



  return (
    <div style={divStyle}>
      <FormProvider
        fieldComponents={defaultFields}
        options={{ clientId: "d2b46f87-566f-4439-94c8-030bd57f8676" }}
      >
        <TutimWizard onSubmit={console.log} formId="878" />
      </FormProvider>
      </div>
    );
  };

export default Registration;