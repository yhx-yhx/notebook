const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize(
    'av-player',
    "root",
    "123456",
    { host: 'localhost', port: 3306, dialect: 'mysql' }
)


class Singer extends Model {
    static associate(models) { }
}
Singer.init(
    {

    },
    {
        sequelize,
        modelName: 'Singer',
    }
);
return Singer;
