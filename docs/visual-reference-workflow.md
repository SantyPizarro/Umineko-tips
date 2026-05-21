# Visual Reference Workflow

Target version: Umineko PC original with Ryukishi07 sprites.

Do not use PS3, Steam, MangaGamer, or 07th-Mod screenshots as the visual source of truth. 07th-Mod references are useful only for technical comparison.

## Reference Folder

Store legal reference screenshots here:

```txt
assets/reference/
  ep1/
    normal/
      characters.png
      tips.png
      epitaph.png
    fantasy/
    future/
  ep2/
  ep3/
  ep4/
  ep5/
  ep6/
  ep7/
  ep8/
```

Use captures from the PC original at the original resolution whenever possible. Keep filenames simple and descriptive.

## Comparison Loop

1. Add the original screenshot to `assets/reference/epX/mode/`.
2. Import the matching legal game assets into `assets/` using `npm run assets:import -- --from="C:\path\to\legal\assets"`.
3. Run `npm run validate`.
4. Open `http://127.0.0.1:8000/index.html`.
5. Compare the live view against the reference screenshot.
6. Adjust only the CSS/layout/data needed for that exact screen.
7. Mark the affected character/tip `verified: true` only after the text, asset, state, and layout match the reference.

## Per-Screen Checklist

- 4:3 VN frame and background crop.
- Character grid slot count, order, spacing, and active state.
- Dead/missing overlay color, opacity, and placement.
- Portrait crop per character.
- Full-body character scale and anchor point.
- Text box position, color, line height, and pagination.
- Button labels and active/hover state.
- Mode availability for normal/fantasy/future.
- Tip list order and title text.
- Tip-specific layout, especially epitaph, letters, and game record.

## Copyright Note

The wiki may help verify names/order, but do not treat wiki images or copied text as a publishable asset source unless you have permission. For identical PC-original visuals, import from a legal local copy or from assets you are authorized to use.
