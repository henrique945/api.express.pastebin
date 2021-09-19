const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const Document = require('./models/Document')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/pastebin')

app.get('/', (req, res) => {
	const code = `Bem vindo ao Pastebin!
	
Use o menu a sua direita para criar novos arquivos 
e compartilhar com seus amigos.`

	res.render('home', { code })
})

app.get('/new', (req, res) => {
	res.render('new')
})

app.post('/save', async (req, res) => {
	const value = req.body.value;
	try {
		const document = await Document.create({ value })
		res.redirect(`/${document.id}`)
	} catch (e) {
		res.render('new', { value })
	}
})

app.listen(3000)
