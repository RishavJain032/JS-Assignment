var img = [];
img[0] = "https://entrackr-bucket.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/07/20123929/Geekster.jpg";
img[1] = "https://blog.geekster.in/wp-content/uploads/2022/03/Best-programming-books-for-beginners.png";
img[2] = "https://blog.geekster.in/wp-content/uploads/2021/08/Top-companies-you-can-work-at-after-completing-Full-Stack-Development-course-image-1024x512.png";
img[3] = "https://blog.geekster.in/wp-content/uploads/2021/09/How-to-Become-a-Software-Developer-featured-image-1024x512.jpg";
img[4] = "https://blog.geekster.in/wp-content/uploads/2022/01/what-is-pair-programming-featured-image.png"
i = 0;
let image = document.getElementById("slider-img");

setInterval("nextImg()", 1200);

function nextImg() {
  if (i < img.length - 1) i++;
  else i = 0;
  image.src = img[i];
}

function prevImg() {
  i--;
  if (i == -1) i = 2;
  image.src = img[i];
}