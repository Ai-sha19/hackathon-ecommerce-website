# Pixel-Perfect Responsive Website with Next.js & Tailwind CSS
This project is a pixel-perfect responsive website built using Next.js and Tailwind CSS, based on a Figma template. It includes dynamic routing, component chunking, and various pages such as a homepage, product listing pages, a cart page, and an about page. The design is fully responsive and optimized for different screen sizes.

# Features
Pixel-perfect design: The website closely follows the Figma template with a focus on exact dimensions.

Responsive layout: Tailwind CSS ensures that the website is fully responsive on all screen sizes.

Dynamic Routing: Pages such as product listing and cart pages use dynamic routing.

ShedCN Component: The header utilizes ShedCN's sheet component for enhanced UI.

Modular Components: Components have been chunked and linked together for better maintainability and reusability.

Images: All images are stored in the public folder for optimized loading.

# Pages
Homepage: A welcoming page with key elements, including a call-to-action button leading to the product listings.

Product Listing Pages: Two pages for displaying products, utilizing dynamic routing for product details.

Cart Page: Displays the cart items and allows users to review their selections before checkout.

About Page: Provides information about the website and its purpose.

# Technologies Used
Next.js: A React-based framework for building server-side rendered (SSR) applications.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

ShedCN Sheet Component: A UI component used in the header for a stylish, responsive design.

Dynamic Routing: Implemented in Next.js to create flexible, SEO-friendly routes.

# Installation
Clone the repository:

git clone <repository-url>
Navigate to the project folder:

cd <project-folder>
Install the dependencies:

npm install
Run the development server:

npm run dev
Open the website in your browser at http://localhost:3000.

# Folder Structure
public/: Contains all the static assets, such as images.

pages/: Contains the page components and dynamic routing logic.

index.tsx: Homepage.

productlisting2/: Product listing pages with dynamic routes.

cart.tsx: Cart page.

about.tsx: About page.

components/: Contains reusable UI components like the header, footer, and product cards.

styles/: Contains custom Tailwind CSS configuration if needed.

# License
This project is licensed under the MIT License.