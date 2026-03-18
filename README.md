Apex Fitness | Elite Gym & Training
Apex Fitness is a modern, high-energy web application designed for a state-of-the-art fitness facility. It provides a seamless user experience for local athletes and fitness enthusiasts to explore services, calculate their health metrics, and connect with the community.

## Live Demo
Check out the live project here: https://apex-fitness-three.vercel.app/

## Features
Dynamic Hero Section: Engaging landing page with a clear Call-to-Action (CTA).

Service Showcases: Detailed information on Personal Training, Group Classes, and Strength & Conditioning.

BMI Calculator: An interactive tool for users to track their Body Mass Index with precision.

Membership Plans: Transparent and flexible options for potential members.

Fully Responsive: Optimized for desktop, tablet, and mobile devices.

Contact Integration: Built-in contact form and location details for easy communication.

## Tech Stack
Frontend: React.js / Next.js<br>

Styling: Tailwind CSS (or your preferred CSS framework)<br>

Deployment: Vercel


## Getting Started
Prerequisites<br>
Node.js (v18.0.0 or higher)

npm or yarn

## Installation
Clone the repository:<br>

Bash<br>
git clone https://github.com/UmadiAlanka/apex-fitness.git<br>
Navigate to the project directory:

Bash<br>
cd apex-fitness<br>
Install dependencies:

Bash <br> 
npm install<br> 
Run the development server:


Bash<br> 
npm run dev<br> 
Open http://localhost:3000 in your browser.

### To configure EmailJS for your own deployment
 
1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add a **Gmail Email Service** → connect your Gmail → allow **"Send email on your behalf"** permission
3. Create an **Email Template** with these variables:
 
```
{{name}}     → sender's name
{{email}}    → sender's email
{{subject}}  → email subject
{{message}}  → sender's message
```
 
4. Replace the following values in `app/components/Contact.tsx`:
 
```tsx
await emailjs.sendForm(
  'YOUR_SERVICE_ID',   // EmailJS → Email Services → Service ID
  'YOUR_TEMPLATE_ID',  // EmailJS → Email Templates → Template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'    // EmailJS → Account → General → Public Key
);
```

## Author
 
Umadi Alanka
