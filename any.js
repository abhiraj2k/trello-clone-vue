temperature = [
  {
    city: 'mumbai',
    temp: 35
  },
  {
    city: 'pune',
    temp: 40
  },
  {
    city: 'jhansi',
    temp: 27
  },
  {
    city: 'bhopal',
    temp: 45
  },
  {
    city: 'delhi',
    temp: 34
  }
]

temperature.sort((c1, c2) => {
  return c1.temp - c2.temp
})

console.log(temperature)
