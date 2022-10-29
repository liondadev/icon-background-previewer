import "../styles/logo-container.scss";

export default function LogoContainer({ logo_src, name, hex }) {
  return (
    <>
      <div className="logo_container">
        <div
          className="logo_background"
          style={{
            background: hex
          }}
        >
          <img src={logo_src} alt="Invalid URL" />
        </div>
        <div className="text_container">
          <p className="logo_name">{name}</p>
          <p className="logo_hex">{hex}</p>
        </div>
      </div>
    </>
  );
}
