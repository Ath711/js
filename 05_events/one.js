// many events are run sequentially in js
// some exception are there

// browser events are one of them
// they are invoked on some activity like mouse drag and drop click Etc

// not that great approach as when we use onClick we dont get that much info, instead we should use event Listeners
const owl = document.getElementById("owl");
owl.onclick = function () {
  alert("clicked on owl");
};

//attachEvent() -> used when internet explore
// jQuery() -> on Event listener

// event listeners also give propogation ability

/*
type, timestamp, preventDefault, target, toELement, srcElement, 
currentTarget, clientX, clientY, screenX, screenY, altkey, ctrlkey,shiftkey,keyCode 
*/

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    // alert(`owl click again`)
    console.log(e);
  },
  false
);

/* event propogation
event propogation has 2 context event bubbling, event capturing
default -> false bubbling
in some cases we use capturing

whatever element or script is keep track of big elements inside to outside that is event propogation
bubble goes from bottom to up
*/

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
); // here default is false so need to explicitly write

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("owl clicked");
    e.stopPropagation(); // if we want inner and outer element to be seperate we can use stopPropogation, so event will bublle but not go up
  },
  false
);

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("clicked on google");
  },
  false
);

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    const imageId = e.target.id;
    document.querySelector(`#${imageId}`).parentElement.remove();
  },
  false
);
