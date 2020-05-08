const arr = [10, 20, 30, 40, 80]

/**
 * map()
 * 기존 배열 복사
 */
const mul2 = arr.map((n) => {
  return n * 2
})

console.log(mul2)

/**
 * filter()
 * 기존 배열 필터링 하여 새로운 배열 (기존 배열 영향 X)
 */

const filterList = arr.filter((n) => {
  return n !== 30
})

const todos = [
  {
    id: 0,
    text: '리액트 공부하기',
    isDone: true,
  },
  {
    id: 1,
    text: 'vue 공부하기',
    isDone: false,
  },
  {
    id: 2,
    text: '집 가기',
    isDone: false,
  },
]

const removedTodo = todos.filter((todo) => {
  return todo !== 0
})

const doingList = todos.filter((todo) => {
  return !todo.isDone
})

console.log(doingList)

/**
 * reduce
 * 누적 연산자
 */

/**
 * max
 */

arr.reduce((prev, current) => {
  return prev < current ? current : prev
}, 0)

arr.reduce(() => {}, []) // => map
arr.reduce(() => {}, {})

/**
 * Array.includes
 * 값이 있는지 없는지 판단
 */
Object.keys(FILTER).includes('c')
arr.includes(60)

/**
 * some || every
 */
const numbers = [2, 4, 6, 8]
const isAllEven = numbers.every((n) => {
  return n % 2 == 0
})

/**
 * 복사
 */

const newArray = [...arr]
newArray.push({ a: 10 })

const newTodo = [
  {
    id: Date.now(),
    text: '리스트 3',
  },
  ...todos,
]

/**
 * 해제할당
 */

const [first] = newTodo
console.log(first.text)

/**
 * find()
 */
