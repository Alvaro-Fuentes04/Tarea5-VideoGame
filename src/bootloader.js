class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "Bootloader" });
  }
  preload() {
    this.load.on("complete", () => {
      this.scene.start('Scene_menu'); // Inicia la escena del menú después de cargar los recursos
    });

    this.load.image('background', '../assets/background.png'); // Cambia "background.png" por el nombre de tu archivo
    this.load.image("ball", "./public/assets/ball.png");
    this.load.image("izquierda", "./public/assets/left_pallete.png");
    this.load.image("derecha", "./public/assets/right_pallete.png");
    this.load.image("separador", "./public/assets/separator.png");
  }
}

export default Bootloader;
