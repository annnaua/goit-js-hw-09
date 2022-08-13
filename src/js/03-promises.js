import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  const step = Number(e.currentTarget.step.value);
  const amount = Number(e.currentTarget.amount.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay)
      .then(result => Notify.success(result))
      .catch(error => Notify.failure(error));

    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }

      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}
