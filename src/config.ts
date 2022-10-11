import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#294889',
  scale: {
    width: 1280,
    height: 610,
    mode: Phaser.Scale.FIT,
  }
};
