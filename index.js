const express = require('express');
const app = express();
const mongoose = require('mongoose');
require( 'dotenv' ).config();

const authRoute= require('./routes/auth')
const userRoute= require('./routes/users')
const movieRoute= require('./routes/movies')
const listRoute= require('./routes/lists')

mongoose
	.connect(process.env.DB_URL)
	.then(console.log('mongodb'))
	.catch((err) => {
		console.log(err);
    } );

app.use( express.json() )

app.use( '/auth', authRoute )
app.use( '/users', userRoute )
app.use( '/movies', movieRoute )
app.use( '/lists', listRoute )

app.listen(8800, () => {
	console.log('server is running at ', 8800);
});
