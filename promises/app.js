// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve('Youre fake date is here');
//       }
//       reject('error request');
//     }, 1000);
//   });
// };

// fakeRequest('/dogs/1')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('green', 1000));

// const changeTextColor = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     // const random = Math.random();
//     setTimeout(() => {
//       //   if (random > 0.7) {
//       document.querySelector('h1').style.color = color;
//       resolve('text color changed');
//       //   }
//       //   reject('text color change error');
//     }, 1000);
//   });
// };

// changeTextColor('blue', 1000)
//   .then(() => changeTextColor('green', 1000))
//   .then(() => changeTextColor('white', 1000))
//   .then(() => changeTextColor('red', 1000));

const rainbow = async () => {
  await delayedColorChange('red', 1000);
  await delayedColorChange('orange', 1000);
  await delayedColorChange('yellow', 1000);
  await delayedColorChange('green', 1000);
  await delayedColorChange('blue', 1000);
};

const makeFakeRequest = (data, delay) => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        resolve(data);
      }
      reject('errorrrr');
    }, delay);
  });
};

const callFakeRequest = async () => {
  try {
    const d1 = await makeFakeRequest('page1', 1000);
    const d2 = await makeFakeRequest('page2', 1000);
    console.log(d1, d2);
  } catch (e) {
    console.log(e);
  }
};

const getData = (url) => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random;
    setTimeout(() => {
      if (randomNumber > 0.5) {
        console.log(randomNumber);
        resolve(url);
      }
      reject('error message from: ' + url);
      throw 'erorr from ' + url;
    }, 1000);
  });
};

const callGetData = async () => {
  try {
    const d1 = await getData('/page1');
    const d2 = await getData('/page2');
    console.log(d1, d2);
  } catch (e) {
    console.log(e);
  }
};
