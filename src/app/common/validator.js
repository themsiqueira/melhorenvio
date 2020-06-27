import { ApplicationError } from './errors'

export const validateSchema = schema => payload => {
  return schema.validate(payload, { abortEarly: false })
    .catch(({ errors }) => Promise.reject(new ApplicationError({ code: 400, errors })))
}
