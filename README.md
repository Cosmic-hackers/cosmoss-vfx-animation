# Cosmoss VFX & Animation

## 🌟 Where Imagination Meets Reality in 3D

### 🚀 About Cosmoss VFX & Animation
Cosmoss VFX & Animation is a cutting-edge learning platform dedicated to providing high-quality education in Visual Effects (VFX), 3D Animation, and Motion Graphics. Whether you're a beginner or a seasoned professional, our courses are designed to help you master industry-standard tools and techniques.

### 🎨 What We Offer
- **3D Modeling & Sculpting** – Learn to create stunning 3D assets using Blender, Maya, and ZBrush.
- **VFX Compositing** – Master the art of visual effects with tools like Adobe After Effects and Nuke.
- **Animation Techniques** – From character animation to motion graphics, develop dynamic animations for films and games.
- **Rendering & Texturing** – Understand lighting, shading, and realistic textures with software like Substance Painter.
- **Game & Film Production** – Build immersive environments for movies and gaming.

### 💡 Why Choose Us?
✔ **Industry-Relevant Courses** – Learn from experts with real-world experience.
✔ **Hands-On Projects** – Work on exciting projects to build your portfolio.
✔ **Interactive Learning Environment** – Engage in live sessions, Q&A, and mentorship.
✔ **Affordable & Flexible Learning** – Study at your own pace with lifetime access to courses.
✔ **Career Guidance** – Get support in job placement and freelancing opportunities.


## **1. HTML Document Structure**
```html
<!DOCTYPE html>
<html lang="en">
```
- `<!DOCTYPE html>` → Defines the document type as **HTML5**.
- `<html lang="en">` → Starts the HTML document and sets the language to **English**.

---

## **2. Head Section (Metadata & Stylesheets)**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cosmoss vfx & animation</title>
    <link rel="stylesheet" href="style.css">
</head>
```
- `<meta charset="UTF-8">` → Defines character encoding (supports special characters).
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`  
  - Ensures proper **mobile responsiveness**.
- `<title>` → Sets the title shown in the browser tab.
- `<link rel="stylesheet" href="style.css">` → Links an external CSS file.

---

## **3. Navigation Bar (Header Section)**
```html
<body>
    <nav class="navbar">
        <div class="logo">COSMOSS VFX & Animation</div>
        <p class="tagline">Where Imagination Meets Reality in 3D</p>
```
- `<nav class="navbar">` → Navigation section.
- `<div class="logo">COSMOSS VFX & Animation</div>` → Displays **site logo** (text-based).
- `<p class="tagline">Where Imagination Meets Reality in 3D</p>` → **Tagline under logo**.

### **Navigation Links**
```html
<ul class="nav-links" id="navLinks">
    <li><a href="#">Home</a></li>
    <li><a href="#">Courses</a></li>
    <li><a href="#">Studio</a></li>
    <li><a href="#">Blogs</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```
- `<ul>` → **Unordered list** for navigation.
- `<li><a href="#">Home</a></li>` → Individual **menu items**.

### **Login & Sign Up Buttons**
```html
<div class="nav-buttons">
    <a href="#" class="btn login">Login</a>
    <a href="#" class="btn signup">Sign Up</a>
</div>
```
- Two **buttons** for user authentication.

### **Hamburger Menu (Mobile)**
```html
<div class="hamburger" onclick="toggleMenu()">☰</div>
```
- `☰` → Menu icon for mobile users.
- `onclick="toggleMenu()"` → Calls a JavaScript function (likely in `app.js`).

---

## **4. Hero Section (Banner)**
```html
<div class="section" id="banner">
    <div class="content-fit">
        <div class="title" data-before="COSMOSS">learn VFX & 3D Animation</div>
    </div>
</div>
```
- Displays **main banner** with a **title** (`Learn VFX & 3D Animation`).
- `data-before="COSMOSS"` → **Custom attribute**, likely used in CSS for effects.

---

## **5. Introduction Section**
```html
<div class="section" id="intro">
    <div class="content-fit">
        <div class="number">01</div>
        <div class="des">
            <div class="title">Comprehensive Courses for All Skill Levels</div>
            <p>Whether you're a beginner or a professional, we have a wide range of courses...</p>
        </div>
    </div>
</div>
```
- Introduces **Cosmoss VFX & Animation courses**.
- `<div class="number">01</div>` → Step numbering.
- `<div class="des">` → Course description.

