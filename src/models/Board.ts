import { Cell } from "./Cell";
import { COLORS } from "./Colors";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(j, i, COLORS.BLACK, null, this)) // black
                } else {
                    row.push(new Cell(j, i, COLORS.WHITE, null, this))
                }
            }
            this.cells.push(row)
        }
    }
}