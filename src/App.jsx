import { ConfigProvider, Grid } from "antd";
import "./App.css";
import "../src/assets/styles/font.css";
import "@fontsource/titillium-web/200.css";
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
import "@fontsource/titillium-web/900.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./pages/Home";


function App() {
  const { xs } = Grid.useBreakpoint();
  const headerHeight = xs ? 100 : 100;
  const paddingBlock = xs ? 5 : 7;
  const labelFontSize = xs ? 14 : 16;
  const itemMarginBottom = xs ? 14 : 24;
  const fontSizeButton = xs ? 12 : 16;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#2e40b6",
          colorLink: "#2e40b6",
          colorPrimary: "#2e40b6",
          motionDurationSlow: "1s",
          colorError: "#ff0000",
          colorTextDisabled: "#2e40b6",
          colorBgContainerDisabled: "white",
        },
        components: {
          Layout: {
            headerBg: "#fff",
            headerHeight: headerHeight,
            footerBg: "#2e40b6",
            footerPadding: "50px 0px 90px",
            headerPadding: "0px 0px",
          },
          Button: {
            contentFontSize: fontSizeButton,
          },
          Menu: {
            itemColor: "#2e40b6",
            itemHoverColor: "black",
            horizontalItemSelectedColor: "#2e40b6",
            activeBarHeight: 3,
          },
          Form: {
            labelColor: "#2e40b6",
            labelFontSize: labelFontSize,
            verticalLabelPadding: "1px 0px 0px",
            itemMarginBottom: itemMarginBottom,
          },
          Input: {
            paddingBlock: paddingBlock,
          },
        },
      }}
    >
    <Home/>
    </ConfigProvider>
  );
}

export default App;
