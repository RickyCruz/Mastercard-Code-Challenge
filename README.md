# Mastercard Code Challenge

## Overview
The objective of this homework was to design a small web app that consumes GitHub's GraphQL API. My implementation for this homework is a **GitHub Search Application** that allows users to search GitHub for users. The application displays 20 search results at a time.

## Instructions

### Prerequisites
* To run this project, you must have Node.js installed.
* A [GitHub](https://github.com) Account
* A [Personal Access Token](https://github.com/settings/tokens) associated with a GitHub account *(No special scopes needed)*

### Running the application

1. Generate a *[Personal Access Token](https://github.com/settings/tokens)* on GitHub, if not already generated. Refer to this [guide](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) on how to create one.
2. Clone this repository to your machine, and installing all NPM dependencies.
```bash
$ git clone https://github.com/RickyCruz/Mastercard-Code-Challenge.git
```
3. Open the Command Prompt (if using Windows) or the Terminal (if using Linux/Mac) and browse to the project directory
```bash
$ cd Mastercard-Code-Challenge && npm install
```
4. Add your Personal Access Token in .env file
```bash
$ cp .env.local.example .env.local
```

5. Run the WebApp
* Compiles and hot-reloads for development
```
npm run serve
```
* Compiles and minifies for production
```
npm run build
```
* if you prefer you can also run the unit tests with the command
```
npm run test:unit
```