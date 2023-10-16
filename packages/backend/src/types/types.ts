type KeanuImg = {
  width: string;
  height: string;
  href: string;
};

type KeanuSvg = {
  width: string;
  height: string;
  viewBox: Array<string>;
  preserveAspectRatio: Array<string>;
};

export type Keanu = {
  svg: KeanuSvg;
  img: KeanuImg;
};
