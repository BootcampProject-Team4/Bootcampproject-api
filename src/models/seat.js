import { DataTypes } from 'sequelize';
import db from '../db.js';
import Place from './place.js';
import Seatcategory from './seatcategory.js'


const Seat = db.sequelize.define("Seat", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  benchseat: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.INTEGER,
  },
  pay: {
    type: DataTypes.INTEGER,
  },
});

Place.hasMany(Seat);
Seatcategory.hasMany(Seat);


// Kontrol et ve tabloyu oluştur veya güncelle.

export default Seat;