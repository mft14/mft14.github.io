# Poweruser Workflow

![](img/mf14-logo_2020_klein.png)

[Home](howto.md)

<!--toc:start-->
- [Poweruser Workflow](#poweruser-workflow)
  - [Setup update in July 2023](#setup-update-in-july-2023)
  - [My Linux setup in general (December 2022)](#my-linux-setup-in-general-december-2022)
    - [Terminator as terminal emulator](#terminator-as-terminal-emulator)
    - [i3 as window tiling manager](#i3-as-window-tiling-manager)
    - [Espanso as text expander and for notes](#espanso-as-text-expander-and-for-notes)
    - [Vim as text and code editor](#vim-as-text-and-code-editor)
    - [Other cool terminal apps](#other-cool-terminal-apps)
<!--toc:end-->

Windows 98 was my first OS, followed by ME, 2000, XP, 7 and now 10. However in May 2008, a friend of my dad introduced me to Mandriva Linux which was my first Linux distro. After a while, I found out about Ubuntu version 9.10, which I used then until the version 11.04. At this point, I started making music and the hardware was pretty much not widely supported under Linux, henceforth I went seperate ways. However I am back for some years now and it became my go-to for daily work. Only in 2021, I finally found a way to continue my current music workflow and style in Linux using Renoise!

## Setup update in July 2023

As I said, a general linux power user does not keep one setup for a while. 😄 I am going to keep the old pictures online as a history. Here is my current setup in short:

*   **Terminal: kitty**  
    Finally, I found a tweak thanks to github! With a delay in replacing espanso text blocks, it is now possible to use kitty for espanso too, therefore, I directly switched to kitty as my main terminal. Beside of the awesome layouting, I also enjoy the unicode table as well as the quick and easy support for displaying graphics in the terminal, for example using the file manager [ranger!](https://github.com/ranger/ranger)
*   **Tiling Window Manager: herbstluftwm**  
    Before I used kitty, I was looking for a new Tiling WM, that can do the same quick layouting and stumbled across herbstluftwm. This tiling window manager makes tiling by using a tree layout. The difference here is that windows only can be tiled into vertical, Horizontal, grid and fullscreen layout but if you need more complex structures, you can tile certain areas of your screen. If you are using dual monitors, you can even extend one window to both monitors, if you need! I don't use dual monitors but this can come in handy if you are using a DAW like reaper! Check it out here, if you are interested: [Herbstluftwm](https://herbstluftwm.org/)
*   **Texteditor: NeoVim**  
    Yeah, it honestly was just a matter of time switching over to neovim. I just did not use it before because Vim had everything I needed. However, I got into Dart programming at my work and missed auto-completion and, in general, support for more languages like Flutter, that can be then natively executed easily in Neovim. So I switched over to it and it has some amazing plugins. I stayed with the Plug Plugin manager so if you are interested, what Neovim plugins I use, check this extraction of my [config here](img/neovim_plugins.png). My favourite plugins beside lsp are lightspeed and telescope

* * *

## My Linux setup in general (December 2022)

Since this setup changes regularly, this probably will be different in a few months. However there are plenty of things, I use to increase speed and workflow on its peak!

Let's start with my favourite tool, which is the Terminal. In every Linux distribution, you will find a terminal, because it is probably the common tool to manage everything. Over time, I find more and more terminal apps that are simple tags and tasks, that a GUI application is capable of but in more steps or clicks.

### Terminator as terminal emulator

[Terminator](https://gnome-terminator.readthedocs.io/en/latest/) as Terminal-Emulator is my terminal-emulator of choice. Why? Well, it was the first one I found when googling for a terminal with multiple window splits. This is, what was the most important feature for me. Other things that I need are:

*   Save your window splits as layout and open it directly from the bash using the -l flag + NAME
*   transparent background
*   change appearance and colors, remove scroll and titlebar, start maximised
*   run easily my favourite shell of choice, which is the fish shell
*   custom keybindings, my splits are for example ALT+J for Horizontal, Alt+L for vertical splits (vim keybinding inspired)
*   rotating the splits

Something I miss is the quickly creation of new splits. I used kitty for a short time and it is pretty cool to have there a quick way to open new splits in a common order and change the layout to common orders as well. The reason I don't use kitty is the lack for espanso support - at least I did not find any solution for that yet.

![](img/terminator.jpg)

### i3 as window tiling manager

[i3](https://i3wm.org/docs/) as window tiling manager:

When there is something more customizable, then there are window tiling manager. They stack up your windows exactly in a grid tile and you never have to worry about the position yourself. The reason, why I prefer them, are the easy way to store your complete setting in one file. Also I am and was never fan of a fancy looking desktop. I prefer to have a quick ones and tiling window manager are no exceptions. i3 was also the first one I found and it is completely enough for me. Setup is simpe, straightforward and it is probably the most well known wm out there, so you mostly find a solution on Reddit for your problems.  
  
If I want to use a desktop environment, my favourite ones are MATE and Cinnamon. MATE would be my way to go all the time but it sadly has a ground-breaking bug with the app "Barrier", that I also use daily (KVM app) - sometimes in random time gaps, the mouse is freezing and you can't do nothing except resetting or disconnect.

Another cool thing in i3 are that you can setup your shortcuts as you wish. The standard keyboard shortcuts are a small run application called dmenu, open the terminal, split and move your windows, change workspaces etc. The keyboard shortcuts I added are open my favourite applications. Win+ALT are only about opening apps on my PC, for example Win+ALT+G for Gimp, D for Discord and the numbers from 1 to 9 are configured with my most used apps, for example 1 = Browser, 2 = File Manager, 5 - 8 are music applications and so on.

Win+Ctrl are for certain websites I visit on a daily base. 1 is for Youtube, 2 for twitter, g for github, 9 for my website, w for whatsapp and so on. If there is a subsite, I added the Shift key, for example Win+Ctrl+Shift+1 opens YouTube Studio.

![](img/i3.jpg)

### Espanso as text expander and for notes

[Espanso](https://espanso.org/) is probably my favourite tool of all time. You have a config file with an abbreviation of your choice and while typing, this expands to a text you put in. For example you can set up something like ":mail" and it automatically inserts you a headline with "Dear ..." and ends with "Yours sincerely, ..." .

This is way more useful than you might think. Meanwhile I have over 1000 lines of codes and I just know this app for some months. I use it for plenty for stuff. Let me name you some examples:

*   Using it for common sentences and auto correction in 3 different languages. For english, i use an e in front and then the abbrevation. ebtw turns out to by the way.
*   Also very good for special characters that take time to type on a keyboard, for example the ' sign in don't. Just configure dont to don't and you save work for your nerves.
*   Store important links, for example :social returns me a list of my most important links and you can quickly share
*   Have a search string from your favourite search engines overall on the go, like searchddg turns to https://duckduckgo.com/?q= - DuckDuckGo Search Engine
*   You can define closing brackets easily for ({\[ and so on
*   It is super useful for coding. Store short or even long lines of codes that you often use. pyfor quickly pastes a for loop for me. htmlintro makes a quick html frame. Quickly need dates in python? Define that. Random number functions? Define that
*   I have stored my most used paths on my system with cd+NAME. This is a quick way to store bookmarks within your system and you can even extend this by adding more commands behind, like cd git, then it cd into your git projects and automatically runs git status
*   Same with windows run commands. I have them stored there all, like sysdm.cpl , sndvol or control update
*   Long commands that you rarely use but are useful can be forgotton easily after a while. Sometimes, when I need the command to detect my wifi, I forget the command `lspci -nnk | grep 0280 -A3`. So I trigger this by typing showwifi and this command turns up.
*   It can not only return static responses. It can print dynamically too, for example printing out the current date or running a shell scripts. The list goes on and on

For me, espanso is not only an expander anymore. It is also my app for quick "good to remember" notes. Like I still use text files to store notes for bigger projects. But there are situations where small snippets of notes are super useful and they just need to be there as quick as possible. If you come back to Minecraft and you forget the leaderbord setup? Note it here! If you have a process at work or on your PC in a certain order? Note it here!  
  
The possibilities are endless and I would definitely give it a try, as it is Cross Platform and works well! If you need more inspiration, I recommend looking up [Alicia's Notes](https://notes.aliciasykes.com/25213/using-espanso-to-boost-efficiency) for more stuff. Otherwise check out the official [documentation](https://espanso.org/docs/matches/basics/)!

![](img/espanso.jpg)

### Vim as text and code editor

[Vim](https://vim.org/) is the OG when it comes to an amazing, flexible and fast text editor. Vim gives you basically a lot more possibilities on your keyboard than Ctrl, Shift and Alt do. In Vim, you have the normal mode as default, where you can navigate around and execute commands. In Insert, you type your text as usual. In Visual mode, you select text, what you would normally do with your mouse. And therefore, vim likes to be used traditionally without a mouse. This is what makes it fast, once you have learned the techniques.

If you have learned the basics, you can even customize it to your needs and how you need it! Each is different there. It is just important to learn the basic movements, otherwise it would make no sense to remap every basic key combinations. Important are definitely the moving keys hjkl as well as d = delete, c = chance, v = visual mode, i/a = inserting text etc. I say this, because there are many other great command line apps that uses vim motion keys. You will directly feel at home!

My favourite things in vim are:

*   Setting custom macros that repeat usual tasks
*   Easy search and replace functions and the syntax is saved in espanso
*   Going back to your recent files quickly using Startify or CTRL+O
*   Quick navgiation of using numbers, line numbers and the f / t key for finding in a line
*   Splitting your window lets you easily work in different or even the same file on different positions to jump for and back to
*   Set your daily keystrokes as mapping in your vim configuration and adjust it to your needs!
*   There are plenty of great plugins, that fits all your need, for example auto completion, git integration, surround-vim, repeat-vim etc.

And there are many more benefits. Vim runs in the terminal and therefore is very minimalistic. I call myself a minimalist person so I went from Java and C# to Python and Vanilla JS. Without the need of a bloated DE and big runtime setups and setting up frameworks like Angular etc. I feel more productive and it is not my cup of tea in general. For me, the less, the better counts.

My colorscheme you see in the screenshot for vim is called Iceberg. [Get it here!](https://github.com/cocopon/iceberg.vim)

![](img/vim.jpg)

### Other cool terminal apps

Here are more of my favourite CLI tools:

|Tool name       | Functionality                                                                                                                             |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------ |
|ffmpeg          | Quickly convert video files to other formats, audio, change resolution, bitrate and more!                                                 |
|mp3gain         | Normalize your MP3, useful if you have an oldschool MP3 collection!                                                                       |
|ranger          | A great file ranger, that uses vim motion, so you will feel right at home, if you know vim!                                               |
|git             | Useful for backupping your code online, tells you what lines of code you changed and multiuser friendly                                   |
|fish            | Fish is an alternative shell to the standard bash one. It offers better code completion, colours and a good history for previous commands |
|bc              | Simple terminal calculator. Easy but good                                                                                                 |
|translate-shell | Have all your favourite translator in the shell and switch easily to various engines in favourites languages                              |
|imagemagick     | Let's you modify pictures in an easy quick way, for example convert images                                                                |
|mpv             | A great and super fast video and audio player. Let's you also watch streams or listen radio by passing the URL                            |

