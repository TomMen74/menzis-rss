================================================================================
                       MENZIS RSS APP - BESCHREIBUNG
================================================================================

PROJEKT: Menzis RSS App
ORT: /home/tomas/projekte/rss app/
AKTUALISIERT: 11. April 2026
VERSION: v1.3

================================================================================
FUNKTIONEN
================================================================================

1. CHRONOLOGISCHE ANZEIGE
   - Alle Artikel aus allen Feeds werden nach Zeit sortiert
   - Neueste Artikel zuerst
   - Maximal 100 Artikel gleichzeitig
   - Pull-to-Refresh (nach unten ziehen zum Aktualisieren)

2. ARTIKEL-AUSBLENDUNG
   - Klick auf Artikel → wird nach dem Lesen automatisch ausgeblendet
   - Swipe nach links → manuell ausblenden
   - Gelesene Artikel erscheinen NICHT mehr in der Liste

3. VERSTECKTE ARTIKEL
   - Menüpunkt "Versteckte Artikel" mit Zähler
   - Zeigt alle ausgeblendeten Artikel
   - Möglichkeit zum Wiederherstellen
   - "Alle wiederherstellen" Option

4. SUCHFUNKTION
   - Suchfeld im Header
   - Filtert Artikel nach Titel und Feed-Name

5. TABS FÜR KATEGORIE-FILTER
   - Alle, Nachrichten, Tech, Wirtschaft, Tech-News, Mobile, Apple, Gesellschaft, Kochen
   - Filter wird gespeichert (bleibt nach Neustart)

6. INKREMENTELLES LADEN
   - Erste Artikel werden bereits nach dem ersten Feed angezeigt
   - Liste wird nach jedem weiteren Feed aktualisiert
   - Lade-Animation mit springenden Buchstaben

7. DESIGN
   - 5 Themes: Classic, Midnight, Forest, Sunset, Nacht
   - Modern (flach) Darstellung
   - Artikel-Hintergrund 50% heller als Kartenfarbe
   - Leichter Schlagschatten

================================================================================
FEED-KATEGORIEN (100+ FEEDS)
================================================================================

📰 NATIONAL (9):
Tagesschau, SPIEGEL, ZEIT, Süddeutsche, FAZ, WELT, n-tv, taz, ZDF

🏛️ REGIONAL (8):
NDR MV, NDR SH, NDR NI, NDR HH, BR, WDR, MDR, SWR

💻 TECH (8):
Heise, ComputerBILD, Golem, netzwelt, Chip, WinFuture, Futurezone, Turing

💰 WIRTSCHAFT (5):
Handelsblatt, WirtschaftsWoche, Manager Magazin, Finanzen100, Reuters DE

⚽ SPORT (5):
Kicker, Sport1, Sportschau, Spox, Bundesliga

🔬 WISSENSCHAFT (3):
scinexx, Spektrum, Wissenschaft.de

🎬 KULTUR (3):
NDR Kultur, ZDF Kultur, Tagesspiegel Kultur

📱 TECH-NEWS (25):
Fefe, Caschy, Netzpolitik, t3n, Golem, Heise, Kuketz IT, Linux-Magazin,
ComputerBase, Deskmodder, iPhone-Ticker, Borns IT, Hardwareluxx,
MobileGeeks, SmartHome, Admin Magazin, Linux-Community, Pro-Linux,
Thomas-Krenn, Inside Digital, Appgefahren, WinFuture, ZDNet, Silicon, PC-Games

💵 WIRTSCHAFT 2 (10):
Finanzfluss, Finanztip, Gründerszene, Deutsche Startups, ExtraETF,
IT-Finanzmagazin, Payment-Banking, WirtschaftsWoche Blogs, Finanz-Szene, Oeconomicus

🌐 GESELLSCHAFT (15):
Postillon, Übermedien, NachDenkSeiten, Katapult, LTO, Cicero,
Tichys Einblick, Telepolis, Bildblog, Law Blog, Krautreporter,
Lage der Nation, The European, Piqd, Belltower

🧪 WISSENSCHAFT 2 (5):
Spektrum, ScienceBlogs, Utopia, Klimareporter, Quarks

🎮 LIFESTYLE (10):
Mit Vergnügen, Spreeblick, Metal.de, Serienjunkies, 22places,
Kwerfeldein, Stilsucht, Vinyl-Keks, Moviepilot, Eurogamer

📱 ANDROID & MOBILE (9):
Android-User.de, Android-Hilfe News, SmartDroid, Schmidtis Blog,
XDA Android, Linux-Handy, APK Mirror Blog, Areamobile, Xiaomi Community DE

🍎 APPLE (10):
Macerkopf, Mac-and-i, Sir Apfelot, Apfelpage, Mac Tech News,
Apfeltalk, Apple-Infoticker, iFun.de, Macwelt, Eclectic Light

🍳 KOCHEN (18):
Eat this! (Vegan), Zucker&Jagdwurst, Valentinas Kochbuch,
Arthurs Tochter kocht, HighFoodality, S-Küche, Emmi kocht einfach,
Maltes Kitchen, Moeys Kitchen, Backen macht glücklich, Mann backt,
Knusperstübchen, Backbube, Effilee, Kaffee-Netz, Das Lamm,
Gaumenfreundin, Wasi kocht

================================================================================
DESIGN THEMES
================================================================================

- Classic (Dunkelrot/Grün)
- Midnight Blue (Dunkelblau/Cyan)
- Forest (Dunkelgrün/Lime)
- Sunset (Dunkelviolett/Orange)
- Nacht (Grau/Schwarz/Weiß)

================================================================================
TECHNISCH
================================================================================

- Single HTML-Datei mit inline CSS und JavaScript
- RSS-Feed Parsing via rss2json API + allorigins Fallback
- localStorage für: enabledFeeds, hiddenItems, selectedTheme, cardStyle, articleFilter

================================================================================
DATEIEN
================================================================================

/home/tomas/projekte/rss app/
├── index.html    (Hauptdatei - komplette App)
├── README.txt    (diese Beschreibung)
├── android/      (Capacitor Android Projekt)
└── www/          (Web-Build für GitHub Pages)

================================================================================
GITHUB
================================================================================

Repository: https://github.com/TomMen74/menzis-rss
Web-Version: https://tommen74.github.io/menzis-rss/
APK Download: https://github.com/TomMen74/menzis-rss/releases

================================================================================