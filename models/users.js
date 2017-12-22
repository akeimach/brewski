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