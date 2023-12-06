// Squelize  ORM

const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(
    'av-player',
    "root",
    "123456",
    { host: 'localhost', port: 3306, dialect: 'mysql' }
)

// 测试链接
async function mian() {
    try {
        await sequelize.authenticate()
        console.log('数据库连接成功');
    } catch (error) {
        console.error('数据库连接失败', error);
        //关闭连接
        sequelize.close();
    }
}
mian();

'use strict';
const { Model } = require('sequelize');
class Singer extends Model {
    static associate(models) { }
}
Singer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex: {
            type: DataTypes.INTEGER,
        },
        pic: {
            type: DataTypes.STRING,
        },
        birth: {
            type: DataTypes.DATE,
        },
        location: {
            type: DataTypes.STRING,
        },
        introduction: {
            type: DataTypes.STRING,
        }

    },
    {
        sequelize,
        modelName: 'Singer',
        tableName: "singer",
        createdAt: false,
        updatedAt: false,
    }
);

// ! 查询
async function querySinger() {
    const result = await Singer.findAll({
        where: {
            // name: {
            //     [Op.eq]: '李荣浩'
            // }
            [Op.and]: [{ sex: 1 }, { name: "李荣浩" }]
        }
    });
    console.log(result);
}
// querySinger();

// !创建数据
async function createSinger() {
    const result = await Singer.create({ name: "胡乱写的", sex: 1, pic: "pic", birth: '2022-1-2', location: "中国金门", introduction: "随意写的假数据" })

    console.log(result.id);
}

// createSinger()

// !更新数据
async function updateSinger() {
    const result = await Singer.update({ name: "怎么可以胡乱写呢", sex: 1, pic: "pic", birth: '2022-1-2', location: "中国金门", introduction: "随意写的假数据" }, { where: { id: 44 } });
    console.log(result, "更新成功");
}
// updateSinger()

// !删除数据

async function deleteSinger() {
    const result = await Singer.destroy({ where: { id: 44 } });
    console.log(result, "删除成功");
}
deleteSinger()

