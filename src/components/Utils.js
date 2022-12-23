export function login({email, password}) { // this is a fake login function
  const delay = (0.7 + Math.random() *2) *1000; // random delay between 700 and 2700 ms
  return new Promise((resolve, reject) => { // return a promise
    setTimeout(function (){ // simulate server response
      if( password === 'password123' && !!email){ // if password is correct and email is not empty
        resolve(); // resolve promise
      }else{// if password is incorrect or email is empty
        reject({message: 'Invalid email or password' }); // reject promise
      } 
    })
  }
    )
}
