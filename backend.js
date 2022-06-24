var express = require("express");
const path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'naveenkarthik@student.tce.edu',
        pass: 'SPDF9901'
    }
});
var app = express();
app.use(cookieParser());
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'LifeCare'
})

db.connect((error) => {
    if (error) {
        console.log(error + "\nDatabase not Connected");
    } else {
        console.log("MySQL connected");
    }
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, './static')));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.clearCookie('user');
    res.clearCookie('hospital_user');
    res.render('Home');
}).listen(6767);


app.get('/about', (req, res) => {
    return res.render("About");
})

app.get('/navbar', (req, res) => {
    return res.render('navbar');
})

app.get('/bed_available', (req, res) => {
    db.query('SELECT * FROM `beds availability`', (err, result) => {
        if (err) {
            return res.render('bed_available', { data: "No Data Found" });
        } else {
            console.log(result);
            return res.render('bed_available', { data: JSON.stringify(result) });
        }
    })
})

app.get('/bed_book', (req, res) => {
    return res.render('bed_book');
})

app.get('/UserLogin', (req, res) => {
    return res.render('UserLogin', { error: '' });
})

app.get('/UserSignup', (req, res) => {
    return res.render('UserSignup', { error: '' });
})

app.post('/user_signup_submit', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var phone = req.body.phone;
    var name = req.body.name;
    var address = req.body.address;
    var statement = `INSERT INTO USERS VALUES('${username}','${password}','${name}','${email}','${phone}','${address}')`;
    db.query(statement, (error, result) => {
        if (error) {
            res.cookie("user", username);
            return res.render('UserSignUp', { error: "UserName is already taken!" });
        } else {
            return res.render('UserHome');
        }
    })
})

app.post("/user_login_submit", (req, res) => {
    var user = req.body.user;
    var pswd = req.body.pswd;
    db.query(`SELECT password FROM USERS WHERE username='${user}'`, function(err, result) {
        if (err) {
            return res.render('UserLogin', { error: 'Invalid Credentials!' });
        } else {
            try {
                if (result[0].password == pswd) {
                    res.cookie("user", user);
                    return res.render('UserHome');
                } else {
                    return res.render('UserLogin', { error: 'Invalid Credentials!' });
                }
            } catch {
                return res.render('UserLogin', { error: 'Invalid Credentials!' });
            }
        }
    })
})

app.get('/UserNavbar', (req, res) => {
    return res.render('Usernavbar');
})

app.get('/UserHome', (req, res) => {
    return res.render('UserHome');
})

app.get('/appointment', (req, res) => {
    return res.render('appointment');
})

app.post('/appointment_fix', (req, res) => {
    var age = req.body.age;
    var problem = req.body.problem;
    var hospital = req.body.hospital;
    var date = req.body.date;
    var time = req.body.time;
    var user = req.cookies.user;
    console.log(age + " " + problem + " " + hospital + " " + date + " " + time + " " + user + "\n");
    var email = "";
    db.query(`SELECT name,phone,email from USERS where username='${user}'`, (err, result) => {
        console.log(result);
        var statement = `INSERT INTO appointments(name,phone,email,age,problem,date,hospital) VALUES('${result[0].name}','${result[0].phone}','${result[0].email}',${age},'${problem}','${date}, ${time}','${hospital}')`;
        console.log(statement);
        db.query(statement, (error) => {
            if (error) {
                console.log(error);
            }
        })
    })
    return res.render('close');

})

app.get('/onlineconsultancy', (req, res) => {
    return res.render('onlineconsultancy');
})

app.post('/consultancy_fix', (req, res) => {
    var age = req.body.age;
    var problem = req.body.problem;
    var hospital = req.body.hospital;
    var date = req.body.date;
    var time = req.body.time;
    var user = req.cookies.user;
    console.log(age + " " + problem + " " + hospital + " " + date + " " + time + " " + user + "\n");
    var email = "";
    db.query(`SELECT name,phone,email from USERS where username='${user}'`, (err, result) => {
        console.log(result);
        var statement = `INSERT INTO virtual_consultancy(name,phone,email,age,problem,date,hospital) VALUES('${result[0].name}','${result[0].phone}','${result[0].email}','${age}','${problem}','${date}, ${time}','${hospital}')`;
        console.log(statement);
        db.query(statement, (error) => {
            if (error) {
                console.log(error);
            }
        })
    })
    return res.render('close');

})

