const name = "abc";
const repoCount = 50;

console.log(name + repoCount + " value"); //outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("new-Name");
console.log(name);
console.log(gameName);

console.log(typeof name + " " + typeof gameName);
console.log(gameName[0]);
console.log(gameName[0].__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("w"));

const newSubString = gameName.substring(0, 3);
console.log(newSubString);

const anotherString = gameName.slice(-8, 2);
console.log(anotherString);

const newString1 = "  abc  ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://google.com/abc%20pqr";
console.log(url);
const newUrl = url.replace('%20', '-');
console.log(newUrl);

console.log(newUrl.includes("abc"))

const anotherString2 = "ab-cd-ed"

console.log(anotherString2.split("-"))