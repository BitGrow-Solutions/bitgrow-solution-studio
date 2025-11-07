#!/bin/bash

# BitGrow Solution - Apply Design Changes Script
# Run this script in your local repository to apply all changes

echo "🎨 Applying BitGrow design rebuild changes..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run this from your project root."
    exit 1
fi

echo ""
echo "📋 Changes to be applied:"
echo "  - Updated color system (black/white/green minimal)"
echo "  - Redesigned Header component"
echo "  - Redesigned Footer component"
echo "  - New Home page (HomeNew.tsx)"
echo "  - Updated typography system"
echo "  - Zero border radius design"
echo ""

read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Cancelled."
    exit 1
fi

# Create backup branch
echo "📦 Creating backup branch..."
git checkout -b backup-before-redesign-$(date +%Y%m%d-%H%M%S)
git checkout -

echo "✅ Changes will be applied to current branch"
echo ""
echo "Next steps:"
echo "1. Download the modified files from Clink"
echo "2. Replace them in your local repository"
echo "3. Run: git add ."
echo "4. Run: git commit -m 'feat: rebuild design with bold minimal aesthetic'"
echo "5. Run: git push origin main"
echo ""
echo "Modified files:"
echo "  - src/index.css"
echo "  - tailwind.config.ts"
echo "  - src/components/layout/Header.tsx"
echo "  - src/components/layout/Footer.tsx"
echo "  - src/pages/HomeNew.tsx (NEW)"
echo "  - src/App.tsx"
echo ""
echo "Files to delete:"
echo "  - src/pages/Home.tsx (old version)"
echo ""
echo "✨ Ready to apply changes!"
