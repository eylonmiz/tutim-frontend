"use client"

import React from "react"
import { TutimWizard, defaultFields } from "@tutim/fields"
import { FormProvider } from "@tutim/headless"

// Customize the form config according to https://docs.tutim.io
const config = {
  fields: [
    { key: "company_name", label: "Company name", type: "text" },
    {
      key: "num_of_employees",
      label: "Number of employees",
      type: "select",
      tooltip: "Choose your best estimation",
      options: [
        { value: "1_50", label: "1 - 50" },
        { value: "51_250", label: "51 - 250" },
        { value: "above_251", label: "251 +" },
      ],
    },
    {
      key: "stakeholders",
      label: "Stakeholders",
      type: "array",
      children: {
        fields: [
          { key: "name", label: "Full Name", type: "text" },
          { key: "age", label: "Age", type: "number" },
        ],
      },
    },
  ],
}

const App = () => {
  return (
    <div className="App">
      {/* Add your custom components into fieldComponents */}
      <FormProvider fieldComponents={defaultFields}>
        <TutimWizard onSubmit={console.log} config={config} />
      </FormProvider>
    </div>
  )
}

export default App
