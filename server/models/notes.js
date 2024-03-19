"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notes.belongsTo(models.User, { as: "user", foreignKey: "userId" });
    }
  }
  Notes.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      images: DataTypes.STRING,
      note_date: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      background: DataTypes.STRING,
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Notes",
    }
  );
  return Notes;
};
