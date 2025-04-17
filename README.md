# Messenger App

A real-time messaging application built with Next.js, designed to provide seamless communication between users.

## Features

- **Real-Time Messaging**: Instant communication using WebSockets.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: Optimized for various devices.
- **Modern UI**: Clean and intuitive user interface.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Typed superset of JavaScript.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **Pusher**: Real-time communication service.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LokeshwarB99/Messenger-app.git
   cd Messenger-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the necessary environment variables:

   ```env
   DATABASE_URL=your_database_url
   NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
   NEXT_PUBLIC_PUSHER_CLUSTER=your_pusher_cluster
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Main application components and pages.
- `components/ui/`: Reusable UI components.
- `context/`: React context for state management.
- `lib/`: Utility functions and libraries.
- `prisma/`: Prisma schema and database configurations.
- `public/`: Static assets.
- `middleware.ts`: Custom middleware for request handling.
- `pusher.ts`: Configuration for Pusher integration.
