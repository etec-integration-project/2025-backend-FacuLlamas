"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Eliminar el campo 'imageBase64' (si existía)
    await queryInterface.removeColumn("Products", "imageBase64");

    // Agregar el nuevo campo 'imageUrl'
    await queryInterface.addColumn("Products", "imageUrl", {
      type: Sequelize.TEXT("long"),
      allowNull: true, // Puedes configurarlo como no nulo si es obligatorio
    });
  },

  down: async (queryInterface, Sequelize) => {
    // En caso de revertir, eliminamos 'imageUrl' y restauramos 'imageBase64'
    await queryInterface.removeColumn("Products", "imageUrl");
    await queryInterface.addColumn("Products", "imageBase64", {
      type: Sequelize.TEXT("long"),
      allowNull: true, // Puedes cambiar esto según tu preferencia
    });
  },
};
