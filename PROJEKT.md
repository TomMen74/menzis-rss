# Menzis RSS - Projekt-Info

## Aktueller Stand (v6.12)

Ein RSS-Reader als Web-App mit Android-APK.

## GitHub

- **Repository:** https://github.com/TomMen74/menzis-rss
- **Web-Version:** https://tommen74.github.io/menzis-rss/
- **Releases:** https://github.com/TomMen74/menzis-rss/releases

## Verzeichnisstruktur

```
/home/tomas/projekte/rss app/
├── index.html              # Hauptdatei (wird bearbeitet)
├── www/index.html          # Web-Version (Kopie)
├── android/                # Android-Projekt (Capacitor)
│   └── app/src/main/assets/public/index.html
├── serverless/rss.js       # Serverless RSS Parser (Vercel/Cloudflare)
├── rss_reader.py           # Python RSS Reader Script
├── PROJEKT.md              # Diese Datei
├── README.md
├── favicon.svg
└── *.apk                   # Alte APKs
```

## Build & Deploy流程

```bash
# 1. index.html bearbeiten
# 2. Version in title und header aktualisieren

# 3. Kopieren und commit
cp index.html www/index.html
cp favicon.svg www/
cp index.html android/app/src/main/assets/public/index.html
cp favicon.svg android/app/src/main/assets/public/
git add index.html www/index.html
git commit -m "v6.x - Beschreibung"
git push

# 4. APK bauen
cd android
./gradlew assembleDebug

# 5. Release erstellen und APK hochladen
```

## Funktionen (aktiv)

- Swipe links = Ausblenden
- Swipe rechts = Später lesen
- Drag & Drop Sortierung: Feeds, Tabs, Keywords
- Keywords als额外 Tabs
- Enter-Taste für Keyword-Eingabe
- Pull-to-Refresh
- Suchfunktion
- Hell/Dunkel/Auto Theme
- Rate Limiting (500ms zwischen API-Requests)
- Ladekreisel (ohne Text)
- Version im Header
- Favicon
- **Layer-Navigation** - Menü bleibt offen bis "Fertig"

## Feed-Kategorien

- **Nachrichten:** Tagesschau, SPIEGEL, FAZ, NDR (4x), NachDenkSeiten, Cicero, Tichys Einblick, Telepolis, Apollo News, Junge Freiheit, Die Welt, n-tv, Handelsblatt, Tagesspiegel, Focus
- **Tech:** Futurezone, Caschy, Netzpolitik, t3n, Kuketz IT, ComputerBase, Inside Digital, Heise, Golem.de, BasicThinking, der Freitag
- **Wirtschaft:** Gründerszene, Deutsche Startups, WirtschaftsWoche, Makronom
- **Lifestyle:** Mit Vergnügen, Eurogamer, Moviepilot, Deutsche Welle, The Local
- **Android:** Android-User.de, XDA Android, SmartDroid
- **Apple:** Macerkopf, iFun, Sir Apfelot, Apfelpage, Macwelt
- **Kochen:** Eat this!, Backen macht glücklich

## Farben

- **Hell:** Blau (#1a73e8)
- **Dunkel:** Orange (#ff8c00)

## API

- RSS-Parsing: `https://api.rss2json.com/v1/api.json?rss_url=...`
- **Limit:** 10 Items pro Feed (kostenlos)

## Themen-Hashtags

Die App zeigt automatisch Hashtags basierend auf Kategorien an:
- news: Ukraine, Russland, USA, China, EU, Wahl, etc.
- tech: Apple, Microsoft, Google, KI, AI, etc.
- finance: Börse, Aktien, ETF, Bank, etc.
- android: Samsung, Galaxy, Pixel, etc.
- apple: iPhone, iPad, Mac, etc.
- lifestyle: Reisen, Urlaub, etc.
- cooking: Rezept, Kochen, Vegan, etc.

## Versions-Historie

- v6.12 - Layer-Navigation: Feed-Auswahl bleibt offen bis Fertig
- v6.11 - Feed-Auswahl auf/zu Problem behoben
- v6.10 - Version korrigiert
- v6.9 - Feed-Auswahl Navigation
- v6.8 - Thumbnails aus description parsen
- v6.7 - Feed-Auswahl Kategorie-Zustand
- v6.6 - Hashtags bereinigt (Duplikate entfernt)
- v6.5 - Versionen
- v6.0 - Drag&Drop Tabs/Keywords
- v5.9 - Drag&Drop Feeds
- v5.8 - Favicon
- v5.7 - Rate limiting
- v5.6 - SyntaxError Fix
- v5.5 - Ladekreisel Bugfix
- v5.4 - Nur Ladekreisel, kein Text

## Bekannte Issues / ToDo

- [ ] Eigener RSS-Server (statt rss2json) für unbegrenzte Items
- [ ] rss_reader.py als Server hosten
- [ ] serverless/rss.js auf Vercel deployen
