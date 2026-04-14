# Menzis RSS - Projekt-Info

## Aktueller Stand (v6.2)

Ein RSS-Reader als Web-App mit Android-APK.

## GitHub

- **Repository:** https://github.com/TomMen74/menzis-rss
- **Web-Version:** https://tommen74.github.io/menzis-rss/
- **Releases:** https://github.com/TomMen74/menzis-rss/releases

## GitHub Token

(Im System gespeichert)

## Verzeichnisstruktur

```
/home/tomas/projekte/rss app/
├── index.html              # Hauptdatei (wird bearbeitet)
├── www/index.html          # Web-Version
├── android/                # Android-Projekt (Capacitor)
│   └── app/src/main/assets/public/index.html
├── README.md
├── favicon.svg
└── *.apk                   # Alte APKs
```

## Build & Deploy流程

```bash
# 1. index.html bearbeiten
# 2. Version in title und header aktualisieren (z.B. v6.0 → v6.1)

# 3. Kopieren und commit
cp index.html www/index.html
cp favicon.svg www/
cp index.html android/app/src/main/assets/public/index.html
cp favicon.svg android/app/src/main/assets/public/
git add index.html www/index.html
git commit -m "v6.1 - Beschreibung"
git push

# 4. APK bauen
cd android
./gradlew assembleDebug

# 5. Release erstellen und APK hochladen
curl -X POST -H "Authorization: token TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tag_name": "v6.1", "name": "Menzis RSS v6.1", "body": "Beschreibung"}' \
  https://api.github.com/repos/TomMen74/menzis-rss/releases

curl -X POST -H "Authorization: token TOKEN" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @android/app/build/outputs/apk/debug/app-debug.apk \
  "https://uploads.github.com/repos/TomMen74/menzis-rss/releases/ID/assets?name=MenzisRSS-v6.1-debug.apk"
```

## Funktionen (aktiv)

- Paralleles Laden der Feeds (keine 500ms Verzögerung mehr)
- Nur Tabs mit Artikeln werden angezeigt
- Tabs sind sticky (bleiben oben beim Scrollen)
- Swipe-Hinweis wird während Swipe eingeblendet
- Ganze Kachel ist klickbar
- Hashtags statt Lesezeit (anklickbar → X/Twitter)
- Swipe links = Ausblenden
- Swipe rechts = Später lesen
- Drag & Drop Sortierung: Feeds, Tabs, Keywords, Kategorien
- Keywords als额外 Tabs
- Enter-Taste für Keyword-Eingabe
- Pull-to-Refresh
- Suchfunktion
- Hell/Dunkel/Auto Theme
- Rate Limiting (500ms zwischen API-Requests)
- Ladekreisel (ohne Text)
- Version im Header
- Favicon

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

## Bekannte Issues / ToDo

- [x] Drag & Drop für Kategorie-Reihenfolge (nur Tabs und Keywords bisher)
- [ ] Eventuell andere RSS-API falls rss2json zu viele Limits hat
