# Waiting Rooms of Memory

Interactive website for a CIA III coursework project: a counter-archive proposal for military families.
Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Structure
```
index.html          page structure
css/style.css       styling
js/data.js          ALL editable content: text, photo filenames, source links
js/main.js          interactions (no need to edit)
images/memorial/    your photographs
images/archive-room/ archive-room items
.nojekyll           tells GitHub Pages to serve files as-is
```

## Run locally
Open `index.html` in a browser.

## Publish on GitHub Pages
1. Create a repository (e.g. `waiting-rooms-of-memory`) and upload everything in this folder, keeping the folders.
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`. Save.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Editing
- Permanent changes: edit `js/data.js` (text, source links, photo filenames) and the text in `index.html`, then commit.
- Add photos: put files in `images/memorial/` using the filenames in `js/data.js`.
- The in-page **Edit mode** is a live preview only; its changes are not saved to the repo.