---

## **6. Courses Section (Cards)**
Each course is represented using **cards**:

```html
<div class="courses-container">
    <div class="course-card">
        <img src="3d-modeling.jpg" alt="3D Modeling" class="course-img">
        <div class="course-info">
            <h3 class="course-title">Mastering 3D Modeling</h3>
            <p class="course-description">Learn the essentials of 3D modeling...</p>
            <button class="enroll-btn">Enroll Now</button>
        </div>
    </div>
```
- `<div class="courses-container">` → Container for multiple **course cards**.
- `<div class="course-card">` → Individual **card**.
- `<img>` → Course **image**.
- `<h3 class="course-title">` → Course **title**.
- `<p class="course-description">` → Course **description**.
- `<button class="enroll-btn">Enroll Now</button>` → **Enroll button**.

---

## **7. Interactive Learning Section**
```html
<div class="section" id="description">
    <div class="content-fit">
        <div class="number">02</div>
        <div class="des">
            <div class="title">Interactive Learning Environment</div>
            <p>Participate in live workshops, forums, and Q&A sessions...</p>
        </div>
    </div>
</div>
```
- Describes **interactive learning** features like live **workshops & Q&A sessions**.

---

## **8. Footer Section**
```html
<footer>
    <div class="footer-container">
        <div class="footer-left">
            <h3>cosmoss VFX & Animation</h3>
            <p>Where Imagination Meets Reality in 3D.</p>
        </div>
```
- `<footer>` → **Footer section**.
- `<h3>cosmoss VFX & Animation</h3>` → **Footer heading**.
- `<p>` → **Tagline**.

### **Quick Links (Footer Menu)**
```html
<div class="footer-center">
    <h4>Quick Links</h4>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>
```
- **Footer navigation menu**.

### **Social Media Links**
```html
<div class="footer-right">
    <h4>Follow Us</h4>
    <div class="social-icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
    </div>
</div>
```
- Displays **social media icons**.

### **Copyright Notice**
```html
<p class="copyright">© 2025 Ancient Knowledge. All rights reserved.</p>
```
- **Copyright notice**.

---

## **9. Footer Styling (Inline CSS)**
```html
<style>
    footer {
        background: transparent;
        color: white;
        padding: 40px 0;
        text-align: center;
        position: relative;
    }
</style>
```
- Adds **styling** to the **footer**.
- `background: transparent;` → Footer background is **transparent**.
- `color: white;` → White text color.

---

## **10. JavaScript Integration**
```html
<div id="container3D"></div>
<script type="module" src="app.js"></script>
</html>
```
- `<div id="container3D"></div>` → Placeholder for **3D content**.
- `<script type="module" src="app.js"></script>`  
  - Loads **JavaScript file (`app.js`)**.

---

## **Conclusion**
This **HTML file** builds a **complete webpage** for **Cosmoss VFX & Animation**, including:
✅ **Navigation bar**  
✅ **Banner**  
✅ **Course Cards**  
✅ **Interactive Learning Section**  
✅ **Footer with Social Media**  
✅ **JavaScript for Interactivity**  


### **Font Imports**
```css
@import url('https://fonts.cdnfonts.com/css/devil-breeze');
@import url('https://fonts.cdnfonts.com/css/poppins');
@import url('https://fonts.cdnfonts.com/css/bimbo');
```
- These lines import custom fonts from an external CDN (cdnfonts.com).  
- `Devil Breeze`, `Poppins`, and `Bimbo` are font styles used throughout the website.

---

### **Body Styling**
```css
body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    background-color: #1B1B1B;
    color: #eef8ce;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background-image:
    url(bg.png),
    repeating-linear-gradient(
        to right, transparent 0 500px, #73814B33 500px 501px
    );
    background-size: 100%;
}
```
- `margin: 0;` → Removes default margin from the body.
- `font-family: "Montserrat", sans-serif;` → Sets Montserrat as the font (overwritten later).
- `background-color: #1B1B1B;` → Sets a dark background color.
- `color: #eef8ce;` → Changes the text color to a light yellow-green shade.
- `font-family: 'Poppins', sans-serif;` → Overrides the previous font with Poppins.
- `font-size: 14px;` → Sets the base text size.
- `background-image: url(bg.png), repeating-linear-gradient(...);` →  
  - Sets `bg.png` as the main background image.
  - Adds a transparent and striped effect every 500px.
