import React from "react";
import Menuitem from "./menu";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Joggers",
          imageUrl: "https://i.ibb.co/C5kdg7y/jd-380066-a.jpg",
          id: 1,
          linkUrl: "shop/Joggers"
        },
        {
          title: "caps",
          imageUrl:
            "https://i.ibb.co/St1JdsQ/049091e369254549b69a2a53a4510431.jpg",
          id: 2,
          linkUrl: "shop/caps"
        },
        {
          title: "watches",
          imageUrl:
            "https://i.ibb.co/HXY9FRY/15796e1aa0fc4ce784827b78bc6c21e6.jpg",
          id: 3,
          linkUrl: "shop/watches"
        },
        {
          title: "bags",
          imageUrl:
            "https://i.ibb.co/2W7cKzh/d516d2248fc04fc0b24fd1410c86acf2.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/bags"
        },
        {
          title: "shoes",
          imageUrl: "https://i.ibb.co/68W75Kw/jd-386109-a.jpg",
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
