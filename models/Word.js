module.exports = (sequelize, DataTypes) => {
    const Word = sequelize.define('word', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        word_en: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Already Exists!'
            }
        },
        word_bn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false
        },
        freq: {
            type: DataTypes.STRING,
            allowNull: false
        },
        syno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sen_en: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })
    return Word;
}