- `background-size: 100%;` → Ensures the background image covers the entire width.

---

### **Scrollbar Removal**
```css
*::-webkit-scrollbar {
    width: 0;
}
```
- Hides the scrollbar in WebKit browsers (like Chrome & Safari).

---

### **Global Reset**
```css
* {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
```
- `padding: 0;` and `margin: 0;` → Resets spacing for all elements.
- `list-style: none;` → Removes bullet points from lists.
- `box-sizing: border-box;` → Ensures padding and border are included in element width.

---

### **Full-Screen Sections**
```css
.section {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
- `.section` elements take the full width and height of the screen.
- `display: flex;` centers content both vertically and horizontally.

---

### **Content Fit Styling**
```css
.content-fit {
    width: min(1200px, 90vw);
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-block: 10em;
}
```
- `.content-fit` adjusts to a max width of `1200px` or `90vw`, whichever is smaller.
- Centers itself with `margin: auto;`.

---

### **Header Styling**
```css
header {
    padding-block: 1em;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    backdrop-filter: blur(20px);
    background-color: #1B1B1B11;
    background-image: repeating-linear-gradient(
        to right, transparent 0 500px, #eee1 500px 501px
    );
}
```
- The header stays fixed at the top.
- `backdrop-filter: blur(20px);` creates a blur effect.
- `background-image: repeating-linear-gradient(...);` adds a striped effect.

---

### **Navigation Styling**
```css
header .content-fit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: unset!important;
    padding-block: unset!important;
}
header .content-fit nav ul {
    display: flex;
    gap: 2em;
}
```
- Navigation (`nav ul`) is flexbox-based, with spacing of `2em` between links.

---

### **Banner Title**
```css
#banner .title {
    color: #d1ff48;
    font-size: 11em;
    font-family: "devil breeze";
    font-weight: bold;
    position: relative;
    text-align: center;
}
```
- The banner title is **large (11em)** and uses the "Devil Breeze" font.

---

### **Decorative Elements**
```css
#banner .title::before {
    content: attr(data-before);
    position: absolute;
    top: 0.5em;
    inset: 0.66em 0 0 0;
    z-index: -1;
    color: #445022;
}
```
- Adds a shadow effect behind the title using `::before`.

---

### **3D Container**
```css
#container3D {
    position: fixed;
    inset: 0;
    /* background-color: red; */
    z-index: 100;
    pointer-events: none;
}
```
- The 3D container is **fixed in place** and doesn't capture mouse interactions (`pointer-events: none;`).

---

### **Media Queries (Responsive Design)**
#### **For screens smaller than 1023px**
```css
@media screen and (max-width: 1023px){
    #banner .title {
        font-size: 5em;
    }
    #intro .content-fit {
        flex-direction: column;
    }
}
```
- Reduces title size to `5em`.
- Stacks `.content-fit` elements vertically.

#### **For screens smaller than 767px**
```css
@media screen and (max-width: 767px){
    #banner .title {
        font-size: 3em;
    }
    .section .number {
        font-size: 5em;
    }
    .section .content-fit .title {
        font-size: 2em;
    }
}
```
- Adjusts font sizes and layout for mobile screens.

---

### **Navbar Styling**
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(240, 209, 209, 0.1);
    padding: 15px 50px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}
```
- The navbar stays fixed at the top with a **semi-transparent background**.

---

### **Navigation Links**
```css
.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}
.nav-links a {
    color: rgb(140, 230, 6);
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    transition: 0.3s;
}
.nav-links a:hover {
    color: rgb(143, 243, 28);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
}
```
- The links have a **greenish color** and a hover effect.

---

### **Buttons**
```css
.btn {
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 16px;
    text-decoration: none;
    transition: 0.3s;
}
.btn.login {
    background: transparent;
    border: 2px solid rgb(180, 245, 51);
    color: rgb(249, 187, 64);
}
.btn.login:hover {
    background: rgb(190, 241, 37);
    color: black;
}
```
- **Login Button**: Transparent with a green border.
- **Signup Button**: Bright green.

---

### **Course Cards**
```css
.course-card {
    background-color: #a3ec35;
    border-radius: 10px;
    width: 300px;
    transition: transform 0.3s ease;
}
.course-card:hover {
    transform: translateY(-10px);
}
```
- Cards **move up slightly** when hovered.

---

