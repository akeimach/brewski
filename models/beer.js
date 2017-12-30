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
		ibu: {
			type: DataTypes.INTEGER(3),
		},
		foodPairings: {
			type: DataTypes.STRING,
		},
		isOrganic: {
			type: DataTypes.BOOLEAN,
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