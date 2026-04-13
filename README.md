# Menzis RSS v5.1

Ein einfacher RSS-Reader als Web-App.

## Funktionen

- **Chronologische Anzeige** - Alle Artikel nach Zeit sortiert, max. 100 Artikel
- **Swipe-Funktion** - Swipe links = Ausblenden | Swipe rechts = Später lesen
- **Später lesen** - Menü zeigt alle gespeicherten Artikel
- **Versteckte Artikel** - Menü zeigt alle ausgeblendeten Artikel
- **Keywords** - Eigene Schlagwörter als额外 Tabs (z.B. "Schwerin", "Android")
- **Suchfunktion** - Filtert Artikel nach Titel und Feed-Name
- **Kategorien-Tabs** - Dynamische Tabs basierend auf aktiven Feeds
- **Pull-to-Refresh** - Nach unten ziehen zum Aktualisieren
- **Design** - Hell/Dunkel/Auto Theme-System

### Farben
- **Hell**: Blau (#1a73e8)
- **Dunkel**: Orange (#ff8c00)

## Feed-Kategorien

| Kategorie | Feeds |
|-----------|-------|
| **Nachrichten** | Tagesschau, SPIEGEL, FAZ, NDR (MV, SH, NI, HH), NachDenkSeiten, Cicero, Tichys Einblick, Telepolis, Apollo News, Junge Freiheit, **Die Welt, n-tv, Handelsblatt, Tagesspiegel, Focus** |
| **Tech** | Futurezone, Caschy, Netzpolitik, t3n, Kuketz IT, ComputerBase, Inside Digital, **Heise, Golem.de, BasicThinking, der Freitag** |
| **Wirtschaft** | Gründerszene, Deutsche Startups, **WirtschaftsWoche, Makronom** |
| **Lifestyle** | Mit Vergnügen, Eurogamer, Moviepilot, **Deutsche Welle, The Local** |
| **Android** | Android-User.de, XDA Android, SmartDroid |
| **Apple** | Macerkopf, iFun, Sir Apfelot, Apfelpage, Macwelt |
| **Kochen** | Eat this! (Vegan), Backen macht glücklich |

## Defekte Feeds

Folgende Feeds funktionieren nicht mit der rss2json API und wurden deaktiviert:
- computerbild.de, turingmagazin.de, zeit.de, sueddeutsche.de
- quarks.de, klimareporter.de, mannbackt.de
- valentinas-kochbuch.de, highfoodality.de

## Technisch

- Single HTML-Datei mit inline CSS und JavaScript
- RSS-Parsing via rss2json.com API
- localStorage für Persistenz

## GitHub

- Repository: https://github.com/TomMen74/menzis-rss
- Web-Version: https://tommen74.github.io/menzis-rss/

## Versionen

- **v5.2** - Keywords-Tabs Bugfix, Artikelalter & Lesezeit
- v5.1 - Swipe rechts für Später lesen, Keywords-Tabs, neue Feeds, Blau für Hell
- v5.0 - Saubere Neuorganisation mit Theme-System
- v4.x - Theme-System eingeführt
- v3.x - Initiale Web-App Version
