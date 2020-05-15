"use strict";

function objectHasProp (requiredProd, obj, msgError) {
  for (const requiredTitle of requiredProd) {
    if (!obj.hasOwnProperty(requiredTitle)) throw new Error(msgError);
  }
}

function consoleMount (type, title, titleConfig, text, hasLink, link) {
  let newTitleConfig = "";

  if (type === "rainbow") {
    newTitleConfig = `font-color: ${titleConfig.color}; font-size: ${titleConfig.size}; font-weight: ${titleConfig.weight}; background-color: ${titleConfig.background}; word-break: break-word; line-height: 1.3; text-shadow: ${titleConfig.shadow.join(", ")}`;
  } else {
    newTitleConfig = `font-color: ${titleConfig.color}; font-size: ${titleConfig.size}; font-weight: ${titleConfig.weight}; background-color: ${titleConfig.background}; word-break: break-word; line-height: 1.3;`;
  }

  if (hasLink) {
    console.log(`\n%c${title}\n\n`, `${newTitleConfig}`, `${text}\n\n`, `${link.text}:\n`, `${link.url}\n\n`);
  } else {
    console.log(`\n%c${title}\n\n`, `${newTitleConfig}`, `${text}\n\n`);
  }
}

function awesomeConsole (type = "normal", config = null) {
  const requiredTitleConfigProps = ["color", "size", "background"];
  const requiredLinkProps = ["text", "url"];
  const defaultLink = {
    text: "Default link",
    url: "https://github.com/VemLavarALoucaGamers/awesome-consolelog"
  };

  const defaultConfig = {
    title: "Title undefined",
    titleConfig: {
      color: "#ffffff",
      size: "20px",
      weight: "bold",
      background: "transparent",
      shadow: [
        "3px 3px 0 #D91F26",
        "6px 6px 0 #E25B0E",
        "9px 9px 0 #F5DD08",
        "12px 12px 0 #059444",
        "15px 15px 0 #0287CE",
        "18px 18px 0 #044D91",
        "21px 21px 0 #2A1571"
      ]
    },
    text: "Text undefined",
    hasLink: true,
    link: defaultLink
  };

  // Verifica se esta sendo passado configuracao, caso nao, seta a config padrao
  if (!config) config = defaultConfig;

  // Verifica se esta sendo passado text
  if (!config.text) config.text = "Text undefined";

  // Verifica se titleConfig possui as opcoes obrigatorias definidas em requiredTitleConfigProps
  objectHasProp(requiredTitleConfigProps, config.titleConfig, "titleConfig must have color, background and size");

  // Verifica se esta sendo passado um link
  if (!config.link) {
    config.link = defaultLink;
  } else {
    // Verifica se titleConfig possui as opcoes obrigatorias definidas em requiredLinkProps
    objectHasProp(requiredLinkProps, config.link, "link must have text and url");
  }

  // Definindo font-weight por type
  switch (type) {
    case "bold":
      config.titleConfig.weight = "bold";
      break;
    case "rainbow":
      config.titleConfig.weight = "bold";
      break;
    default:
      config.titleConfig.weight = "normal";
      break;
  }

  // Verifica se o tipo é rainbow
  if (type === "rainbow") {
    if (!config.titleConfig.shadow) {
      throw new Error("Set TitleConfig Shadow");
    } else {
      if (!config.titleConfig.shadow.length || config.titleConfig.shadow.length !== 7) {
        throw new Error("Set TitleConfig Shadow must have 7 colors");
      } else {
        config.titleConfig.shadow.forEach((shadow, index, arr) => {
          let num = 3;

          if (index === 1) num = 6;
          if (index === 2) num = 6;
          if (index === 3) num = 9;
          if (index === 4) num = 12;
          if (index === 5) num = 15;
          if (index === 6) num = 18;
          if (index === 7) num = 21;

          arr[index] = `${num}px ${num}px 0px ${shadow}`;
        });
      }
    }
  }

  consoleMount(type, config.title, config.titleConfig, config.text, config.hasLink, config.link);
}

module.exports = awesomeConsole