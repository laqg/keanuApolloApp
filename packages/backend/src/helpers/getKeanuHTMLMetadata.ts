import parser from "html2json";

import { Keanu } from "../types/types";

function getKeanuHTMLMetadata(html: String): Keanu {
  const json = parser.html2json(html);
  const svg = json.child[0].attr;
  const img = json.child[0].child[0].attr;

  return {
    svg: {
      width: svg.width,
      height: svg.height,
      viewBox: svg.viewBox,
      preserveAspectRatio: svg.preserveAspectRatio,
    },
    img: {
      width: img.width,
      height: img.height,
      href: img["xlink:href"],
    },
  };
}

export default getKeanuHTMLMetadata;
