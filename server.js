var express = require('express'); 
var bodyParser = require('body-parser'); 
var _ = require('underscore'); 

var app = express(); 
var PORT = process.env.PORT || 3000; 
var studio = []; 
var studios = []; 
var studioNextId = 1; 

app.use(bodyParser.json()); 

app.get('/', function(req, res){ 
res.send('Buy clothes'); 
}); 

// GET /todos 
app.get('/studio', function(req, res){ 
res.json(studio); 
}); 

// GET /todos/:id 
app.get('/studio/:id', function(req, res){ 
var studioId = parseInt(req.params.id, 10); 
var matchedStudio = _.findWhere(studio, {id: StudioId}); 

if(matchedStudio){ 
res.json(matchedStudio); 
}else{ 
res.status(404).send(); 
} 
}); 

// POST /todos 

app.post('/studio', function(req, res){ 
var body = _.pick(req.body, 'service_name', 'sum', 'number', 'total_cost'); 

if(!_.isString(body.service_name) || body.service_name.trim().length === 0 
|| body.sum.length===0 || !_.isNumber(body.sum) || body.number.length===0 || !_.isNumber(body.number) 
|| !_.isNumber(body.total_cost) || body.total_cost.length===0)

{ 

return res.status(400).send(); 
} 

body.service_name = body.service_name.trim(); 
body.id = studioNextId++; 


studio.push(body);  
 

//studios.push(body); 

res.json(body); 

}); 

//Delete 
app.delete('/studio/:id', function(req,res){ 
var studioId = parseInt(req.params.id,10); 
var matchedStudio = _.findWhere(studios, {id: studioId}); 

if(!matchedStudio){ 
res.status(404).json({"error": "no account found with that id"}); 
}else{ 
studios = _.without(studios, matchedStudio); 
res.json(matchedStudio); 
} 
}); 

app.listen(PORT, function(){ 
console.log('Express listening on port ' + PORT + '!'); 
});


