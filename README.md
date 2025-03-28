🌍 Floating Island Project - Three.js

This project is an interactive 3D scene created with Three.js, where a floating island is explored by a zombie character. The player can move around the island and fall off if they leave the playable area.

🔧 How to Rebuild This Project from Scratch?
If you want to rebuild this project on your machine, here’s a detailed guide to install and configure everything correctly.

1️⃣ Install Node.js and npm
First, make sure you have Node.js installed on your computer. To check, go to your terminal and type the following:

node -v
npm -v

If it’s not installed, download and install Node.js via your browser from here.

2️⃣ Create a Folder and Initialize a Project
Open your terminal and run the following commands:

mkdir Projet-ile-flottante
cd Projet-ile-flottante
npm init -y

This will create a folder and generate a package.json file.

3️⃣ Install Three.js and Dependencies
In the project folder, install Three.js using npm in your terminal:


npm install three

In your terminal, we also install a development server to see the changes live:

npm install vite --save-dev

4️⃣ Create the Project Structure in VSCode
In the Projet-ile-flottante folder, create the following structure:

Projet-ile-flottante/
│── assets/            → Will contain static files (3D models, images)
│── node_modules/      → Dependencies installed with npm
│── index.html         → Main page
│── package.json       → npm configuration file
│── package-lock.json  → Locks the versions of the dependencies
│── script.js          → Main script containing JavaScript code
│── style.css          → Stylesheet for the interface

5️⃣ Add Three.js to the Project
In script.js, add my code provided in the attached code.

6️⃣ Run the Project
Copy my package.json code to start the server with Vite.

Then, start the project with this command in your terminal:

npm run dev

You should see the Three.js scene appear in your browser! 🚀

7️⃣ Add a 3D Model and Handle Movements
You can add .glb 3D models using a GLTFLoader. Install the loader in your terminal with:

npm install three/examples/jsm/loaders/GLTFLoader.js
In script.js, load a 3D model like this:

Example:

// Load the GLB model for the fantasy house
loader.load('assets/fantasy_floating_island.glb', (gltf) => {
    const houseModel = gltf.scene;
    // houseModel.scale.set(0.1, 0.4, 0.4);  
    houseModel.position.set(-30.5, 0, -4.5);
    scene.add(houseModel);
    console.log('Fantasy Island successfully loaded!');
}, undefined, (error) => {
    console.error('Fantasy Island loading error:', error);
});

Next, add a movement system for the zombie:

Example:

// Manage movements with the directional keys
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            moveZombieX = -zombieSpeed; 
            break;
        case 'ArrowRight':
            moveZombieX = zombieSpeed; 
            break;
        case 'ArrowUp':
            moveZombieZ = zombieSpeed; 
            break;
        case 'ArrowDown':
            moveZombieZ = -zombieSpeed; 
            break;
    }
});

8️⃣ Detect the Ground with Raycaster
To prevent the zombie from floating or falling into the void, use a Raycaster by copying it from my code.

Add checkGround() to the animate() loop to check the zombie’s position in real-time.

✅ Summary of Main Commands
Action	                  │      Command

Install dependencies	  │      npm install
Run the project	          │      npm run dev
Compile and optimize	  │      npm run build

What You Will Learn

🏗️ Structure a Three.js project

🎮 Manage a character’s movement in 3D

⚡ Load and display .glb models

🛠️ Use a Raycaster to detect the ground

🏆 Author
👨‍💻 Ewan Roux
🔗 [LinkedIn](https://www.linkedin.com/in/ewan-roux-a737922a4/)
📌 [GitHub](https://github.com/EwanROUX/Projet-ile-flottante/edit/master/README.md)

📜 License
This project is under the MIT license. You can freely use it to learn and create your own 3D scenes!

💡 Have fun with Three.js! 🎮🚀
