================================================================================
                       MENZIS RSS APP - BESCHREIBUNG
================================================================================

PROJEKT: Menzis RSS App
ORT: /home/tomas/projekte/rss app/
AKTUALISIERT: 11. April 2026
VERSION: v1.2

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
   - Neuer Menüpunkt "Versteckte Artikel" mit Zähler
   - Zeigt alle ausgeblendeten Artikel
   - Möglichkeit zum Wiederherstellen
   - "Alle wiederherstellen" Option

4. SUCHFUNKTION
   - Suchfeld im Header
   - Filtert Artikel nach Titel und Feed-Name
   - Lupensymbol in Theme-Farbe

5. DESIGN
   - 5 Themes: Classic, Midnight, Forest, Sunset, Nacht
   - Modern (flach) oder Standard-Darstellung
   - Artikel-Hintergrund 50% heller als Kartenfarbe
   - Leichter Schlagschatten
   - Pulsieren entfernt

6. INKREMENTELLES LADEN
   - Erste Artikel werden bereits nach dem ersten Feed angezeigt
   - Liste wird nach jedem weiteren Feed aktualisiert
   - Lade-Animation mit springenden Buchstaben

7. VERBESSERTE BILDUNTERSTÜTZUNG
   - Unterstützt verschiedene RSS-Bildformate
   - ComputerBILD und andere Feeds mit enclosure-Thumbnails

================================================================================
DESIGN THEMES
================================================================================

- Classic (Dunkelrot/Grün)
- Midnight Blue (Dunkelblau/Cyan)
- Forest (Dunkelgrün/Lime)
- Sunset (Dunkelviolett/Orange)
- Nacht (Grau/Schwarz/Weiß)

================================================================================
VOREINGESTELLTE FEEDS (50+)
================================================================================

📰 National (9): Tagesschau, SPIEGEL, ZEIT, Süddeutsche, FAZ, WELT, n-tv, taz, ZDF

🏛️ Regional (8): NDR MV, NDR SH, NDR NI, NDR HH, BR, WDR, MDR, SWR

💻 Tech (8): Heise, ComputerBILD, Golem, netzwelt, Chip, WinFuture, Futurezone, Turing

💰 Wirtschaft (5): Handelsblatt, WirtschaftsWoche, Manager Magazin, Finanzen100, Reuters

⚽ Sport (5): Kicker, Sport1, Sportschau, Spox, Bundesliga

🔬 Wissenschaft (3): scinexx, Spektrum, Wissenschaft.de

🎬 Kultur (3): NDR Kultur, ZDF Kultur, Tagesspiegel Kultur

================================================================================
TECHNISCH
================================================================================

- Single HTML-Datei mit inline CSS und JavaScript
- RSS-Feed Parsing via rss2json API + allorigins Fallback
- localStorage für: enabledFeeds, hiddenItems, selectedTheme, cardStyle

================================================================================
APK BUILD (CAPACITOR)
================================================================================

Im Projektordner:
npx cap sync android
npx cap open android

================================================================================
DATEIEN
================================================================================

/home/tomas/projekte/rss app/
├── index.html    (Hauptdatei - komplette App)
└── README.txt   (diese Beschreibung)

================================================================================