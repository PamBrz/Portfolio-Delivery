# Portfolio-Delivery

## Description about the algorithm used

The base of the algorithm is JavaScript. Our JavaScript code consists of 5 main parts:

**1**. Image Uploading
   When you upload an image, it is read using the FileReader. Then, it can be converted to ASCII Art.

**2**. Pixel Data Extraction
   By using getImageData(), the pixel data of the image are extracted . This allows us to access the RGB values of each pixel, which we need for the brightness calculation.

**3**. Brightness Calculation
   To determine which ASCII character will represent a pixel, the brightness of each pixel is calculated using the average of the RGB values.

**4**. Color Selection
      Functionality so that users can select the color of the ASCII characters from a dropdown menu.


**5**. Character Mapping
   The algorithm maps the calculated brightness levels to specific ASCII characters (e.g., @%#*+=-:. ). Darker pixels correspond to characters that visually appear darker.

**6**. Output
   The ASCII characters are then put together into a string that represents the whole ASCII art.

## Description about the technology used

Our code utilizes several technologies:

**HTML**: The structure of the website page is built in HTML.

**CSS**: For the visual appearance of our website (layout, colors, fonts) we use CSS.

**JavaScript**: The functionality of the image upload and conversion process is built in JavaScript. 

**FileReader API**: Used to read the uploaded image file.

**Canvas API**: Used for rendering images and accessing pixel data, which is essential for the ASCII conversion process.

## Description about the end result

The end result of this code is a website that allows users to upload images and convert them to ASCII art. The resulting ASCII art is then displayed on the screen. We also included a reset button that allows users to clear their previously uploaded image and the resulting ASCII art. By doing so, visitors can upload other images easily.


