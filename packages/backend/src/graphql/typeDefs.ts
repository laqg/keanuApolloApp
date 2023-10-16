const typeDefs = `#graphql

type KeanuImg {
  height: String,
  width: String,
  href: String
}

type KeanuSvg {
  width: String,
  height: String,
  viewBox: [String],
  preserveAspectRatio: [String],
}

type KeanuQuery {
  img: KeanuImg
  svg: KeanuSvg
}

type Query {
  keanu (height: Int, width: Int, young: Boolean): KeanuQuery
}
`;

export default typeDefs;
