const mysql = require('mysql');

// Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

class User {
    constructor(first_name, last_name, email, phone, comments) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.comments = comments;
    }

    static view(callback) {
        // User the connection
        connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
            callback(err, rows);
        });
    }

    find() {

    }
}

module.exports = User;