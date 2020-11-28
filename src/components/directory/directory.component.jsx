import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "coffee",
          imageUrl:
            "https://images.unsplash.com/photo-1422207109431-97544339f995?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=80",
          id: 1,
          linkUrl: "shop/coffee",
        },
        {
          title: "brewing",
          imageUrl:
            "https://images.unsplash.com/photo-1528800190552-c3aae2994f70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=80",
          id: 2,
          linkUrl: "shop/brewing",
        },
        {
          title: "giftcards",
          imageUrl:
            "https://images.unsplash.com/photo-1572798793834-67d5e285760d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2767&q=80",
          id: 3,
          linkUrl: "shop/giftcards",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
