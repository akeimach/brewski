module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2, 70],
          msg: "The users name must have between 2 and 70 characters"
        }
      }
    },
    googleId: {
      type: DataTypes.TEXT("long")
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: {
          args: true,
          msg: "The email must be in a valid format"
        }
      }
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Users.associate = (models) => {
    Users.hasMany(models.Reviews, {
      onDelete: "CASCADE"
    });
    Users.belongsToMany(models.Beers, {
      through: { model: models.UsersBeers }
    });
  };
  return Users;
};