/* globals require,__dirname */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost:27017/employeesDb', function (err) {
    if (err) {
        console.log('Have some problem while connecting to DB');
    } else {
        console.log('Connected to DB successfully');

    }

});

var Employee = mongoose.model('employee', mongoose.Schema({
    name: String,
    dept: String,
    area: String,
    status: String,
    contact: String,
    salary: String
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

/*var employee = new Employee({
    name: 'zzzz',
    dept: 'uuuuu',
    area: 'kkkkk',
    status: 'xyz',
    contact: '12345',
    salary: '00000'
});
employee.save();*/

//Getting All the Employees
app.get('/api/employees', function (req, res) {

    Employee.find(function (err, employees) {
        if (err) {
            res.send(err);
        }
        res.json(employees);

    });
});

//Getting employee details based on id
app.get('/api/employees/:id', function (req, res) {
    var id = req.params.id;

    Employee.findOne({
        _id: id
    }, function (err, employee) {
        if (err) {
            res.send(err);
        }
        res.json(employee);

    });
});



//Saving employee Details

app.post('/api/employees', function (req, res) {
    Employee.create(req.body, function (err, employee) {
        if (err) {
            res.send(err);
        }
        res.json(employee);

    });
});



//Deleting Employee

app.delete('/api/employees/:id', function (req, res) {
    var id = req.params.id;
    Employee.findOneAndRemove({
        _id: id
    }, function (err, employee) {
        if (err) {
            res.send(err);
        }
        res.json(employee);

    });
});




//Updating Employee

app.put('/api/employees/:id', function (req, res) {
    var query = {
        name: req.body.name,
        dept: req.body.dept,
        area: req.body.area,
        status: req.body.status,
        contact: req.body.contact,
        salary: req.body.salary
    };
    var id = req.params.id;
    Employee.findOneAndUpdate({
        _id: id
    }, query, function (err, employee) {
        if (err) {
            res.send(err);
        }
        res.json(employee);

    });
});


app.listen(3000, function () {
    console.log('Server is running on 3000');
});