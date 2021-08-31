import * as yup from 'yup';

const validations = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir e-mail giriniz')
    .required('Zorunlu alan'),
  password: yup
    .string()
    .min(5, 'Parolanız en az 5 karakter olmalıdır.')
    .required('Zorunlu Alan'),
});

export default validations;