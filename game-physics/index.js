import Matter from 'matter-js';

const gamePhysics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine;

    touches.filter(t => t.type === "press")
        .forEach(t => {
            Matter.Body.setVelocity(entities.Fish.body, {
                x: 0,
                y: -2
            })
        });
    Matter.Engine.update(engine, time.delta);
    return entities;
}

export default gamePhysics;