import React from "react";
import Menuitem from "./menu";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "React js ",
          imageUrl: "https://i.ibb.co/vQTjf9Y/1-yj-H3-Si-Da-VWtp-BX0g-2q68g.png",
          id: 1,
          linkUrl: "shop/Joggers"
        },
        {
          title: "Javascript",
          imageUrl:
            "https://i.ibb.co/pZSH354/javascript-banner-sxve2l.jpg",
          id: 2,
          linkUrl: "shop/caps"
        },
        {
          title: "Html",
          imageUrl:
            "https://i.ibb.co/8m0PBvP/html2.png",
          id: 3,
          linkUrl: "shop/watches"
        },
        {
          title: "git",
          imageUrl:
            "https://i.ibb.co/R2jvyBB/Git-Logo-2-Color.png",
          size: "large",
          id: 4,
          linkUrl: "shop/bags"
        },
        {
          title: "css",
          imageUrl: "https://i.ibb.co/w4jg26S/css-illustration.png",
          size: "large",
          id: 5,
          linkUrl: "shop/shoes"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu ">
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <Menuitem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
