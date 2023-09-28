const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

//Standart Route
/********************************************************************************************** */
app.get('/', (req, res) => {
    res.json("Hello World!")
})

//Convert celsius to kelvin
/********************************************************************************************** */
app.get('/temp', (req, res) => {
    const celsius = parseFloat(req.query.celsius)

    if(isNaN(celsius)){
        return res.status(400).json({ error: 'Invalid temparature in celsius' })
    }

    const kelvin = celsius + 273.15
    
    res.json({ 
        celsius: celsius,
        kelvin: kelvin,
     })
    })

//Calculate prime numbers up to a certain limit
/********************************************************************************************** */
function calculatePrimes(limit) {
    const primes = []
    const sieve = new Array(limit + 1).fill(true)
    
    for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false
            }
        }
    }

    for (let k = 2; k <= limit; k++) {
        if (sieve[k]) {
            primes.push(k)
        }
    }

    return primes
}

app.get('/prime', (req, res) => {
    const limit = parseFloat(req.query.limit)

    if(isNaN(limit)) {
        return res.status(400).json({ error: "Limit can't be left empty" })
    } else if (limit > 10000) {
        return res.status(400).json({ error: "Limit was exceeded" })
    }
    
    const primes = calculatePrimes(limit);
    
    res.json({primes: primes})
})

//Calculate fibonacci number from a certain number
/********************************************************************************************** */
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n -2)
    }
}

app.get('/number', (req, res) => {
    const n = parseFloat(req.query.n)
    
    if(n > 50) {
        res.status(400).json({ error: "Exceeded Limit of 50" })
    }
    
    const numbers = fibonacci(n)
    
    res.json({numbers: numbers})
})

//Run Server
/********************************************************************************************** */
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})

