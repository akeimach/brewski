module.exports = function (sequelize, DataTypes) {
	const UserBeer = sequelize.define("UserBeer");
	return UserBeer;
};