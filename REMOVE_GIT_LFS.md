# Remove Git LFS and Commit Videos as Regular Files

Follow these steps to remove Git LFS and commit the reel videos normally:

## Step 1: Uninstall Git LFS from the repository
```powershell
git lfs uninstall
```

## Step 2: Remove LFS tracking
```powershell
# Remove the .gitattributes file or edit it to remove LFS entries
Remove-Item .gitattributes -ErrorAction SilentlyContinue
```

## Step 3: Remove LFS objects from Git history
```powershell
# This removes all LFS tracked files from history
git lfs untrack "*.mp4"
```

## Step 4: Fetch the actual files from LFS
```powershell
# This downloads the actual video files from LFS
git lfs fetch --all
git lfs checkout
```

## Step 5: Remove LFS cache
```powershell
# Remove LFS cache folder
Remove-Item -Recurse -Force .git/lfs -ErrorAction SilentlyContinue
```

## Step 6: Add files back as regular files
```powershell
# Stage all the video files
git add public/*.mp4

# Check the status
git status
```

## Step 7: Commit the changes
```powershell
git commit -m "Remove Git LFS, add videos as regular files"
```

## Step 8: Force push to GitHub
```powershell
git push origin main --force
```

## Important Notes

⚠️ **File Size Limits:**
- GitHub has a 100MB file size limit per file
- If any reel video is larger than 100MB, you'll need to:
  1. Compress the video, OR
  2. Use Cloudinary instead

✅ **Check File Sizes First:**
```powershell
Get-ChildItem public\*.mp4 | Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}}
```

If any file is over 100MB, let me know and we'll use Cloudinary instead!
