import { type Location } from "$src/data/locations";

export const locations: Location[] = [
  {
    value: "dana-porter-library",
    label: "Dana Porter Library",
    description:
      "Built in 1965, the Dana Porter Library is home to a large collection of books focused on the Arts, Humanities and Social Sciences.",
    location: { lat: 43.46990996120006, lng: -80.54232110658808 },
    hours: {
      monday: [{ open: "08:00", close: "23:00" }],
      tuesday: [{ open: "08:00", close: "23:00" }],
      wednesday: [{ open: "08:00", close: "23:00" }],
      thursday: [{ open: "08:00", close: "23:00" }],
      friday: [{ open: "08:00", close: "23:00" }],
      saturday: [{ open: "11:00", close: "23:00" }],
      sunday: [{ open: "11:00", close: "23:00" }],
    },
    metadata: {
      amentities: ["WiFi"],
    },
  },
];