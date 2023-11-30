import { DataTypes } from 'sequelize';
import db from '../db.js';
import Place from './place.js';
import Category from './category.js'
import activityData from "../mockData/activityData.js";

const Activity = db.sequelize.define("Activity", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,    
  },
  startdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  enddate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  starttime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endtime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    //allowNull: false,
    unique: true,
  },

});
Place.hasOne(Activity);
Category.hasMany(Activity);

// Kontrol et ve tabloyu oluştur veya güncelle.
Activity.sync()
  .then(() => {
        const activities = activityData;

        activities.forEach(async (x) => {
          const activity = await Activity.findOne({ where: { name: x.name } });

          if (!activity) Activity.create(x);
        });
        
    console.log("Activity modeli oluşturuldu veya güncellendi.");
  })
  .catch((err) => {
    console.error("Activity modeli oluşturulurken hata oluştu:", err);
  });

export default Activity;