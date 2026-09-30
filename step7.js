const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random >= 0.5) {
        resolve(random);
      } else {
        reject(random);
      }
    }, 2000);
  });
  randomPromise
    .then((value) => {
      console.log("success:", value);
    })
    .catch((error) => {
      console.log("err:", error);
    });




    