🌍 Projet Île Flottante - Three.js

Ce projet est une scène interactive en 3D réalisée avec Three.js, où une île flottante est explorée par un personnage zombie. Le joueur peut se déplacer sur l'île et tomber en dehors si il quitte la zone jouable.

🔧 Comment refaire ce projet de A à Z ?

Si tu veux refaire ce projet sur ta machine, voici un guide détaillé pour tout installer et configurer correctement.

1️⃣ Installer Node.js et npm

D'abord, assure-toi d'avoir Node.js installé sur ton ordinateur. Pour vérifier, vas dans ton Terminal et tape ceci :

node -v
npm -v

Si ce n’est pas installé, télécharge et installe Node.js via ton navigateur 

2️⃣ Créer un dossier et initialiser un projet

Ouvre ton Terminal et exécute les commandes suivantes :

mkdir Projet-ile-flottante
cd Projet-ile-flottante
npm init -y

Cela va créer un dossier et générer un fichier package.json.

3️⃣ Installer Three.js et les dépendances

Dans le dossier du projet, installe Three.js avec npm sur ton Terminal :

npm install three

Sur ton Terminal, on installe aussi un serveur de développement pour voir les changements en direct :

npm install vite --save-dev

4️⃣ Créer la structure du projet sur VSCode : 

Dans le dossier Projet-ile-flottante, crée cette arborescence :

Projet-ile-flottante/
│── assets/            → Contiendra les fichiers statiques (modèles 3D, images)
│── node_modules/      → Dépendances installées avec npm
│── index.html         → Page principale
│── package.json       → Fichier de configuration npm
│── package-lock.json  → Verrouillage des versions des dépendances
│── script.js          → Script principal contenant le code JavaScript
│── style.css          → Feuille de styles pour l'interface

5️⃣ Ajouter Three.js au projet

Dans script.js, ajoute mon code situé dans le code ci-joint :

6️⃣ Lancer le projet

Recopie mon code package.json pour pouvoir démarrer le serveur avec Vite :

Puis, démarre le projet avec ceci dans ton Terminal :

npm run dev
Tu devrais voir la scène Three.js s'afficher dans ton navigateur ! 🚀

7️⃣ Ajouter un modèle 3D et gérer les déplacements

Tu peux ajouter des modèles 3D .glb en utilisant un GLTFLoader. Installe le loader dans ton Terminal avec :

npm install three/examples/jsm/loaders/GLTFLoader.js

Dans script.js, charge un modèle 3D comme dans mon code script.js :

Exemple : 

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

Ajoute ensuite un système de déplacements pour le zombie :

Exemple : 

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

8️⃣ Détecter le sol avec Raycaster

Pour éviter que le zombie flotte ou tombe dans le vide, utilise un Raycaster en recopiant celui dans mon code

Ajoute checkGround() dans la boucle animate() pour vérifier la position du zombie en temps réel

✅ Résumé des commandes principales

Action	                   │     Commande
Installer les dépendances	 │     npm install
Lancer le projet	         │     npm run dev
Compiler et optimiser	     │     npm run build

Ce que tu apprendras : 

🏗️ Structurer un projet Three.js

🎮 Gérer les déplacements d’un personnage en 3D

⚡ Charger et afficher des modèles .glb

🛠️ Utiliser un Raycaster pour détecter le sol

Auteur

👨‍💻 Ewan Roux
🔗 [LinkedIn](https://www.linkedin.com/in/ewan-roux-a737922a4/)
📌 [GitHub](https://github.com/EwanROUX/Projet-ile-flottante/edit/master/README.md)

📜 Licence
Ce projet est sous licence MIT. Tu peux l'utiliser librement pour apprendre et créer tes propres scènes 3D !

💡 Amuse-toi bien avec Three.js ! 🎮🚀
