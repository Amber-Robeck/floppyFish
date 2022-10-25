import Matter from 'matter-js';

const gamePhysics = (entities, { touch, time, dispatch }) => {
    let engine = entities.physics.engine;
    Matter.Engine.update(engine, time.delta);
    return entities;
}

export default gamePhysics;