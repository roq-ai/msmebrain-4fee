import * as yup from 'yup';

export const financialValidationSchema = yup.object().shape({
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
