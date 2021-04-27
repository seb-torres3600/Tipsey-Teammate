<<<<<<< HEAD


var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added

app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();


const dbConfig = {
	host: 'db',
	port: 5432,
	database: 'drinks',
	user: 'postgres',
	password: 'pwd'
};


var db = pgp(dbConfig);


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

app.get("/",(req,res)=>{
    res.render("pages/frontPage",{
    local_css:"UI.css",
    my_title:"Front Page"
    });
});

app.get('/frontPage', function(req, res) {
	res.render("pages/frontPage",{
		local_css:"UI.css",
		my_title:"Front Page",
		error: false
		});
	});
=======
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var pgp = require('pg-promise')();

const dbConfig = {
	host: 'db',
	port: 5432,
	database: 'football_db',
	user: 'postgres',
	password: 'pwd'
};
var db = pgp(dbConfig);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res) {
	var allDrinksQuery = "Select * from drinks;";
	db.any(allDrinksQuery)
		.then(function(rows){
			console.log(rows);
			res.render('pages/frontPage',{
				allDrinks:''
			})
		})
		.catch(function(err){
			console.log("error",err);
			res.render('pages/frontPage',{

			})
		})
});



app.get('/search', function(req, res) {
	// var drink_search = document.getElementById("searchID").value
	var drink_search = req.query.id;
	console.log(drink_search);
// sql search to have "like" or maybe contains and explicity for lowercase. Ask how to change
	var drinksQuery = "Select * from drinks WHERE drink_name LIKE '%" + drink_search + "%';";
	db.any(drinksQuery)
		.then(function(rows){
			// console.log(rows)
			// console.log(rows);
			res.render('pages/frontPage',{
				allDrinks:rows
			})
		})
		.catch(function(err){
			console.log("error",err);
			res.render('pages/frontPage',{

			})
		})
});

>>>>>>> 37a2698f9f34ffd27840bf8c718cc60fdbaab1ff

app.get('/newRecipes', function(req, res) {
	res.render("pages/newRecipes",{
		local_css:"UI.css",
<<<<<<< HEAD
		my_title:"New Recipes"
		});
	});

app.get('/drink_info', function(req, res) {
	res.render("pages/drink_info",{
		local_css:"UI.css",
		my_title:"Drink Info"
=======
		my_title:"New Recipes Page",
		error: false
		});
	});


app.get('/frontPage', function(req, res) {
	res.render("pages/frontPage",{
		local_css:"UI.css",
		my_title:"New Recipes Page",
		error: false
>>>>>>> 37a2698f9f34ffd27840bf8c718cc60fdbaab1ff
		});
	});


<<<<<<< HEAD

app.get('/frontPage/search', function(req, res) {
	var drink_search = req.query.id;
	var drink_choice = "select * from drinks WHERE drink_name = '"+ drink_search +"';";
	db.query(drink_choice, function(err,data,fields){
		if(err) throw err;
		res.render('drink_info',{title : 'Drink List', userData : data});
	});
});



app.listen(3001);
console.log("http://localhost:3001/");
=======
app.post('/newRecipes', function(req,res){
	console.log(req.body);
	var name = req.body.Drink_Name;
	// var ing1 = req.body.ingredient_one;

// ing1
	if(req.body.ingredient_one == ''){
		var ing1 = null;
		}
		else{
			var ing1 = req.body.ingredient_one;
		}

// q1
	if(req.body.quantity_one_oz == ''){
		var q1 = null;
		}
		else{
			var q1 = req.body.quantity_one_oz;
		}


// ing2
	if(req.body.ingredient_two == ''){
		var ing2 = null;
		}
		else{
			var ing2 = req.body.ingredient_two;
		}


// q2
	if(req.body.quantity_two_oz == ''){
		var q2 = null;
		}
		else{
			var q2 = req.body.quantity_two_oz;
		}

// ing3
	if(req.body.ingredient_three == ''){
		var ing3 = null;
		}
		else{
			var ing3 = req.body.ingredient_three;
		}


// q3
	if(req.body.quantity_three_oz == ''){
		var q3 = null;
		}
		else{
			var q3 = req.body.quantity_three_oz;
		}

// ing4
	if(req.body.ingredient_four == ''){
		var ing4 = null;
		}
		else{
			var ing4 = req.body.ingredient_four;
		}


// q4
	if(req.body.quantity_four_oz == ''){
		var q4 = null;
		}
		else{
			var q4 = req.body.quantity_four_oz;
		}

// ing5
	if(req.body.ingredient_five == ''){
		var ing5 = null;
		}
		else{
			var ing5 = req.body.ingredient_five;
		}


// q5
	if(req.body.quantity_five_oz == ''){
		var q5 = null;
		}
		else{
			var q5 = req.body.quantity_five_oz;
		}

// ing6
	if(req.body.ingredient_six == ''){
		var ing6 = null;
		}
		else{
			var ing6 = req.body.ingredient_six;
		}


// q6
	if(req.body.quantity_six_oz == ''){
		var q6 = null;
		}
		else{
			var q6 = req.body.quantity_six_oz;
		}

// ing7
	if(req.body.ingredient_seven == ''){
		var ing7 = null;
		}
		else{
			var ing7 = req.body.ingredient_seven;
		}


// q7
	if(req.body.quantity_seven_oz == ''){
		var q7 = null;
		}
		else{
			var q7 = req.body.quantity_seven_oz;
		}

// ing8
	if(req.body.ingredient_eight == ''){
		var ing8 = null;
		}
		else{
			var ing8 = req.body.ingredient_eight;
		}


// q8
	if(req.body.quantity_eight_oz == ''){
		var q8 = null;
		}
		else{
			var q8 = req.body.quantity_eight_oz;
		}

// ing9
	if(req.body.ingredient_nine == ''){
		var ing9 = null;
		}
		else{
			var ing9 = req.body.ingredient_nine;
		}


// q9
	if(req.body.quantity_nine_oz == ''){
		var q9 = null;
		}
		else{
			var q9 = req.body.quantity_nine_oz;
		}


	var insert_statement = "INSERT INTO drinks(drink_name,quantiry_one_oz,ingredient_one,quantity_two_oz,ingredient_two,quantity_three_oz,ingredient_three,quantity_four_oz,ingredient_four,quantity_five_oz,ingredient_five,quantity_six_oz,ingredient_six,quantity_seven_oz,ingredient_seven,quantity_eight_oz,ingredient_eight,quantity_nine_oz,ingredient_nine) VALUES('"+name+"',"+q1+",'"+ing1+"',"+q2+",'"+ing2+"',"+q3+",'"+ing3+"',"+q4+",'"+ing4+"',"+q5+",'"+ing5+"',"+q6+",'"+ing6+"',"+q7+",'"+ing7+"',"+q8+",'"+ing8+"',"+q9+",'"+ing9+"');";
	var allDrinksQuery = "Select * from drinks;";
	console.log(insert_statement);
	db.task('get-everything', task => {
        return task.batch([
            task.any(insert_statement),
            task.any(allDrinksQuery)
        ]);
    })
		.then(info => {
		res.render("pages/newRecipes",{
			local_css:"UI.css",
			my_title:"New Recipes Page",
			error: false
			})
		})
	// db.any(insert_statement);

});


app.get('/about', function(req, res) {
	res.render('pages/about',{

	});
});

app.listen(3000);
console.log('3000 is the magic port');
>>>>>>> 37a2698f9f34ffd27840bf8c718cc60fdbaab1ff
