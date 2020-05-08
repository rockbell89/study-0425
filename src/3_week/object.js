const FILTER = {
  ALL: 'ALL',
  TODO: 'TODO',
  DONE: 'DONE',
}

/**
 * 접근법
 */

FILTER.ALL
FILTER['ALL']

/**
 * fallback
 */
function getFilter(type) {
  return FILTER[type] || FILTER.ALL
}

getFilter('TODO')

/**
 * Object 복사
 */

// FILTER.LEGACY = 'LEGACY'

// Object.assign() // es5

const NEW_FILTER = { ...FILTER } // es6

NEW_FILTER.LEGACY = 'LEGACY'
console.log(`old ${JSON.stringify(FILTER)}`)
console.log(`new ${JSON.stringify(NEW_FILTER)}`)

/**
 * Object.keys
 */

const keys = Object.keys(FILTER)

/**
 * Object.values
 */

const values = Object.values(FILTER)
