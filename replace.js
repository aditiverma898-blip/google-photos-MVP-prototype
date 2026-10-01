const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Replace FEED_IMAGES with FEED_GROUPED
const feedImagesRegex = /const FEED_IMAGES = \[[\s\S]*?\];/;
const feedGroupedStr = \const FEED_GROUPED = [
  {
    date: "Fri, 25 Sept",
    images: [
      '/images/new_s1_red_1.jpg', '/images/new_s1_red_2.jpg', '/images/new_s1_red_3.jpg',
      '/images/new_s1_green_1.jpg', '/images/new_s1_green_2.jpg', '/images/new_s1_green_3.jpg',
      '/images/new_s1_gate_1.jpg', '/images/new_s1_gate_2.jpg',
      '/images/new_s1_merch_1.jpg',
      '/images/new_s1_noise_1.jpg', '/images/new_s1_noise_2.jpg', '/images/new_s1_noise_3.jpg', '/images/new_s1_noise_4.jpg',
      '/images/new_s2_yellow_1.jpg', '/images/new_s2_yellow_2.jpg', '/images/new_s2_yellow_3.jpg',
      '/images/new_s2_ticket_1.jpg', '/images/new_s2_ticket_2.jpg',
      '/images/new_s2_elevator_1.jpg', '/images/new_s2_elevator_2.jpg',
      '/images/new_s2_level2_1.jpg',
      '/images/new_s2_noise_1.jpg', '/images/new_s2_noise_2.jpg', '/images/new_s2_noise_3.jpg', '/images/new_s2_noise_4.jpg', '/images/new_s2_noise_5.jpg',
      '/images/new_s3_flowcharts_1.jpg', '/images/new_s3_flowcharts_2.jpg', '/images/new_s3_flowcharts_3.jpg',
      '/images/new_s3_postits_1.jpg', '/images/new_s3_postits_2.jpg',
      '/images/new_s3_projector_1.jpg', '/images/new_s3_projector_2.jpg', '/images/new_s3_projector_3.jpg',
      '/images/new_s3_noise_1.jpg', '/images/new_s3_noise_2.jpg', '/images/new_s3_noise_3.jpg', '/images/new_s3_noise_4.jpg',
      '/images/new_s4_checklist_1.jpg', '/images/new_s4_checklist_2.jpg', '/images/new_s4_checklist_3.jpg',
      '/images/new_s4_blueink_1.jpg', '/images/new_s4_blueink_2.jpg', '/images/new_s4_blueink_3.jpg',
      '/images/new_s4_hand_1.jpg', '/images/new_s4_hand_2.jpg',
      '/images/new_s4_noise_1.jpg', '/images/new_s4_noise_2.jpg', '/images/new_s4_noise_3.jpg', '/images/new_s4_noise_4.jpg',
      '/images/s1_cover.jpg', '/images/s2_cover.jpg', '/images/s3_cover.jpg', '/images/s4_cover.jpg'
    ]
  },
  {
    date: "Wed, 2 Aug",
    images: [
      '/images/conf1.png', '/images/conf2.png', '/images/conf3.png', '/images/conf4.png', '/images/conf5.png',
      '/images/white1.png', '/images/white2.png', '/images/white3.png', '/images/white4.png', '/images/white5.png',
      '/images/term1.png', '/images/term2.png', '/images/term3.png', '/images/term4.png', '/images/term5.png',
      '/images/dash1.png', '/images/dash2.png', '/images/dash3.png', '/images/dash4.png', '/images/dash5.png'
    ]
  },
  {
    date: "Sat, 4 March",
    images: [
      '/images/stage1.png', '/images/stage2.png', '/images/stage3.png', '/images/stage4.png', '/images/stage5.png',
      '/images/merch1.png', '/images/merch2.png', '/images/merch3.png', '/images/merch4.png', '/images/merch5.png',
      '/images/int1.png', '/images/int2.png', '/images/int3.png', '/images/int4.png', '/images/int5.png',
      '/images/ext1.png', '/images/ext2.png', '/images/ext3.png', '/images/ext4.png', '/images/ext5.png',
      '/images/concert_cover.jpg'
    ]
  }
];\
code = code.replace(feedImagesRegex, feedGroupedStr);

// 2. Replace the feed rendering logic
const gridRegex = /<div className="grid grid-cols-3 gap-1 px-1 mt-2">[\s\S]*?\{FEED_IMAGES\.map\([\s\S]*?<\/div>[\s\S]*?\)\)}[\s\S]*?<\/div>/;
const groupedGridStr = \
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
            </div>\;
code = code.replace(gridRegex, groupedGridStr);

fs.writeFileSync('src/App.jsx', code);
