// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Highscore = sequelize.define("Highscore", {
    // The email cannot be null, and must be a proper email before creation
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Highscore.associate = function(models) {
    Highscore.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Highscore;
};
