{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  // [1, 2].map((item) => item * item); // [1, 4]

  // make every value of T optional
  type Optional<T> = {
    [P in keyof T]?: T[P]; // bracket[] is similar with for ...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "",
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // video.author = "ClarXo"; // unable to change property

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "test",
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  // Proxify encapsulate every object with object 'Proxy'
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
