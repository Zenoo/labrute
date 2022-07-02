# Asset extraction guide

> If you have any questions, contact Zenoo#0001 on Discord.

## Requirements

- [JPEX Decompiler](https://github.com/jindrapetrik/jpexs-decompiler)

- [perso.swf](https://gitlab.com/eternaltwin/labrute/labrute/-/raw/master/original-game/swf-original/perso.swf?inline=false)

## TLDR

**Do the same thing as this [commit](https://gitlab.com/eternaltwin/labrute/labrute-react/-/commit/9dde7b8f39a51c6228e2bd89aafc119a7cbe6dc1)**.

## Workspace

- Fork the repository, and work on this fork.

## Finding an asset

- Open `perso.swf` with JPEX Decompiler and open the folders `shapes` and `sprites`

- Go to the most complete `DefineSprite` for the gender you want

Gender | DefineSprite
--- | ---
Male | 460
Female | 752

- Pause the animation

![](https://i.imgur.com/5cSfkvo.png)

- Navigate the frames, find an asset not yet implemented and hover over it to see the sprites and shapes it uses.

![](https://i.imgur.com/WshgezH.png)

- Navigate the sprites and shapes highlighted in the previous image and find the asset you want.

![](https://i.imgur.com/3Daljil.png)

- Extract the asset as an SVG with 100% zoom

![](https://i.imgur.com/x6z2jlC.png)
![](https://i.imgur.com/tygtA7z.png)

- Open the file in your favorite editor

- Copy the inner SVG code and add it as another switch case in the `switch` statement in the file for your body part in `client/src/components/Brute`

- You will probably have to adjust some attributes in the copied SVG to make it fit and position it correctly. The easiest way is to use the `transform` attribute and change the `matrix` value. (See the [matrix doc](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix))

- Update the `availableBodyParts` object in `client/src/utils/Brute/availableBodyParts.ts`.

- To test the new asset, open the `HomeView` file and temporarily change the `setBodyParts` parameter to remove the random selection and add your body part.

```ts
setBodyParts({
  longHair: 2,
  ...
});
```

- Check if the asset is correctly displayed in the browser by changing the name of your brute in the new brute form.

- If everything is fine, commit and push your changes.

- Open a Pull Request.