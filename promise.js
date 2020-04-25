// function p() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('hello'); // fulfilled
//         }, 3000);

//         setTimeout(() => {
//             reject(new Error('error')); // fulfilled
//         }, 5000);
//     }); // pending
// }

// p().then((message) => {
//     console.log('resolve', message); // resolve
// }).catch((error) => {
//     console.log('rejected', error); // reject
// }).finally(() => {
//     console.log('end');
// });

// function p() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000)
//     })
// }

// p().then(() => {
//     return p();
// }).then(() => {
//     return p();
// }).then(p).then(() => {
//     console.log('4000ms end');
// })


// Promise.resolve(new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 3000);
// })).then((data) => {
//     console.log(data);
// })

// Promise.resolve('bar').then((data) => {
//     console.log(data)
// })

// Promise.reject(new Error('reason')).then((error) => {

// }).catch((error) => {
//     console.log(error);
// })



// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms)
//     })
// }

// Promise.all([p(1000), p(2000), p(3000)]).then((ms) => {
//     console.log('promise all', ms);
// })


function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then((ms) => {
    console.log('promise all', ms);
})