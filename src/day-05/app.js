const inventors = [
  { first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', born: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', born: 1858, passed: 1947 }
]

const people = [
  'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
]

// Filter
// 1. filter the list of inventors for those who were born in 16th century.
const sixteenthCenturyInventors = inventors.filter(inventor => inventor.born >= 1500 && inventor.born <= 1599)

console.table(sixteenthCenturyInventors)

// Map
// 2. Give us an array of the inventors first and last names.
const inventorNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.log(inventorNames)

// Sort
// 3. Sort the inventors by birth year, oldest to youngest.
const inventorsByBirth = inventors.sort((a, b) => a.born > b.born)

console.table(inventorsByBirth)

// Reduce
// 4a. How many years did the each inventor live?
const inventorsLifespan = inventors.reduce((previous, inventor) => {
  inventor.age = inventor.passed - inventor.born
  previous.push(inventor)

  return previous
}, [])

console.table(inventorsLifespan)

// 4n. Total lifespan of inventors
const totalLifespan = inventorsLifespan.reduce((total, inventor) => {
  total += inventor.age

  return total
}, 0)

console.log(totalLifespan)

// 5. Sort the inventors by life span
const inventorsByAge = inventorsLifespan.sort((a, b) => a.age > b.age)

console.table(inventorsByAge)

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Note: Run this in console for the page
// const links = document.querySelector('.mw-category').querySelectorAll('a')
// const boulevards = [...links]
//                     .map(link => link.innerText)
//                     .filter(boulevard => boulevard.includes('de'))

// 7. Sort the people by alphabetically by last name

// Convert to object
const peopleNames = people.map(person => {
  const [
    lastName,
    firstName
  ] = person.split(',')
            .map(name => name.trim())

  return { first: firstName, last: lastName }
})

// Sort by last name
const peopleByFirstName = peopleNames.sort((a, b) => a.last.slice(0, 1) > b.last.slice(0, 1))

console.table(peopleByFirstName)

// 8. Reduce excercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car']

const tally = data.reduce((previous, activity) => {
  previous[activity] = (previous[activity] || 0) + 1

  return previous
}, {})

console.log(tally)
