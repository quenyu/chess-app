import logo from '../../assets/black-bishop.png'
import { Cell } from '../Cell';
import { Colors } from "../Colors";

export enum FiguresName {
  FIGURE = "Фигура",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон",
}

export class Figure {
  color: Colors
  logo: typeof logo | null
  cell: Cell
  name: FiguresName
  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.logo = null
    this.cell = cell
    this.cell.figure = this
    this.name = FiguresName.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    return true
  }

  moveFigure(target: Cell) {

  }
}