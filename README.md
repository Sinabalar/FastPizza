# Fast Pizza 
### A small Pizza ordering Application

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Routing](#routing)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

## Overview

This is a full-featured pizza ordering web application built with React and React Router. The application allows users to browse a menu, add items to cart, and create orders.

## Features

- Browse pizza menu
- Add items to cart
- Create new orders
- View order details
- Error handling for routing and data fetching

## Technologies Used

- React 18
- React Router v6
- Vite (Build tool)
- React hooks
- React Router loaders and actions

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.0 or later)
- npm (version 8.0 or later)

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/pizza-ordering-app.git
cd pizza-ordering-app
```

2. Install dependencies
```bash
npm install
```

## Project Structure

```
src/
│
├── features/
│   ├── cart/
│   │   └── Cart.jsx
│   ├── menu/
│   │   └── Menu.jsx
│   └── order/
│       ├── CreateOrder.jsx
│       ├── Order.jsx
│       └── UpdateOrder.jsx
│
├── ui/
│   ├── AppLayout.jsx
│   ├── Error.jsx
│   └── Home.jsx
│
└── App.jsx
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Routing

The application uses React Router with the following routes:

- `/`: Home page
- `/menu`: Menu page with pizza listings
- `/cart`: Shopping cart
- `/order/new`: Create a new order
- `/order/:orderId`: View specific order details

## Available Scripts

- `dev`: Starts the development server
- `build`: Builds the application for production
- `preview`: Serves the production build locally

## Deployment

The application can be deployed to platforms like:
- Vercel
- Netlify
- Cloudflare Pages

### Deployment Steps
1. Build the application: `npm run build`
2. Deploy the `dist` directory to your preferred hosting platform

## Environment Variables

Create a `.env` file in the project root and add any necessary environment variables.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
