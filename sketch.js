var Iguanodon, iguanodonImage, iguanodonPicture;
var Allosaurus, allosaurusImage;
var Brachiosaurus, brachiosaurusImage;
var Dilophosaurus, dilophosaurusImage;
var Pentaceratops, pentaceratopsImage;
var Pachycephalosaurus, pachycephalosaurusImage;
var Triceratops, triceratopsImage;
var Ankylosaurus, ankylosaurusImage;
var Giganotosaurus, giganotosaurusImage;
var Spinosaurus, spinosaurusImage;
var Stegosaurus, stegosaurusImage;
var Tyrannosaurus, tyrannosaurusImage;
var Amargasaurus, amargasaurusImage;
var Carnotaurus, carnotaurusImage;
var Ceratosaurus, ceratosaurusImage;
var Megaraptor, megaraptorImage;
var Saichania, saichaniaImage;
var Shunosaurus, shunosaurusImage;
var Siamosaurus, siamosaurusImage;
var Siamotyrannus, siamotyrannusImage;
var Suchomimus, suchomimusImage;
var Kentrosaurus, kentrosaurusImage;
var Torosaurus, torosaurusImage;
var dinosaurGroup;
var gameState = 0;

function preload(){
  iguanodonImage = loadImage("Dinosaurs/Iguanodon_icon.png");
  allosaurusImage = loadImage("Dinosaurs/Allosaurus_icon.png");
  brachiosaurusImage = loadImage("Dinosaurs/Brachiosaurus_icon.png");
  dilophosaurusImage = loadImage("Dinosaurs/Dilophosaurus_icon.png")
  pentaceratopsImage = loadImage("Dinosaurs/Pentaceratops_icon.png");
  pachycephalosaurusImage = loadImage("Dinosaurs/Pachycephalosaurus_icon.png");
  triceratopsImage = loadImage("Dinosaurs/Triceratops_icon.png");
  ankylosaurusImage = loadImage("Dinosaurs/Ankylosaurus_icon.png");
  giganotosaurusImage = loadImage("Dinosaurs/Giganotosaurus_icon.png");
  spinosaurusImage = loadImage("Dinosaurs/Spinosaurus_icon.png");
  stegosaurusImage = loadImage("Dinosaurs/Stegosaurus_icon.png");
  tyrannosaurusImage = loadImage("Dinosaurs/Tyrannosaurus_icon.png");
  amargasaurusImage = loadImage("Dinosaurs/Amargasaurus_icon.png");
  carnotaurusImage = loadImage("Dinosaurs/Carnotaurus_icon.png");
  ceratosaurusImage = loadImage("Dinosaurs/Ceratosaurus_icon.png");
  megaraptorImage = loadImage("Dinosaurs/Megaraptor_icon.png");
  saichaniaImage = loadImage("Dinosaurs/Saichania_icon.png");
  shunosaurusImage = loadImage("Dinosaurs/Shunosaurus_icon.png");
  siamosaurusImage = loadImage("Dinosaurs/Siamosaurus_icon.png");
  siamotyrannusImage = loadImage("Dinosaurs/Siamotyrannus_icon.png");
  suchomimusImage = loadImage("Dinosaurs/Suchomimus_icon.png");
  torosaurusImage = loadImage("Dinosaurs/Torosaurus_icon.png");
  kentrosaurusImage = loadImage("Dinosaurs/Kentrosaurus_icon.png");

  iguanodonPicture = loadImage("DinosaursImages/Iguanodon.jpg");
}