app.get('/bed_available0', (req, res) => {
    db.query('SELECT * FROM `beds availability`', (err, result) => {
        if (err) {
            return res.render('bed_available0', { data: "No Data Found" });
        } else {
            return res.render('bed_available0', { data: JSON.stringify(result) });
        }
    })
})

app.post('/book_bed', (req, res) => {
    var id = req.body.id;
    var reason = req.body.reason;
    var name = req.body.name;
    var phone = req.body.phone;
    var email = req.body.email;
    console.log(id + " " + reason + " " + name + " " + email + " " + phone);
    var statement = "Bed Booking Request:\n\nName- " + name + "\nPhone- " + phone + "\nEmail- " + email + "\nReason- " + reason;
    db.query(`SELECT email from HOSPITALS where phone='${id}'`, (err, res) => {
        email = res[0].email;
        var mailOptions = {
            from: 'naveenkarthik@student.tce.edu',
            to: email,
            subject: 'Request For Bed Booking',
            text: statement
        };
        transporter.sendMail(mailOptions);
    });
    return res.render('Home');
})

app.post('/book_bed0', (req, res) => {
    var id = req.body.id;
    var reason = req.body.reason;
    var user = req.cookies.user;
    var email = "";
    console.log(id + " " + reason + " " + user + " " + email);
    db.query(`SELECT name,phone,email from USERS where username='${user}'`, (err, res) => {
        var statement = "Name- " + res[0].name + "\nPhone- " + res[0].phone + "\nEmail- " + res[0].email + "\nReason- " + reason;
        db.query(`SELECT email from HOSPITALS where phone='${id}'`, (err, res) => {
            email = res[0].email;
            var mailOptions = {
                from: 'naveenkarthik@student.tce.edu',
                to: email,
                subject: 'Request For Bed Booking',
                text: statement
            };

            transporter.sendMail(mailOptions);
        })
    });
    return res.render('UserHome');
})

app.get('/Hospitalnavbar', (req, res) => {
    return res.render('Hospitalnavbar');
})

app.get('/HospitalLogin', (req, res) => {
    return res.render('HospitalLogin', { error: '' });
})

app.get('/HospitalSignup', (req, res) => {
    return res.render('HospitalSignUp', { error: '' });
})

app.post('/hospital_login_submit', (req, res) => {
    var user = req.body.user;
    var pswd = req.body.pswd;
    db.query(`SELECT password FROM Hospitals WHERE username='${user}'`, function(err, result) {
        if (err) {
            return res.render('HospitalLogin', { error: 'Invalid Credentials!' });
        } else {
            try {
                if (result[0].password == pswd) {
                    res.cookie("hospital_user", user);
                    return res.render('HospitalHome', { error: "" });
                } else {
                    return res.render('HospitalLogin', { error: 'Invalid Credentials!' });
                }
            } catch {
                return res.render('HospitalLogin', { error: 'Invalid Credentials!' });
            }
        }
    })
})

app.post('/hospital_signup_submit', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var phone = req.body.phone;
    var name = req.body.name;
    var address = req.body.address;
    var statement = `INSERT INTO HOSPITALS VALUES('${username}','${password}','${name}','${email}','${phone}','${address}')`;
    db.query(statement, (error, result) => {
        if (error) {
            return res.render('HospitalSignUp', { error: "UserName is already taken!" });
        } else {
            res.cookie("hospital_user", username);
            return res.render('HospitalHome', { error: "" });
        }
    })
})

app.get('/HospitalHome', (req, res) => {
    return res.render('HospitalHome', { error: "" });
})

app.get('/update_bed_availability', (req, res) => {
    return res.render('update_bed_availability');
})

