import React from 'react';
import { useDrop } from 'react-dnd';

const DropArea = ({ onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'equipment',
    drop: (item, monitor) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop} style={{ width: '100%', height: '400px', border: '1px dashed gray' }}>
      {isOver && canDrop && <div>Drop here!</div>}
      {!isOver && canDrop && <div>Drag an item here</div>}
      {!canDrop && <div>Items only</div>}
    </div>
  );
};

export default DropArea;