### **Enroll Button**
```css
.enroll-btn {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.enroll-btn:hover {
    background-color: green;
}
```
- Turns **green** when hovered.
- 
In your CSS file, you used different **CSS units** to define sizes, spacing, and layout properties. Let's go through the commonly used **CSS units**, including the ones in your code.
---
## **1. Absolute Units**  
Absolute units have a fixed size, meaning they don’t scale based on the parent or viewport size.

### **Pixel (px)**
- Example: `font-size: 14px;`
- Pixels are **fixed-size** units that do not change based on the screen or user settings.
- They are ideal for precise layouts but do not adapt well to different screen sizes.

### **Other Absolute Units (Not used in your code)**
| Unit  | Description |
|--------|----------------|
| `cm`  | Centimeters |
| `mm`  | Millimeters |
| `in`  | Inches (1in = 2.54cm) |
| `pt`  | Points (1pt = 1/72 inch, used in print) |
| `pc`  | Picas (1pc = 12pt) |

---

## **2. Relative Units**  
Relative units change in size based on their context, making them more **responsive**.

### **em (Relative to Parent Font Size)**
- Example: `font-size: 1.5em;`
- `1em` equals **the font size of the parent element**.
- If the parent has `font-size: 16px`, then `1.5em = 16px * 1.5 = 24px`.
- It scales well but can become **nested**, causing compounding issues.

### **rem (Relative to Root Font Size)**
- Not used in your code, but useful.
- `1rem` equals **the font size of the root (`<html>`) element**.
- If the root has `font-size: 16px`, then `2rem = 32px`.
- Unlike `em`, `rem` is **not affected by nesting**.

### **% (Percentage)**
- Example: `width: 100%;`
- Percentage values are **relative to the parent element**.
- Example: If a parent div has `width: 500px`, a child with `width: 50%` will be `250px`.

### **vw (Viewport Width) & vh (Viewport Height)**
- Not used in your code, but useful.
- `1vw = 1%` of the viewport's **width**.
- `1vh = 1%` of the viewport's **height**.
- Example: `width: 50vw;` sets width to **50% of the screen width**.

### **min() / max() / clamp() (Modern CSS)**
- Example: `width: min(1200px, 90vw);`
- `min(a, b)`: Chooses the **smallest** value between `a` and `b`.
- `max(a, b)`: Chooses the **largest** value between `a` and `b`.
- `clamp(min, preferred, max)`: Keeps a value within a range.

---

## **Which Units Should You Use?**
| **Unit** | **Best Use Cases** |
|----------|---------------------|
| `px` | Fixed layouts (icons, borders) |
| `em` | Font sizes that scale with parents |
| `rem` | Font sizes that remain consistent |
| `%` | Responsive widths, heights |
| `vw/vh` | Full-screen elements |
| `min/max/clamp` | Dynamic responsiveness |

In your CSS, you used a combination of `px`, `em`, `%`, and `min()`, making it a **responsive design**.


## **1. Importing Required Libraries**
```js
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'https://cdn.skypack.dev/gsap';
```
### **Explanation:**
- **THREE.js**: This is a JavaScript library used to create and render 3D graphics in the browser using WebGL.
- `import * as THREE from '...';` imports the entire **THREE.js** library.
- **GLTFLoader**: A class that helps load **GLTF** (GL Transmission Format) 3D models into the scene.
- **GSAP (GreenSock Animation Platform)**: A powerful animation library used to animate 3D objects smoothly.

---

## **2. Creating the Perspective Camera**
```js
const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 13;
```
### **Explanation:**
- **PerspectiveCamera**: Creates a 3D perspective view.
  - The **first parameter (10)** is the Field of View (FoV), determining how wide the scene appears.
  - The **second parameter** sets the aspect ratio (width/height) of the display.
  - The **third and fourth parameters (0.1, 1000)** define the near and far clipping planes. Objects closer than 0.1 or farther than 1000 units will not be rendered.
- The camera is placed **13 units away on the z-axis**, ensuring visibility of the 3D scene.

---

## **3. Creating the 3D Scene**
```js
const scene = new THREE.Scene();
```
### **Explanation:**
- The `scene` is a container where all 3D objects, lights, and cameras are added.

---

