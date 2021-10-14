const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('company',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "El nombre no debe estar vacío"
          },
          len: {
            args: [2, 255],
            msg: "El nombre debe tener mínimo 2 caracteres"
          }
        }
      },
      nit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "El mail debe ser un correo valido; debe tener este formato (foo@bar.com)"
          },
        }
      },
    }
  )
}
