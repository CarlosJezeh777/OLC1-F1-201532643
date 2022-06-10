var express =  require('express');
var morgan =  require('morgan');
var app =  express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8080,function() {
    console.log("escuchando en 8080")
})

app.get('/', function(req, res) {
    res.json({mensaje:"hola mundo"});
})

app.get('/texto', function(req, res) {
    res.send("hola mundo");
})