function setup() {
  createCanvas(1300,400);
  Iguanodon = createSprite(1250,30,40,40);
  Iguanodon.addImage(iguanodonImage);
  iguanodonPicture.visibility = false;
  Allosaurus = createSprite(1150,30,40,40);
  Allosaurus.addImage(allosaurusImage);
  Brachiosaurus = createSprite(1050,30,40,40);
  Brachiosaurus.addImage(brachiosaurusImage);
  Dilophosaurus = createSprite(950,30,40,40);
  Dilophosaurus.addImage(dilophosaurusImage);
  Pentaceratops = createSprite(850,30,40,40);
  Pentaceratops.addImage(pentaceratopsImage);
  Pachycephalosaurus = createSprite(450,30,40,40);
  Pachycephalosaurus.addImage(pachycephalosaurusImage);
  Triceratops = createSprite(350,30,40,40);
  Triceratops.addImage(triceratopsImage);
  Ankylosaurus = createSprite(250,30,40,40);
  Ankylosaurus.addImage(ankylosaurusImage);
  Giganotosaurus = createSprite(150,30,40,40);
  Giganotosaurus.addImage(giganotosaurusImage)
  Spinosaurus = createSprite(50,30,40,40);
  Spinosaurus.addImage(spinosaurusImage);
  Stegosaurus = createSprite(1250,110,40,40);
  Stegosaurus.addImage(stegosaurusImage);
  Tyrannosaurus = createSprite(1150,110,40,40);
  Tyrannosaurus.addImage(tyrannosaurusImage);
  Amargasaurus = createSprite(1050,110,40,40);
  Amargasaurus.addImage(amargasaurusImage);
  Carnotaurus = createSprite(950,110,40,40);
  Carnotaurus.addImage(carnotaurusImage);
  Ceratosaurus = createSprite(850,110,40,40);
  Ceratosaurus.addImage(ceratosaurusImage);
  Megaraptor = createSprite(750,110,40,40);
  Megaraptor.addImage(megaraptorImage);
  Saichania = createSprite(650,110,40,40);
  Saichania.addImage(saichaniaImage);
  Shunosaurus = createSprite(550,110,40,40);
  Shunosaurus.addImage(shunosaurusImage);
  Siamosaurus = createSprite(450,110,40,40);
  Siamosaurus.addImage(siamosaurusImage);
  Siamotyrannus = createSprite(350,110,40,40);
  Siamotyrannus.addImage(siamotyrannusImage);
  Suchomimus = createSprite(250,110,40,40);
  Suchomimus.addImage(suchomimusImage);
  Kentrosaurus = createSprite(150,110,40,40);
  Kentrosaurus.addImage(kentrosaurusImage);
  Torosaurus = createSprite(50,110,40,40);
  Torosaurus.addImage(torosaurusImage);
}

function draw() {
  background("cyan");  
  drawSprites();

  textSize(25);
  text("Choose a dino, and play!", 500,50);

  textSize(10);
  text("Iguanodon", 1230,65);

  textSize(10);
  text("Stegosaurus", 1220,145);

  textSize(10);
  text("Allosaurus", 1125, 65);

  textSize(10);
  text("Tyrannosaurus", 1120, 145);

  textSize(10);
  text("Brachiosaurus", 1020, 65);

  textSize(10);
  text("Amargasaurus", 1020,145);

  textSize(10);
  text("Dilophosaurus", 915,65);

  text(10);
  text("Carnotaurus", 922,145);

  text(10);
  text("Pentaceratops", 820,65);

  textSize(10);
  text("Ceratosaurus", 820,145);

  textSize(10);
  text("Megaraptor", 725,145);  

  textSize(11);
  text("Saichania", 625,145);

  textSize(10);
  text("Shunosaurus", 520,145);

  textSize(10);
  text("Pachycephalosaurus", 410,65);

  textSize(10);
  text("Siamosaurus", 420,145);

  textSize(10);
  text("Triceratops", 325,65);

  text(10);
  text("Siamotyrannus", 320,145);

  textSize(10);
  text("Ankylosaurus", 220,65);

  textSize(10);
  text("Suchomimus", 220,145);

  textSize(10);
  text("Giganotosaurus", 125,65);

  textSize(10);
  text("Kentrosaurus", 120,145);

  textSize(10);
  text("Spinosaurus", 25,65);

  textSize(10);
  text("Torosaurus", 25,145);
}


