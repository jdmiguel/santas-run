import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('opening-bg', 'assets/opening-bg.jpg');
  }

  create() {
    const logo = this.add.image(640, 305, 'opening-bg');
  }
}
