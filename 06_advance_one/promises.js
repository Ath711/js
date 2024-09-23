const promise1 = new Promise((resolve, reject) => {
  /* do an async task
    db calls, cryptography, network call */

  setTimeout(() => {
    resolve();
    console.log("Async task is complete");
  }, 1000);
}); //first task will be completed then resolve will be called

// then has connection with resolve
// catch with error
promise1.then(() => {
  console.log("Promise consumed");
}); //values are return in then

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resovled");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "chai",
      email: "chai@example.com",
    });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error)
      resolve({
        username: "abc",
        password: "pqr",
      });
    else reject("ERROR: something went wrong");
  }, 1000);
});

promise4
  .then(function (user) {
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("promsie is either resolved or rejected");
  });

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error)
      resolve({
        username: "js",
        password: "123",
      });
    else reject("ERROR: js went wrong");
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

getAllUsers();

console.log("--fetch--");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

/*
  there is vip queue -> micro task queue / priority queue for fetch which has more priority than normal task queue
  hence fetch call back is sent in call stack first and executed first
  */
