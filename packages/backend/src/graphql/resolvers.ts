import getKeanuHTMLMetadata from "../helpers/getKeanuHTMLMetadata.js";

const resolvers = {
  Query: {
    keanu: async (_, { height, width, young }, { dataSources }) => {
      const data = await dataSources.keanuApi.getKeanu(width, height, young);
      const json = getKeanuHTMLMetadata(data);
      return json;
    },
  },
};

export default resolvers;
