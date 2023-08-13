import React from "react";
import "./App.css";
import PatientSignUpFormTailwind from "./components/PatientSignUpFormTailwind";
import PatientSignUpFormMaterial from "./components/PatientSignUpFormMaterial";
import ReferralInfoFormMaterial from "./components/ReferralInfoFormMaterial";
import {
  ReferralInfoInitialDataParams,
  ReferralInfoSchemaParams,
} from "./types/form.type";
import ReferralInfoFormTailwind from "./components/Form";

const referralInfoFormParams: {
  schemaParams: ReferralInfoSchemaParams;
  initialData: ReferralInfoInitialDataParams;
} = {
  schemaParams: {
    anamnesis: [
      {
        value: {
          type: "1",
          code: "12322",
          description: "סימפטומים כלליים",
        },
        label: "אבחנה 1",
      },
      {
        value: {
          type: "2",
          code: "12323",
          description: "סימפטומים כלליים",
        },
        label: "אבחנה 2",
      },
      {
        value: {
          type: "3",
          code: "12324",
          description: "סימפטומים כלליים",
        },
        label: "אבחנה 3",
      },
    ],
    formApprovingPhysicians: [
      {
        value: "ד״ר טל צוקרט",
        label: "ד״ר טל צוקרט",
      },
      {
        value: "פרופסור ירון אוליאל",
        label: "פרופסור ירון אוליאל",
      },
      {
        value: "האח עומרי לוז",
        label: "האח עומרי לוז",
      },
    ],
    priceList: [
      {
        value: "1",
        label: "היסטולוגיה",
      },
      {
        value: "2",
        label: "ציטולוגיה",
      },
      {
        value: "3",
        label: "טרמינולוגיה",
      },
    ],
  },
  initialData: {
    patientLastName: "חיים",
    patientFirstName: "משה",
    patientId: "123456789",
    samplingDoctorTitle: "ד״ר",
    samplingDoctorLastName: "צוקרט",
    samplingDoctorFirstName: "טל",
    referralNum: 321654,
    samplingDoctorLicense: "65478198",
  },
};

function App() {
  return (
    <div dir={"rtl"} className="App p-24 border-black bg-white min-h-screen">
      {/*<PatientSignUpFormMaterial />*/}
      {/*<PatientSiegnUpFormTailwind />*/}
      <ReferralInfoFormTailwind
        schemaParams={referralInfoFormParams.schemaParams}
        initialDataParams={referralInfoFormParams.initialData}
      />
      {/*<ReferralInfoFormMaterial*/}
      {/*  schemaParams={referralInfoFormParams.schemaParams}*/}
      {/*  initialDataParams={referralInfoFormParams.initialData}*/}
      {/*/>*/}
    </div>
  );
}

export default App;
