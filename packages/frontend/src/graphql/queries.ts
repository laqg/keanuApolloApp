import { gql } from "@apollo/client";

export const GET_KEANU_IMAGE = gql`
  query GetKeanuImage($height: Int, $width: Int, $young: Boolean) {
    keanu(height: $height, width: $width, young: $young) {
      img {
        height
        width
        href
      }
      svg {
        width
        viewBox
        preserveAspectRatio
        height
      }
    }
  }
`;
