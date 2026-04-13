================================================================================
                       MENZIS RSS APP - BESCHREIBUNG
================================================================================

PROJEKT: Menzis RSS App
ORT: /home/tomas/projekte/rss app/
AKTUALISIERT: 13. April 2026
VERSION: v2.2.11

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

5. STATISCHE TABS
   - Nur Kategorien mit Inhalt werden angezeigt
   - Fixe Reihenfolge: Alle, Nachrichten, Regional, Tech, Tech-News,
     Wirtschaft, Gesellschaft, Wissenschaft, Kultur, Lifestyle,
     Mobile, Apple, Kochen
   - Reihenfolge entspricht Feed-Auswahl Menü

6. ERSTER START
   - Tagesschau, Caschy (Bremerhaven) und Tichys Einblick automatisch aktiviert
   - Tab "Alle" vorausgewählt

7. DESIGN
   - Google Material Design 3 Richtlinien
   - Theme: Classic (Dunkelrot/Grün)
   - Moderne Darstellung mit Elevation und Animationen

8. ENTFERNT
   - Menüpunkt "Aussehen" (Themes)
   - Feeds: Fefe, Postillon, Übermedien, ComputerBILD, Turing, Zeit, Süddeutsche, Quarks, Klimareporter (API-Fehler/Rate-Limit)

9. BILDER
   - Automatische Extraktion aus content/description
   - Filterung von Tracking-URLs (follow.it)

================================================================================
FEED-KATEGORIEN
================================================================================

📰 NATIONAL:
Tagesschau, SPIEGEL, FAZ

📱 TECH-NEWS:
Futurezone, Caschy, Netzpolitik, t3n, Kuketz IT, ComputerBase, Inside Digital

🌐 GESELLSCHAFT:
NachDenkSeiten, Cicero, Tichys Einblick,
Telepolis, Apollo News, Junge Freiheit

🍎 APPLE:
Macerkopf, iFun, Sir Apfelot, Apfelpage, Macwelt

🍳 KOCHEN:
Eat this! (Vegan), Valentinas Kochbuch, HighFoodality,
Backen macht glücklich, Mann backt

[+ viele weitere Feeds in jeder Kategorie]

================================================================================
TECHNISCH
================================================================================

- Single HTML-Datei mit inline CSS und JavaScript
- RSS-Feed Parsing via rss2json.com API
- localStorage für: enabledFeeds, hiddenItems, theme, articleFilter

================================================================================
DATEIEN
================================================================================

/home/tomas/projekte/rss app/
├── index.html          (Hauptdatei - komplette App)
├── README.txt          (diese Beschreibung)
├── android/            (Capacitor Android Projekt)
└── www/                (Web-Build für GitHub Pages)

================================================================================
GITHUB
================================================================================

Repository: https://github.com/TomMen74/menzis-rss
Web-Version: https://tommen74.github.io/menzis-rss/

================================================================================