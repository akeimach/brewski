module.exports = (sequelize, DataTypes) => {
	const Review = sequelize.define("Review", {
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

	Review.associate = (models) => {
		Review.belongsTo(models.Users);
		Review.belongsTo(models.Beer);
	};	
	return Review;
};