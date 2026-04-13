# Menzis RSS v5.0

Ein einfacher RSS-Reader als Web-App.

## Funktionen

- **Chronologische Anzeige** - Alle Artikel nach Zeit sortiert, max. 100 Artikel
- **Artikel-Ausblendung** - Klick öffnet Artikel und blendet ihn aus; Swipe nach links zum manuellen Ausblenden
- **Versteckte Artikel** - Menü zeigt alle ausgeblendeten Artikel mit Wiederherstellungsoption
- **Suchfunktion** - Filtert Artikel nach Titel und Feed-Name
- **Kategorien-Tabs** - Dynamische Tabs basierend auf aktiven Feeds: Nachrichten, Android, Apple, Tech, Kochen, Lifestyle, Wirtschaft
- **Pull-to-Refresh** - Nach unten ziehen zum Aktualisieren
- **Design** - Hell/Dunkel/Auto Theme-System mit CSS Variables

## Feed-Kategorien

| Kategorie | Feeds |
|-----------|-------|
| Nachrichten | Tagesschau, SPIEGEL, FAZ, NDR (MV, SH, NI, HH), NachDenkSeiten, Cicero, Tichys Einblick, Telepolis, Apollo News, Junge Freiheit |
| Tech | Futurezone, Caschy, Netzpolitik, t3n, Kuketz IT, ComputerBase, Inside Digital |
| Wirtschaft | Gründerszene, Deutsche Startups |
| Lifestyle | Mit Vergnügen, Eurogamer, Moviepilot |
| Android | Android-User.de, XDA Android, SmartDroid |
| Apple | Macerkopf, iFun, Sir Apfelot, Apfelpage, Macwelt |
| Kochen | Eat this! (Vegan), Backen macht glücklich |

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

- v5.0 - Saubere Neuorganisation mit Theme-System (Hell/Dunkel/Auto)
- v4.x - Theme-System eingeführt
- v3.x - Initiale Web-App Version
