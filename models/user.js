module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
        		len: {
          			args: [2, 70],
          			msg: "The user name must have between 2 and 70 characters"
        		}
      		}

		},
		password: {
			type: DataTypes.STRING,

		},
		age: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			validate: {
				min: {
					args: 21,
					msg: "You need to be at least 21 to use this app"
				},
				max: {
					args: 120,
					msg: "I highly doubt you are that old"
				}
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        		isEmail: {
          			args: true,
          			msg: "The email must be in a valid format"
		        }
		    }

		},
		location: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	User.associate = (models) => {
		User.hasMany(models.Review, {
			onDelete: "CASCADE"
		});
		User.belongsToMany(models.Beer, {
			through: { model: models.UserBeer }
		});
  	};
	return User;
};