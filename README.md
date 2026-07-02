# Notes App

A note-taking app with real-time search, tags, sorting, and edit mode. Built with React, TypeScript, and Tailwind CSS. Part of a progressive React learning path.

![Preview](screenshots/screenshot.png)

## Features

- Create notes with title, content, and tags
- Real-time search across title and content
- Sort by newest, oldest, or alphabetically
- Edit existing notes (same form, edit mode)
- Delete notes
- Note counter in the header
- Persistent storage via localStorage

## Stack

- React 19
- TypeScript
- Tailwind CSS v4
- Vite

## Architecture

```
<App>              ← state + logic
  ├── <SearchBar>  ← controlled search input and sort select
  ├── <NoteForm>   ← create and edit mode, controlled inputs
  └── <NoteList>   ← renders filtered + sorted notes
        └── <NoteCard> ← displays note, edit and delete actions
```

## Key Concepts

- Derived state for search and sort (no duplicate state)
- Dual-purpose form: create and edit driven by `editingNote`
- Lift state up — `editingNote` lives in App
- Props drilling for callbacks
- Multi-field controlled form with tag parsing (string to array and back)
- `localStorage` persistence with date revival on read
- `useEffect` to preload the form in edit mode

## Getting Started

```bash
npm install
npm run dev
```
