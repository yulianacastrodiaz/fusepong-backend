const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user_story',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      state: {
        type: DataTypes.ENUM("active", "in process", "cancelled", "finished"),
        allowNull: false,
        defaultValue: "active",
      }
    }
  )
}
