// const capitalizeWord = (str: string) => {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// export default capitalizeWord;



//Capitalizing the First Letter of Each Word:
const capitalizeWord = (str: string) => {
  return str
    .split(" ") // Split the string into an array of words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter and make the rest lowercase
    )
    .join(" ");
};

export default capitalizeWord;