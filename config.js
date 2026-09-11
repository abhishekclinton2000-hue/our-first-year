/* =========================================================
   EDIT EVERYTHING BELOW to personalize your website.
   Save the file after editing, that's it — no coding needed.

   Everything the website says lives in this one file:
   hero, counter, photos + captions, Our Story, Our Little
   Moments, Timeline, 20 Reasons, Memory Jar, the Letter,
   the secret message, the final reveal and the song.
   ========================================================= */

const CONFIG = {

  // ---- The real dates (used by the counter, the timeline and the story) ----
  // Format: YYYY-MM-DD
  firstDate: "2025-09-13",          // our first date
  anniversaryDate: "2026-09-13",    // our first anniversary
  firstTrip: "Atlantic City",       // our first trip together
  myBirthday: "April 11",
  herBirthday: "May 4",

  // ---- Hero section ----
  heroEyebrow: "Our First Year Together 🐼❤️",
  heroTitle: "One Year of Us ❤️",
  heroSubtitle: "365 days, countless memories, and still my favorite person.",
  counterLabel: "Together since September 13, 2025",

  // ---- Photos ----
  // Put your photo files inside the "images" folder. Each photo has:
  //   src     -> the big version (opens in the lightbox)
  //   thumb   -> the small version shown on the wall (optional — if missing, src is used)
  //   caption -> the little line under the polaroid (leave "" for no caption)
  //   focus   -> which part of the photo to show on the polaroid, e.g. "center 25%"
  //              (optional — "center 25%" keeps faces visible in tall photos)
  // Add or remove lines following the same pattern to change how many photos there are.
  photos: [
    { src: "images/photo01.jpg", thumb: "images/thumbs/photo01.jpg", caption: "My favorite smile", focus: "center 40%" },
    { src: "images/photo02.jpg", thumb: "images/thumbs/photo02.jpg", caption: "Us, being us", focus: "center 30%" },
    { src: "images/photo03.jpg", thumb: "images/thumbs/photo03.jpg", caption: "Just the two of us", focus: "center" },
    { src: "images/photo04.jpg", thumb: "images/thumbs/photo04.jpg", caption: "Brighter with you", focus: "center 35%" },
    { src: "images/photo05.jpg", thumb: "images/thumbs/photo05.jpg", caption: "Look at you 😍", focus: "center 30%" },
    { src: "images/photo06.jpg", thumb: "images/thumbs/photo06.jpg", caption: "Cheek to cheek", focus: "center" },
    { src: "images/photo07.jpg", thumb: "images/thumbs/photo07.jpg", caption: "In our own little world", focus: "center 45%" },
    { src: "images/photo08.jpg", thumb: "images/thumbs/photo08.jpg", caption: "Good company", focus: "center 55%" },
    { src: "images/photo09.jpg", thumb: "images/thumbs/photo09.jpg", caption: "Double the memories", focus: "center" },
    { src: "images/photo10.jpg", thumb: "images/thumbs/photo10.jpg", caption: "Right where I belong", focus: "center" },
    { src: "images/photo11.jpg", thumb: "images/thumbs/photo11.jpg", caption: "Lit up, together", focus: "center 45%" },
    { src: "images/photo12.jpg", thumb: "images/thumbs/photo12.jpg", caption: "Too cool 😎", focus: "center 35%" },
    { src: "images/photo13.jpg", thumb: "images/thumbs/photo13.jpg", caption: "Side by side", focus: "center 40%" },
    { src: "images/photo14.jpg", thumb: "images/thumbs/photo14.jpg", caption: "My favorite view", focus: "center" },
    { src: "images/photo15.jpg", thumb: "images/thumbs/photo15.jpg", caption: "Shining, as always", focus: "center 45%" },
    { src: "images/photo16.jpg", thumb: "images/thumbs/photo16.jpg", caption: "Smiles for days", focus: "center 40%" },
    { src: "images/photo17.jpg", thumb: "images/thumbs/photo17.jpg", caption: "You take my breath away", focus: "center 45%" },
    { src: "images/photo18.jpg", thumb: "images/thumbs/photo18.jpg", caption: "Good people, good times", focus: "center" },
    { src: "images/photo19.jpg", thumb: "images/thumbs/photo19.jpg", caption: "Mirror, mirror 🪞", focus: "center 45%" },
    { src: "images/photo20.jpg", thumb: "images/thumbs/photo20.jpg", caption: "Always this close", focus: "center 35%" },
    { src: "images/photo21.jpg", thumb: "images/thumbs/photo21.jpg", caption: "My favorite person", focus: "center 45%" },
    { src: "images/photo22.jpg", thumb: "images/thumbs/photo22.jpg", caption: "Cozy with you", focus: "center" },
    { src: "images/photo23.jpg", thumb: "images/thumbs/photo23.jpg", caption: "Hold on tight", focus: "center 45%" },
    { src: "images/photo24.jpg", thumb: "images/thumbs/photo24.jpg", caption: "Where I want to be", focus: "center 55%" },
    { src: "images/photo25.jpg", thumb: "images/thumbs/photo25.jpg", caption: "Surrounded by love", focus: "center 40%" },
    { src: "images/photo26.jpg", thumb: "images/thumbs/photo26.jpg", caption: "Simply you", focus: "center 50%" },
    { src: "images/photo27.jpg", thumb: "images/thumbs/photo27.jpg", caption: "Here's to us ❤️", focus: "center 40%" },
  ],

  // ---- "Our Story" (shown under the photos) ----
  storySubtitle: "How this year became my favorite one",
  story: [
    "It's strange when you think about it.",
    "Out of all the places we could have been, all the people we could have met, and all the different ways our lives could have gone—",
    "somehow, it was me and you.",
    "And that's how our story began."
  ],
  storySignoff: "— always yours 🐼",

  // ---- "Our Little Moments" cards ----
  littleMoments: [
    { icon: "❤️", title: "Our first date", text: "September 13, 2025. The day this whole story started. I didn't know it yet, but it was the beginning of my favorite year." },
    { icon: "🌊", title: "Our first trip", text: "Atlantic City — our first trip together. The first of many, I hope." },
    { icon: "🎂", title: "My birthday", text: "April 11. The first one since we became us, and that alone made it the best one yet." },
    { icon: "🎉", title: "Your birthday", text: "May 4. Your day, and now one of my favorite days of the whole year." },
    { icon: "☕", title: "The everyday moments", text: "The ordinary days in between are the ones I treasure most. Nothing special happening, and still, everything." },
    { icon: "🐼", title: "One year", text: "September 13, 2026. 365 days of us. And I would choose you all over again." },
  ],

  // ---- Timeline: "One Year With You" ----
  // The first trip is not tied to a date on purpose.
  timeline: [
    { month: "September 13, 2025", label: "Our First Date ❤️", text: "Where it all began." },
    { month: "Somewhere along the way", label: "Our First Trip 🌊", text: "Atlantic City. Our first trip together." },
    { month: "April 11", label: "My Birthday 🎂", text: "My first birthday since we became us." },
    { month: "May 4", label: "Your Birthday 🎉", text: "Your day, now one of my favorite days of the year." },
    { month: "September 13, 2026", label: "One Year of Us ❤️", text: "365 days later, and I'd choose you all over again." },
  ],

  // ---- "20 Reasons I Love You" flip cards ----
  loveList: [
    { icon: "😊", front: "Your smile", back: "It's the first thing I fell for." },
    { icon: "😂", front: "Your laugh", back: "My favorite sound in the world." },
    { icon: "🥺", front: "Your little expressions", back: "I notice every single one." },
    { icon: "🤗", front: "Your kindness", back: "You make everyone feel loved." },
    { icon: "🫂", front: "Your hugs", back: "The safest place I know." },
    { icon: "☀️", front: "The way you make me happy", back: "Even on the hardest days." },
    { icon: "🐼", front: "Your cute little habits", back: "Every one of them, I adore." },
    { icon: "🎧", front: "Your voice", back: "I could listen to you all day." },
    { icon: "💞", front: "How you care", back: "For me, for everyone, for the little things." },
    { icon: "🌱", front: "Your patience", back: "You make me a better version of me." },
    { icon: "👀", front: "Your eyes", back: "I get lost in them every time." },
    { icon: "💬", front: "The way we talk", back: "Hours pass like minutes with you." },
    { icon: "💪", front: "Your strength", back: "You handle everything with grace." },
    { icon: "🏡", front: "How safe you make me feel", back: "Like nothing can go wrong." },
    { icon: "💗", front: "Your heart", back: "The biggest one I know." },
    { icon: "✨", front: "The way you look at me", back: "Like I'm the only one in the room." },
    { icon: "🤪", front: "Your silliness", back: "You make even ordinary days fun." },
    { icon: "🙌", front: "How you believe in me", back: "Sometimes more than I believe in myself." },
    { icon: "🌙", front: "Every day with you", back: "Somehow, each one gets better." },
    { icon: "🥹", front: "Simply you", back: "That's really all it's ever been." },
  ],

  // ---- Memory Jar: 15 little notes, pulled out one at a time ----
  memoryJarSubtitle: "Tap the jar to pull out a little note",
  memoryJar: [
    "I'm so lucky it's you.",
    "Thank you for choosing me, every single day.",
    "You make ordinary days feel like something special.",
    "I think about you more than you'll ever know.",
    "Every version of my future has you in it.",
    "You are my favorite hello and my hardest goodbye.",
    "One year down. Forever to go.",
    "You still give me butterflies.",
    "I love the way you love me.",
    "Being with you feels like coming home.",
    "I would choose you in every lifetime.",
    "Thank you for loving me exactly the way you do.",
    "My favorite place in the world is right next to you.",
    "You are the best thing that happened to me this year.",
    "Happy one year, my love. This is only the beginning. ❤️",
  ],

  // ---- A Letter From My Heart ----
  letter: {
    greeting: "My love,",
    paragraphs: [
      "One year ago, on September 13, 2025, we went on our first date. I didn't know then that it would turn into the best year of my life, but somewhere along the way, it did.",
      "This year gave us our first trip together, to Atlantic City, and our first birthdays since that first date, mine on April 11 and yours on May 4. And in between, it gave us countless little everyday moments that I never want to forget.",
      "Thank you for your patience, your laughter, your kindness, and for loving me the way you do. You have made me happier than I ever thought I could be.",
      "Here's to September 13, 2026, our first anniversary, and to every year after it. I love you more than words can say.",
    ],
    signoff: "— always yours 🐼",
  },

  // ---- Secret / surprise message (behind the "Open My Heart ❤️" button) ----
  secretButton: "Open My Heart ❤️",
  secretMessage: "If I had to live this year all over again, I would still choose you. Every single time.",

  // ---- Final anniversary reveal ----
  // revealOnTap: true  -> she taps the heart to reveal the final message (with a burst of hearts)
  // revealOnTap: false -> the final message is shown right away
  revealOnTap: true,
  revealDate: "September 13, 2026",
  revealTease: "Our first anniversary",
  revealButton: "Tap to open ❤️",
  finalLine1: "Happy One Year, My Love ❤️",
  finalLine2: "Thank you for making this year so beautiful.",
  finalBig: "I LOVE YOU, CUTU PUTU 🐼♥️",
  finalClosing: "Here's to us, and to all the memories we haven't made yet. ❤️",

  // ---- Music ----
  // Put the song file inside the "music" folder and name it exactly: our-song.mp3
  // (the website will show the song title on the button)
  musicFile: "music/our-song.mp3",
  songTitle: "Call It",
  songArtist: "Elliot James Reay",
};
