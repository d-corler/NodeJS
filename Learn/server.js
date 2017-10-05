console.log("Initialisation ... | " + Date.now());

// Librairies
const express = require('express');
const twig = require('twig');

// Configuration
const portDuServeur = 8080;

// ---------------------------------------------------------------------

let app = express();

// Configuration de Twig
app.set("twig options", {
    strict_variables: false
});

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Accueil du site NodeJS');
});

app.get('/login', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Login');
});

app.get('/user/:username/test', function(req, res) {

    if(!isNaN(req.params.username)) {
        res.render('index.twig', {
            message : req.params.username
        });

    } else {
        res.status(404).send('Page introuvable !');
    }

});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(portDuServeur);