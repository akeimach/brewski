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
			// find way to avg score from reviews
			type: DataTypes.TINYINT(1),
		}
	});

	Review.associate = (models) => {
		Review.belongsTo(models.User);
		Review.belongsTo(models.Beer, {
			onDelete: 'CASCADE'
		});
	};	
	return Review;
};