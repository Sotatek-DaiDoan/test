import moment from 'moment'

export const validateName = (value: string) => {
  const regexName = /^[a-zA-Z]+( +[a-zA-Z]+)*$/g
  return regexName.test(value)
}
export const validateEmail = (value: string) => {
  const regexEmail =
    /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
  return regexEmail.test(value.toLowerCase())
}
export const validatePhone = (value: string) => {
  const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g
  return regexPhone.test(value)
}
export const validatePassword = (value: string) => {
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&\-*()_<>^])[A-Za-z\d~`!@#$%^&\-*()_<>^]{8,}$/g
  return regexPassword.test(value)
}

export const validateNumber = (value: string) => {
  const regexNumber = /^[0-9]\d*$/g
  return regexNumber.test(value)
}
export const validateDecimalNumber = (value: string) => {
  const regexNumber = /^\d+\.\d{0,2}$/
  return regexNumber.test(value)
}

export const validateTimeInput = (dateStart: string, dateEnd?: string) => {
  const timeNow = moment(new Date()).format("YYYY-MM-DD HH:mm")
  if (dateEnd) {
    return (new Date(dateEnd)).getTime() > (new Date(dateStart)).getTime()
  } else {
    return (new Date(dateStart)).getTime() > (new Date(timeNow)).getTime()
  }
}


export const validateNumberCard = (value: string) => {
  const valid = require("card-validator")
  const resultValidate = valid.number(value)
  if (resultValidate &&
    (resultValidate?.card?.type === 'visa' ||
      resultValidate?.card?.type === 'mastercard')) {
    return true
  }
  return false
}

export const validatePostalCode = (value: string) => {
  const regexNumber = /^[A-Za-z0-9_.]+$/g
  return regexNumber.test(value)
}
