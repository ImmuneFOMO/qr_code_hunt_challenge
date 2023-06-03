# QR CODE HUNT CHALLENGE

This is a Node.js project that leverages Express.js, EJS and Path.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

- Node.js
- NPM

### Installing

Here are step-by-step series of commands that you need to run to get the development environment running:

1. Initialize NPM. This will create a `package.json` file for your project.

```bash
npm init
```

2. Install Express.js:

```bash
npm install express
```

3. Install EJS:

```bash
npm install ejs
```

4. Install Path:

```bash
npm install path
```

### Running the project

Once you have installed all the prerequisites, you can now run the project with the following command:

```bash
node server.js
```

You can then check the site on your web browser by visiting:

```bash
http://localhost:3000/
```

## Customizing the Project

You can customize the project by modifying rules, hints, and image contents. Here's how you do it:

### Modifying the Rules

To modify the rules in the first page of your QR code challenge, go to the `index.js` file in the `public/js/` folder. Find the line `if (requestCode === "abcD542AcEfgH12")` and modify the request code to any that you want. You can also change the content that's in this if statement.

### Modifying Hints and Images

To modify hints and gifs/pictures, you need to open the `server.js` file and change the request codes to other codes or keep this and just change the links on the codes in the `getImage` function. To change the hints, you need to modify the content of the `getHint` function.

## Conclusion

Thank you for visiting this repository! If you find this project helpful or interesting, please follow me here on GitHub.

Happy coding!