app.post('/update_bed_submit', (req, res) => {
    var user = req.cookies.hospital_user;
    var tot = req.body.total_beds;
    var beds = req.body.beds_avail;
    db.query(`SELECT name from HOSPITALS WHERE username= '${user}'`, (err, res) => {
        db.query("UPDATE `beds availability` SET `total beds`=" + tot + ",`beds available`=" + beds + ` WHERE name='${res[0].name}'`, (err1, res1) => {
            if (err1) {
                res.render('HospitalHome', { error: "Something went wrong. Please try again later" });
            }
        })
    })
    return res.render('HospitalHome', { error: "" });
})

app.get('/check_appointments', (req, res) => {
    var user = req.cookies.hospital_user;
    db.query(`SELECT name FROM hospitals where username= '${user}'`, (err, result) => {
        db.query(`SELECT * FROM appointments where hospital='${result[0].name}'`, (err, result) => {
            if (err) {
                return res.render('check_appointments', { data: "No Data Found" });
            } else {
                return res.render('check_appointments', { data: JSON.stringify(result) });
            }
        })
    })
})

app.get('/appointment_reply', (req, res) => {
    return res.render('appointment_reply');
})

app.post('/appointment_change', (req, res) => {
    var user = req.cookies.hospital_user;
    var id = req.body.id;
    var check = req.body.check;
    var date = req.body.date;
    var time = req.body.time;
    db.query(`SELECT * FROM appointments WHERE id=${id}`, (err, result) => {
        if (check == "deny" || check == "accept") {
            var statement = `Greetings from Trio Techies,\nAppointment for ${result[0].hospital} was applied on ${result[0].date}\nStatus - ${check}\n`;
            if (date != '' || time != '') {
                statement += `Date - ${date} ${time}`;
            } else {
                statement += `Date - ${result[0].date}`;
            }
            var mailOptions = {
                from: 'naveenkarthik@student.tce.edu',
                to: result[0].email,
                subject: 'Reply for Appointment',
                text: statement
            };

            transporter.sendMail(mailOptions);
        }
        if (check == "deny") {
            db.query(`DELETE FROM appointments WHERE id=${id};`, (err, result) => {
                if (err) throw err;
            });
        } else {
            db.query(`UPDATE appointments SET date="${date}, ${time}" where id=${id};`, (err, result) => {
                if (err) throw err;
            })
        }
    })
    return res.render('close');
})

app.get('/virtual_appointments', (req, res) => {
    var user = req.cookies.hospital_user;
    db.query(`SELECT name FROM hospitals where username= '${user}'`, (err, result) => {
        db.query(`SELECT * FROM virtual_consultancy where hospital='${result[0].name}'`, (err, result) => {
            if (err) {
                return res.render('virtual_appointments', { data: "No Data Found" });
            } else {
                return res.render('virtual_appointments', { data: JSON.stringify(result) });
            }
        })
    })
})

app.get('/onlineconsultancy_reply', (req, res) => {
    return res.render('onlineconsultancy_reply');
})

app.post('/virtual_consultancy_change', (req, res) => {
    var user = req.cookies.hospital_user;
    var id = req.body.id;
    var check = req.body.check;
    var date = req.body.date;
    var time = req.body.time;
    db.query(`SELECT * FROM virtual_consultancy WHERE id=${id}`, (err, result) => {
        if (check == "deny" || check == "accept") {
            var statement = `Greetings from Trio Techies,\nVirtual Appointment for ${result[0].hospital} was applied on ${result[0].date}\nStatus - ${check}\n`;
            if (date != '' || time != '') {
                statement += `Date - ${date} ${time}`;
            } else {
                statement += `Date - ${result[0].date}`;
            }
            var mailOptions = {
                from: 'naveenkarthik@student.tce.edu',
                to: result[0].email,
                subject: 'Reply for Virtual Appointment',
                text: statement
            };

            transporter.sendMail(mailOptions);
        }
        if (check == "deny") {
            db.query(`DELETE FROM virtual_consultancy WHERE id=${id};`, (err) => {
                if (err) throw err;
            });
        } else {
            db.query(`UPDATE virtual_consultancy SET date="${date}, ${time}" where id=${id};`, (err) => {
                if (err) throw err;
            })
        }
    });
    return res.render('close');
})