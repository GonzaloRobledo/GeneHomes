export const validateForm = (target, errors, setErrors) => {
  const regExp = new RegExp(target.dataset.pattern, 'gi')
  const { value } = target
  console.log(value)

  if (regExp.test(value)) {
    delete errors[target.name]
    setErrors({ ...errors })
  } else {
    setErrors({ ...errors, [target.name]: value })
  }
}
