import LoginBox from "./components/LoginBox";
import backgroundImg from "./assets/background.png";

export default function Root() {
  return (
    <>
      <div
        id="single-spa-application:@home-hub/react-login"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 1000,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          height: "90vh",
        }}
      >
        <LoginBox />
      </div>
    </>
  );
}
