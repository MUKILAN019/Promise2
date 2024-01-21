const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies

function getCookies() {
  let body = document.body;
  setTimeout(function () {
    cookies.forEach(function (element, index) {
      body.innerHTML += `<li>${element.name}</li>`;
    });
  }, 1000);
}

// Progression 2: using setTimeout() - use 1000 units for time parameter

//Progression 3: Create a function to creat cookies and create an object of Promise.

function createCookie() {
  // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false;
      if (error == false) {
        cookies.push(newCookie);
        resolve('Data fetched successfully');
      } else {
        reject('Data fetching was unsuccessful');
      }
    });
  }, 2000);
}
// Progression 5: handling errors and adding new cookie to the list

// Progression 7: creating a new async function

// calling the new async function

async function intialisefunc() {
  await createCookie();
  getCookies();
}
intialisefunc();
