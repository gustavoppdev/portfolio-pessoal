import { getTranslations } from "next-intl/server";

const Home = async () => {
  const t = await getTranslations("HomePage");

  return <div className="">{t("title")}</div>;
};

export default Home;
