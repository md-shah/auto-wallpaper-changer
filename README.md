## Auto wallpaper changer (Gnome)

 1. `npm install`
 2.   Set Unsplash access_key inside script or in the OS level.
 2. Update script execution permission. `chmod +x ./script.mjs`
 3. Update the interest array
 4. Set crontab in Ubuntu. `($ crontab -e)` Then add `@hourly  ~/path/to/script/script.mjs`
 5. Update the cron timing as you wish