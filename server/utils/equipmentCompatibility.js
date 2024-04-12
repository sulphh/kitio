const cableCategoryMapping = require('./compatibilityMapping').cableCategoryMapping; // Assuming cableCategoryMapping is exported from compatibilityMapping.js

function getCableTypeFromConnection(connection) {
  // Assuming you have a connection schema with a cableType property
  return connection.cableType;
}

function checkEquipmentCompatibility(equipment1, equipment2) {
  const equipment1OutputType = cableCategoryMapping[getCableTypeFromConnection(equipment1.outputs[0])];
  const equipment2InputType = cableCategoryMapping[getCableTypeFromConnection(equipment2.inputs[0])];

  const compatibleTypes = compatibilityMapping[equipment1OutputType].compatibleWith;

  return compatibleTypes.includes(equipment2InputType);
}

module.exports = checkEquipmentCompatibility;
