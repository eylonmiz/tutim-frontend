"use client"
import { TutimWizard, defaultFields } from "@tutim/fields";
import { FormProvider } from "@tutim/headless";



const Registration = () => {
  return (
      <FormProvider
        fieldComponents={defaultFields}
        options={{ clientId: "d2b46f87-566f-4439-94c8-030bd57f8676" }}
      >
        <TutimWizard onSubmit={console.log} formId="878" />
      </FormProvider>
    );
  };

export default Registration;