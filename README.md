# Clicker App

a tiny desktop clicker application built with React, TypeScript, and Electron because apparently clicking a button repeatedly deserves its own application.. and honestly, why not!?? (i genuinely thought of pushing my Flutter version but i still HAD TO LEARN IT)

## About

Clicker App is a simple desktop application built with React and TypeScript, powered by Electron

the idea is pretty straightforward: a small interactive clicker application that runs as a native desktop application rather than just another webpage sitting in a browser (R.I.P. RAM)

only now i have discovered and tasted React.. i hate THIS. REACT IS REALLY LOVELY OMG

## Features

- `interactive clicker` with a continuously updating click count
- `React-based interface` built with TypeScript
- `desktop application` powered by Electron
- `cross-platform packaging` for Windows and Linux
- `production builds` through Electron Forge
- `automated builds` using GitHub Actions (yay it's my first time using it!! care to buy me a celebratory cake??)

## How It Works

so, my Clicker App uses React to manage its interface and application state (very preppy)

when the user interacts with the clicker, React updates the relevant state and renders the changes automatically! (very aesthetic)

Electron provides the desktop environment, allowing the React application to run independently of a traditional browser window, yum (very coquette)

## Installation and Running

### Requirements

- `Node.js`
- `npm`

### Clone the repository

```bash
git clone https://github.com/nathymatic/clicker-app
cd practice-electron
# don't mind THIS folder name because
# i was initially planning just a practice project
# but i guess it got too far ahead..
```

### Install dependencies

```bash
npm install
```

### Start the application

```bash
npm start
```

### Build for production

```bash
npm run make
```

generated distributables are available in the `out/make` directory, woohoo

## Tech Stack

Clicker App is built using:

- React — component-based user interface
- TypeScript — application logic and static typing
- Tailwind CSS — utility-first styling
- Electron — desktop application runtime
- Electron Forge — packaging and distributable generation
- Vite — frontend development and production builds
- GitHub Actions — automated cross-platform builds

the only thing i'll be using from now on (and obsessing over) is React!!! pls enjoy! OH, YES. I'M LOVING TAILWIND CSS TOOOOOOOOO!!!!!

## Supported Platforms

the project currently targets:

- Windows
- Linux

Linux builds include Debian packages (`.deb`) and AppImage distributables

Windows builds are generated through Electron Forge's Squirrel maker

i chose these two only because i only have these two!! you can't blame me!!!!

## Current Scope

Clicker App is intentionally small (aren't all of my repositories SMALL????)

because rather than attempting to build an enormous application right away, it serves as a practical project for exploring React, TypeScript, Electron, desktop application development, and cross-platform distribution. LITERALLY. WHAT. I. DID. YAAAAAAAAAAAAAAAAAAAAAY!

## Why I Made This

i wanted to experiment with desktop application development using web technologies and compare the experience with Flutter (yes! throwback to that one, widget trees make me want to.. plant trees..! totally...!)

aaand after trying both approaches, React and Electron ended up being a particularly enjoyable combination to work with (super. i can't deny)

and well... here we are. another clicker application. very revolutionary, indeed. this emits such aura of worthiness and glory that i think it deserves to be in history!

## License

See [LICENSE](LICENSE).
