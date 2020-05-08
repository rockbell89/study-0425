var global = 10

function outerFunc() {
  const a = 20
  console.log(global)
  console.log(a)
  console.log(b)

  function innerFunc() {
    const b = 30
    console.log(global)
    console.log(a)
    console.log(b)
  }
  innerFunc()
}
outerFunc()

console.log(global)
console.log(a)
console.log(b)

/**
 * 렉시컬 스코프 - 태어났을때 환경
 */

const name = '고석진'

function getName() {
  console.log(name)
}

function foo() {
  const name = '보라'
  getName()
}
foo()

/**
 * 클로저
 */

//  const nameFoo = getName()

function getNameClosure() {
  const name = '고석진'
  return () => {
    close.log('name', name)
  }
}

const nameFoo = getNameClosure()

/**
 * setTimeout
 */

// function timer() {
//   for (var i = 0; i <= 10; i += 1) {
//     setTimeout(() => {
//       console.log(i)
//     }, 0)
//   }
// }

// function timer2() {
//     for (let i = 0; i <= 10; i += 1) {
//       setTimeout(() => {
//         console.log(i)
//       }, 0)
//     }
//   }

//   function timer() {
//     for (var i = 0; i <= 10; i += 1) {
//       ;(function(j) {
//             setTimeout(() => {
//                 console.log(j)
//               }, 0)
//           }).(i);
//     }
//   }

// timer()
