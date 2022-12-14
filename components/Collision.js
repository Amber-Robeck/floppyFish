import Matter from 'matter-js';
import React from 'react';
import { View } from 'react-native';

const Collision = props => {
    const availableWidth = props.body.bounds.max.x - props.body.bounds.min.x;
    const availableHeight = props.body.bounds.max.y - props.body.bounds.min.y;
    const xPos = props.body.position.x - availableWidth / 2;
    const yPos = props.body.position.y - availableHeight / 2;
    const color = props.color;

    return (
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xPos,
            top: yPos,
            width: availableWidth,
            height: availableHeight
        }} />
    );
};

export default (world, label, color, position, size) => {
    const startingCollision = Matter.Bodies.rectangle(
        position.x,
        position.y,
        size.width,
        size.height,
        {
            label,
            isStatic: true
        }
    );
    Matter.World.add(world, startingCollision);

    return {
        body: startingCollision,
        color,
        position,
        renderer: <Collision />
    };
};
