const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "El mail debe ser un correo valido."
          },
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "El nombre solo puede ser de caracteres alfabéticos"
          },
          len: {
            args: [3, 255],
            msg: "El nombre debe ser de mínimo 3 caracteres"
          }
        }
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      }
    }
  )
}
