import React from "react";
import { data } from "../../data/data";
import { VideoIntroduction } from "../../screens/onboarding/video/Video";
import { Instructions } from "../../screens/onboarding/instructions/Instructions";

export default function MainLayout() {
  const layout = data.venueRankerLayout;

  return layout.map((item) => {
    if (item.type === "introduction") {
      return <VideoIntroduction {...item} key={item.id} />;
    }

    if (item.type === "instructions") {
      return <Instructions {...item} key={item.id} />;
    }
  });
}
