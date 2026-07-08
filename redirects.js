// Single source of truth for redirects
const REDIRECTS = {
  "main": {
    url: "https://github.com/mft14/mft14.github.io/blob/main/README.md",
    title: "Main",
    description: "Main README landing page",
    icon: "github",
    category: "Developer"
  },
  "github": {
    url: "https://github.com/mft14",
    title: "GitHub Profile",
    description: "My open-source repositories and projects.",
    icon: "github",
    category: "Developer"
  },
  "gist": {
    url: "https://gist.github.com/mft14",
    title: "GitHub Gists",
    description: "Code snippets and minor projects.",
    icon: "code",
    category: "Developer"
  },
  "index": {
    url: "https://github.com/mft14/mft14.github.io",
    title: "Repository",
    description: "Source code of this redirections site.",
    icon: "terminal",
    category: "Developer"
  },
  "vds": {
    url: "https://github.com/mft14/mft14.github.io/blob/main/info/vds.md",
    title: "VDS Setup Info",
    description: "My virtual dedicated server configuration details.",
    icon: "server",
    category: "Developer"
  },
  "howto": {
    url: "https://github.com/mft14/mft14.github.io/blob/main/howto/howto.md",
    title: "Howto and Tutorials",
    description: "Everything about I do",
    icon: "server",
    category: "Developer"
  },
  "gear": {
    url: "https://github.com/mft14/mft14.github.io/blob/main/info/gear.md",
    title: "My Gear",
    description: "Hardware and software setup details.",
    icon: "cpu",
    category: "Developer"
  },
  "yt": {
    url: "https://www.youtube.com/c/MetalFortress14",
    title: "YouTube Channel",
    description: "Primary channel for music and guitar content.",
    icon: "youtube",
    category: "Socials"
  },
  "yt2": {
    url: "https://www.youtube.com/channel/UCqx2PZ_3JEU6hMROj6ZUPpQ",
    title: "Secondary YouTube",
    description: "Alternative channel for updates and miscellaneous videos.",
    icon: "youtube",
    category: "Socials"
  },
  "spotify": {
    url: "https://open.spotify.com/artist/2qNbfCQOolQ0ybnCkpEuP9",
    title: "Spotify Profile",
    description: "Listen to my music releases on Spotify.",
    icon: "spotify",
    category: "Music"
  },
  "ytmusic": {
    url: "https://music.youtube.com/channel/UCUC0b2sbL3BigMcq5Yr0DSw",
    title: "YouTube Music",
    description: "Listen to my music releases on YouTube Music.",
    icon: "youtube-music",
    category: "Music"
  },
  "apple": {
    url: "https://music.apple.com/us/artist/metal-fortress/1481270675",
    title: "Apple Music",
    description: "Listen to my music releases on Apple Music.",
    icon: "music",
    category: "Music"
  },
  "amazon": {
    url: "https://music.amazon.de/artists/B07YCTBCYH/metal-fortress",
    title: "Amazon Music",
    description: "Listen to my music releases on Amazon Music.",
    icon: "amazon",
    category: "Music"
  },
  "deezer": {
    url: "https://www.deezer.com/en/artist/74797042",
    title: "Deezer Profile",
    description: "Listen to my music releases on Deezer.",
    icon: "deezer",
    category: "Music"
  },
  "soundcloud": {
    url: "https://soundcloud.com/metalfortress",
    title: "SoundCloud Profile",
    description: "Check out raw tracks, demos, and works-in-progress.",
    icon: "soundcloud",
    category: "Music"
  },
  "freesound": {
    url: "https://freesound.org/people/metalfortress/",
    title: "Freesound Profile",
    description: "Audio samples and free sound effects.",
    icon: "wave",
    category: "Music"
  },
  "discord": {
    url: "https://discord.gg/bT7rE5KFjy",
    title: "Discord Server",
    description: "Join the community server to hang out and chat.",
    icon: "discord",
    category: "Socials"
  },
  "deviantart": {
    url: "https://www.deviantart.com/metalfortress",
    title: "DeviantArt Profile",
    description: "Artworks, designs, and visual creations.",
    icon: "deviantart",
    category: "Socials"
  },
  "paypal": {
    url: "https://paypal.me/metalfortress14",
    title: "Support on PayPal",
    description: "Support my work directly via PayPal.",
    icon: "paypal",
    category: "Support"
  },
  "gd-downloads": {
    url: "https://drive.google.com/open?id=1mKWlWIlyXQVGjYdqXGZ8-k0ycb7WZ7K-",
    title: "Google Drive Downloads",
    description: "Public download archive.",
    icon: "drive",
    category: "Downloads"
  },
  "gd-mp3": {
    url: "https://drive.google.com/drive/folders/1L4mnUOdoPB7TT7L1nzAcr-lRR2FAAyeU",
    title: "Google Drive MP3s",
    description: "Direct download folder for MP3 audio files.",
    icon: "drive",
    category: "Downloads"
  },
  "tf2": {
    url: "https://www.youtube.com/playlist?list=PL4ozA2QyedCRno_pOHnVEpkS2tlZLqq2p",
    title: "TF2 Playlist",
    description: "YouTube playlist of my Team Fortress 2 gameplay/videos.",
    icon: "gamepad",
    category: "Socials"
  }
};

