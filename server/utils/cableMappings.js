const cableCategoryMapping = {
    'SDI': 'Video',
    'HDMI': 'Video',
    'XLR': 'Audio',
    'AES/EBU': 'Audio',
    'RJ45/Ethernet': 'Network',
    'Fiber Optic': 'Network',
    'USB': 'Computer',
    'Thunderbolt': 'Computer',
    'Power': 'Power',
    'TOSLINK': 'Audio',
    'MADI': 'Audio',
    'SpeakON': 'Audio',
    'Composite Video': 'Video',
    'VGA': 'Video',
    'Component Video': 'Video',
    'Dante': 'Network',
    'AVB': 'Network',
    'NDI': 'Video',
    'EtherCON': 'Network',
  };
  
  const categoryColorMapping = {
    'Video': 'Red',
    'Audio': 'Blue',
    'Network': 'Green',
    'Power': 'Yellow',
    'Computer': 'Black',
  };
  
  function getColorForCableType(cableType) {
    const category = cableCategoryMapping[cableType];
    return categoryColorMapping[category] || 'Unknown';
  }
  
  module.exports = {
    cableCategoryMapping,
    categoryColorMapping,
    getColorForCableType,
  };
  