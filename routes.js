// import app from "."

// app.get('/temp', (req, res) => {
//     const celsius = parseFloat(req.query.celsius)

//     if(isNaN(celsius)){
//         return res.status(400).json({ error: 'Invalid temparature in celsius'})
//     }

//     const kelvin = celsius + 273.15

//     res.json({ 
//         kelvin: kelvin,
//         celsius: celsius,
//      })
// })