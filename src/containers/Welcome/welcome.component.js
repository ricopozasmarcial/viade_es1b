import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useWebId, Value } from "@solid/react";
import {
  WelcomeCard,
  WelcomeLogo,
  WelcomeProfile,
  WelcomeDetail,
} from "./welcome.style";

/**
 * Welcome Page UI component, containing the styled components for the Welcome Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const WelcomePageContent = (props) => {
  const { t } = useTranslation();
  const name = useWebId();

  const style = {
    position: "absolute",
    width: "100%",
    height: "90%",
    backgroundImage: 'url("img/fondo2.png")',
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    padding: "50px 0",
  };

  return (
    <section data-testid="welcome-wrapper" style={style}>
      <WelcomeCard className="card">
        <WelcomeLogo data-testid="welcome-logo">
          <img
            id="welcome-img"
            src={process.env.PUBLIC_URL + "/img/Logo.svg"}
            alt="Inrupt"
          />
        </WelcomeLogo>
        <WelcomeProfile data-testid="welcome-profile">
          <h3>
            {t("welcome.welcome")}, <a href={name}><Value src="user.name" /></a>
          </h3>
        </WelcomeProfile>
      </WelcomeCard>
      <WelcomeCard className="card">
        <WelcomeDetail data-testid="welcome-detail">
          <Trans i18nKey="welcome.title">
            <h3>title</h3>
          </Trans>

          <p>{t("welcome.summary")}</p>
          <h3>{t("welcome.contactUsTitle")}</h3>
          <Trans i18nKey="welcome.contactUsText">
            <p>
              If you have additional questions about the use of the Application,
              you can go to our
              <a href="https://github.com/Arquisoft/viade_es1b">GitHub site</a>.
            </p>
          </Trans>
        </WelcomeDetail>
      </WelcomeCard>
    </section>
  );
};
