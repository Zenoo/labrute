# Animation extraction guide

> If you have any questions, contact Zenoo#0001 on Discord.

## Requirements

- [JPEX Decompiler](https://github.com/jindrapetrik/jpexs-decompiler)

- [perso.swf](https://gitlab.com/eternaltwin/labrute/labrute/-/raw/master/original-game/swf-original/perso.swf?inline=false)

## TLDR

**Do the same thing as this [commit](https://gitlab.com/eternaltwin/labrute/labrute-react/-/commit/8743801bfdcd55087a16a7dc6ff750e7b75d4e37)**.

## Workspace

- Fork the repository, and work on this fork.

## Finding an asset

- Open `perso.swf` with JPEX Decompiler and open the folder `sprites`

- Go to the `DefineSprite` containing the animation you want

- Right click on the `DefineSprite` and select `Export selection`

![](https://i.imgur.com/jOBE351.png)

- Export as SVG at 100% zoom

![](https://i.imgur.com/Tv7zI5R.png)

- Run the following command to import the SVGs into the repository

```bash
yarn animation:import /path/to/exported/svgs animationName /path/to/animation/folder width height
```

- This will generate a file for each frame of the animation `{XX}.ts`

- Import those files in [getFrame.ts](getFrame.ts)

- Open [http://localhost:3000/anchor-test](http://localhost:3000/anchor-test) to check if the animation fits its width and height

![](https://i.imgur.com/FsOjdjj.png)

- If it doesn't, you can adjust the svg matrix in every `.ts` imported file

![](https://i.imgur.com/f7KZhxx.png)

The first highlighted number is the x position, the second is the y position.

- Once it's adjusted, you need to adjust the X and Y position of the anchor to be in-between the two feet of the character.

- Copy the X and Y position of the anchor and paste it in [constants.ts](../../../core/src/constants.ts)