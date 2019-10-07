import React from "react";
import { Header } from "semantic-ui-react";

function PageHeadings(props) {
  const { mobile, path } = props;
  let content;
  switch (path) {
    case "/":
      content = {
        content1: "China II",
        content2: "Best New York Style Chinese Take Out in Sanford, FL.",
        background: require('../images/wok.jpg'),
      };
      break;
    case "/menu-main":
    case "/menu-lunch":
    case "/menu-combo":
    case "/menu-specials":
    case "/menu-specialties":
    case "/menu-diet":
      content = {
        content1: "Menu",
        content2: "Discover Our Diverse Menu",
        background: require('../images/food.jpg'),
      };
      break;
    case "/gallery":
      content = {
        content1: "Gallery",
        content2: "Photos Of Our Food",
        background: require('../images/board.jpg'),
      };
      break;
    case "/contact":
      content = {
        content1: "Contact",
        content2: "Find Us",
        background: require('../images/chopsticks.jpg'),
      };
      break;
    default:
      content = null;
      break;
  }
  if (content) {
    return (
      <div
        style={{
          paddingTop: mobile ? "1em" : "3em",
          paddingBottom: mobile ? "1em" : "3em",
          backgroundColor: "#1b1c1d",
          margin: 0,
          width: "100vw",
          textAlign: "center",
          backgroundImage: `url(${content.background})`,
          backgroundSize: "cover",
          backgroundPosition: "70% 70%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header
          as="h1"
          content={content.content1}
          inverted
          style={{
            paddingTop: mobile ? "1em" : "1em",
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            color: "#ffffff",
            textShadow:
              "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
          }}
        />
        <Header
          as="h2"
          content={content.content2}
          inverted
          style={{
            paddingBottom: mobile ? "1em" : "1em",
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            color: "#ffffff",
            textShadow:
              "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
          }}
        />
      </div>
    );
  }
  return null;
}

export default PageHeadings;