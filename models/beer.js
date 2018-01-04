module.exports = (sequelize, DataTypes) => {
  const Beers = sequelize.define("Beers", {
    beername: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    brewery: {
      type: DataTypes.TEXT,
    },
    abv: {
      type: DataTypes.FLOAT,
    },
    ibu: {
      type: DataTypes.FLOAT,
    },
    foodPairings: {
      type: DataTypes.STRING,
    },
    isOrganic: {
      type: DataTypes.CHAR,
    },
    shortDes: {
      type: DataTypes.TEXT("long"),
    }
  });

  Beers.associate = (models) => {
    Beers.hasMany(models.Reviews, {
      onDelete: "CASCADE"
    });
    Beers.belongsToMany(models.Users, {
      through: {model: models.UsersBeers}
    });
  };
  return Beers;
};