# Quick Copy-Paste Reference

## Easiest Method: Use GitHub Web Editor

1. Go to https://github.com/alphareum/bitgrow-solution-frontend
2. Press the **`.`** (period) key on your keyboard
3. This opens **VS Code in your browser** (github.dev)
4. You can now edit all files easily!
5. Use the Source Control panel (left sidebar) to commit all at once

---

## Files to Update (View in Clink File Tree)

**Your Clink Environment** has a file tree on the left side. Here are the files you need:

### ✏️ Modified Files (6 files)
1. `src/index.css` - Click to open, Select All (Ctrl+A), Copy
2. `tailwind.config.ts` - Click to open, Select All, Copy
3. `src/components/layout/Header.tsx` - Click to open, Select All, Copy
4. `src/components/layout/Footer.tsx` - Click to open, Select All, Copy
5. `src/App.tsx` - Click to open, Select All, Copy
6. `src/pages/HomeNew.tsx` - **NEW FILE** - Click to open, Select All, Copy

### ❌ File to Delete
7. `src/pages/Home.tsx` - Delete this old version

---

## Where to Find Files in Clink

Look at your **left sidebar file tree** in Clink:

```
📁 bitgrow-solution-frontend/
├── 📁 src/
│   ├── 📄 index.css  ⬅️ Copy this
│   ├── 📄 App.tsx  ⬅️ Copy this
│   ├── 📁 components/
│   │   └── 📁 layout/
│   │       ├── 📄 Header.tsx  ⬅️ Copy this
│   │       └── 📄 Footer.tsx  ⬅️ Copy this
│   └── 📁 pages/
│       ├── 📄 Home.tsx  ⬅️ DELETE this
│       └── 📄 HomeNew.tsx  ⬅️ Copy this (NEW)
└── 📄 tailwind.config.ts  ⬅️ Copy this
```

---

## Step-by-Step Process

### Option A: GitHub Web Editor (RECOMMENDED - 5 minutes)

1. Open: https://github.com/alphareum/bitgrow-solution-frontend
2. Press `.` (period key)
3. Wait for VS Code to load in browser
4. In the file tree (left), open each file and paste content from Clink
5. Delete `src/pages/Home.tsx`
6. Click Source Control icon (3rd icon on left sidebar)
7. Review changes
8. Type commit message: `feat: rebuild design with bold minimal aesthetic`
9. Click ✓ Commit
10. Click "Sync Changes" to push

**Done in 5 minutes!**

---

### Option B: GitHub Direct Edit (20 minutes)

Edit each file one by one on GitHub. See `GITHUB_DIRECT_EDIT_GUIDE.md` for links.

---

## Commit Message (Use This)

```
feat: rebuild design with bold minimal aesthetic

- Update color system to black/white with green accents
- Zero border radius for sharp modern edges
- Redesign header with text logo and active states
- Redesign footer with minimal grid layout
- Complete home page redesign with new sections
- Improve typography with larger headings

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## Quick Verification

After pushing, check:
1. GitHub shows 7 files changed
2. Site loads at your deployment URL
3. Design looks bold and minimal
4. Green accent color appears
5. No console errors

---

## Need Help?

If stuck, just:
1. Make sure you're on `https://github.com/alphareum/bitgrow-solution-frontend`
2. Press `.` to open github.dev
3. Copy files from Clink → Paste in github.dev
4. Commit & sync

That's it! 🎉
