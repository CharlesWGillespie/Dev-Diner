const db = require('../config/connection');
const MenuItem = require('../models/menuItem');
const menuItemSeeds = require('./menuItemSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    // Clean up existing data
    await cleanDB('MenuItem', 'menuItems');

    // Seed menu items
    await MenuItem.create(menuItemSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seed data inserted successfully!');
  process.exit(0);
});
