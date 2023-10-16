import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { getKeanuImage } from "../redux/actions/keanuActions";

import { GET_KEANU_IMAGE } from "../graphql/queries";

function useGetKeanuImage(height: number, width: number, young: boolean) {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_KEANU_IMAGE, {
    variables: { height, width, young },
  });
  useEffect(() => {
    dispatch(
      getKeanuImage({
        loading,
        error,
        data: { img: data?.keanu.img, svg: data?.keanu.svg },
      })
    );
  }, [loading, error, data, dispatch]);
}

export default useGetKeanuImage;
