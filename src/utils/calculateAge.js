/**
 * This function is used to calculate current age based on date of birth
 * The date of birth should be in ‘YYYY-MM-DD’ format
 * @param {number} dayOfBirth
 * @returns
 */
const calculateAge = (dayOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dayOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export default calculateAge;
