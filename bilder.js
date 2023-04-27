// Fotoalbum-JavaScript

function loadImages() {
  const imageFolder = 'https://github.com/mebe96/mebe96.github.io/tree/main/img';
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  const imagesContainer = document.createElement('div');
  imagesContainer.id = 'images-container';

  for (let i = 1; i <= 20; i++) {
    const imageSrc = `${imageFolder}/${i}.${imageExtensions[0]}`;
    const img = document.createElement('img');
    img.src = imageSrc;
    imagesContainer.appendChild(img);
  }

  document.body.appendChild(imagesContainer);
}

loadImages();
