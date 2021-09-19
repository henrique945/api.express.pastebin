const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
	const code = `Bem vindo ao Pastebin!
	
Use o menu a sua direita para criar novos arquivos 
e compartilhar com seus amigos.`

	res.render('home', { code })
})

app.listen(3000)
