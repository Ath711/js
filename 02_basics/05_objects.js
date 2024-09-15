// Object de-structure

const course = {
  courseName: "JavaScript",
  price: "free",
  courseInstructor: "Ath711",
};

console.log(course.courseInstructor);

const {courseInstructor, price: p} = course;
console.log(`${courseInstructor}  ${p}`);

/*

----- in react js -----

const navBar = (props.companyName) => {

}
navBar(companyName = "abc")



----- instead we use concept of de structure -----

const navBar = ({companyName}) => {

}
navBar(companyName = "abc")

*/

//--------------------------api-------------------------------

/*

values comes in json format

{
  "name" : "abc",
  "courseName" : "js".
  "price" : "free"
}

or in the form of array
[
{},
{},
{}
]

*/
