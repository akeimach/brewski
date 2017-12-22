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
			type: DataTypes.INTEGER(3),
		},
		shortDes: {
			type: DataTypes.STRING,
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