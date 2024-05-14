# easykeys

simple but powerful keybindings for webapps and games

## basic usage

```typescript
import {easykeys} from "easykeys";
easykeys.down("Space", () => alert("pressed spacebar"));
easykeys.up("Space", () => alert("released spacebar"));
```

## usage in a webgame with a game loop

```typescript
function setup() {
  easykeys.preventDefaultFor(["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Space"]);
}
function update() {
  if (easykeys.isDown("a") || easykeys.isDown("ArrowLeft")) velocityX = -1;
  if (easykeys.isDown("d") || easykeys.isDown("ArrowRight")) velocityX = 1;
  // ... update game logic ...
}
```

## combinations

```typescript
easykeys.down(["ctrl+s", "meta+s"], () => save());
```
