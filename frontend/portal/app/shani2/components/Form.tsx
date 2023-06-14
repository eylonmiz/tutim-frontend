import React from "react"
import { TutimWizard, defaultFields } from "@tutim/fields"
import { FormProvider } from "@tutim/headless"

// The form's schema
const configDefault = {
  fields: [
    {
      key: "fullname",
      label: "Full Name",
      type: "text",
      isRequired: true,
    },
    { key: "date", label: "Pick a date", type: "date" },
  ],
}

interface Fields {
  key: string
  label: string
  type: string
  isRequired?: boolean
}
interface Config {
  fields: Fields[]
}

const Form: React.FC<{ config?: Config }> = ({ config = configDefault }) => {
  return (
    <section className="m-2 bg-inherit text-white">
      <FormProvider fieldComponents={defaultFields}>
        <TutimWizard onSubmit={console.log} config={config} />
      </FormProvider>
    </section>
  )
}

export default Form
