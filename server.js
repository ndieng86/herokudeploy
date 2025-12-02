const express =require('express');// utilise express
const app = express(); //crée une instance de express dans app
const dotenv = require('dotenv')


dotenv.config();

app.set('views', './views'); //defini le dossier pour les views
app.set('view engine', 'ejs');//défini ejs comme outil pour utiliser les views
app.use('/public', express.static('public'));

app.get('/voitures', (req, res)=>{
    res.render('voitures.ejs', {pageTitle: "voitures"});
});

app.get('/services', (req, res)=>{
    res.render('services.ejs', {pageTitle: "services"});
});

app.get('/partenaires', (req, res)=>{
    res.render('partenaires.ejs', {pageTitle: "partenaires"});
});

app.get('/contact', (req, res)=>{
    res.render('contact.ejs', {pageTitle: "Contact"});
});

app.get('/about', (req, res)=>{
    res.render('about.ejs', {pageTitle: "Notre Game de Voiture de Luxe"});
});


app.get('/', (req, res)=>{
    res.render('index', {pageTitle: "Accueil"});
});



app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
