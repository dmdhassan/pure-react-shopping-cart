import React from "react";
import Room from "../components/Room";
import AudioControls from "../components/AudioControls";
import Counter from "../components/Reducer";
import ShopingList from "../components/ShopingList";
import Keypad from "../components/Keypad";
import DocumentTitle from "../components/DocumentTitle";
import ShoppingSite from "../shopping_site/ShopingSite";





export default function Root() {

    return (
      <div>
        <ShoppingSite />
      </div>
    )
  }