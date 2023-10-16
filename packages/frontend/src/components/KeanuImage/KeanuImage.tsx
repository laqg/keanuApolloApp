import { useSelector } from "react-redux";
import { RootState } from "../../redux/types/types";

import useGetKeanuImage from "../../hooks/useGetKeanuImage";

function KeanuImage({
  height,
  width,
  young,
  grayScale,
}: {
  height: number;
  width: number;
  young: boolean;
  grayScale: boolean;
}) {
  useGetKeanuImage(height, width, young);

  const { loading, data, error } = useSelector(
    (state: RootState) => state.keanu
  );

  if (loading) return <h3>Loading image...</h3>;
  if (error) return <h3>Error fetching image!</h3>;
  return (
    <>
      {data && (
        <svg
          width={data.svg.width}
          height={data.svg.height}
          viewBox={data.svg.viewBox.join(" ")}
          preserveAspectRatio={data.svg.preserveAspectRatio.join(" ")}
        >
          <image
            className={grayScale ? "grayScale" : ""}
            xlinkHref={data.img.href}
            width={data.img.width}
            height={data.img.height}
          />
        </svg>
      )}
    </>
  );
}

export default KeanuImage;
