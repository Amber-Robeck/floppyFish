import Matter from 'matter-js';
import Fish from '../components/Fish.js';

export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    engine.gravity.y = 0.4;
    let world = engine.world;

    return {
        physics: { engine, world },
        Fish: Fish(world, 'green', { x: 50, y: 400 }, { height: 30, width: 80 })
    };
};