import "./styles/main.scss";
import colors from "./colors.json";
import LogoContainer from "./components/logo-container";
import { useState } from "react";

/*
  [
    {
      name: "Nice title",
      hex: "#fafafa"
    }
  ]
*/

export default function App() {
  const [iconURL, setIconURL] = useState(
    "https://i.postimg.cc/dVyxYjFz/house-solid.png"
  );
  const [iconFormValue, setIconFormVaue] = useState(iconURL);

  const colorElement = colors.map((colorV) => {
    return (
      <LogoContainer logo_src={iconURL} name={colorV.name} hex={colorV.hex} />
    );
  });

  function handleSubmit(f) {
    f.preventDefault();

    setIconURL(iconFormValue);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={iconFormValue}
          onChange={(val) => {
            setIconFormVaue(val.currentTarget.value);
          }}
        />
      </form>

      <h1>Icon Color Previewer</h1>
      <h2>Preview your logo or Icon with multiple backgrounds.</h2>
      <div className="logo_flex_container">{colorElement}</div>
    </div>
  );
}