## **4. Loading the 3D Model**
```js
let bee;
let mixer;
const loader = new GLTFLoader();
loader.load('/demon_bee_full_texture.glb',
    function (gltf) {
        bee = gltf.scene;
        scene.add(bee);

        mixer = new THREE.AnimationMixer(bee);
        mixer.clipAction(gltf.animations[0]).play();
        modelMove();
    },
    function (xhr) {},
    function (error) {}
);
```
### **Explanation:**
- A **GLTFLoader** is used to load a `.glb` 3D model file named `'demon_bee_full_texture.glb'`.
- `loader.load()` accepts:
  1. **File Path**: The location of the `.glb` model.
  2. **Success Callback**: Runs when the model is successfully loaded.
  3. **Progress Callback** (currently empty).
  4. **Error Callback** (currently empty).

### **Inside the Success Callback (`function (gltf) {...}`):**
- `bee = gltf.scene;` → Stores the loaded 3D model in the `bee` variable.
- `scene.add(bee);` → Adds the bee model to the 3D scene.
- **Adding Animations**:
  - `mixer = new THREE.AnimationMixer(bee);` → Creates an animation mixer to handle model animations.
  - `mixer.clipAction(gltf.animations[0]).play();` → Plays the first animation of the model.
- `modelMove();` → Calls a function to handle model movements.

---

## **5. Setting Up the WebGL Renderer**
```js
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);
```
### **Explanation:**
- `WebGLRenderer({alpha: true})`:
  - Creates a **renderer** that displays 3D graphics.
  - `{alpha: true}` makes the background **transparent**.
- `renderer.setSize(window.innerWidth, window.innerHeight);`
  - Sets the renderer size to match the window dimensions.
- The 3D canvas (`renderer.domElement`) is **appended** inside a `div` with the id `'container3D'`.

---

## **6. Adding Lights to the Scene**
```js
const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);
```
### **Explanation:**
1. **Ambient Light**:
   - `new THREE.AmbientLight(0xffffff, 1.3);`
   - A light source that illuminates all objects evenly.
   - `0xffffff` means **white light**, and `1.3` is the intensity.
2. **Directional Light**:
   - `new THREE.DirectionalLight(0xffffff, 1);`
   - Simulates sunlight, casting shadows in one direction.
   - Positioned far above the scene: `(500, 500, 500)`.

---

## **7. Animation Loop (Rendering the Scene)**
```js
const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    renderer.render(scene, camera);
    if(mixer) mixer.update(0.02);
};
reRender3D();
```
### **Explanation:**
- `requestAnimationFrame(reRender3D);`:
  - Calls the `reRender3D` function recursively to **continuously render** the scene.
- `renderer.render(scene, camera);`:
  - Draws the scene from the camera's viewpoint.
- `if (mixer) mixer.update(0.02);`
  - Updates the **animation mixer** every frame.

---

## **8. Defining Model Positions for Different Sections**
```js
let arrPositionModel = [
    { id: 'banner', position: {x: 0, y: -1, z: 0}, rotation: {x: 0, y: 1.5, z: 0} },
    { id: "intro", position: { x: 1, y: -1, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
    { id: "description", position: { x: -1, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
    { id: "contact", position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } }
];
```
### **Explanation:**
- Defines different positions and rotations for the **bee model** based on different sections (`banner`, `intro`, etc.).
- The model's movement will be based on these values.

---

## **9. Handling Model Movement on Scroll**
```js
const modelMove = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
            currentSection = section.id;
        }
    });
    let position_active = arrPositionModel.findIndex((val) => val.id == currentSection);
    if (position_active >= 0) {
        let new_coordinates = arrPositionModel[position_active];
        gsap.to(bee.position, { ...new_coordinates.position, duration: 3, ease: "power1.out" });
        gsap.to(bee.rotation, { ...new_coordinates.rotation, duration: 3, ease: "power1.out" });
    }
};
window.addEventListener('scroll', () => { if (bee) modelMove(); });
```
### **Explanation:**
- Checks which **section** is currently visible on scroll.
- Uses **GSAP** to smoothly move and rotate the model to predefined positions.

---

## **10. Handling Window Resizing**
```js
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
```
### **Explanation:**
- Ensures the 3D scene resizes correctly when the window is resized.

---

### **Summary**
This JavaScript code:
✔️ Loads a 3D **bee model**.  
✔️ Adds lighting, rendering, and animation.  
✔️ Moves the model based on **scroll position** using **GSAP**.  
✔️ Ensures **smooth rendering** with continuous updates.  
