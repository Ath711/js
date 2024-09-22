const addLanguage = (langName) => {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
};

addLanguage("python");
addLanguage("spring boot");

//optimized approach

const addOptiLanguage = (langName) => {
  //   const li = document.createElement("li");
  //   li.appendChild(document.createTextNode(langName));
  const li = createNewLiNode(langName);
  li.style.color = "green";
  document.querySelector(".language").appendChild(li);
};

const createNewLiNode = (langName) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  li.style.color = "red";
  return li;
};

addOptiLanguage("python");
addOptiLanguage("spring boot");

//edit
const parent = document.querySelector(".language");
const secondLang = document.querySelector("li:nth-child(2)");
// secondLang.innerHTML = 'html' //not optimized

parent.replaceChild(createNewLiNode("html"), secondLang);

//another edit option
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

//remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
