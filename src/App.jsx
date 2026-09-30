import React, { useState, useEffect, useRef } from 'react';
import { Cloud, FolderOpen, Plus, Bell, Image as ImageIcon, Search, Sparkles, ArrowLeft, Mail, MapPin, Smartphone, ChevronDown, Check, ArrowUp, AlertCircle, X, ThumbsUp, ThumbsDown, Star, Archive, Trash2, Folder, Film, Layout, PlaySquare, Clapperboard } from 'lucide-react';
import './index.css';

const FEED_GROUPED = [
  {
    date: "25 Sept",
    images: [
      '/images/new_s4_checklist_1.jpg', '/images/new_s4_checklist_2.jpg', '/images/new_s4_checklist_3.jpg',
      '/images/new_s4_blueink_1.jpg', '/images/new_s4_blueink_2.jpg', '/images/new_s4_blueink_3.jpg',
      '/images/new_s4_hand_1.jpg', '/images/new_s4_hand_2.jpg',
      '/images/new_s4_noise_1.jpg', '/images/new_s4_noise_2.jpg', '/images/new_s4_noise_3.jpg', '/images/new_s4_noise_4.jpg',
      '/images/s4_cover.jpg',
      '/images/int1.png', '/images/int2.png', '/images/int3.png', '/images/int4.png', '/images/int5.png'
    ]
  },
  {
    date: "12 Aug",
    images: [
      '/images/new_s3_flowcharts_1.jpg', '/images/new_s3_flowcharts_2.jpg', '/images/new_s3_flowcharts_3.jpg',
      '/images/new_s3_postits_1.jpg', '/images/new_s3_postits_2.jpg',
      '/images/new_s3_projector_1.jpg', '/images/new_s3_projector_2.jpg', '/images/new_s3_projector_3.jpg',
      '/images/new_s3_noise_1.jpg', '/images/new_s3_noise_2.jpg', '/images/new_s3_noise_3.jpg', '/images/new_s3_noise_4.jpg',
      '/images/s3_cover.jpg',
      '/images/ext1.png', '/images/ext2.png', '/images/ext3.png', '/images/ext4.png', '/images/ext5.png',
      '/images/dash1.png', '/images/dash2.png', '/images/dash3.png', '/images/dash4.png', '/images/dash5.png'
    ]
  },
  {
    date: "2 Aug",
    images: [
      '/images/new_s2_yellow_1.jpg', '/images/new_s2_yellow_2.jpg', '/images/new_s2_yellow_3.jpg',
      '/images/new_s2_ticket_1.jpg', '/images/new_s2_ticket_2.jpg',
      '/images/new_s2_elevator_1.jpg', '/images/new_s2_elevator_2.jpg',
      '/images/new_s2_level2_1.jpg',
      '/images/new_s2_noise_1.jpg', '/images/new_s2_noise_2.jpg', '/images/new_s2_noise_3.jpg', '/images/new_s2_noise_4.jpg', '/images/new_s2_noise_5.jpg',
      '/images/s2_cover.jpg',
      '/images/conf1.png', '/images/conf2.png', '/images/conf3.png', '/images/conf4.png', '/images/conf5.png',
      '/images/white1.png', '/images/white2.png', '/images/white3.png', '/images/white4.png', '/images/white5.png'
    ]
  },
  {
    date: "4 March",
    images: [
      '/images/new_s1_red_1.jpg', '/images/new_s1_red_2.jpg', '/images/new_s1_red_3.jpg',
      '/images/new_s1_green_1.jpg', '/images/new_s1_green_2.jpg', '/images/new_s1_green_3.jpg',
      '/images/new_s1_gate_1.jpg', '/images/new_s1_gate_2.jpg',
      '/images/new_s1_merch_1.jpg',
      '/images/new_s1_noise_1.jpg', '/images/new_s1_noise_2.jpg', '/images/new_s1_noise_3.jpg', '/images/new_s1_noise_4.jpg',
      '/images/s1_cover.jpg', '/images/concert_cover.jpg',
      '/images/stage1.png', '/images/stage2.png', '/images/stage3.png', '/images/stage4.png', '/images/stage5.png',
      '/images/merch1.png', '/images/merch2.png', '/images/merch3.png', '/images/merch4.png', '/images/merch5.png',
      '/images/term1.png', '/images/term2.png', '/images/term3.png', '/images/term4.png', '/images/term5.png'
    ]
  }
];

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


