# Shivam Kumar - Personal Portfolio

A modern, responsive, and interactive personal developer portfolio built with React to showcase my skills, experience, and projects. 

![Portfolio Preview](./public/vite.svg) *// Replace with an actual screenshot of the portfolio*

## 🚀 Features

*   **Modern UI/UX**: Designed with a clean, dark-themed aesthetic.
*   **Fully Responsive**: Works seamlessly across desktops, tablets, and mobile devices.
*   **Dynamic Content**:
    *   **About Me**: A summary of my background as a Computer Science and Engineering student at LPU.
    *   **Skills**: A categorized grid of technical skills (Languages, Frameworks, Tools, Soft Skills) with logos.
    *   **Experience**: A timeline of my roles, hackathons, and collaborative projects.
    *   **Projects**: Detailed cards for my latest work, including *SportNova (AI Sports Platform)*, *Risklens (Fintech App)*, and an *AI Code Review Platform*.
    *   **Education**: A timeline of my academic background.
*   **Interactive Elements**: Includes typing effects, tilt animations, and smooth scrolling.
*   **Contact Form**: Integrated with EmailJS for direct messaging.

## 🛠️ Tech Stack

*   **Frontend Library**: [React.js](https://reactjs.org/) (v18)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
*   **Animations & Effects**:
    *   `react-parallax-tilt` (Hover tilt effects)
    *   `react-typing-effect` (Dynamic typing text)
*   **Routing**: `react-router-dom`
*   **Notifications**: `react-toastify`
*   **Email Integration**: `@emailjs/browser`

## 💻 Running Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v16 or higher)
*   npm (or yarn)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/storm309/shivam-dev-portfolio.git
    cd shivam-dev-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` in your web browser.

## 📁 Project Structure

```text
├── public/              # Static assets (images, Vite logo)
├── src/
│   ├── assets/          # Icons, company logos, education logos, etc.
│   ├── components/      # Reusable React components
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   ├── Skills/
│   │   ├── Work/        # (Projects section)
│   │   └── BlurBlob.jsx # Background effect component
│   ├── App.jsx          # Main application component layout
│   ├── constants.js     # Data file containing skills, projects, and experience info
│   ├── index.css        # Global Tailwind and custom CSS styles
│   └── main.jsx         # React application entry point
├── package.json         # Project metadata and dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 🌐 Live Preview

You can view the live version of this portfolio here: *(Add Vercel/Netlify link here once deployed)*

## 📬 Contact

**Shivam Kumar**
*   Email: shivamkumarp447@gmail.com
*   GitHub: [storm309](https://github.com/storm309)

---
*Feel free to star ⭐ this repository if you find it helpful!*
