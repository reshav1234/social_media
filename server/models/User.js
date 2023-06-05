const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const userlist = [
    {'name':'Reshav'},
    {'name':'Aarjan'}
]

app.use(express.json())

app.get('/api/users', (req, res) =>{
    res.json(userlist)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