// SVG icons for beautiful presentation
const ICONS = {
  "github": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  "youtube": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  "youtube-music": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 18.96c-3.84 0-6.96-3.12-6.96-6.96S8.16 5.04 12 5.04s6.96 3.12 6.96 6.96-3.12 6.96-6.96 6.96zm0-11.4c-2.46 0-4.44 1.98-4.44 4.44s1.98 4.44 4.44 4.44 4.44-1.98 4.44-4.44-1.98-4.44-4.44-4.44zm-1.8 6.42V9.36l3.96 2.52-3.96 2.52z"/></svg>`,
  "spotify": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.1-10.561-1.14-.418.099-.84-.18-.939-.6-.099-.42.18-.84.6-.939 4.62-1.02 8.58-.6 11.7 1.32.36.18.479.6.24.96zM18.9 14.1c-.3.42-.84.6-1.259.3-3.24-1.98-8.16-2.58-11.999-1.38-.479.12-1.02-.18-1.14-.66-.12-.48.18-1.02.66-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.24.54.78.24 1.26zM19.02 10.74C15.18 8.5 8.76 8.28 5.04 9.42c-.599.18-1.259-.18-1.439-.78-.18-.6.18-1.259.78-1.439 4.26-1.26 11.34-1.02 15.84 1.68.54.3.72 1.02.42 1.56-.3.48-1.02.72-1.62.42z"/></svg>`,
  "soundcloud": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.08 11.94c-.06.27-.08.54-.08.84 0 .33.02.66.08.96h.05c.14 0 .22-.09.25-.26.06-.39.11-.78.11-1.2 0-.39-.05-.78-.11-1.17-.03-.17-.11-.27-.25-.27h-.05zm.9 1.8c.06.33.16.66.28.96.08.17.17.24.34.24s.23-.08.28-.24c.14-.3.25-.63.31-.96.06-.33.08-.66.08-.96 0-.3-.02-.63-.08-.96-.06-.33-.17-.66-.31-.96-.05-.16-.14-.24-.28-.24s-.26.07-.34.24c-.12.3-.22.63-.28.96-.07.33-.09.66-.09.96 0 .3.02.63.09.96zm1.18.96c.09.33.22.63.37.93.07.16.18.21.32.18.14-.03.19-.13.22-.3.12-.51.2-1.02.2-1.56s-.08-1.05-.2-1.56c-.03-.17-.08-.27-.22-.3-.14-.03-.25.02-.32.18-.15.3-.28.6-.37.93-.11.42-.16.84-.16 1.29s.05.87.16 1.33zm1.32 1.05c.17.33.37.6.6.87.09.11.2.14.3.06.09-.08.11-.18.11-.33a10.87 10.87 0 0 1 .11-1.32 11.75 11.75 0 0 1-.11-1.32c0-.15-.02-.25-.11-.33-.1-.08-.21-.05-.3.06-.23.27-.43.54-.6.87-.16.42-.23.84-.23 1.29s.07.87.23 1.3zm1.47.6c.2.27.43.51.69.72.1.09.21.09.3-.03.07-.09.09-.2.09-.33.06-.57.09-1.14.09-1.74s-.03-1.17-.09-1.74c0-.13-.02-.24-.09-.33-.09-.12-.2-.12-.3-.03-.26.21-.49.45-.69.72-.22.39-.32.84-.32 1.38s.1 1 .32 1.35zm1.63.48c.24.21.51.39.81.54.12.06.22.03.28-.09.04-.08.06-.18.06-.3 0-.66.03-1.32.03-1.98s-.03-1.32-.03-1.98c0-.12-.02-.22-.06-.3-.06-.12-.16-.15-.28-.09-.3.15-.57.33-.81.54-.25.33-.38.78-.38 1.32s.13.99.38 1.35zm1.8.24c.28.15.6.27.93.36.12.03.2-.03.23-.15.03-.09.03-.18.03-.27v-5.07c0-.09 0-.18-.03-.27-.03-.12-.11-.18-.23-.15-.33.09-.65.21-.93.36-.29.3-.43.72-.43 1.29v2.52c0 .57.14.99.43 1.29v.08zm1.94-.09c.33.09.68.15 1.05.18.11.03.18-.03.2-.15.01-.06.01-.12.01-.18v-5.85c0-.06 0-.12-.01-.18-.02-.12-.09-.18-.2-.15-.37.03-.72.09-1.05.18-.3.27-.45.75-.45 1.41v3.21c0 .66.15 1.14.45 1.41zm2.14-.09h.19c.12 0 .19-.06.2-.18v-6.99c-.01-.12-.08-.18-.2-.18h-.19c-.31.3-.47.87-.47 1.68v4.02c0 .81.16 1.38.47 1.65zm2-.09h.21c.11 0 .17-.06.18-.18V3.27c0-.12-.07-.18-.18-.18h-.21c-.32.3-.48.99-.48 2.07v10.59c0 1.08.16 1.77.48 2.07zm1.18 0c2.81 0 5.16-2.01 5.67-4.71.65-.09 1.25-.42 1.69-.9 1-.99 1.42-2.31 1.29-3.75-.15-1.59-1.11-2.91-2.58-3.48-.37-.15-.79-.24-1.2-.24-.13 0-.25.03-.37.06-.63-1.89-2.31-3.27-4.41-3.45-1.74-.15-3.39.51-4.5 1.71-.35.39-.63.84-.81 1.35v13.44z"/></svg>`,
  "discord": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>`,
  "deviantart": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.207 4.757L19.5 0h-5.06l-.348 4.757H9.01V9.74h5.059L10.02 19.243H4.5v4.757h5.06l.347-4.757H14.99V14.26h-5.059l4.049-9.503h5.227z"/></svg>`,
  "paypal": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 7.5A5.38 5.38 0 0 0 14 3H6c-.4 0-.8.3-.9.7L2.1 21.6c-.1.4.2.8.6.8h4.6l1.3-8.3c.1-.4.4-.7.8-.7h1.9c4.2 0 7.2-2.1 7.9-6.3.3-2.1-.2-3.7-1.6-4.9zm-2.8 4.8c-.5 2.6-2.5 4.1-5.1 4.1H9.4l1.1-7.1c.1-.4.4-.7.8-.7h1.1c1.5 0 2.7.4 3.3 1.2.6.8.7 1.8.6 2.5z"/></svg>`,
  "music": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
  "amazon": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.8 17.5c-.4.3-.9.4-1.3.4-.9 0-1.8-.5-1.8-1.5 0-1.5 1.5-1.9 3.1-1.9v.3c0 1-.3 2.1 0 2.7zm.8-3.4c-1.3 0-4.1.2-4.1 2.9 0 1.8 1.2 2.6 2.6 2.6.9 0 1.9-.5 2.3-1.1v.9h1.7V14c0-2-1.2-2.9-3.2-2.9-1.9 0-3.3 1-3.6 2.4l1.6.2c.2-.7.9-1.1 1.9-1.1 1.2 0 1.8.6 1.8 1.8v.2c0-.3-.9-.5-1-.5zm-4.3-5.2c.4-.7.8-1.6.8-2.6 0-.3 0-.6-.1-.9-.6.1-1.3.5-1.7 1.1-.4.6-.7 1.5-.7 2.5 0 .3.1.6.1.8.6-.1 1.2-.4 1.6-.9z"/></svg>`,
  "deezer": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 17.588h3.84v2.706H0zm4.72 0h3.84v2.706H4.72zm4.72 0h3.84v2.706H9.44zm4.72 0h3.839v2.706H14.16zm4.72 0H24v2.706h-5.12zm-9.44-4.588h3.84v2.706H9.44zm4.72 0h3.839v2.706H14.16zm4.72 0H24v2.706h-5.12zm0-4.588H24v2.706h-5.12z"/></svg>`,
  "drive": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.71 3.5H16.3l6.1 10.5-4.3 7.5H9.4L3.3 11 7.71 3.5zm2.3 3.5L5.7 14.5h8.6L10 7zm8.3 10.5l-4.3-7.5H23l-4.7 7.5zm-11.8 0L2.2 14.5 6.5 7l4.3 7.5H6.5z"/></svg>`,
  "code": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  "terminal": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  "server": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  "cpu": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
  "gamepad": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="3"></rect></svg>`,
  "wave": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10c3 0 3-5 6-5s3 5 6 5 3-5 6-5 3 5 6 5M2 14c3 0 3-5 6-5s3 5 6 5 3-5 6-5 3 5 6 5M2 18c3 0 3-5 6-5s3 5 6 5 3-5 6-5 3 5 6 5"></path></svg>`
};
