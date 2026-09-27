# PRODUCT REQUIREMENT DOCUMENT (PRD) & INTERACTIVE BLUEPRINT
## FEATURE: EXPLAINABLE TRIAGE SEARCH & CONTEXTUAL MEMORY RETRIEVAL (MOBILE-FIRST)

---

## 1. STRATEGIC CONTEXT & DETAILED PROBLEM STATEMENT

### The User Core Problem:
Over years of usage, Google Photos users accumulate tens of thousands of visual memories (photos, screenshots, documents, receipts). While keyword-based search functions well for explicit objects or explicit labels, retrieval catastrophically fails when a user's memory of an old photo is incomplete or vague. 

### The Cognitive & Behavioral Breakdown:
1. **The Cognitive Boundary (Relative Context):** Human episodic memory does not index personal milestones by calendar dates or precise file metadata. Instead, users anchor memories to "Relative Time" (e.g., *right after moving into my college hostel*) or "Relative Place" (e.g., *near a highway dhaba during our road trip*). Standard text queries fail to parse these cross-app environmental and situational relationships.
2. **The Layout Failure (Visual Clutter):** When a vague search is entered, the current production layout (such as the standard text paragraphs and raw grids in the current "Ask Photos" feature) dumps an unorganized, massive flat wall of loose look-alike files.
3. **The Abandonment Friction Point:** Facing an unfiltered sea of highly similar photos or document variants, users experience severe choice paralysis and cognitive fatigue. Because sorting through the clutter requires too much manual visual effort, users abandon the search journey entirely after just one single unsuccessful attempt ("one-and-done" drop-off).

### High-Level Product Metric Goal:
Increase the percentage of users who successfully retrieve a photo they remember but cannot precisely describe, explicitly preventing "one-and-done" search abandonment in a mobile-first app layout by shifting user effort from **Textual Recall** to **Visual Recognition**.

---

## 2. THE TARGET HYBRID PRODUCT ARCHITECTURE

To address these parameters without overlapping with existing basic natural language search parsers, this feature introduces an **Explainable UI Layout and Triage Layer** that structures raw image results into a transparent, interactive diagnostic experience. It is structured across three core layers:

### Layer 1: Multi-Signal Ecosystem Contextual Backend (The Moat)
Instead of relying solely on on-image pixels or camera EXIF tags, the search engine utilizes user-permissioned, cross-app data sequencing from the Google Ecosystem to anchor a relative query to hard data boundaries:
* **Gmail Parsing:** Scans travel bookings, accommodation receipts, and event tickets to isolate exact historical timestamps, merchant names, and operational event windows.
* **Google Maps Timeline:** Scans background location logs to identify precise coordinates and durations where a user stayed during a specified trip or event window.
* **Device System Logs:** Tracks device metadata state changes (such as system screenshots or camera capture events linked to background application shifts like switching apps).

### Layer 2: Semantic Event Stacking UI (Look-Alike Elimination Framework)
To eliminate the look-alike grid wall, the application interface collapses the 100+ loose results into 3 or 4 clean, chronologically grouped rectangular event blocks termed **"Semantic Event Stacks."** 
* **Explainable AI (XAI) Fraction Badges:** Every stack displays a bold, color-coded contextual match rating (`4/4`, `3/4`, or `2/4 Context Fragments Matched`) so the user instantly understands *why* a set of photos was surfaced.
* **Interactive Diagnostics:** Tapping the fraction badge reveals a dropdown container mapping validated parameters to build immediate cognitive alignment: `[✓ Location Radius Verified | ✓ Event Metadata Matched | ✗ Hour Window Uncertain]`.

### Layer 3: Proactive Visual Attribute Interception Sheet
If a user expands an event stack and scrolls through the look-alike file series without tapping an asset, the system detects this rapid scrolling and lack of selection as an automated frustration/abandonment signal. The UI immediately deploys a **Curved Bottom Sheet Overlay** built around a dual-interaction net:
* **Top Layer (Visual Shortcuts - Zero Typing):** Displays a horizontal row of rounded Material You visual triage chips that extract the computer-vision properties of that specific look-alike cluster (e.g., `[📄 Printed Text Receipts Only]`, `[📸 Low-Light / Flash Shots]`, `[🖼️ Wide-Angle Group Photos]`). Tapping a chip immediately collapses all unmatching files.
* **Bottom Layer (The Safety Input Net):** Below a thin dividing line, renders a curved native text input bar reading: *"Search or follow up"*. This allows users who recall an unexpected specific detail to manually filter down the stack via a secondary text keyword if the chips do not capture it.

---

## 3. HIGH-FIDELITY PROTOTYPE INTERACTION SCENARIOS

The prototype must cleanly simulate two distinct real-world retrieval scenarios using self-contained, realistic mock text/SVG assets without live external API dependencies.

### Scenario A: Relative Time Mapping (Macro Personal Milestone)
* **The User Query:** *"The document photo I clicked right after moving into my college hostel room last month."*
* **The Backend Signal Processing:** Maps the Google Maps location footprint of the campus and matches it with a Gmail hostel allocation confirmation token to create a precise 48-hour matching file frame.
* **The Interface Flow:** 
  1. Tapping the trigger button inputs the text string into the bar.
  2. Launches the loading animation view.
  3. Displays a clean grouping card titled `"Hostel Move-In Documents"` displaying a distinct green `4/4 Context Fragments Matched` status chip.
* **The High-Fidelity Mock Asset:** Tapping the stack modal opens a highly realistic document layout placeholder of an official room allocation form containing clear rows, student details, and digital signature blocks.

