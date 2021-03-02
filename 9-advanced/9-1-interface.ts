type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends
interface ZPositionIndex extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// only for Interface : merge
// interface PositionInterface {
//   z: number;
// }

// only for Type : computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // Name becomes string

type NumberType = number;

type Diredction = "left" | "right";
