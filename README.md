One Year of Us - Anniversary Website
=====================================

This is a complete, ready-to-use romantic website. You do not need to know how to code.
Everything below is written for someone who has never used GitHub before.

WHAT'S INSIDE THIS FOLDER
--------------------------
index.html        -> the website itself (do not need to edit)
style.css         -> all the visual styling (do not need to edit)
script.js         -> the logic that runs the site (do not need to edit)
config.js         -> EDIT THIS ONE to change any text, messages, dates, or photo list
images folder     -> your 27 photos (big versions) + a 'thumbs' folder (small versions for the wall)
music folder      -> put your song here (see STEP 3)

WHAT THE WEBSITE SHOWS (top to bottom)
---------------------------------------
1. Hero: "One Year of Us" + a live counter of days / hours / minutes / seconds since
   September 13, 2025, and a countdown to the first anniversary on September 13, 2026.
2. Our Memory Wall: 27 polaroid photos. Tap one to open it big; swipe (or use the arrows /
   keyboard arrows) to move between photos; swipe down, tap outside or press Esc to close.
3. Our Story
4. Our Little Moments
5. One Year With You (timeline)
6. 20 Reasons I Love You (tap a card to flip it)
7. Our Memory Jar (tap the jar to pull out one of 15 notes)
8. A Letter From My Heart
9. The secret "Open My Heart" button
10. The final anniversary reveal (tap the heart button -> a burst of hearts + the final message)

STEP 1: PHOTOS
--------------
The 'images' folder already contains the 27 photos, named photo01.jpg to photo27.jpg, plus
smaller copies of the same photos in 'images/thumbs' (those are what the wall shows, so the
page loads fast; the big version opens when a photo is tapped).
To change a photo: replace both images/photoNN.jpg and images/thumbs/photoNN.jpg with your
new photo (same file name). A phone photo works fine for both.
To change a caption: open config.js, find the 'photos' list, and edit the text in caption: "".
To show a different part of a tall photo on its polaroid, change focus: "center 30%"
(a smaller percentage shows more of the top of the photo; "center" shows the middle).
Want more or fewer photos? Add or remove lines in the 'photos' list following the same pattern.

STEP 2: EDIT YOUR MESSAGES
---------------------------
Open config.js using any plain text editor (Notepad on Windows, TextEdit on Mac -
just make sure TextEdit is set to 'Plain Text' mode, not 'Rich Text').
Every message on the website is written there in plain English between quote marks:
the hero text, the dates, Our Story, the little moments, the timeline, the 20 reasons,
the 15 memory jar notes, the letter, the secret message, and the final reveal.
Change the words between the quote marks to your own words, save the file, and you're done.
Do not delete any quote marks, commas, or curly braces { } - just change the text inside the quotes.

STEP 3: ADD YOUR SONG ("Call It" by Elliot James Reay)
-------------------------------------------------------
The website is set up for "Call It" by Elliot James Reay, but the song file itself is not
included (it is not something that can be copied in for you). Put your own MP3 of the song
in the 'music' folder and name it exactly: our-song.mp3
The website will automatically use it when the 'Play "Call It"' button is clicked. Music never
plays automatically - she has to tap the button herself, so it always works no matter the device.
If the file is missing, the button simply shows a friendly reminder instead of breaking anything.

STEP 4: PUT THIS ON GITHUB (FREE HOSTING)
-------------------------------------------
1. Go to github.com and create a free account if you don't already have one.
2. Once logged in, click the '+' icon in the top right corner, then click 'New repository'.
3. Name it something like 'our-first-year' and make sure 'Public' is selected. Click 'Create repository'.
4. On the new repository page, click the link that says 'uploading an existing file'.
5. Drag every file and folder from this project (index.html, style.css, config.js, script.js,
   the images folder, and the music folder) into the upload box. Wait for the upload to finish.
6. Scroll down and click the green 'Commit changes' button.

STEP 5: TURN ON GITHUB PAGES
------------------------------
1. In your repository, click the 'Settings' tab near the top.
2. In the left sidebar, click 'Pages'.
3. Under 'Build and deployment', find the 'Branch' dropdown, select 'main' and leave the folder as '/ (root)'.
4. Click 'Save'.
5. Wait about one to two minutes, then refresh the page. A green box will appear with your live
   website link, looking like: https://yourusername.github.io/our-first-year/

STEP 6: SHARE IT WITH HER
----------------------------
Copy that link and send it to her in a text message, or open it yourself first to make sure
everything looks right on your phone.

MAKING CHANGES LATER
----------------------
Anytime you want to update a photo, message, or song, just go back to your repository on
github.com, click into the file or folder you want to change, click the pencil (edit) icon
or 'Add file' to upload a replacement, and commit the change. The live website updates
automatically within a minute or two.

That's it. No terminal, no installing anything, no cost.
