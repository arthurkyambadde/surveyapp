import React from "react";
import { useVenue } from "../../../hooks/useVenue";
// import { STEP_2_QUESTIONS } from "../../../data/Screens";
import { Instructions } from "../../onboarding";
import { PlaceRating } from "./PlaceRating";
// import AppointmentIntroduction from "../../appointment/AppointmentIntroduction";
// import AppointmentScheduler from "../../appointment/AppointmentScheduler";
// import Note from "../../../components/question/Note";
// import { LEAVE_A_NOTE } from "../../../data/Screens";
import { data } from "../../../data/data";

export function VenueRating() {
  //
  const { selectedVenues, venueRating, setPlaceRating } = useVenue();
  console.log(selectedVenues, "selected venues");
  return (
    <div className="h-auto relative">
      {selectedVenues.map((item) => {
        const venue = data.STEP_2_QUESTIONS[item].instructions;

        return (
          <section key={item} className="relative">
            <Instructions
              id={item}
              title={venue.title}
              subtitle={venue.subtitle}
              imageUrl={venue.imageUrl}
            />
            <PlaceRating
              places={data.STEP_2_QUESTIONS[item].places}
              onRatePlace={(placeId, answer) => {
                setPlaceRating(item, placeId, answer);
              }}
              placeRatings={venueRating[item]}
              venueTitle={venue.title}
            />
            <Instructions id={item} title={data.controls_instructions.text} />
          </section>
        );
      })}
      {/* <AppointmentIntroduction />
      <AppointmentScheduler />
      <Note
        title={LEAVE_A_NOTE.title}
        subtitle={LEAVE_A_NOTE.subtitle}
        id={LEAVE_A_NOTE.id}
        placeholder={LEAVE_A_NOTE.placeholder}
        image={LEAVE_A_NOTE.image}
      /> */}
    </div>
  );
}
