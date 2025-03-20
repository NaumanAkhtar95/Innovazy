import React, { useEffect } from 'react';
import Matter from 'matter-js';
import 'matter-wrap';
import 'matter-attractors';

const MyMatter = () => {
  useEffect(() => {
    const canvas = document.querySelector("#wrapper-canvas");

    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use('matter-attractors');
    Matter.use('matter-wrap');

    const runMatter = () => {
      const { Engine, Events, Runner, Render, World, Body, Mouse, Common, Bodies } = Matter;

      const engine = Engine.create();
      engine.world.gravity.y = 0;
      engine.world.gravity.x = 0;
      engine.world.gravity.scale = 0.1;

      const render = Render.create({
        element: canvas,
        engine: engine,
        options: {
          showVelocity: false,
          width: dimensions.width,
          height: dimensions.height,
          wireframes: false,
          background: 'transparent',
        },
      });

      const runner = Runner.create();
      const world = engine.world;
      world.gravity.scale = 0;

      const attractiveBody = Bodies.circle(
        render.options.width / 2,
        render.options.height / 2,
        Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
        {
          render: {
            fillStyle: '#000',
            strokeStyle: '#000',
            lineWidth: 0,
          },
          isStatic: true,
          plugin: {
            attractors: [
              function (bodyA, bodyB) {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                };
              },
            ],
          },
        }
      );

      World.add(world, attractiveBody);

      for (let i = 0; i < 20; i += 1) {
        let x = Common.random(0, render.options.width);
        let y = Common.random(0, render.options.height);
        let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
        let polygonNumber = Common.random(3, 6);
        let body = Bodies.polygon(
          x,
          y,
          polygonNumber,
          s,
          {
            mass: s / 20,
            friction: 0,
            frictionAir: 0.02,
            angle: Math.round(Math.random() * 360),
            render: {
              fillStyle: '#222222',
              strokeStyle: '#000000',
              lineWidth: 2,
            },
          }
        );

        World.add(world, body);

        let r = Common.random(0, 1);
        let circle = Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: r > 0.3 ? '#27292d' : '#444444',
            strokeStyle: '#000000',
            lineWidth: 2,
          },
        });

        World.add(world, circle);

        circle = Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? '#334443' : '#222222',
            strokeStyle: '#111111',
            lineWidth: 4,
          },
        });

        World.add(world, circle);

        circle = Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: '#191919',
            strokeStyle: '#111111',
            lineWidth: 3,
          },
        });

        World.add(world, circle);
      }

      const mouse = Mouse.create(render.canvas);

      Events.on(engine, 'afterUpdate', function () {
        if (!mouse.position.x) return;
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      });

      Runner.run(runner, engine);
      Render.run(render);

      return {
        stop: () => {
          Render.stop(render);
          Runner.stop(runner);
        },
        play: () => {
          Runner.run(runner, engine);
          Render.run(render);
        },
        render, // Add this line
      };
    };

    const m = runMatter();

    const setWindowSize = () => {
      let dimensions = {};
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;

      if (m.render) { // Check if render is available
        m.render.canvas.width = window.innerWidth;
        m.render.canvas.height = window.innerHeight;
      }
      return dimensions;
    };

    setWindowSize();
    window.addEventListener('resize', setWindowSize);

    return () => {
      window.removeEventListener('resize', setWindowSize);
      m.stop();
    };
  }, []);

  return <div className='absolute inset-0 pointer-events-auto -z-1 max-h-[600px] max-w-[50%] overflow-hidden' id="wrapper-canvas" />;
};

export default MyMatter;
