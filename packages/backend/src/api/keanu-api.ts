import { RESTDataSource } from "@apollo/datasource-rest";

class KeanuAPI extends RESTDataSource {
  override baseURL = "https://placekeanu.com";

  async getKeanu(
    width: Number,
    height: Number,
    young: Boolean
  ): Promise<String> {
    const route = `/${width}/${height}/${young ? "y" : ""}`;
    return this.get<String>(route);
  }
}

export default KeanuAPI;
