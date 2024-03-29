# ALCM API Testing Project

## Overview

This project uses [Playwright](https://playwright.dev/) to automate and test API responses, ensuring that they meet expected outcomes. Playwright provides a powerful platform for running browser-based tests, but it's also incredibly useful for API testing due to its support for network operations.

## Getting Started

### Prerequisites

- Node.js
- A text editor or IDE of your choice. (Better if you can use [VSCode](https://code.visualstudio.com/))
- Basic understanding of JavaScript and API concepts

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**

   ```bash
   cd <project-directory-name>
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

### Configuration

Before running the tests, ensure your environment is properly set up:

1. **Set up environment variables** Set correct configuration (including API base URLs, Access token) in `.env` (Make sure add valid access token here)

## Writing Tests

Tests are located in the `tests` directory. To add a new test, create a `.spec.js` file in the appropriate subdirectory. Use Playwright's API to send requests and assert responses:

## Run Tests (Dev)

npm run dev

## Run Tests

npm run ui

## Create Report

1. npm run clean_report
2. npm run create_report

## Show generated Report

1.  npm run show_report
