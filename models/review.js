module.exports = (sequelize, DataTypes) => {
	const Reviews = sequelize.define("Reviews", {
		starred: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		beerRev: {
			type: DataTypes.TEXT,
		},
		beerScore: {
			type: DataTypes.TINYINT(1),
		}
	});

	Reviews.associate = (models) => {
		Reviews.belongsTo(models.Users);
		Reviews.belongsTo(models.Beers);
	};	
	return Reviews;
};