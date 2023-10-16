import { useState } from "react";

import KeanuImage from "./KeanuImage";

function KeanuImageConfig() {
  const [config, setConfig] = useState<null | {
    height: number;
    width: number;
    young: boolean;
  }>(null);

  function handleSubmit(event: any) {
    event.preventDefault();
    const height = event.target?.elements.height.value;
    const width = event.target?.elements.width.value;
    const young = event.target?.elements.young.checked;
    setConfig({ height, width, young });
  }

  return (
    <>
      <div className="keanuImageMenu">
        <form onSubmit={handleSubmit}>
          <label>Height (100-500):</label>
          <input required name="height" type="number" min="100" max="500" />
          <br></br>
          <label>Width (100-500):</label>
          <input required name="width" type="number" min="100" max="500" />
          <br></br>
          <label>Young:</label>
          <input name="young" type="checkbox" />
          <br></br>
          <input value={"Get Image"} type="submit" />
        </form>
      </div>
      <div className="keanuImageContainer">
        {config && (
          <KeanuImage
            height={Number(config.height)}
            width={Number(config.width)}
            young={config.young}
          />
        )}
      </div>
    </>
  );
}

export default KeanuImageConfig;
