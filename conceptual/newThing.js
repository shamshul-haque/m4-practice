const pet = "dog";
const petAnimal = ["dog", "cat", "elephant", "horse", "rat"];
/* type of is used to know the types of the assigned value */
console.log(typeof pet);

/* includes() use to check the substring contain in the string and element contain in array. */
console.log(pet.includes("dg"));
console.log(petAnimal.includes("elephant"));

/* slice() is used to cut a certain portion from a full portion of an array */
let result = petAnimal.slice(2, 4);
console.log(result);

/* splice() is used to include or delete elements into array */
let output = petAnimal.splice(2, 1); //delete element
console.log(result);
petAnimal.splice(2, 0, "bird"); //includes element
console.log(petAnimal);
