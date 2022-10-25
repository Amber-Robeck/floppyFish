import Matter from 'matter-js';
import React from 'react';
import { View } from 'react-native';

const Ground = props => {
    const availableWidth = props.body.bounds.max.x - props.body.bounds.min.x;
    const availableHeight = props.body.bounds.max.y - props.body.bounds.min.y;
    const xPos = props.body.position.x - availableWidth / 2;
    const yPos = props.body.position.y - availableHeight / 2;
    const color = props.color;

    return (
        <View style={{
            borderWidth: 1,
            backgroundColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xPos,
            top: yPos,
            width: availableWidth,
            height: availableHeight
        }} />
    );
};

export default (world, color, position, size) => {
    const startingGround = Matter.Bodies.rectangle(
        position.x,
        position.y,
        size.width,
        size.height,
        {
            label: 'Ground',
            isStatic: true
        }
    );
    Matter.World.add(world, startingGround);

    return {
        body: startingGround,
        color,
        position,
        renderer: <Ground />
    };
};
