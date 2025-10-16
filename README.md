# Frontend Dashboard Project

A **responsive React dashboard application** featuring **Home, Login, and Todo pages**. Each user can log in with a unique email and manage their own Todo list. The project is **mobile and tablet friendly** and hosted as a web app.

---

## **Features**

### Home Page
- Displays a welcoming message and project description.
- Highlights the Todo application functionality.
- Provides a **Login button** for users to access their account.
- Fully responsive for desktop, tablet, and mobile devices.

### Login Page
- Users can log in with **email and password**.
- Validates email format and password length.
- Passwords are stored locally per email.
- Supports **multiple users**, each with their own Todo list.

### Todo Page
- Personalized Todo list for each user.
- Add, delete, and manage tasks efficiently.
- Todo input and buttons are mobile/tablet friendly.
- Logout button available after login.
- Data is saved in **localStorage**, persistent across sessions.

---

## **Technologies Used**
- **React.js** for building the SPA.
- **React Router** for page navigation.
- **LocalStorage** for storing user data and Todos.
- **HTML5, CSS3, JavaScript** for UI and styling.
- Fully responsive design with media queries.

---

## **Project Structure**

```frontend-dashboard/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Dashboard.jsx
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ └── Todo.jsx
│ ├── App.jsx
│ ├── index.js
│ └── index.css
├── package.json
└── README.md
```
## **Installation**
```
1. Clone the repository:
git clone https://github.com/YOUR_USERNAME/frontend-dashboard.git
cd frontend-dashboard

2. Install dependencies:
npm install

3.Run locally:
npm start
Opens the app at http://localhost:3000.
```
## Deployment on GitHub Pages
```
1.Install gh-pages:
npm install --save gh-pages

2.Update package.json:
"homepage": "https://YOUR_USERNAME.github.io/frontend-dashboard",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

3.Deploy:
npm run deploy
Your app will be live at:
https://YOUR_USERNAME.github.io/frontend-dashboard
```
## Usage
```
Open Home page and click Login.
Enter email and password.
New email → generates new Todo list.
Existing email → password must match to access Todos.
After login, you are redirected to Todo page.
Add or delete tasks.
Click Logout to end the session.
```

## Notes
```
Passwords and Todos are stored in localStorage → persistent but accessible only in the same browser.
Each user has a separate Todo list.
Fully responsive UI for desktop, tablet, and mobile devices.
```
## Screenshots
