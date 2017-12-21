module.exports = (sequelize, DataTypes) => {
	const Beer = sequelize.define("Beer", {
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

	Beer.associate = (models) => {
		Beer.hasMany(models.Review, {
			onDelete: "CASCADE"
		});
		Beer.belongsToMany(models.Users, {
			through: {model: models.UsersBeer}
		});
	};
	return Beer;
};