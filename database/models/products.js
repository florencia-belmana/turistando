
module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      product: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: dataTypes.DECIMAL,
        allowNull: false,
      },
      image: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: dataTypes.TEXT,
      },
      createdAt: {
        type: dataTypes.DATE,
      },
      updatedAt: {
        type: dataTypes.DATE,
      },
      deletedAt: {
        type: dataTypes.DATE,
      },
      category_id: {
        type: dataTypes.INTEGER,
      }
    };

    let config = {
      tableName: "products",
      timestamps: true,
    //  paranoid: false
    }

    let Product = sequelize.define(alias,cols,config);

    


  return Product;

}