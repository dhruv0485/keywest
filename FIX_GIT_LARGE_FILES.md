# Fix Git Large Files Issue

The problem is that the large video files (h2.mp4 and hv.mp4) are still in your Git history, even though you deleted them. Here's how to fix it:

## Solution: Remove Files from Git History

Run these commands in order:

### Step 1: Remove the files from Git history
```bash
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch public/h2.mp4 public/hv.mp4" --prune-empty --tag-name-filter cat -- --all
```

### Step 2: Clean up references (PowerShell version)
```powershell
# For PowerShell, use this command instead:
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin

# Or manually delete the refs folder:
Remove-Item -Recurse -Force .git/refs/original -ErrorAction SilentlyContinue
```

### Step 3: Expire and garbage collect
```bash
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

### Step 4: Force push to GitHub
```bash
git push origin main --force
```

## Alternative: Simpler Method (If above doesn't work)

If the above is too complex, use BFG Repo-Cleaner (faster and easier):

### Step 1: Install BFG (if not installed)
Download from: https://rpo.github.io/bfg-repo-cleaner/

### Step 2: Run BFG to remove large files
```bash
java -jar bfg.jar --delete-files "{h2.mp4,hv.mp4}" .
```

### Step 3: Clean up
```bash
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

### Step 4: Force push
```bash
git push origin main --force
```

## Quick Fix: Start Fresh (Last Resort)

If you want to start with a clean history:

### Step 1: Remove Git tracking
```bash
Remove-Item -Recurse -Force .git
```

### Step 2: Reinitialize Git
```bash
git init
git add .
git commit -m "Initial commit with Cloudinary videos"
```

### Step 3: Force push to GitHub
```bash
git remote add origin https://github.com/dhruv0485/keywest.git
git push -u origin main --force
```

## Important Notes

⚠️ **Warning**: Force pushing will rewrite history. Make sure:
1. No one else is working on this repository
2. You have a backup of your code
3. You're okay with losing commit history

✅ **After fixing**: The repository will be much smaller and push successfully!

## Verify It Worked

After running the commands, check the file size:
```bash
git count-objects -vH
```

Then try pushing again:
```bash
git push origin main
```
