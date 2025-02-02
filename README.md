# 📚 College of Computer Science - Imam University

## 🌐 About the Project
This web application is developed as a final project for the College of Computer Science at Imam University. It provides students with a centralized platform to access essential resources, including the latest news, training courses, boot camps, hackathons, and university clubs. The goal is to streamline the process of finding and engaging in academic and extracurricular activities while offering an intuitive and interactive user experience.

This project adheres to strict development standards, including semantic HTML, object-oriented JavaScript with ES6 classes, and a robust backend using Node.js and MongoDB. Authentication is enforced to ensure secure user access, and all data is persistently stored in MongoDB without relying on local file systems.

## 🎯 Project Objectives
- **Enhancing Information Accessibility**: Providing a well-organized, easily accessible platform for all students.
- **Encouraging Student Engagement**: Allowing students to discover and participate in various events, competitions, and student clubs.
- **Supporting Technical Events**: Making it easier for students to find and register for hackathons, boot camps, and courses.
- **Efficient Content Management**: Enabling authorized administrators to update content seamlessly.
- **Facilitating Event Registrations**: Ensuring students can register for events efficiently through an integrated portal.
- **Providing Community Interaction**: Offering dedicated pages for student clubs, complete with social media links and event details.
- **Implementing Authentication**: Ensuring user security through a login system that validates user access at every stage.

## 🏗️ Project Features
### 📰 Home Page
**Problem:** Students often struggle to stay updated with college news.
**Solution:** A dynamic homepage displaying the latest announcements, ensuring easy access to relevant information.

### 🎓 Training Courses & Boot Camps
**Problem:** Students find it difficult to locate and enroll in training programs.
**Solution:** A dedicated section listing all available courses and boot camps with clear registration steps and instructor details.

### 💡 Hackathons
**Problem:** Many students miss hackathons due to fragmented information.
**Solution:** A hackathon directory with up-to-date details, including eligibility, deadlines, themes, prizes, and team formation guidelines.

### 🏛️ University Clubs
**Problem:** Students lack information on university clubs and their activities.
**Solution:** A directory of all university clubs, detailing their social media presence, upcoming events, and registration links.

### 🔑 Admin Management System
**Problem:** Manually updating event listings and news is time-consuming for administrators.
**Solution:** A content management system (CMS) allowing admins to easily update website content.


## 💻 Technologies Used
- **Frontend**: HTML, CSS, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: GitHub for collaboration and project tracking

--
Sure! Here's a clear description followed by the folder structure:

---

#### **Project Folder Structure - IMAM-EVENTS-WEBSITE**

This is the directory structure for the **IMAM-EVENTS-WEBSITE** project. It is a web application that includes frontend and backend components, with organized files for configuration, routes, controllers, models, middleware, and public assets. 

- The **`api`** folder contains backend-related code, including configuration settings, database connections, controllers, middleware, models, and API routes.
- The **`Pages`** folder contains HTML pages for different sections of the website.
- The **`public/css`** folder stores styling files.
- The **`Users`** folder contains user authentication pages.
- The project is managed with **Node.js**, as indicated by the presence of `package.json` and `server.js`.

---

```
📦 IMAM-EVENTS-WEBSITE
├── 📂 api
│   ├── 📂 config
│   │   ├── allowedOrigin.js
│   │   ├── corsOptions.js
│   │   ├── dbConn.js
│   ├── 📂 controllers
│   │   ├── authController.js
│   │   ├── usersController.js
│   ├── 📂 middleware
│   │   ├── verifyJWT.js
│   ├── 📂 models
│   │   ├── Registration.js
│   │   ├── User.js
│   ├── 📂 node_modules
│   ├── 📂 Pages
│   │   ├── BootCamps.html
│   │   ├── CollegePortal.html
│   │   ├── courses.html
│   │   ├── Hackthon.html
│   │   ├── image.png
│   │   ├── p1.jpeg
│   │   ├── p2.jpeg
│   │   ├── registration_form.html
│   │   ├── script.js
│   │   ├── stylesCo.css
│   │   ├── Volenteer.html
│   ├── 📂 public
│   │   ├── 📂 css
│   │   │   ├── Admin.css
│   ├── 📂 routes
│   │   ├── authRoutes.js
│   │   ├── registrationRoutes.js
│   │   ├── root.js
│   │   ├── userRoutes.js
├── 📂 Users
│   ├── 404.html
│   ├── logIn.html
│   ├── signUp.html
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── server.js
```
#### **Technologies Used in IMAM-EVENTS-WEBSITE**
The following table provides a comparison of the main technologies used in the project:

| **Technology**  | **Purpose**                                  | **Files / Usage** |
|----------------|--------------------------------------------|------------------|
| **Node.js**    | Backend runtime environment                | `server.js` |
| **Express.js** | Web framework for handling API requests    | `routes/*.js`, `server.js` |
| **MongoDB**    | Database for storing user and event data   | `config/dbConn.js`, `models/*.js` |
| **JWT (JSON Web Token)** | Authentication and authorization | `middleware/verifyJWT.js` |
| **HTML**       | Structure of the web pages                 | `Pages/*.html`, `Users/*.html` |
| **CSS**        | Styling the frontend                       | `public/css/Admin.css`, `stylesCo.css` |
| **JavaScript** | Frontend interactions and API calls        | `script.js` |
| **Git**        | Version control for project management    | `.gitignore` |
| **dotenv**     | Environment variable management            | `.env` |

--
#### **Future Work 🚀**  
To enhance the **IMAM-EVENTS-WEBSITE**, several future improvements and features can be implemented:

1️⃣ **Personalized Student Dashboards**  
   - Introduce user accounts where students can:  
     - Track their **enrolled courses** 📚  
     - View **upcoming events** 📅  
     - Monitor **volunteer hours** ⏳  

2️⃣ **AI-Powered Event Recommendations**  
   - Utilize **machine learning algorithms** to suggest:  
     - **Relevant courses** 🎓  
     - **Camps and hackathons** 💡  
     - **Workshops based on students' interests** 🤖  

3️⃣ **Expanded Partnership Programs**  
   - Collaborate with **industry leaders** and **organizations** to provide:  
     - **Exclusive internships** 🏢  
     - **Mentorship programs** 🎯  
     - **Professional certifications** 📜  
--
### **Screenshots 📸**  
You can find the project’s screenshots at the following link:  

🔗 **[Google Drive - Screenshots](https://drive.google.com/drive/folders/1v6KBP85MhVbT4ip_pRI-V3WymDqIofn0)**  

--
#### **Resources & References**  
Here are some useful resources that were referenced during the development of the **IMAM-EVENTS-WEBSITE**:

📌 **Courses & Documentation**  
- [SATR: Backend Development](https://satr.codes/course/CATspNvVjT/view) - Covers essential backend development concepts.  
- [SATR: Frontend Development](https://satr.codes/course/hNUwyBUKmF/view) - A comprehensive guide on frontend technologies.

📌 **Video Tutorials**  
- 🎥 [YouTube: Full-Stack Web Development Guide](https://www.youtube.com/watch?v=eX5B-1p2G-E&t=3049s) - A detailed walkthrough of full-stack development.

--
## ⚙️ Installation Guide
1. **Clone the Repository**
```sh
git clone https://github.com/sfayez-byte/Imam-events-website.git
cd Imam-events-website
```

2. **Install Dependencies**
```sh
npm install
```

3. **Set Up Environment Variables**
Create a `.env` file and add necessary credentials (e.g., MongoDB connection string).

4. **Run the Server**
```sh
npm start
```
Or, for development mode:
```sh
npm run dev
```

