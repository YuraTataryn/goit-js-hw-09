function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstDelay = parseInt(this.querySelector('[name="delay"]').value);
  const delayStep = parseInt(this.querySelector('[name="step"]').value);
  const amount = parseInt(this.querySelector('[name="amount"]').value);

  const promises = [];
  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + i * delayStep;
    const promise = createPromise(position, delay);

    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    promises.push(promise);
  }

  Promise.all(promises)
    .then(() => {
      Notiflix.Notify.Info('All promises fulfilled');
    })
    .catch(() => {
      Notiflix.Notify.Info('At least one promise was rejected');
    });
});



// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// document.querySelector('.form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const firstDelay = parseInt(this.querySelector('[name="delay"]').value);
//   const delayStep = parseInt(this.querySelector('[name="step"]').value);
//   const amount = parseInt(this.querySelector('[name="amount"]').value);

//   const promises = [];
//   for (let i = 0; i < amount; i++) {
//     const position = i + 1;
//     const delay = firstDelay + i * delayStep;
//     const promise = createPromise(position, delay);

//     promise
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });

//     promises.push(promise);
//   }

//   Promise.all(promises);
// });










