"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Circle, Rect, Text, Group } from 'react-konva';
import { usePlannerStore } from '@/store/plannerStore';
import { Table } from '@/store/types';

interface SeatingCanvasProps {
  onSelectTable: (id: string | null) => void;
  selectedTableId: string | null;
}

export function SeatingCanvas({ onSelectTable, selectedTableId }: SeatingCanvasProps) {
  const { tables, updateTable, assignments, assignGuestToSeat, guests, roomShape, obstacles, updateObstacle } = usePlannerStore();
  const stageRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [hoveredSeat, setHoveredSeat] = useState<string | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleDragEndTable = (e: any, id: string) => {
    const newX = e.target.x();
    const newY = e.target.y();
    const table = tables.find(t => t.id === id);
    if (!table) return;

    // Simple bounding box for table (rough approximation using TABLE_RADIUS / RECT_WIDTH)
    const tw = table.shape === 'round' ? TABLE_RADIUS * 2 : RECT_WIDTH;
    const th = table.shape === 'round' ? TABLE_RADIUS * 2 : RECT_HEIGHT;
    const tx = table.shape === 'round' ? newX - TABLE_RADIUS : newX - RECT_WIDTH / 2;
    const ty = table.shape === 'round' ? newY - TABLE_RADIUS : newY - RECT_HEIGHT / 2;

    // Check collision with any obstacle
    let hasCollision = false;
    for (const obs of obstacles) {
      if (
        tx < obs.x + obs.width &&
        tx + tw > obs.x &&
        ty < obs.y + obs.height &&
        ty + th > obs.y
      ) {
        hasCollision = true;
        break;
      }
    }

    if (hasCollision) {
      // Revert position by resetting target position to previous
      e.target.x(table.position.x);
      e.target.y(table.position.y);
      return; // Do not update store
    }

    updateTable(id, {
      position: {
        x: newX,
        y: newY
      }
    });
  };

  const handleDragEndObstacle = (e: any, id: string) => {
    updateObstacle(id, {
      x: e.target.x(),
      y: e.target.y()
    });
  };

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      onSelectTable(null);
    }
  };

  const SEAT_RADIUS = 16;
  const TABLE_RADIUS = 70;
  const RECT_WIDTH = 160;
  const RECT_HEIGHT = 80;

  const computeSeatPositions = () => {
    const seatPositions: { tableId: string, seatIndex: number, x: number, y: number }[] = [];

    tables.forEach(table => {
      if (table.shape === 'round') {
        for (let i = 0; i < table.seats; i++) {
          const angle = (i / table.seats) * Math.PI * 2;
          const sx = table.position.x + Math.cos(angle) * (TABLE_RADIUS + SEAT_RADIUS + 5);
          const sy = table.position.y + Math.sin(angle) * (TABLE_RADIUS + SEAT_RADIUS + 5);
          seatPositions.push({ tableId: table.id, seatIndex: i, x: sx, y: sy });
        }
      } else {
        const seatsPerSide = Math.floor(table.seats / 2);
        const spacingX = RECT_WIDTH / (seatsPerSide + 1);

        for (let i = 0; i < table.seats; i++) {
          const isTop = i < seatsPerSide;
          const sideIndex = isTop ? i : i - seatsPerSide;
          const sx = table.position.x - RECT_WIDTH/2 + spacingX * (sideIndex + 1);
          const sy = table.position.y + (isTop ? -RECT_HEIGHT/2 - SEAT_RADIUS - 5 : RECT_HEIGHT/2 + SEAT_RADIUS + 5);
          seatPositions.push({ tableId: table.id, seatIndex: i, x: sx, y: sy });
        }
      }
    });
    return seatPositions;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    if (!stageRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const transform = stageRef.current.getAbsoluteTransform().copy();
    transform.invert();
    const pos = transform.point({ x, y });

    const seatPositions = computeSeatPositions();
    let foundSeat: string | null = null;

    for (const seat of seatPositions) {
      const dx = pos.x - seat.x;
      const dy = pos.y - seat.y;
      if (Math.sqrt(dx * dx + dy * dy) < SEAT_RADIUS * 1.5) {
        foundSeat = `${seat.tableId}-${seat.seatIndex}`;
        break;
      }
    }

    setHoveredSeat(foundSeat);
  };

  const handleDragLeave = () => {
    setHoveredSeat(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const guestId = e.dataTransfer.getData("guestId");
    setHoveredSeat(null);

    if (!guestId || !stageRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const transform = stageRef.current.getAbsoluteTransform().copy();
    transform.invert();
    const pos = transform.point({ x, y });

    const seatPositions = computeSeatPositions();
    let targetSeat = null;

    for (const seat of seatPositions) {
      const dx = pos.x - seat.x;
      const dy = pos.y - seat.y;
      if (Math.sqrt(dx * dx + dy * dy) < SEAT_RADIUS * 1.5) {
        targetSeat = seat;
        break;
      }
    }

    if (targetSeat) {
      assignGuestToSeat(guestId, targetSeat.tableId, targetSeat.seatIndex);
    }
  };

  const renderTable = (table: Table) => {
    const isSelected = selectedTableId === table.id;
    const isRound = table.shape === 'round';

    const seats = [];
    if (isRound) {
      for (let i = 0; i < table.seats; i++) {
        const seatId = `${table.id}-${i}`;
        const isHovered = hoveredSeat === seatId;
        const assignedGuestId = assignments[seatId];
        const assignedGuest = guests.find(g => g.id === assignedGuestId);

        const angle = (i / table.seats) * Math.PI * 2;
        const x = Math.cos(angle) * (TABLE_RADIUS + SEAT_RADIUS + 5);
        const y = Math.sin(angle) * (TABLE_RADIUS + SEAT_RADIUS + 5);

        seats.push(
          <Group key={`seat-${i}`} x={x} y={y}>
            <Circle
              radius={SEAT_RADIUS}
              fill={assignedGuest ? "#D6C3A5" : (isHovered ? "#E8E2DA" : "#FFFFFF")}
              stroke={isHovered ? "#3A3532" : (assignedGuest ? "#B8A89A" : "#E8E2DA")}
              strokeWidth={isHovered ? 2 : 1}
              shadowColor={isHovered ? "rgba(0,0,0,0.2)" : "transparent"}
              shadowBlur={5}
            />
            {assignedGuest && (
              <Text
                text={assignedGuest.name.charAt(0).toUpperCase()}
                fontSize={14}
                fontFamily="Inter"
                fontStyle="bold"
                fill="#3A3532"
                align="center"
                verticalAlign="middle"
                offsetX={SEAT_RADIUS}
                offsetY={7}
                width={SEAT_RADIUS * 2}
              />
            )}
          </Group>
        );
      }
    } else {
      const seatsPerSide = Math.floor(table.seats / 2);
      const spacingX = RECT_WIDTH / (seatsPerSide + 1);

      for (let i = 0; i < table.seats; i++) {
        const seatId = `${table.id}-${i}`;
        const isHovered = hoveredSeat === seatId;
        const assignedGuestId = assignments[seatId];
        const assignedGuest = guests.find(g => g.id === assignedGuestId);

        const isTop = i < seatsPerSide;
        const sideIndex = isTop ? i : i - seatsPerSide;
        const x = -RECT_WIDTH/2 + spacingX * (sideIndex + 1);
        const y = isTop ? -RECT_HEIGHT/2 - SEAT_RADIUS - 5 : RECT_HEIGHT/2 + SEAT_RADIUS + 5;

        seats.push(
          <Group key={`seat-${i}`} x={x} y={y}>
            <Circle
              radius={SEAT_RADIUS}
              fill={assignedGuest ? "#D6C3A5" : (isHovered ? "#E8E2DA" : "#FFFFFF")}
              stroke={isHovered ? "#3A3532" : (assignedGuest ? "#B8A89A" : "#E8E2DA")}
              strokeWidth={isHovered ? 2 : 1}
              shadowColor={isHovered ? "rgba(0,0,0,0.2)" : "transparent"}
              shadowBlur={5}
            />
            {assignedGuest && (
              <Text
                text={assignedGuest.name.charAt(0).toUpperCase()}
                fontSize={14}
                fontFamily="Inter"
                fontStyle="bold"
                fill="#3A3532"
                align="center"
                verticalAlign="middle"
                offsetX={SEAT_RADIUS}
                offsetY={7}
                width={SEAT_RADIUS * 2}
              />
            )}
          </Group>
        );
      }
    }

    return (
      <Group
        key={table.id}
        x={table.position.x}
        y={table.position.y}
        draggable
        onDragEnd={(e) => handleDragEndTable(e, table.id)}
        onClick={(e) => {
          e.cancelBubble = true;
          onSelectTable(table.id);
        }}
        onTap={(e) => {
          e.cancelBubble = true;
          onSelectTable(table.id);
        }}
      >
        {seats}
        {isRound ? (
          <Circle
            radius={TABLE_RADIUS}
            fill="#FFFFFF"
            stroke={isSelected ? "#D6C3A5" : "#E8E2DA"}
            strokeWidth={isSelected ? 3 : 1}
            shadowColor="rgba(0,0,0,0.1)"
            shadowBlur={10}
            shadowOffset={{ x: 0, y: 4 }}
          />
        ) : (
          <Rect
            width={RECT_WIDTH}
            height={RECT_HEIGHT}
            offsetX={RECT_WIDTH / 2}
            offsetY={RECT_HEIGHT / 2}
            fill="#FFFFFF"
            cornerRadius={8}
            stroke={isSelected ? "#D6C3A5" : "#E8E2DA"}
            strokeWidth={isSelected ? 3 : 1}
            shadowColor="rgba(0,0,0,0.1)"
            shadowBlur={10}
            shadowOffset={{ x: 0, y: 4 }}
          />
        )}
        <Text
          text={table.name}
          fontSize={16}
          fontFamily="Playfair Display"
          fill="#3A3532"
          align="center"
          verticalAlign="middle"
          offsetX={RECT_WIDTH / 2}
          offsetY={8}
          width={RECT_WIDTH}
        />
      </Group>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      id="canvas-container"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #3A3532 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        ref={stageRef}
      >
        <Layer>
          {/* Render Room Shape Background */}
          {roomShape === 'rectangle' && (
            <Rect x={100} y={100} width={dimensions.width - 200} height={dimensions.height - 200} stroke="#E8E2DA" strokeWidth={2} dash={[10, 10]} />
          )}
          {roomShape === 'square' && (
            <Rect x={dimensions.width/2 - 250} y={dimensions.height/2 - 250} width={500} height={500} stroke="#E8E2DA" strokeWidth={2} dash={[10, 10]} />
          )}
          {roomShape === 'round' && (
            <Circle x={dimensions.width/2} y={dimensions.height/2} radius={300} stroke="#E8E2DA" strokeWidth={2} dash={[10, 10]} />
          )}
          {roomShape === 'l-shaped' && (
            <Group x={100} y={100}>
               <Rect x={0} y={0} width={200} height={400} stroke="#E8E2DA" strokeWidth={2} dash={[10, 10]} />
               <Rect x={200} y={200} width={200} height={200} stroke="#E8E2DA" strokeWidth={2} dash={[10, 10]} />
            </Group>
          )}

          {/* Render Obstacles */}
          {obstacles.map(obs => (
            <Group
              key={obs.id}
              x={obs.x}
              y={obs.y}
              draggable
              onDragEnd={(e) => handleDragEndObstacle(e, obs.id)}
            >
              <Rect
                width={obs.width}
                height={obs.height}
                fill="#f8d7da"
                stroke="#f5c2c7"
                strokeWidth={2}
                cornerRadius={4}
                opacity={0.8}
              />
              <Text
                text="Obstacle"
                width={obs.width}
                height={obs.height}
                align="center"
                verticalAlign="middle"
                fill="#842029"
                fontSize={12}
                fontFamily="Inter"
              />
            </Group>
          ))}

          {tables.map(renderTable)}
        </Layer>
      </Stage>
    </div>
  );
}
