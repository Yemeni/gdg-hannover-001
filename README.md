# GDG Hannover Presentation - Live Demo

An interactive 3D presentation built with Impress.js, GSAP, and TailwindCSS.

---

## **Live Demo**

Explore the live demo of the presentation here:  
[GDG Hannover Presentation Demo](https://p.yousefh.com/gdg-hannover-001/)

---

## Features
- **3D Slides**: Created using Impress.js for dynamic transitions.
- **Animations**: Smooth animations powered by GSAP.
- **Responsive Design**: Styled with TailwindCSS for flexibility.
- **Interactive Elements**: Includes QR codes and animated project showcases.

---

## Installation

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/)

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/Yemeni/gdg-hannover-001.git  
   cd gdg-hannover-001
   ```
   ```
   npm install
   ```  
---

## Scripts

### Development
To start a development server:  
```
  npm run dev
```
---

This will launch the project in your default browser at http://localhost:3000.

### Build Slides
To compile and integrate slides from the slides/ directory into index.html:  
```
npm run build-slides  
```

### Build the Project
To build the presentation for production:  
```
npm run build
```

The compiled files will be available in the dist/ directory.

### Preview the Build
To preview the production build locally:  
```
npm run preview  
```

---

## How to Add or Modify Slides
1. Add your HTML slides in the slides/ directory.  
2. Run the following command to integrate them into index.html:  
```   npm run build-slides  ```

---

## Deployment
After building the project (npm run build), deploy the contents of the dist/ folder to your hosting platform.

---

## License
This project is licensed under the [MIT License](LICENSE).