### Scenario B: Relative Place Mapping (Micro Event Sequencing)
* **The User Query:** *"The picture of the food bill right after the movie we watched last month."*
* **The Backend Signal Processing:** Cross-references a Gmail electronic cinema booking receipt with proximate restaurant geo-coordinates and timestamp sequences right after the movie ended.
* **The Interface Flow:**
  1. Tapping the trigger inputs the query and runs the loader.
  2. Groups results under an elegant container card titled `"Dinner Cluster: Post-Movie Venue"` displaying an amber `3/4 Context Fragments Matched` badge.
  3. Tapping the badge opens the structural dropdown diagnostic pane (`✓ Location Verified | ✓ Event Verified | ✗ Hour Window Uncertain`).
  4. Scrolling inside the cluster triggers the bottom sheet overlay containing both the visual attribute triage chips (`[📄 Text Receipts Only]`, `[📸 Low-Light Shots]`) and the secondary curved input pill (`"Search or follow up"`).
* **The High-Fidelity Mock Asset:** Tapping or filtering down the selection isolates and opens a highly detailed vertical thermal restaurant receipt featuring itemized lines (`"Popcorn XL - Rs. 320"`, `"Veg Burger Combo - Rs. 450"`), tax brackets, merchant names, and transactional timestamps.

---

## 4. UI STYLE GUIDE & NATIVE MATERIAL 3 RULES

To match the premium native application look and feel of Google Photos, the interface must strictly enforce these frontend specifications:
* **The Foundation Theme:** Clean, minimal light off-white base (#F8F9FA) utilizing authentic Material Design 3 guidelines.
* **Component Styling:** Curved floating capsule controls at the base matching native layout tabs (`[Photos] [Collections] [Create]`), top circular contact profile loop frames, and soft-shadow rounded sheets for all interactive pop-up overlays.
* **Self-Contained Rendering:** Build all loading bars, visual icons, document pages, and itemized receipts using styled CSS/SVG wrappers to allow native execution directly within the live preview frame.

---

## 5. PHASE-WISE CODE IMPLEMENTATION ROADMAP

The prototype will be built out incrementally through four sequential, isolated coding checkpoints to ensure stability:
* **Phase 1: Screen 1 Structure (Skeleton & Layout):** Establish the native mobile shell layout, the top circular contact loops, the custom text scenario shortcut buttons, and the bottom floating capsule tabs.
* **Phase 2: Screen 2 Integration (Ecosystem Loading Engine):** Build the transition sequence, the state text switcher, and the horizontal keyframe icon loop pulsing the Gmail, Maps, and System Log components.
* **Phase 3: Screen 3 Layout (Semantic Stacks & Dropdowns):** Develop the vertical result layout containing the Event Stacks and the interactive fraction badges with their explainable diagnostic dropdown drawers.
* **Phase 4: The Interception Sheet (Dual-Option Pop-up & Mock Assets):** Deploy the scroll-triggered bottom sheet with horizontal visual chips and the fallback text input bar, alongside the high-fidelity SVG itemized receipt modal.

---

## 6. BACKEND AI SYSTEM PROMPT (VISUAL CHIPS ENGINE)

To dynamically generate the "Proactive Interception" visual chips, the backend Vision Model is instructed using the following system prompt:

**System Role:** You are a UX-focused Vision Assistant powering a "Proactive Interception" UI.

**Input:** An image array of 15 to 25 highly similar photos (The 4/4 Match Stack).

**Task:** Analyze the visual contents of the image array. Identify the top 3 most distinct visual variables (anomalies, objects, or attributes) that can successfully divide this large batch into smaller sub-groups of 1 to 4 photos.

**Extraction Hierarchy (Apply in order of availability):**
1. Document Structures (e.g., handwritten, typed, charts, receipts).
2. Primary Subject Attributes (e.g., clothing color, accessories).
3. Environmental Anchors (e.g., distinct background objects, unique colors, signage).

**Output Rules:**
- Generate exactly 3 dynamic filter chips.
- Strict length limit: Maximum 3 to 4 words per chip.
- Include one highly relevant Unicode emoji per chip.
- Tone: Direct, objective, and user-friendly.
- Format: Output as a JSON array of strings.

### Example Prompt Execution (Scenario 4: Concert Selfie)

**System Role:** You are a UX-focused Vision Assistant powering a "Proactive Interception" UI for a photo gallery app. 

**Context:** The user searched for a vague query: "Concert ke baad parking lot me li gayi selfie". They are currently looking at a grid of 25 highly similar photos taken in a dark parking lot after a concert, but they are frustrated and cannot find the exact one they want.

**Task:** Analyze the visual contents of the 25 photos described below. Identify the top 3 most distinct visual variables that can successfully divide this large batch into smaller sub-groups of 3 to 5 photos.

**Extraction Hierarchy:**
1. Primary Subject Attributes (e.g., clothing color, accessories).
2. Environmental Anchors (e.g., distinct background objects, signage).

**Image Array Data (Simulated Vision Input):**
- 15 photos feature a group of friends standing between parked cars. In 4 of these photos, one person is wearing a highly visible bright red jacket.
- 7 photos feature the primary user taking a solo selfie, clearly wearing a green dress.
- 3 photos are taken slightly further away, with a large metal exit gate visible in the background.

**Output Rules:**
- Generate exactly 3 dynamic filter chips based on the visual anomalies above.
- Strict length limit: Maximum 3 to 5 words per chip.
- Include one highly relevant Unicode emoji at the end of each chip.
- Format: Output ONLY a valid JSON array of strings. Do not include any other text.
