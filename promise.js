const p = new Promise((resolve, reject) => {
  //Kick off some sync work
  //...
  setTimeout(() => {
    resolve(1); //pending => resolved, fulfilled
    reject(new Error('An error occured')); // pending => rejected
  }, 2000);
});

p.then((result) => console.log('Result', result)).catch((err) =>
  console.log('Error: ', err.message)
);
