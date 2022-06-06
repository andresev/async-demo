const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 1...');
    //reject(new Error('Because something failed.'));
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 2...');
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]) // will return a NEW Promise that is RESOLVEd after all promises have been resolved
  .then((result) => console.log(result))
  .catch((err) => console.log('Error: ', err.message));

Promise.all([p1, p2]) // will return first resolved promise from all promises
  .then((result) => console.log(result))
  .catch((err) => console.log('Error: ', err.message));
