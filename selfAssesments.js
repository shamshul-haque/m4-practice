/* ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।  */
console.log();
const strungVariable = "I'm assessing my self";
console.log("This is ", typeof strungVariable, " type variable");
const isCapable = true;
console.log("This is ", typeof isCapable, " type variable");
const numberVariable = 94;
console.log("This is ", typeof numberVariable, " type variable");

/* ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।  */
console.log();
let changeable = "'let' can be changeable or updatable";
console.log(changeable);
changeable = "'let' can be changeable or updatable but not re declarable";
console.log(changeable);
const unchangeable =
  "'const' can not be change or update and also can not be re declare";
console.log(unchangeable);

/* ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।  */
console.log();
const a = 56;
const b = 44;
const sum = a + b;
console.log("Summation: ", sum);
const sub = a - b;
console.log("Subtraction: ", sub);
const mul = a * b;
console.log("Multiplication: ", mul);
const div = a / b;
console.log("Division: ", Number(div.toFixed(2)));

/* ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  */
console.log();
const x = 33;
const y = 48;
console.log(x < y ? x + " is smaller" : y + " is smaller");
console.log(x > y ? x + " is larger" : y + " is larger");
console.log(x == y ? true : false);
console.log(x != y ? true : false);
console.log(x <= y ? true : false);
console.log(x >= y ? true : false);

/* ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।  */
console.log();
const p = 48;
const q = 76;
if (p < q && q > p) {
  console.log("Two conditions are fullfilled");
} else {
  console.log("Two conditions are not fullfilled");
}
if (p < q || q == p) {
  console.log("One conditions is fullfilled");
} else {
  console.log("No conditions are fullfilled");
}

/* ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো  */
console.log();
const isConditionFullfilled = true;
if (isConditionFullfilled === true) {
  console.log("I can be a coder");
} else {
  console.log("I can not be a coder");
}

/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  */
console.log();
let i = 7;
while (i <= 19) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */
console.log();
const arr = [4, 1, 19, 53, 57, 40, 39, 22, 66, 100];
console.log("The decleared array: ", arr);
console.log("Element number is: ", arr.length);
arr[3] = 95;
console.log("Chenged the 4th element: ", arr);
arr.push(33, 45);
console.log("Added two element into the array: ", arr);
arr.pop();
console.log("Elemented one element: ", arr);

/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। */
console.log();
const array = ["salam", "kalam", "rafiq", "shafiq", "jabbar", "chattar"];
//For-of loop to show items sequentially
for (let item of array) {
  console.log(item);
}
//Normal for loop to show items reversely
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো  */
console.log();
const ar = [40, 90, 81, 85, 20, 30, 96, 10, 99, 100];
const larger80 = [];
for (let item of ar) {
  if (item > 80) {
    larger80.push(item);
  }
}
console.log("Array of larger 80: ", larger80);

/* ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। */
console.log();
function findMultiplication(A, B, C) {
  const multiplication = A * B * C;
  return multiplication;
}
const f = 8;
const s = 4;
const t = 7;
const outcome = findMultiplication(f, s, t);
console.log("Multiplication of three number: ", outcome);

/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */
console.log();
const obj = {
  name: "Sujat",
  age: 29,
  occupation: "programmer",
};
console.log(obj);
obj.age = 26;
console.log(obj);

/* ১৩. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */
console.log();
function feetToInch(ft) {
  const inch = ft * 12;
  return inch;
}
const feets = 5.4;
const inches = feetToInch(feets);
console.log("Your height is", Number(inches.toFixed(1)), "inches");

/* ১৪. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  */
console.log();
function centimeterToMeter(cm) {
  const meter = cm / 100;
  return meter;
}
const centimeters = 135.54;
const meters = centimeterToMeter(centimeters);
console.log(meters);

/* ১৫. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।
এইবার ভালো করে খেয়াল করো। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। উত্তর হিসেবে সংখ্যা রিটার্ন করবে।   */
console.log();
function paperRequirements(first, second, third) {
  const firstBookPages = first * 100;
  const secondBookPages = second * 200;
  const thirdBookPages = third * 300;
  const totalBookPages = firstBookPages + secondBookPages + thirdBookPages;
  return totalBookPages;
}
const firstBook = 15;
const secondBook = 7;
const thirdBook = 28;
const totalPages = paperRequirements(firstBook, secondBook, thirdBook);
console.log("You need total", totalPages, "pages");

/* ১৬. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */
console.log();
function bestFriend(array) {
  let largestName = array[0];
  for (let item of array) {
    if (item.length > largestName.length) {
      largestName = item;
    }
  }
  return largestName;
}
const friends = ["dipto", "fahad", "tonmoy", "sum", "shondhi"];
const largestFriend = bestFriend(friends);
console.log("Largest name of my friend is", largestFriend);

/* ১৭. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */
console.log();
function findPositiveNumber(num) {
  const positiveNumbers = [];
  for (let item of numbers) {
    if (item >= 0) {
      positiveNumbers.push(item);
    } else {
      break;
    }
  }
  return positiveNumbers;
}
const numbers = [9, 18, 40, 0, -3, 44, 90, 11, -90];
console.log("Numbers =", numbers);
const result = findPositiveNumber(numbers);
console.log("Positive numbers =", result);
