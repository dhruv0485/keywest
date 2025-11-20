# Clear Cache Instructions

The `hv.mp4` 404 error is coming from cached build files. Follow these steps:

## Option 1: Clear Build Cache (Recommended)

Run these commands in your terminal:

```bash
# Delete the .next folder
rmdir /s /q .next

# Reinstall dependencies (optional but recommended)
npm install

# Rebuild the project
npm run build

# Start the development server
npm run dev
```

## Option 2: Quick Fix (Development Only)

If you're in development mode:

```bash
# Stop the dev server (Ctrl+C)
# Delete .next folder
rmdir /s /q .next

# Restart dev server
npm run dev
```

## Option 3: Hard Refresh Browser

1. Open your browser
2. Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Or open DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

## Verify the Fix

After clearing cache:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Click on the video thumbnail
4. You should see the Cloudinary iframe loading instead of hv.mp4

## Note

The error message about Vercel Analytics is normal if you haven't enabled it in your Vercel project settings. You can safely ignore it or enable Web Analytics in your Vercel dashboard.
