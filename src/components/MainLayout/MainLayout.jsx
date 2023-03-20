import React from "react";
import { data } from "../../data/data";
import { Introduction } from "../../screens/onboarding/Introduction/Introduction";
import { Instructions } from "../../screens/onboarding/instructions/Instructions";
import { VenueSelection } from "../../screens/question/venue_selection/VenueSelection";

export default function MainLayout() {
  const layout = data.venueRankerLayout;

  return layout.map((item) => {
    if (item.type === "introduction") {
      return <Introduction {...item} key={item.id} />;
    }

    if (item.type === "instructions") {
      return <Instructions {...item} key={item.id} />;
    }

    if (item.type === "multi_choice_question") {
      return <VenueSelection {...item} />;
    }
  });
}
