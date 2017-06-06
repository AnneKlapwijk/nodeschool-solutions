/**
 * 14. Form and Field Validation
 * Field A and C is required. Field B is optional, but if it has a value it must be valid.
 * @param Bacon
 * @param fieldA (EventStream)
 * @param validationA (Function)
 * @param fieldB (EventStream)
 * @param validationB (Function)
 * @param fieldC (EventStream)
 * @param validationC (Function)
 * @return {{fieldAValid: *, fieldBValid: *, fieldCValid: *, formValid: *}} (Property)
 */
module.exports = (Bacon, fieldA, validationA, fieldB, validationB, fieldC, validationC) => {
  const fieldAValid = fieldA.map(validationA).toProperty(false)
  const fieldBValid = fieldB.map(value => !value || validationB(value)).toProperty(true)
  const fieldCValid = fieldC.map(validationC).toProperty(false)

  const formValid = fieldAValid.and(fieldBValid).and(fieldCValid)

  return {
    fieldAValid, //The validity of field A
    fieldBValid, //The validity of field B
    fieldCValid, //The validity of field C
    formValid    //The validity of the whole form
  }
}
