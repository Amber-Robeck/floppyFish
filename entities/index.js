import Matter from 'matter-js';
import Fish from '../components/Fish.js';
import Ground from '../components/Ground.js';
import Collision from '../components/Collision.js';
import { Dimensions } from 'react-native';
import { randomPair } from '../utils/helpers.js';

//Width and Height of window
const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    engine.gravity.y = 0.1;
    let world = engine.world;
    const collA = randomPair();
    return {
        physics: { engine, world },
        Fish: Fish(world, 'green', { x: 50, y: 400 }, { height: 30, width: 80 }),
        Ground: Ground(world, 'brown', { x: wWidth / 2, y: wHeight }, { height: 30, width: wWidth }),
        CollisionTop: Collision(world, 'CollisionTop', 'red', collA.collisionTop.position, collA.collisionTop.size),
    };
};