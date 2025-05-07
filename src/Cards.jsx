import React from "react";
import { cardItems } from "./carditem";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-10">
      {cardItems.map((item) => {
        return (
          <Card
            key={item.id}
            href={item.href}
            views={item.views}
            duration={item.duration}
            link={item.link}
          />
        );
      })}
    </div>
  );
};

export default Cards;
