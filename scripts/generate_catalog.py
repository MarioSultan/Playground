"""Build games.json from every games/<slug>/game.json file."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GAMES_DIR = ROOT / "games"


def main():
    catalog = []
    if GAMES_DIR.exists():
        for config_path in sorted(GAMES_DIR.glob("*/game.json")):
            folder = config_path.parent
            try:
                data = json.loads(config_path.read_text(encoding="utf-8"))
            except (OSError, json.JSONDecodeError) as error:
                raise SystemExit(f"Error leyendo {config_path}: {error}")

            if not (folder / "index.html").is_file():
                raise SystemExit(f"Falta index.html en {folder}")
            if not data.get("name"):
                raise SystemExit(f"Falta el campo 'name' en {config_path}")

            catalog.append({
                "name": data["name"],
                "description": data.get("description", ""),
                "icon": data.get("icon", "✳"),
                "path": f"games/{folder.name}/",
            })

    output = ROOT / "games.json"
    output.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Catálogo generado: {len(catalog)} juego(s)")


if __name__ == "__main__":
    main()
