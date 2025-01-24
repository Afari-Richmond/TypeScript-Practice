// Basic Types
let id: number = 5;

let myName: string = "Richmond Afari";
let isPublished: boolean = true;
let x: any = "Hello World ";

let ids: number[] = [1, 2, 3, 4, 5];

let array: any[] = [1, true, "hello"];

// Tuple

let person: [number, string, boolean] = [1, "Richmond", true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Richmond"],
  [2, "Afari"],
];

// Union
let pid: string | number = 22;

// enum

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

enum Dirction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"

}
