import PortfolioList from "../PotfolioList/PortfolioList"
import "./portfolio.scss"
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Mobile_App");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Mobile_App",
      title: "Mobile App",
    },
    {
      id: "Website",
      title: "Website",
    },
    {
      id: "iOS_App",
      title: "iOS App",
    },
    {
      id: "Mathematical_Modeling",
      title: "Mathematical Modeling",
    },
    {
      id: "Deep_Learning",
      title: "Deep Learning",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Mobile_App":
        setData(featuredPortfolio);
        break;
      case "Website":
        setData(webPortfolio);
        break;
      case "iOS_App":
        setData(mobilePortfolio);
        break;
      case "Mathematical_Modeling":
        setData(designPortfolio);
        break;
      case "Deep_Learning":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected])


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
