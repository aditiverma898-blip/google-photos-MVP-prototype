const SCENARIO_DATA = {
  1: {
    id: 1,
    query: "that inventory paper from when we moved into the new flat",
    header: "Fetched 312 photos from flat move-in",
    subtitleText: "Context matched via Maps Timeline ('Home' Address Change) and Photo Location (New Flat).",
    stacks: [
      { title: "Lease Documents (Move-In Window)", badge: "100% Match - search result which matches closely to your text", color: "green", dropdownItems: ["Maps Timeline", "Photo Location"], gridImages: ['/images/new_s4_checklist_1.jpg', '/images/new_s4_checklist_2.jpg', '/images/new_s4_blueink_1.jpg', '/images/new_s4_hand_1.jpg', '/images/new_s4_checklist_3.jpg', '/images/new_s4_noise_1.jpg'] },
      { title: "Empty Apartment Interiors", badge: "75% Match", color: "amber", dropdownItems: ["Google Keep", "Visual Text Match"], gridImages: ['/images/int1.png', '/images/int2.png', '/images/int3.png', '/images/int4.png', '/images/int5.png', '/images/int1.png', '/images/int2.png', '/images/int3.png', '/images/int4.png', '/images/int5.png'] },
      { title: "Building Exterior & Parking", badge: "50% Broad Match", color: "gray", dropdownItems: ["Maps Timeline Proximity"], gridImages: ['/images/ext1.png', '/images/ext2.png', '/images/ext3.png', '/images/ext4.png', '/images/ext5.png', '/images/ext1.png', '/images/ext2.png', '/images/ext3.png', '/images/ext4.png', '/images/ext5.png'] }
    ],
    chips: ["Checklist Format", "Handwritten Notes", "Held in Hand"],
    example: 'e.g., "blue pen"',
    coverImage: '/images/s4_cover.jpg',
    fragments: [
      ['/images/new_s4_checklist_1.jpg', '/images/new_s4_checklist_2.jpg', '/images/new_s4_checklist_3.jpg'],
      ['/images/new_s4_blueink_1.jpg', '/images/new_s4_blueink_2.jpg', '/images/new_s4_blueink_3.jpg'],
      ['/images/new_s4_hand_1.jpg', '/images/new_s4_hand_2.jpg'],
      ['/images/new_s4_noise_1.jpg', '/images/new_s4_noise_2.jpg', '/images/new_s4_noise_3.jpg', '/images/new_s4_noise_4.jpg']
    ],
    grid: [
      '/images/new_s4_checklist_1.jpg', '/images/new_s4_noise_1.jpg', '/images/new_s4_blueink_1.jpg', '/images/new_s4_hand_1.jpg',
      '/images/new_s4_checklist_2.jpg', '/images/new_s4_noise_2.jpg', '/images/new_s4_blueink_2.jpg', '/images/new_s4_hand_2.jpg',
      '/images/new_s4_noise_3.jpg', '/images/new_s4_checklist_3.jpg', '/images/new_s4_blueink_3.jpg', '/images/new_s4_noise_4.jpg'
    ]
  },
  2: {
    id: 2,
    query: "whiteboard notes from the team offsite at the resort",
    header: "Fetched 204 photos from resort offsite",
    subtitleText: "Context matched via Google Calendar ('Team Offsite' Event) and Maps Timeline (Resort Location).",
    stacks: [
      { title: "Whiteboards & Screens (Offsite Window)", badge: "100% Match - search result which matches closely to your text", color: "green", dropdownItems: ["Google Calendar", "Maps Timeline"] },
      { title: "Conference Room Interiors", badge: "75% Match", color: "amber", dropdownItems: ["Google Calendar Topic", "Visual Context"], gridImages: ['/images/conf1.png', '/images/conf2.png', '/images/conf3.png', '/images/conf4.png', '/images/conf5.png', '/images/conf1.png', '/images/conf2.png', '/images/conf3.png', '/images/conf4.png', '/images/conf5.png'] },
      { title: "All Whiteboards (General)", badge: "50% Broad Match", color: "gray", dropdownItems: ["Object Recognition"], gridImages: ['/images/white1.png', '/images/white2.png', '/images/white3.png', '/images/white4.png', '/images/white5.png', '/images/white1.png', '/images/white2.png', '/images/white3.png', '/images/white4.png', '/images/white5.png'] }
    ],
    chips: ["Flowcharts", "Yellow Post-its", "Projector Screens"],
    example: 'e.g., "Q3 Marketing Funnel"',
    coverImage: '/images/s3_cover.jpg',
    fragments: [
      ['/images/new_s3_flowcharts_1.jpg', '/images/new_s3_flowcharts_2.jpg', '/images/new_s3_flowcharts_3.jpg'],
      ['/images/new_s3_postits_1.jpg', '/images/new_s3_postits_2.jpg'],
      ['/images/new_s3_projector_1.jpg', '/images/new_s3_projector_2.jpg', '/images/new_s3_projector_3.jpg'],
      ['/images/new_s3_noise_1.jpg', '/images/new_s3_noise_2.jpg', '/images/new_s3_noise_3.jpg', '/images/new_s3_noise_4.jpg']
    ],
    grid: [
      '/images/new_s3_flowcharts_1.jpg', '/images/new_s3_noise_1.jpg', '/images/new_s3_postits_1.jpg', '/images/new_s3_projector_1.jpg',
      '/images/new_s3_flowcharts_2.jpg', '/images/new_s3_noise_2.jpg', '/images/new_s3_postits_2.jpg', '/images/new_s3_projector_2.jpg',
      '/images/new_s3_noise_3.jpg', '/images/new_s3_flowcharts_3.jpg', '/images/new_s3_projector_3.jpg', '/images/new_s3_noise_4.jpg'
    ]
  },
  3: {
    id: 3,
    query: "where we parked at the airport",
    header: "Fetched 90 photos from airport arrival",
    subtitleText: "Context matched via Gmail (Flight Booking) and Maps Timeline (Airport Drop-off).",
    stacks: [
      { title: "Basement Parking & Pillars (Arrival Window)", badge: "100% Match - search result which matches closely to your text", color: "green", dropdownItems: ["Gmail", "Maps Timeline"] },
      { title: "Terminal Curbside & Drop-off", badge: "75% Match", color: "amber", dropdownItems: ["Gmail Flight Itinerary", "Visual Context"], gridImages: ['/images/term1.png', '/images/term2.png', '/images/term3.png', '/images/term4.png', '/images/term5.png', '/images/term6.png', '/images/term7.png', '/images/term8.png', '/images/term9.png', '/images/term10.png'] },
      { title: "In-Car Dash & Highway Transit", badge: "50% Broad Match", color: "gray", dropdownItems: ["Maps Timeline Proximity"], gridImages: ['/images/dash1.png', '/images/dash2.png', '/images/dash3.png', '/images/dash4.png', '/images/dash5.png', '/images/dash6.png', '/images/dash7.png', '/images/dash8.png', '/images/dash9.png', '/images/dash10.png'] }
    ],
    chips: ["Yellow Pillar", "Printed Parking Ticket", "Near the Elevator"],
    example: 'e.g., "level 2"',
    coverImage: '/images/s2_cover.jpg',
    fragments: [
      ['/images/new_s2_yellow_1.jpg', '/images/new_s2_yellow_2.jpg', '/images/new_s2_yellow_3.jpg'],
      ['/images/new_s2_ticket_1.jpg', '/images/new_s2_ticket_2.jpg'],
      ['/images/new_s2_elevator_1.jpg', '/images/new_s2_elevator_2.jpg'],
      ['/images/new_s2_level2_1.jpg']
    ],
    grid: [
      '/images/new_s2_yellow_1.jpg', '/images/new_s2_ticket_1.jpg', '/images/new_s2_noise_1.jpg', '/images/new_s2_elevator_1.jpg',
      '/images/new_s2_noise_2.jpg', '/images/new_s2_yellow_2.jpg', '/images/new_s2_ticket_2.jpg', '/images/new_s2_noise_3.jpg',
      '/images/new_s2_elevator_2.jpg', '/images/new_s2_noise_4.jpg', '/images/new_s2_yellow_3.jpg', '/images/new_s2_noise_5.jpg'
    ]
  },
  4: {
    id: 4,
    query: "that selfie at the concert near the merch stand",
    header: "Fetched 109 photos from concert exit",
    subtitleText: "Context matched via Gmail (Event Ticket) and Photo Timestamp (Post-Concert).",
    stacks: [
      { title: "Parking Lot Selfies (Post-Concert Exit)", badge: "100% Match - search result which matches closely to your text", color: "green", dropdownItems: ["Gmail", "Photo Timestamp"] },
      { title: "Live Stage & Crowd (Mid-Event)", badge: "75% Match", color: "amber", dropdownItems: ["Gmail Event Time", "Facial Recognition"], gridImages: ['/images/stage1.png', '/images/stage2.png', '/images/stage3.png', '/images/stage4.png', '/images/stage5.png', '/images/stage1.png', '/images/stage2.png', '/images/stage3.png', '/images/stage4.png', '/images/stage5.png'] },
      { title: "Merch Stalls & Outer Arena", badge: "50% Broad Match", color: "gray", dropdownItems: ["Photo Location Proximity"], gridImages: ['/images/merch1.png', '/images/merch2.png', '/images/merch3.png', '/images/merch4.png', '/images/merch5.png', '/images/merch6.png', '/images/merch7.png', '/images/merch8.png', '/images/merch9.png', '/images/merch10.png'] }
    ],
    chips: ["Someone in a Red Jacket", "You in a Green Dress", "Near the Exit Gate"],
    example: 'e.g., "holding merch"',
    coverImage: '/images/s1_cover.jpg',
    fragments: [
      ['/images/new_s1_red_1.jpg', '/images/new_s1_red_2.jpg'],
      ['/images/new_s1_green_1.jpg', '/images/new_s1_green_2.jpg', '/images/new_s1_green_3.jpg'],
      ['/images/new_s1_gate_1.jpg', '/images/new_s1_gate_2.jpg']
    ],
    grid: [
      '/images/new_s1_red_1.jpg', '/images/new_s1_noise_1.jpg', '/images/new_s1_green_1.jpg', '/images/new_s1_gate_1.jpg',
      '/images/new_s1_red_2.jpg', '/images/new_s1_noise_2.jpg', '/images/new_s1_green_2.jpg', '/images/new_s1_gate_2.jpg',
      '/images/new_s1_noise_3.jpg', '/images/new_s1_green_3.jpg', '/images/new_s1_noise_4.jpg', '/images/new_s1_noise_5.jpg'
    ]
  }
};
