🧪 Week 6: Testing and Debugging – Ensuring MERN App Reliability
🚀 Objective

The goal of this project is to ensure the reliability, maintainability, and robustness of a MERN (MongoDB, Express.js, React, Node.js) application by implementing comprehensive testing and debugging strategies.
You’ll perform unit, integration, and end-to-end testing, while also applying effective debugging techniques to identify and fix common issues in both client and server environments.

📋 Project Overview

In this week’s challenge, you will:

Write unit tests for isolated components and utility functions.

Implement integration tests for API routes and UI interactions.

Build end-to-end (E2E) tests simulating real user flows.

Apply debugging tools and strategies for both frontend and backend.

Configure test coverage and ensure consistent CI-ready testing scripts.

📂 Project Structure

testing-debugging/
├── server/
│   ├── package.json
│   ├── src/
│   │   ├── config/db.js
│   │   ├── models/Bug.js
│   │   ├── routes/bugRoutes.js
│   │   ├── middleware/errorHandler.js
│   │   ├── tests/bug.test.js
│   │   └── server.js
│   └── .env
│
└── client/
    ├── package.json
    ├── vite.config.js
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── BugForm.jsx
    │   │   └── BugItem.jsx
    │   ├── tests/
    │   │   ├── unit/BugForm.test.jsx
    │   │   ├── component/BugItem.test.jsx
    │   │   └── integration/App.test.jsx
    │   ├── setupTests.js
    │   └── lib/api.js
    └── public/


⚙️ Task Breakdown
🧩 Task 1: Setting Up Testing Environment
Backend

Installed Jest and Supertest for testing API endpoints.

Configured a test database (MongoDB test instance).

Created test scripts for unit and integration testing.

Frontend

Installed Vitest and React Testing Library for component testing.

Added setupTests.js to configure DOM matchers (e.g., toBeInTheDocument).

Configured vite.config.js for testing with jsdom environment.

🧪 Task 2: Unit Testing

Tested helper functions (validation logic, database utilities).

Created tests for:

React components (BugForm, BugItem)

Express middleware (error handler)

Custom hooks and API helper functions

Used mocks to isolate external dependencies (like API calls).

Target: ≥70% unit test coverage

Example:

// server/src/tests/utils.test.js
test("validates bug title correctly", () => {
  const isValid = validateBug({ title: "Bug 101" });
  expect(isValid).toBe(true);
});

🔗 Task 3: Integration Testing

Implemented tests for API routes using Supertest (create, update, delete bug).

Mocked database calls to ensure isolation.

On frontend, tested:

Form submission behavior

API integration via mock service (lib/api.js)

Component interactions that depend on async data

Example:

// server/src/tests/bug.test.js
import request from "supertest";
import app from "../server.js";

test("POST /api/bugs creates a new bug", async () => {
  const res = await request(app)
    .post("/api/bugs")
    .send({ title: "Crash Bug", description: "App crashes on click" });
  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe("Crash Bug");
});

🧭 Task 4: End-to-End Testing

Configured Cypress for browser-based end-to-end testing.

Simulated real user actions:

Bug creation, status update, and deletion.

Form validations and navigation.

Tested routing and component rendering in the browser.

Implemented visual regression tests for consistent UI.

Example Test Scenarios:

A user can report a new bug.

A user can update the bug status to “resolved”.

A deleted bug no longer appears in the list.

🐞 Task 5: Debugging Techniques
Backend Debugging

Used console logs and Node.js Inspector (node --inspect) to trace server issues.

Implemented a centralized Express error handler (errorHandler.js).

Logged request details in development mode using morgan.

Frontend Debugging

Added React Error Boundaries to catch runtime errors.

Used Chrome DevTools to inspect network requests and React components.

Logged internal states in React components for debugging UI issues.

Example:

// client/src/components/ErrorBoundary.jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <h2>Something went wrong.</h2>;
    return this.props.children;
  }
}

🧪 Expected Outcome

✅ A fully tested and reliable MERN application featuring:

Thorough unit, integration, and E2E test coverage

Clean, reusable, and maintainable code

Implemented debugging and error-handling best practices

Comprehensive test reporting and CI compatibility

🛠️ Setup Instructions
1. Clone the Repository

git clone https://github.com/<your-username>/mern-bug-tracker.git
cd mern-bug-tracker

2. Install Dependencies

# Install all dependencies (root, server, client)
npm run install-all

3. Environment Setup

Create .env files in both server/ and client/:

# server/.env
PORT=5000
MONGO_URI=<your_mongo_test_uri>
NODE_ENV=test

4. Run Tests

# Run all tests
npm test

# Backend tests (Jest)
cd server && npm test

# Frontend tests (Vitest)
cd client && npm test

# End-to-End tests (Cypress)
npm run test:e2e

🧾 Scripts Summary
Script	Description
npm test	Run all tests
npm run test:unit	Run unit tests only
npm run test:integration	Run integration tests
npm run test:e2e	Run Cypress end-to-end tests
npm run coverage	Generate test coverage report
📊 Deliverables

Include the following in your submission:

✅ Complete test files (unit, integration, e2e)

✅ Screenshots of passing tests and coverage reports

✅ Documentation of testing strategy

✅ Example debugging logs or screenshots

✅ Updated README.md (this file)

✅ Submission Instructions

Accept your GitHub Classroom assignment.

Push your progress regularly with meaningful commit messages.

Ensure all tests pass before submission.

Confirm your repository includes:

All source and test files

Coverage reports (/coverage folder)

Documentation and debugging notes

The autograder will run your test suite automatically after submission.

📘 References

Jest Documentation

Vitest Docs

React Testing Library

Supertest

Cypress Docs