export default function App() {
  const [screen, setScreen] = useState('1'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [scenarioId, setScenarioId] = useState(1);
  const [loadingStep, setLoadingStep] = useState(0);

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState(0);
  
  const [isScrollingFriction, setIsScrollingFriction] = useState(false);
  const [isolatedChipIndex, setIsolatedChipIndex] = useState(null);
  const [customInput, setCustomInput] = useState('');
  const [showNoResultPopup, setShowNoResultPopup] = useState(false);
  const [showSearchTooltip, setShowSearchTooltip] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [activeTab, setActiveTab] = useState('Photos');
  const [showScrollDate, setShowScrollDate] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const handleFeedScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    if (scrollTop > 10) {
      setShowScrollDate(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setShowScrollDate(false), 1500);
    } else {
      setShowScrollDate(false);
    }
  };

  useEffect(() => {
    let tooltipTimer;
    if (screen === '1') {
      tooltipTimer = setTimeout(() => setShowSearchTooltip(true), 600);
    } else {
      setShowSearchTooltip(false);
    }
    return () => clearTimeout(tooltipTimer);
  }, [screen]);
  
  const isIsolated = isolatedChipIndex !== null;
  const activeScenario = SCENARIO_DATA[scenarioId];
  
  const fragmentsCount = isIsolated && activeScenario.fragments && activeScenario.fragments[isolatedChipIndex] 
    ? activeScenario.fragments[isolatedChipIndex].length 
    : 0;

  useEffect(() => {
    let interval, timeout;
    if (screen === '2') {
      setLoadingStep(0);
      interval = setInterval(() => setLoadingStep(prev => (prev + 1) % 3), 1100);
      timeout = setTimeout(() => setScreen('3'), 3500);
    }
    return () => { clearInterval(interval); clearTimeout(timeout); }
  }, [screen]);

  useEffect(() => {
    let timeout;
    if (isModalOpen && !isIsolated) {
      timeout = setTimeout(() => {
        setIsScrollingFriction(true);
      }, 400); 
    }
    return () => clearTimeout(timeout);
  }, [isModalOpen, isIsolated]);

  const handleModalScroll = (e) => {
    // Fallback scroll listener just in case
    if (e.target.scrollTop > 40 && !isScrollingFriction && !isIsolated) {
      setIsScrollingFriction(true);
    }
  };

  const handleSearchClick = (id, query) => {
    setShowNoResultPopup(false);
    setCustomInput('');
    setScenarioId(id);
    setSearchQuery(query);
    setScreen('2');
  };

  const resetAll = () => {
    setScreen('1');
    setSearchQuery('');
    setOpenDropdownId(null);
    setIsModalOpen(false);
    setIsScrollingFriction(false);
    setIsolatedChipIndex(null);
    setCustomInput('');
    setShowNoResultPopup(false);
  };

  const handleCustomSubmit = () => {
    if (customInput.trim() !== '') {
      const lowerInput = customInput.toLowerCase();
      let matched = false;
      
      if (scenarioId === 4 && lowerInput.includes('merch')) {
        setIsolatedChipIndex(3);
        matched = true;
      } else if (scenarioId === 3 && lowerInput.includes('level')) {
        setIsolatedChipIndex(3);
        matched = true;
      } else if (scenarioId === 2 && (lowerInput.includes('q3') || lowerInput.includes('funnel'))) {
        setIsolatedChipIndex(3);
        matched = true;
      } else if (scenarioId === 1 && (lowerInput.includes('blue') || lowerInput.includes('pen'))) {
        setIsolatedChipIndex(3);
        matched = true;
      }
      
      if (matched) {
        setIsScrollingFriction(false);
      } else {
        setShowNoResultPopup(true);
        setTimeout(() => setShowNoResultPopup(false), 3000);
      }
    }
  };

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setOpenDropdownId(prev => prev === id ? null : id);
  };

  const getBadgeColors = (color) => {
    if (color === 'green') return 'text-[#0f9d58] bg-[#e6f4ea] hover:bg-[#ceead6]';
    if (color === 'amber') return 'text-[#b06000] bg-[#fef2e0] hover:bg-[#fde2b4]';
    if (color === 'blue') return 'text-[#1a73e8] bg-[#e8f0fe] hover:bg-[#d2e3fc]';
    return 'text-[#444746] bg-[#f1f3f4] hover:bg-[#e8eaed]';
  };

  return (
    <div className="w-[400px] h-[850px] bg-[#F8F9FA] rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col border-[12px] border-[#202124] mx-auto font-sans">
      
      {/* 1. SCREEN 1: NATIVE FEED VIEW */}
      {screen === '1' && (
        <div className="flex-1 flex flex-col h-full bg-[#F8F9FA] animate-fade-in relative">
          {activeTab === 'Collections' && (
            <div className="absolute inset-0 z-10 flex-1 overflow-y-auto scrollbar-hide pb-28 pt-4 px-4 bg-white animate-fade-in">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 bg-[#FAEDE6] px-4 py-2 rounded-full">
                  <Cloud size={18} className="text-[#3e2723]" />
                  <span className="text-[13px] font-semibold text-[#3e2723]">Backup complete</span>
                </div>
                <div className="flex gap-4 text-[#3e2723] items-center">
                  <FolderOpen size={24} />
                  <Plus size={24} />
                  <Bell size={24} />
                  <div className="w-[32px] h-[32px] rounded-full bg-[#673AB7] text-white flex items-center justify-center font-semibold text-[15px]">A</div>
                </div>
              </div>
              
              {/* 4 Pills */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-[#FAEDE6] rounded-[24px] py-4 px-5 flex items-center gap-3 cursor-pointer">
                  <Star size={20} className="text-[#3e2723]" />
                  <span className="font-semibold text-[14px] text-[#3e2723]">Favourites</span>
                </div>
                <div className="bg-[#FAEDE6] rounded-[24px] py-4 px-5 flex items-center gap-3 cursor-pointer">
                  <Trash2 size={20} className="text-[#3e2723]" />
                  <span className="font-semibold text-[14px] text-[#3e2723]">Bin</span>
                </div>
                <div className="bg-[#FAEDE6] rounded-[24px] py-4 px-5 flex items-center gap-3 cursor-pointer">
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                    <img src="/images/s1_cover.jpg" className="w-full h-full object-cover" alt="Event" />
                  </div>
                  <span className="font-semibold text-[14px] text-[#3e2723] truncate leading-tight">Event information</span>
                </div>
                <div className="bg-[#FAEDE6] rounded-[24px] py-4 px-5 flex items-center gap-3 cursor-pointer">
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                    <img src="/images/s4_cover.jpg" className="w-full h-full object-cover" alt="Identity" />
                  </div>
                  <span className="font-semibold text-[14px] text-[#3e2723] truncate leading-tight">Identity</span>
                </div>
              </div>
              
              {/* 6 Large Cards */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 pb-6">
                
                {/* Albums */}
                <div className="flex flex-col gap-2 cursor-pointer">
                  <div className="bg-[#FAEDE6] rounded-[28px] p-2.5 aspect-square flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1 w-full h-full rounded-[20px] overflow-hidden">
                      <img src="/images/new_s1_red_1.jpg" className="w-full h-full object-cover" alt="Album" />
                      <img src="/images/new_s1_red_2.jpg" className="w-full h-full object-cover" alt="Album" />
                      <img src="/images/new_s2_yellow_1.jpg" className="w-full h-full object-cover" alt="Album" />
                      <img src="/images/new_s3_flowcharts_1.jpg" className="w-full h-full object-cover" alt="Album" />
                    </div>
                  </div>
                  <span className="text-[15px] px-1 font-semibold text-[#1F1F1F]">Albums</span>
                </div>

                {/* On this device */}
                <div className="flex flex-col gap-2 cursor-pointer">
                  <div className="bg-[#FAEDE6] rounded-[28px] p-2.5 aspect-square flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1 w-full h-full rounded-[20px] overflow-hidden">
                      <img src="/images/dash1.png" className="w-full h-full object-cover" alt="Device" />
                      <img src="/images/dash2.png" className="w-full h-full object-cover" alt="Device" />
                      <img src="/images/term1.png" className="w-full h-full object-cover" alt="Device" />
                      <img src="/images/term2.png" className="w-full h-full object-cover" alt="Device" />
                    </div>
                  </div>
                  <span className="text-[15px] px-1 font-semibold text-[#1F1F1F]">On this device</span>
                </div>

                {/* People */}
                <div className="flex flex-col gap-2 cursor-pointer">
                  <div className="bg-[#FAEDE6] rounded-[28px] p-2.5 aspect-square flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1.5 w-full h-full">
                      <div className="rounded-full overflow-hidden w-full h-full"><img src="/images/stage1.png" className="w-full h-full object-cover" alt="Person" /></div>
                      <div className="rounded-full overflow-hidden w-full h-full"><img src="/images/stage2.png" className="w-full h-full object-cover" alt="Person" /></div>
                      <div className="rounded-full overflow-hidden w-full h-full"><img src="/images/stage3.png" className="w-full h-full object-cover" alt="Person" /></div>
                      <div className="rounded-full overflow-hidden w-full h-full"><img src="/images/stage4.png" className="w-full h-full object-cover" alt="Person" /></div>
                    </div>
                  </div>
                  <span className="text-[15px] px-1 font-semibold text-[#1F1F1F]">People</span>
                </div>

                {/* Wardrobe */}
                <div className="flex flex-col gap-2 cursor-pointer">
                  <div className="bg-[#FAEDE6] rounded-[28px] p-0 aspect-square flex items-center justify-center overflow-hidden">
                     <img src="/images/merch1.png" className="w-full h-full object-cover" alt="Wardrobe" />
                  </div>
                  <span className="text-[15px] px-1 font-semibold text-[#1F1F1F]">Wardrobe</span>
                </div>

                {/* Documents */}
                <div className="flex flex-col gap-2 cursor-pointer">
                  <div className="bg-[#FAEDE6] rounded-[28px] p-2.5 aspect-square flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1 w-full h-full rounded-[20px] overflow-hidden bg-[#e0e0e0]">
                      <img src="/images/new_s4_checklist_1.jpg" className="w-full h-full object-cover" alt="Doc" />
                      <img src="/images/new_s4_checklist_2.jpg" className="w-full h-full object-cover" alt="Doc" />
                      <img src="/images/new_s4_blueink_1.jpg" className="w-full h-full object-cover" alt="Doc" />
                      <img src="/images/new_s4_blueink_2.jpg" className="w-full h-full object-cover" alt="Doc" />
                    </div>
                  </div>
                  <span className="text-[15px] px-1 font-semibold text-[#1F1F1F]">Documents</span>
                </div>

                {/* Places */}
                <div className="flex flex-col gap-2 cursor-pointer">
                  <div className="bg-[#FAEDE6] rounded-[28px] p-0 aspect-square flex items-center justify-center overflow-hidden relative">
                     <img src="https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=10&size=400x400&sensor=false&style=feature:all|element:labels|visibility:off" className="w-full h-full object-cover opacity-80" alt="Map" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-lg z-10 bg-white">
                        <img src="/images/ext1.png" className="w-full h-full object-cover" alt="Place" />
                     </div>
                  </div>
                  <span className="text-[15px] px-1 font-semibold text-[#1F1F1F]">Places</span>
                </div>
                
              </div>
            </div>
          )}

          {activeTab === 'Create' && (
            <div className="absolute inset-0 z-10 flex-1 overflow-y-auto scrollbar-hide pb-28 pt-6 px-4 bg-[#F8F9FA] animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[22px] font-semibold text-[#1F1F1F]">Create</h2>
                <div className="flex gap-4 text-[#5F6368] items-center">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#673AB7] text-white flex items-center justify-center font-semibold text-sm">A</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 mb-6 shadow-sm border border-gray-100">
                <h3 className="text-[17px] font-semibold text-[#1F1F1F] mb-1">Make a new creation</h3>
                <p className="text-[13px] text-gray-500 mb-6">Create a movie, collage, or animation from your photos.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-[#F8F9FA] cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                    <Film size={26} className="text-[#1A73E8]" />
                    <span className="font-semibold text-[13px] text-[#3c4043]">Highlight video</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-[#F8F9FA] cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                    <Layout size={26} className="text-[#137333]" />
                    <span className="font-semibold text-[13px] text-[#3c4043]">Collage</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-[#F8F9FA] cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                    <PlaySquare size={26} className="text-[#E37400]" />
                    <span className="font-semibold text-[13px] text-[#3c4043]">Animation</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-[#F8F9FA] cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                    <Clapperboard size={26} className="text-[#C5221F]" />
                    <span className="font-semibold text-[13px] text-[#3c4043]">Cinematic photo</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className={`flex-1 flex flex-col h-full ${activeTab === 'Photos' ? 'opacity-100 relative z-10' : 'opacity-0 pointer-events-none absolute inset-0 z-[-1]'}`}>
            
            <div className={`absolute top-[70px] left-1/2 -translate-x-1/2 z-[100] bg-[#F9E6DF] shadow-md -translate-y-2 text-[#3e2723] px-4 py-1.5 rounded-full text-[13px] font-semibold shadow-sm transition-opacity duration-300 pointer-events-none ${showScrollDate ? 'opacity-100' : 'opacity-0'}`}>
              25 Sept
            </div>

            <header className="flex justify-between items-center p-4 z-10 bg-[#F8F9FA]">
            <div className="flex items-center gap-2 bg-[#F9E6DF] px-3 py-1.5 rounded-full text-[13px] font-medium text-[#3e2723]">
              <Cloud size={16} /> Backup complete
            </div>
            <div className="flex items-center gap-4 text-[#5F6368]">
              <FolderOpen size={24} />
              <Plus size={24} />
              <Bell size={24} />
              <div className="w-[30px] h-[30px] rounded-full bg-[#673AB7] text-white flex items-center justify-center font-semibold text-sm ring-2 ring-blue-500 ring-offset-2">A</div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto scrollbar-hide pb-28" onScroll={handleFeedScroll}>
            <div className="flex gap-3 px-4 py-3 overflow-x-auto scrollbar-hide">
              <div className="flex-shrink-0 w-[140px] h-[210px] rounded-[24px] text-white p-3 flex flex-col justify-end relative overflow-hidden shadow-sm">
                <img src="/images/dash1.png" className="absolute inset-0 w-full h-full object-cover z-0" alt="Selfies" />
                <svg className="absolute top-0 left-0 w-[90px] h-[90px] z-10 opacity-95" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#E8ED5C" d="M0,0 L100,0 C100,50 50,100 0,100 Z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10"></div>
                <div className="relative z-20 flex flex-col items-center pb-2">
                  <span className="text-[15px] font-bold tracking-tight leading-snug drop-shadow-md text-center">AUG</span>
                  <span className="text-[15px] font-bold tracking-tight leading-snug drop-shadow-md text-center">Best of August</span>
                </div>
              </div>
              <div className="flex-shrink-0 w-[140px] h-[210px] rounded-[24px] text-white p-3 flex flex-col justify-end relative overflow-hidden shadow-sm">
                <img src="/images/stage2.png" className="absolute inset-0 w-full h-full object-cover z-0" alt="Featured scenes" />
                <svg className="absolute top-0 left-0 w-full h-[140px] z-10 opacity-95" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#97E366" d="M0,0 L100,0 C100,30 30,30 20,60 C10,90 40,100 0,100 Z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10"></div>
                <div className="relative z-20 flex flex-col items-center pb-2">
                  <span className="text-[15px] font-bold tracking-tight leading-snug drop-shadow-md text-center">What&apos;s on</span>
                  <span className="text-[15px] font-bold tracking-tight leading-snug drop-shadow-md text-center">the menu?</span>
                </div>
              </div>
              <div className="flex-shrink-0 w-[140px] h-[210px] rounded-[24px] text-white p-3 flex flex-col justify-end relative overflow-hidden shadow-sm">
                <img src="/images/conf2.png" className="absolute inset-0 w-full h-full object-cover z-0" alt="Together" />
                <svg className="absolute top-0 right-0 w-full h-[70px] z-10 opacity-95" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F2775C" d="M0,0 L100,0 L100,100 C70,40 30,100 0,60 Z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10"></div>
                <div className="relative z-20 flex flex-col items-center pb-2">
                  <span className="text-[15px] font-bold tracking-tight leading-snug drop-shadow-md text-center">Together</span>
                  <span className="text-[15px] font-bold tracking-tight leading-snug drop-shadow-md text-center">Over the years</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-2">
              {FEED_GROUPED.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <div className="px-4 py-2 text-[15px] font-bold text-[#1f1f1f]">{group.date}</div>
                  <div className="grid grid-cols-3 gap-1 px-1">
                    {group.images.map((src, i) => (
                      <div key={i} className="aspect-square bg-[#e0e0e0] overflow-hidden cursor-pointer relative" onClick={() => setFullScreenImage(src)}>
                         <img src={src} className="absolute inset-0 w-full h-full object-cover hover:opacity-90 transition-opacity" alt="feed item" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 pb-6 flex justify-between items-center bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA] to-transparent pt-12 z-20 pointer-events-none">
            <div className="flex bg-[#F9E6DF] rounded-[30px] p-2 gap-1 shadow-[0_4px_12px_rgba(0,0,0,0.1)] pointer-events-auto">
              <div onClick={() => setActiveTab('Photos')} className={`flex items-center cursor-pointer gap-1.5 px-4 py-2 rounded-[20px] ${activeTab === 'Photos' ? 'bg-white/50' : ''} text-[14px] font-semibold text-[#3e2723]`}>
                <ImageIcon size={20} className="fill-current text-[#3e2723]" /> Photos
              </div>
              <div onClick={() => setActiveTab('Collections')} className={`flex items-center cursor-pointer gap-1.5 px-4 py-2 rounded-[20px] ${activeTab === 'Collections' ? 'bg-white/50' : ''} text-[14px] font-semibold text-[#3e2723]`}>Collections</div>
              <div onClick={() => setActiveTab('Create')} className={`flex items-center cursor-pointer gap-1.5 px-4 py-2 rounded-[20px] ${activeTab === 'Create' ? 'bg-white/50' : ''} text-[14px] font-semibold text-[#3e2723]`}>Create</div>
            </div>
            <div className={`relative pointer-events-auto ${activeTab !== 'Photos' ? 'hidden' : ''}`}>
              {showSearchTooltip && (
                <div className="absolute bottom-[75px] right-0 bg-[#323232] text-white shadow-2xl rounded-2xl py-2.5 pl-4 pr-10 flex items-center gap-2 min-w-max border border-[#444] z-30 animate-fade-in">
                  <span className="text-[13px] font-semibold tracking-wide">Try new ways to search ✨</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setShowSearchTooltip(false); }} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#323232] transform rotate-45 border-b border-r border-[#444]"></div>
                </div>
              )}
              <button 
                onClick={() => setScreen('1B')}
                className="w-16 h-16 rounded-full bg-[#F9E6DF] flex items-center justify-center text-[#3e2723] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform relative z-20"
              >
                <div className="relative">
                  <Search size={26} strokeWidth={2.5} />
                  <Sparkles size={12} className="absolute -top-1 -right-1" strokeWidth={3} />
                </div>
              </button>
            </div>
          </div>
        )}

      {/* 2. SCREEN 1B: SEARCH CANVAS */}
      {screen === '1B' && (
        <div className="flex-1 flex flex-col h-full bg-white animate-fade-in relative">
          <header className="p-4 z-10 bg-white shadow-sm border-b border-gray-100 slide-down">
            <div className="flex items-center gap-3 bg-[#F9E6DF] rounded-full px-4 py-3 shadow-sm cursor-text hover:bg-[#F9E6DF]/90 transition-colors">
              <ArrowLeft size={20} className="text-[#3e2723] cursor-pointer" onClick={resetAll} />
              <input 
                type="text" 
                placeholder="e.g. where we parked..." 
                className="flex-1 bg-transparent border-none outline-none text-[#3e2723] placeholder:text-[#3e2723]/70 text-[15px]" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim() !== '') {
                    const q = searchQuery.toLowerCase();
                    let matchedId = null;
                    if (q.includes('inventory') || q.includes('paper') || q.includes('flat') || q.includes('move')) matchedId = 1;
                    else if (q.includes('whiteboard') || q.includes('offsite') || q.includes('resort')) matchedId = 2;
                    else if (q.includes('airport') || q.includes('parked') || q.includes('parking') || q.includes('level')) matchedId = 3;
                    else if (q.includes('selfie') || q.includes('concert') || q.includes('merch') || q.includes('baad')) matchedId = 4;
                    
                    if (matchedId !== null) {
                      setShowNoResultPopup(false);
                      handleSearchClick(matchedId, searchQuery);
                    } else {
                      setShowNoResultPopup(true);
                      setTimeout(() => setShowNoResultPopup(false), 3000);
                    }
                  }
                }}
              />
              <Sparkles size={20} className="text-blue-500" />
            </div>
          </header>

          <div className="flex-1 overflow-y-auto pb-6 relative">
            {showNoResultPopup && (
              <div className="absolute top-4 left-4 right-4 bg-white border border-gray-100 p-4 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex flex-col items-center gap-2 animate-fade-in z-50 text-center">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-1">
                  <AlertCircle size={24} className="text-red-500" />
                </div>
                <span className="text-[16px] font-bold text-[#1F1F1F]">No results found</span>
                <span className="text-[13px] text-[#444746] font-medium leading-snug">
                  This query isn't part of the prototype. Try one of the suggested searches below.
                </span>
              </div>
            )}

            <div className="px-4 py-6 border-b border-gray-50">
              <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
                {FEED_IMAGES.slice(0, 6).map((src, i) => (
                  <div key={i} className="flex-shrink-0 w-[56px] h-[56px] rounded-full border border-gray-200 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img src={src} className="w-full h-full object-cover scale-[1.7]" alt="recent item" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-4 pt-6">
              <h3 className="text-[13px] font-bold text-gray-500 mb-4 tracking-wide uppercase">Try asking:</h3>
              <div className="flex flex-col gap-3">
                {[3, 1, 2, 4].map((id) => {
                  const scenario = SCENARIO_DATA[id];
                  return (
                    <button 
                      key={scenario.id}
                      onClick={() => handleSearchClick(scenario.id, scenario.query)}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-left group"
                    >
                      <div className="text-[14.5px] font-semibold text-gray-800 leading-snug">{scenario.query}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SCREEN 2: LOADER */}
      {screen === '2' && (
        <div className="flex-1 flex flex-col h-full bg-white animate-fade-in relative">
          <header className="p-4 z-10 bg-white shadow-sm border-b border-gray-100">
            <div className="flex items-center gap-3 bg-[#f1f3f4] rounded-full px-4 py-3 shadow-inner">
              <ArrowLeft size={20} className="text-gray-600 cursor-pointer" onClick={() => { setScreen('1B'); setSearchQuery(''); setCustomInput(''); setShowNoResultPopup(false); }} />
              <input type="text" className="flex-1 bg-transparent border-none outline-none text-gray-800 text-[14.5px] font-medium truncate" value={searchQuery} readOnly />
              <Sparkles size={20} className="text-blue-500" />
            </div>
          </header>

          <div className="flex-1 p-6 pt-10">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[20px] font-medium text-[#1F1F1F]">Fetching context</span>
              <div className="flex items-center -space-x-1.5">
                <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-white z-30 shadow-sm transition-all duration-500 ${loadingStep === 0 ? 'bg-[#1a73e8] scale-110' : 'bg-gray-300 scale-100'}`}><Mail size={12}/></div>
                <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-white z-20 shadow-sm transition-all duration-500 ${loadingStep === 1 ? 'bg-[#ea4335] scale-110' : 'bg-gray-300 scale-100'}`}><MapPin size={12}/></div>
                <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-white z-10 shadow-sm transition-all duration-500 ${loadingStep === 2 ? 'bg-[#fbbc04] scale-110' : 'bg-gray-300 scale-100'}`}><Smartphone size={12}/></div>
              </div>
            </div>
            
            <div className="flex flex-col gap-5 opacity-70">
              <div className="w-full h-[14px] bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-[85%] h-[14px] bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-[70%] h-[14px] bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-full h-[14px] bg-gray-200 rounded-full animate-pulse mt-4"></div>
              <div className="w-[90%] h-[14px] bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-[60%] h-[14px] bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SCREEN 3: EXPLAINABLE TRIAGE STACKS */}
      {screen === '3' && (
        <div className="flex-1 flex flex-col h-full bg-white animate-fade-in relative overflow-hidden">
          
          <header className="p-4 z-10 bg-white/90 backdrop-blur-md sticky top-0 border-b border-gray-100">
            <div className="flex items-center gap-3 bg-[#f1f3f4] rounded-full px-4 py-2.5 shadow-inner cursor-text" onClick={() => setScreen('1B')}>
              <ArrowLeft size={20} className="text-gray-600 cursor-pointer flex-shrink-0" onClick={(e) => { e.stopPropagation(); setScreen('1B'); setOpenDropdownId(null); setIsModalOpen(false); setIsolatedChipIndex(null); setCustomInput(''); setShowNoResultPopup(false); }} />
              <div className="flex-1 text-[#1F1F1F] text-[14.5px] font-medium truncate">{searchQuery}</div>
              <div className="w-[28px] h-[28px] rounded-full bg-[#673AB7] text-white flex items-center justify-center font-semibold text-[12px] flex-shrink-0">A</div>
            </div>
          </header>
          
          <div className="px-5 pb-4 pt-4 border-b border-gray-50">
            <p className="text-[15px] font-medium text-[#1F1F1F] leading-snug pr-4">
              {activeScenario.subtitleText || "Automatically separated into 4 distinct context groups to help you find exactly what you're looking for."}
            </p>
          </div>

          <div className="p-6 flex-1 overflow-y-auto scrollbar-hide pb-20 flex flex-col gap-10">
            {activeScenario.stacks.map((stack, idx) => (
              <div key={idx} className={`flex flex-col relative ${openDropdownId === idx ? 'z-50' : 'z-20'}`}>
                
                {/* 3x2 PHOTO GRID COLLAGE */}
                <div 
                  className="grid grid-cols-3 gap-1 w-full rounded-[24px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] cursor-pointer group border border-gray-100 bg-[#f1f3f4]"
                  onClick={() => { setActiveModalIndex(idx); setIsModalOpen(true); }}
                >
                  {Array.from({ length: 5 }).map((_, i) => {
                    const imgSrc = stack.gridImages 
                      ? stack.gridImages[i] 
                      : (idx === 0 && activeScenario.grid ? activeScenario.grid[i] : null);
                    return (
                      <div key={i} className="aspect-square bg-[#e8eaed] overflow-hidden relative flex items-center justify-center">
                        {imgSrc ? (
                          <img src={imgSrc} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`grid item ${i}`} />
                        ) : (
                          <ImageIcon size={24} className="text-gray-300 opacity-50" />
                        )}
                      </div>
                    );
                  })}
                  {/* The blurred 6th box */}
                  <div className="aspect-square bg-[#e8eaed] relative overflow-hidden flex items-center justify-center">
                    {stack.gridImages && stack.gridImages[0] ? (
                      <img src={stack.gridImages[0]} className="w-full h-full object-cover" alt="more items" />
                    ) : (idx === 0 && activeScenario.grid && activeScenario.grid[5] ? (
                      <img src={activeScenario.grid[5]} className="w-full h-full object-cover" alt="more items" />
                    ) : (
                      <div className="w-full h-full bg-[#dcdcdc]"></div>
                    ))}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[4px] flex items-center justify-center text-white font-bold text-[20px] transition-colors duration-300 group-hover:bg-black/40">
                      +{idx === 0 ? 34 : idx === 1 ? 12 : 7}
                    </div>
                  </div>
                </div>
                
                {/* Meta Labels & Badges */}
                <div className="mt-4 flex flex-col">
                  <h3 className="text-[17px] font-bold text-[#1F1F1F] leading-tight">{stack.title}</h3>
                  <div className="relative mt-2">
                    <button 
                      onClick={(e) => toggleDropdown(idx, e)}
                      className={`flex items-start gap-3 px-3 py-2 rounded-[12px] w-fit max-w-full transition-colors text-left ${getBadgeColors(stack.color)}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold">{stack.badge.split(' — ')[0]}</span>
                        {stack.badge.split(' — ')[1] && (
                          <span className="text-[10px] font-semibold leading-tight mt-0.5 opacity-85">
                            {stack.badge.split(' — ')[1]}
                          </span>
                        )}
                      </div>
                      <ChevronDown size={14} className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${openDropdownId === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdownId === idx && stack.dropdownItems && (
                      <div className="absolute top-[100%] left-0 mt-2 p-3 bg-white border border-gray-100 rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex flex-col gap-2 animate-slide-down min-w-[200px] w-max z-50">
                        {stack.dropdownItems.map((item, i) => (
                          <div key={i} className="text-[12px] font-medium text-[#0f9d58] flex items-center gap-1.5 leading-tight">
                            <Check size={14} className="flex-shrink-0"/> {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Asset Modal: MOCK SVG & SECONDARY PREVIEWS */}
          {isModalOpen && (
            <div className="absolute inset-0 bg-[#f1f3f4] z-50 flex flex-col animate-fade-in overflow-hidden">
              <header className="flex items-center gap-4 p-5 bg-[#f1f3f4] z-10 relative">
                {!isIsolated && (
                  <ArrowLeft size={24} className="text-gray-700 cursor-pointer" onClick={() => { setIsModalOpen(false); setIsScrollingFriction(false); setIsolatedChipIndex(null); }} />
                )}
                {!isIsolated && <span className="font-semibold text-[18px] text-[#1F1F1F]">Top Matches</span>}
              </header>

              {isIsolated && (
                <button 
                  className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-xl z-[100] text-gray-800 hover:scale-105 transition-transform cursor-pointer pointer-events-auto flex items-center justify-center"
                  onClick={() => { setIsolatedChipIndex(null); setIsScrollingFriction(false); }}
                >
                  <ArrowLeft size={20} />
                </button>
              )}

              {showNoResultPopup && isModalOpen && (
                <div className="absolute top-24 left-4 right-4 bg-white border border-gray-100 p-4 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex flex-col items-center gap-2 animate-fade-in z-[100] text-center">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-1">
                    <AlertCircle size={24} className="text-red-500" />
                  </div>
                  <span className="text-[16px] font-bold text-[#1F1F1F]">No results found</span>
                  <span className="text-[13px] text-[#444746] font-medium leading-snug">
                    This query isn't part of the prototype. Try a different memory fragment.
                  </span>
                </div>
              )}

              <div 
                className="flex-1 overflow-y-auto p-5 scrollbar-hide relative pb-60"
                onScroll={handleModalScroll}
              >
                {/* Dim background or white background when isolated */}
                {isIsolated && <div className="fixed inset-0 bg-[#f1f3f4] z-30 animate-fade-in"></div>}
                
                <div className={`grid grid-cols-3 gap-1 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isIsolated ? '-translate-y-[100vh] opacity-0' : 'translate-y-0 opacity-100'}`}>
                  {Array.from({ length: 12 }).map((_, i) => {
                    const stack = activeScenario.stacks[activeModalIndex || 0];
                    const imgSrc = (stack?.gridImages && stack.gridImages[i]) ? stack.gridImages[i] : (activeScenario.grid && activeScenario.grid[i] ? activeScenario.grid[i] : `https://picsum.photos/seed/${activeScenario.id}grid${i}/200/200`);
                    return (
                      <div key={i} className="aspect-square bg-[#e0e0e0] flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => !isIsolated && setFullScreenImage(imgSrc)}>
                        <img src={imgSrc} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="grid item" />
                      </div>
                    );
                  })}
                </div>

                {isIsolated && (
                  <div 
                    className="absolute inset-0 z-40 flex flex-col items-center justify-start pt-12 pb-20 p-4 pointer-events-none overflow-y-auto scrollbar-hide animate-slide-up"
                    style={{ animationDuration: '0.6s', animationFillMode: 'both', animationDelay: '0.3s' }}
                  >
                    <div className="flex flex-wrap justify-center gap-3 pointer-events-auto max-w-[340px]">
                       {Array.from({ length: fragmentsCount }).map((_, i) => {
                         const fragSrc = activeScenario.fragments && activeScenario.fragments[isolatedChipIndex] && activeScenario.fragments[isolatedChipIndex][i];
                         return (
                          <div key={i} className="w-[140px] h-[190px] bg-white rounded-[16px] shadow-2xl border-4 border-white overflow-hidden relative transform hover:scale-105 transition-transform cursor-pointer" onClick={() => fragSrc && setFullScreenImage(fragSrc)}>
                             <div className="absolute inset-0 bg-[#f1f3f4] flex flex-col items-center justify-center gap-2">
                               {fragSrc ? (
                                 <img src={fragSrc} alt={`Fragment ${i}`} className="w-full h-full object-cover" />
                               ) : (
                                 <ImageIcon size={32} className="text-gray-400" />
                               )}
                             </div>
                             <div className="absolute bottom-2 left-2 right-2 bg-[#0f9d58] text-white text-[11px] font-bold px-2 py-1.5 rounded-lg text-center shadow-md flex items-center justify-center gap-1">
                               <Sparkles size={12} /> Target Match
                             </div>
                          </div>
                         );
                       })}
                    </div>
                    <div className="mt-8 bg-white text-[#1F1F1F] font-semibold px-6 py-3 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.2)] text-[14px] text-center border border-gray-100 flex items-center gap-2 pointer-events-auto">
                      <Check size={18} className="text-[#0f9d58]" /> Isolated {fragmentsCount} {fragmentsCount === 1 ? 'fragment' : 'fragments'}
                    </div>

                    {/* Feedback Widget */}
                    <div className="mt-4 bg-white/95 backdrop-blur-md rounded-[16px] p-4 shadow-xl pointer-events-auto w-[280px] border border-gray-200">
                      <div className="text-center text-[13px] font-semibold text-gray-800 mb-3">
                        Got the exact photo you needed?
                      </div>
                      <div className="flex justify-center gap-4 mb-3">
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 text-gray-500 hover:text-green-600 transition-colors">
                          <ThumbsUp size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-100 text-gray-500 hover:text-red-600 transition-colors">
                          <ThumbsDown size={18} />
                        </button>
                      </div>
                      <input 
                        type="text" 
                        placeholder="Add feedback..." 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[12px] focus:outline-none focus:border-blue-400 placeholder-gray-400"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* CRITICAL INTERACTION: DUAL-OPTION PROACTIVE POP-UP SHEET */}
              {!isIsolated && (
                <div 
                  className={`absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-out z-50 bg-white rounded-t-3xl border-t border-gray-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] ${isScrollingFriction ? 'translate-y-0' : 'translate-y-[calc(100%-35px)]'}`}
                >
                  <div className="w-16 h-4 mx-auto flex items-center justify-center cursor-pointer mb-2" onClick={() => setIsScrollingFriction(!isScrollingFriction)}><div className="w-10 h-1.5 bg-[#e0e0e0] rounded-full"></div></div>
                  
                  {/* AI Explanation Header */}
                  <div className="flex flex-col items-center mb-4">
                     <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1a73e8] uppercase tracking-wide mb-1">
                        <Sparkles size={14} /> AI Vision Scan Complete
                     </div>
                     <span className="text-[13px] font-medium text-gray-600 text-center px-4 leading-tight">
                        I detected these distinct themes in this folder. Which one do you need?
                     </span>
                  </div>

                  {/* Layer 1: Document Specific Triage Chips */}
                  <div className="flex flex-wrap justify-center gap-2 pb-4">
                    {activeScenario.chips.map((chipText, i) => (
                      <button 
                        key={i}
                        onClick={() => { setIsolatedChipIndex(i); setIsScrollingFriction(false); }} 
                        className={`flex items-center px-3 py-1.5 border rounded-full text-[11px] font-bold text-[#1F1F1F] shadow-sm transition-colors ${isolatedChipIndex === i ? 'bg-[#e8eaed] border-[#dcdcdc]' : 'bg-gray-50 border-[#dcdcdc] hover:bg-gray-100'}`}
                      >
                        {chipText}
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 mb-4 mt-1"></div>
                  
                  {/* Layer 2: The Fallback Input Net */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] font-medium text-gray-500 px-1">Still can't find it? Type any specific memory fragment...</span>
                    <div className="flex items-center gap-3 bg-[#F9E6DF] rounded-full px-5 py-3 shadow-sm border border-[#F9E6DF]">
                      <input 
                        type="text" 
                        placeholder={activeScenario.example}
                        className="flex-1 bg-transparent border-none outline-none text-[#3e2723] text-[15px] placeholder:text-[#3e2723]/70 font-medium" 
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
                      />
                      <button onClick={handleCustomSubmit} className="hover:scale-110 transition-transform">
                        <ArrowUp size={22} className="text-white bg-[#3e2723] rounded-full p-1" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {/* 5. FULLSCREEN IMAGE MODAL */}
      {fullScreenImage && (
        <div className="absolute inset-0 z-[100] bg-black/95 flex flex-col animate-fade-in pointer-events-auto backdrop-blur-sm">
          <div className="flex justify-between items-center p-4 absolute top-0 w-full z-10">
            <button onClick={() => setFullScreenImage(null)} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-md">
              <ArrowLeft size={24} />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center overflow-hidden p-4 pb-[160px]">
            <img src={fullScreenImage} className="w-full h-full object-contain" alt="Fullscreen" />
          </div>

          {isIsolated && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[280px]">
              {/* Feedback Widget for Fullscreen */}
              <div className="bg-white/10 backdrop-blur-xl rounded-[16px] p-4 shadow-2xl border border-white/20">
                <div className="text-center text-[13px] font-semibold text-white mb-3 drop-shadow-md">
                  Got the exact photo you needed?
                </div>
                <div className="flex justify-center gap-4 mb-3">
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-green-500/80 text-white transition-colors">
                    <ThumbsUp size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-red-500/80 text-white transition-colors">
                    <ThumbsDown size={18} />
                  </button>
                </div>
                <input 
                  type="text" 
                  placeholder="Add feedback..." 
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-3 py-2 text-[12px] text-white focus:outline-none focus:border-blue-400 placeholder-gray-400"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}













