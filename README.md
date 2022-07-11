<h3 align="center">
  Taskez Frontend
</h3>
<h4 align="center">
  UI for kanban style project management with DnD experience. 
</h4>

## Taskez is simple task  management platform
<img src="public/readme_screen.png" alt="kanbanboard" title="kanbanboard">

# Features

(IN DEVELOMENT)

- [x] **Reusable UI library** for a bulma/tailwing inspired design system with the theming ease of **styled components**
- [x] **Custom hooks design pattern** that allows for proper seperation of logic and UI.
- [x] **Data driven architecture** . All UI components use a single source of truth for rendering that lags the DataBase and is eventually consistent.
- [x] Easy-to-use Layout system that allow faster development .
- [x] Kanban DnD animation controls.

# Upcoming Features

( IN PLANNING PHASE)

- [ ] **Sockets** for event driven interactions.
- [ ] **Programatic DnD** which makes the app truelly reactive and gives the feel of an online multiplayer game.( tricky)

## Project Status
WIP: Work in progress.
### Demo link: 
[live demo link: ]("https://taskez-client.herokuapp.com/")

*This project is currently in development. There are some intermediate inconsistencies due to polling which causes collisions between drag events and the data coming from DB .I am working towards a more robust solution for real-time or near to real-time and consistent experience.*

## Installation and Setup Instructions
#### Get Started:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  