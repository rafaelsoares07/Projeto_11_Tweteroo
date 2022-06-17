import express from 'express'
import cors from 'cors'

const app = express()//Iniciar o servidor 
app.use(cors()) //Permitir acesso do Front End ao Back End
app.use(express.json()); // com isso o pegar o rec do user funcionou 

let usuarioTweterooAtual;

let tweets = [
	{
		username: "bobesponja",
	    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "eu amo o hub"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	}
]


app.post('/sign-up', (req, res)=>{

    usuarioTweterooAtual = []

    usuarioTweterooAtual.push(
        {
            username: req.body.username,
            avatar: req.body.avatar
        }
    )

    res.send('OK!')

})


app.post('/tweets', (req, res)=>{
    console.log(usuarioTweterooAtual[0].avatar)

    tweets.push(
        {
            username: req.body.username,
            avatar:usuarioTweterooAtual[0].avatar,
            tweet: req.body.tweet
        }
    )

    console.log(tweets)
    res.send('OK!')
})



app.get('/tweets', (req, res)=>{

    let aux = 0;
    tweets.length > 10? aux = tweets.length-10 : aux = 0;

    res.send(tweets.filter((item,index)=> index>=aux).reverse())
})


app.listen(5000)