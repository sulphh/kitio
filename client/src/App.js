import React from 'react';
import EquipmentItem from './EquipmentItem';
import DropArea from './DropArea';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  // Updated equipment array
  const equipment = [
    { id: 'visionMixer', name: 'Vision Mixer' },
    { id: 'microphone', name: 'Microphone' },
    { id: 'camera', name: 'Camera' },
  ];

  const handleDrop = (itemId) => {
    console.log('Dropped item:', itemId);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {equipment.map(item => (
          <EquipmentItem key={item.id} id={item.id} name={item.name} />
        ))}
        <DropArea onDrop={handleDrop} />
      </div>
    </DndProvider>
  );
}

export default App;
