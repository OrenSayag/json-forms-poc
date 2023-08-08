import { ReferralInfoInitialDataParams } from "../../../../types/form.type";

const data = (params: ReferralInfoInitialDataParams) => ({
  SamplingDoctorLicense: params.samplingDoctorLicense,
  SamplingDoctorFirstName: params.samplingDoctorFirstName,
  SamplingDoctorLastName: params.samplingDoctorLastName,
  SamplingDoctorTitle: params.samplingDoctorTitle,
  PatientID: params.patientId,
  PatientFirstName: params.patientFirstName,
  PatientLastName: params.patientLastName,
  ReferralNum: params.referralNum,
});

export default data;
