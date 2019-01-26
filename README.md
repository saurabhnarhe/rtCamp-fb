# rtCamp-fb

### Challenge-2: Facebook-Photos Challenge

Create a small PHP-script to accomplish following parts: 

**Part-1: Album Slideshow**

1.  User visits your script page
2.  User will be asked to connect using his FB account
3.  Once authenticated, your script will pull his album list from FB
4.  User will click on an album name/thumbnail
5.  A pure CSS and Plain JS slideshow will start showing photos in that album (in full-screen mode)

**Part-2: Download Album**

1.  Beside every album icon (step #4 in part-1), add a new icon/button saying "Download This Album"
2.  When the user clicks on that button, your script will fetch all photos in that album behind the scene and zip them inside a folder on server.
3.  You may start a "progress bar" as soon as user-click download button as download process may take time.
4.  Once zip building on server completes, show user link to zip file.
5.  When user clicks zip-file link, it will download zip folder without opening any new page.
6.  Beside album names, add a checkbox. Then add a common "Download Selected Album" button. This button will download selected albums into a common zip that will contain one folder for each album. Folder-name will be album-name.
7.  Also, add a big "**Download All**" button. This button will download all albums in a zip, similar to above.

**Part-3: Backup albums to Google Drive**

1.  Provide the user with an option to move albums to a Google Drive.
    *   The Google Drive will contain a master folder whose name will be of the format `facebook_<username>_albums` where `username` will be the Facebook username of the user.
    *   The user's Facebook albums will be backed up in this master folder. Photos from each album will go inside their respective folders. Folder names will be the same as the Facebook album names.
2.  To improve the user experience, include the three following buttons:
    *   "Move" button- This button will appear under each album on your website. When clicked, _the corresponding album only_ will be moved to Google Drive
    *   "Move Selected"- This button will work along with a checkbox system. The user can select a few albums via checkboxes and click on this button. _Only the selected albums_ will be moved to Google Drive
    *   "Move All"- This button will immediately move _all user albums_ to Google Drive within their respective folders.
3.  Make sure that the user is asked to connect to their Google account only once, no matter how many times they choose to move data.

**Note -** Before submitting your challenge for review, please add Facebook profile with username '[rtc.test](https://www.facebook.com/rtc.test)' as tester while your app is in development mode. This will expedite the review process.
