/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

  // Just messing around with IIFEs a little more.
(function Carousel(){
  // Carousel div creation
  const carouselWrapper = document.createElement('div');
  carouselWrapper.classList.add('carousel');

  // Buttons creation
  const buttons = ['left', 'right'].map(btnDirection => {
    const newBtn = document.createElement('div');
    newBtn.classList.add(`${btnDirection}-button`);
    return newBtn;
  });

  const images = ['mountains', 'computer', 'trees', 'turntable'].map((imgTopic, index) => {
    const newImg = document.createElement('img');
    newImg.classList.add(`img-${index}`);
    newImg.src = `./assets/carousel/${imgTopic}.jpeg`;
    return newImg;
  });

  wrapAndAdd(carouselWrapper, [buttons[0], ...images, buttons[1]], '.carousel-container');

})();

{
  
  let currentImgIndex = 0;

  const carouselImages = [...document.querySelectorAll('.carousel img')];

  carouselImages[0].style.display = 'block';

  document.querySelector('.right-button').addEventListener('click', (event) => {
    if(currentImgIndex < carouselImages.length - 1){ 
      currentImgIndex ++;
      carouselImages[currentImgIndex - 1].style.display = 'none';
      carouselImages[currentImgIndex].style.display = 'block';
    }else{
      carouselImages[currentImgIndex].style.display = 'none';
      carouselImages[0].style.display = 'block';
      currentImgIndex = 0;
    }
  });

  document.querySelector('.left-button').addEventListener('click', (event) => {
    if(currentImgIndex > 0){ 
      currentImgIndex --;
      carouselImages[currentImgIndex + 1].style.display = 'none';
      carouselImages[currentImgIndex].style.display = 'block';
    }else{
      carouselImages[currentImgIndex].style.display = 'none';
      carouselImages[carouselImages.length - 1].style.display = 'block';
      currentImgIndex = carouselImages.length - 1;
    }
  });

}