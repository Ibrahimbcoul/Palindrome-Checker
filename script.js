"use strict";

function palindrome(str) {
  // CONVERT ALL TO UPPER CASE
  const upper = str.toUpperCase();
  // SPLIT INTO AN ARRAY
  const split = upper.split("");
  // FILTER ONLY LETTERS OF ALHPABET AND NUMBERS
  const filter = split.filter((val) => {
    return (
      val === "A" ||
      val === "B" ||
      val === "c" ||
      val === "D" ||
      val === "E" ||
      val === "F" ||
      val === "G" ||
      val === "H" ||
      val === "I" ||
      val === "J" ||
      val === "K" ||
      val === "L" ||
      val === "M" ||
      val === "N" ||
      val === "O" ||
      val === "P" ||
      val === "Q" ||
      val === "R" ||
      val === "S" ||
      val === "T" ||
      val === "U" ||
      val === "V" ||
      val === "W" ||
      val === "X" ||
      val === "Y" ||
      val === "Z" ||
      val === "0" ||
      val === "1" ||
      val === "2" ||
      val === "3" ||
      val === "4" ||
      val === "5" ||
      val === "6" ||
      val === "7" ||
      val === "8" ||
      val === "9"
    );
  });
  console.log(filter);
  // CREATE A REVERSED COPY OF THE FILTER ARRAY
  const reverse = filter.slice().reverse();
  console.log(reverse);
  // CHECK IF PALINDROME
  if (filter.join() === reverse.join()) {
    return true;
  } else return false;
}

console.log(palindrome("eye"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /- :) 0-0"));
