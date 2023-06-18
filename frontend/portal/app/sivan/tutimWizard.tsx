import { TutimWizard, defaultFields } from "@tutim/fields";
import { FormProvider } from "@tutim/headless";

// The form's schema
const config = {
  fields: [
    {
      key: "fullname",
      label: "Full Name",
      type: "text",
      isRequired: true
    },
    { key: "date", label: "Pick a date", type: "date" },
  ],
};


// Your App
const App = () => {
  return (
    <div className="App">
      <FormProvider fieldComponents={defaultFields}>
        <TutimWizard onSubmit={console.log} config={config} />;
      </FormProvider>
    </div>
  );
};

export default App;