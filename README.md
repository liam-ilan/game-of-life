The Game of Life in Node
=

__By Liam Ilan__

The game of life is a simulation of living cells and how they interact with one another.


The simulation occurs in a grid, in witch each cell is turned on or off in the next generation, depending on its neighbours.


If a cell has 3 neighbours, it is alive in the next generation.
If a cell has 2 neighbours and is alive, it is alive in the next generation.
If a cell has less than 2 neighbours it dies of underpopulation.
If a cell has more than 3 neighbours it dies of overpopulation.


This is an implementation of the game of life in node.




To run the game, first clone this repo using

```bash
git clone https://liamIlan@bitbucket.org/liamIlan/game-of-life-node.git
```


Then enter the directory and initialize NPM.

```bash
cd your/file/game-of-life-node


npm init
```

To run the game, enter the directory, and then paste the following,

```bash
node index.js
```

To end the simulation press ```ctrl + c```


