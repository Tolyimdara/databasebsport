module.exports = (sequelize, Sequelize) => {
    const Owner = sequelize.define("owner", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING,
            required: true
        },
        last_name: {
            type: Sequelize.STRING,
            required:true
        },
        pitch_name: {
            type: Sequelize.STRING,
            required:true
        },
        email: {
            type: Sequelize.STRING,
            required: true
        },
        password: {
            type: Sequelize.STRING,
             required: true 
        },
        phone_number: {
            type: Sequelize.STRING,
            required: true
        },
        address: {
            type: Sequelize.STRING,
            required:true
        },
        ImageOwner: {
            type: Sequelize.STRING,
            required:true
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
            {
                timestamps: false
            }
            );
  
    return Owner;
  };