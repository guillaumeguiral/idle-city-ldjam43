import Phaser from 'phaser';

import Engine from "./engine/engine";

import GameScene from "./scenes/game";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 480,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200
      },
      debug: false
    }
  },
  scene: [GameScene]
};

// eslint-disable-next-line no-new
new Phaser.Game(config);

const engine = new Engine();
engine.start();

if (module.hot) {
  module.hot.accept(() => {});

  module.hot.dispose(() => {
    window.location.reload();
  });
}