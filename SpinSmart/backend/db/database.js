const sqlite3 = require('sqlite3').verbose(); // Import SQLite library

// Create a new SQLite database or connect to an existing one
const db = new sqlite3.Database('./db/laundry.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message); // Log error if database connection fails
  } else {
    console.log('Connected to SQLite database.'); // Log success message

    // Create the users table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        card_number TEXT UNIQUE NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        password TEXT NOT NULL,
        status TEXT DEFAULT 'active' -- Add status column with default value
      )
    `, (err) => {
      if (err) {
        console.error('Error creating users table:', err.message);
      } else {
        console.log('Users table created successfully.');
      }
    });

    // Create the laundry_orders table
    db.run(`
      CREATE TABLE IF NOT EXISTS laundry_orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        card_number TEXT NOT NULL,
        items INTEGER NOT NULL,
        status TEXT NOT NULL,
        FOREIGN KEY (card_number) REFERENCES users (card_number)
      )
    `, (err) => {
      if (err) {
        console.error('Error creating laundry_orders table:', err.message);
      } else {
        console.log('Laundry orders table created successfully.');
      }
    });
  }
});

// Export the database object for use in other modules
module.exports = db;