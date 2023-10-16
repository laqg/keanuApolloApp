export type KeanuImg = {
  width: string;
  height: string;
  href: string;
};

export type KeanuSvg = {
  width: string;
  height: string;
  viewBox: Array<string>;
  preserveAspectRatio: Array<string>;
};

export type KeanuImageData = {
  svg: KeanuSvg;
  img: KeanuImg;
};
