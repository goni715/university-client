import capitalizeWord from "../utils/capitalizeWord";

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  export const monthOptions = monthNames.map((item) => ({
    value: item,
    label: item
  }));



  
  const gender = [ 'male', 'female', 'others' ];
  export const genderOptions = gender.map((item) => ({
    value: item,
    label: capitalizeWord(item)
  }));



  const bloodGroup = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ];


  export const bloodGroupOptions = bloodGroup.map((item) => ({
    value: item,
    label: item
  }));