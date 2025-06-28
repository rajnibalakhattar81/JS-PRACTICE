/*
Convert the below into promise with .then()

function loginUser() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Logged in as Sidharth"), 6000);
   });
}


function fetchDashboard() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Dashboard loaded"), 3000);
   });
}


function fetchVoid() {
   console.log("Void function called");
}


async function runApp() {
   const loginMessage = await loginUser();
   console.log(loginMessage);


   const dashboard = await fetchDashboard();
   console.log(dashboard);
}


runApp();
fetchVoid();
*/

function loginUser() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Logged in as Rajni"), 6000);
   });
}


function fetchDashboard() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Dashboard loaded"), 3000);
   });
}

function fetchVoid() {
   console.log("Void function called");
}

function runApp() {
  loginUser()
    .then((loginMessage) => {
      console.log(loginMessage);
      return fetchDashboard(); // Return another promise
    })
    .then((dashboardMessage) => {
      console.log(dashboardMessage);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

runApp();
fetchVoid();