# Splitter

This is an application designed to help users split their expenses with friends & colleagues.

This is a personal project for practicing skills.

[LIVE DEMO](https://splitter-mzelinka17.vercel.app/)

## Table of Contents

1. [Setup](#setup)
   - [Install](#install)
   - [Run](#run)
   - [Build](#build)
2. [Overview](#overview)
3. [Project structure](#project_structure)
   - [Components](#components)
   - [App Component](#app)
4. [Technologies](#technologies)
5. [Goals](#goals)

## Setup<a name="overview"></a>

### Install<a name="install"></a>

The app setup is as simple as any other Vite project. First, clone the repository in your local folder.

```
git clone https://github.com/zelinka-marek/splitter.git
```

After that, navigate to the folder and install the dependencies

```
cd splitter
npm install
```

### Run<a name="run"></a>

To run the application in dev mode, execute the following command:

```
npm run dev
```

### Build<a name="build"></a>

To build a compiled version of the application, execute the following command:

```
npm run build
```

To start the compiled version, execute the following command:

```
npm run start
```

## Overview<a name="overview"></a>

The app is useful for splitting your bills with your friends.

Users are able to:

- Calculate the correct tip and total cost of the bill per person
- Update and validate the values in real-time
- Reset the calculator values

## Project structure<a name="project_structure"></a>

The project's source folder is divided into three sections: the components folder, and the app component file.

### Components<a name="components"></a>

- `CalculatorForm` component: displays the form inputs that update and validate our values on every change using the `onChange` events.

- `CalculatorResults` component: receives the form values as props and calculates the correct tip and total cost of the bill per person.

### App Component<a name="app"></a>

The app components display a centered layout, including the `CalculatorForm` and `CalculatorResults` components in a stacked layout.

## Technologies<a name="technologies"></a>

The app is made with [React](https://reactjs.org/) (using ES6 and hooks), [React Hook Form](https://react-hook-form.com/) for form validation, and [Tailwind CSS](https://tailwindcss.com/) for the styling.

I've used [Vite](https://vitejs.dev/) as a build tool. The app is deployed at [Vercel](https://vercel.com/).

## Goals<a name="goals"></a>

All my projects have a goal - something to practice. It can be a framework, a styling library, or a programming concept. In this one, I tried to put into practice my knowledge of React.

As the development of the application progressed, I also wanted to try the use of Tailwind CSS as a styling library.
