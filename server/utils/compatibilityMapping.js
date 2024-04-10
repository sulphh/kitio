const compatibilityMapping = {
    'SDI': {
      compatibleWith: ['SDI'], // SDI can connect to SDI directly
      description: 'SDI outputs can directly connect to SDI inputs.',
    },
    'HDMI': {
      compatibleWith: ['HDMI'], // HDMI to HDMI
      description: 'HDMI outputs can directly connect to HDMI inputs.',
    },
    'XLR': {
      compatibleWith: ['XLR', 'Mini XLR'], // Including an adapter scenario
      description: 'XLR outputs can connect to XLR or Mini XLR inputs with an appropriate adapter.',
    },
    'Mini XLR': {
      compatibleWith: ['XLR', 'Mini XLR'], // Mini XLR to XLR with adapter
      description: 'Mini XLR outputs can connect to XLR or Mini XLR inputs with an appropriate adapter.',
    },
    'AES/EBU': {
      compatibleWith: ['AES/EBU'],
      description: 'AES/EBU outputs can directly connect to AES/EBU inputs.',
    },
    'DMX': {
      compatibleWith: ['DMX'],
      description: 'DMX outputs can directly connect to DMX inputs, primarily for lighting control.',
    },
    'TOSLINK': {
      compatibleWith: ['TOSLINK'],
      description: 'TOSLINK outputs can directly connect to TOSLINK inputs for digital audio signals.',
    },
    'MADI': {
      compatibleWith: ['MADI'],
      description: 'MADI outputs can directly connect to MADI inputs, used for multi-channel audio.',
    },
    'Fiber Optic': {
      compatibleWith: ['Fiber Optic'],
      description: 'Fiber Optic outputs can connect to Fiber Optic inputs, supporting high-speed data transmission.',
    },
    'RJ45/Ethernet': {
      compatibleWith: ['RJ45/Ethernet', 'Dante', 'AVB'], 
      description: 'Ethernet outputs can connect to Ethernet, Dante, or AVB inputs, depending on network setup.',
    },
    'Dante': {
      compatibleWith: ['RJ45/Ethernet'], 
      description: 'Dante outputs can connect to Ethernet inputs supporting Dante protocol.',
    },
    'AVB': {
      compatibleWith: ['RJ45/Ethernet'], 
      description: 'AVB outputs can connect to Ethernet inputs supporting AVB protocol.',
    },
    'NDI': {
      compatibleWith: ['NDI'], 
      description: 'NDI outputs can connect to NDI inputs, used for video over IP.',
    },
    'Thunderbolt': {
      compatibleWith: ['Thunderbolt', 'USB-C'], 
      description: 'Thunderbolt outputs can connect to Thunderbolt or USB-C inputs, considering Thunderbolt 3 and USB-C compatibility.',
    },
    'USB': {
      compatibleWith: ['USB'],
      description: 'USB outputs can connect to USB inputs.',
    },
    'USB-C': {
      compatibleWith: ['USB-C', 'USB'], 
      description: 'USB-C outputs can connect to USB-C or USB inputs with the appropriate adapter.',
    },
    'MIDI': {
      compatibleWith: ['MIDI'],
      description: 'MIDI outputs can directly connect to MIDI inputs for musical instrument digital interface.',
    },
    'Power': {
      compatibleWith: ['Power'], 
      description: 'Power outputs connect to matching Power inputs, considering voltage and current requirements.',
    },
    'AC Adapter': {
      compatibleWith: ['Power'],
      description: 'AC Adapter outputs can connect to Power inputs with matching specifications.',
    },
    'EtherCON': {
      compatibleWith: ['RJ45/Ethernet'], 
      description: 'EtherCON outputs can connect to Ethernet inputs, offering a more durable connection option for network protocols.',
    },
  };
  
  module.exports = compatibilityMapping;