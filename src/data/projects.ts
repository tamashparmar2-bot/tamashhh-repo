export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  category: "Commercial Editing" | "Motion Graphics" | "3D & CGI";
  aspect: "16:9" | "9:16";
  videoUrl: string;
  tagline: string;
  overview: string;
  creativeProcess: string[];
  software: string[];
  deliverables: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "ganesha-aagman-showcase",
    title: "Ganesha Aagman Showcase",
    client: "Blockbuster Charitable Trust",
    year: "2024",
    role: "Lead Video Editor & Colorist",
    category: "Commercial Editing",
    aspect: "16:9",
    videoUrl: "/portfolio/ganesha-aagman.mp4",
    tagline: "High-energy festive event film with dynamic crowd pacing, rich jewel tones, and rhythmic percussion cuts.",
    overview: "An electric, celebratory event recap film capturing the vibrant energy and devotion of the Ganesha Aagman celebrations organized by Blockbuster Charitable Trust. Cut tightly against traditional dhol beats and percussive transitions with cinematic color treatment.",
    creativeProcess: [
      "Curated multi-cam festive documentary footage, organizing key high-energy moments.",
      "Synchronized cuts with traditional live percussion and crowd chants for emotional resonance.",
      "Graded night-time ambient festive lighting to enhance golden idol tones and rich reds.",
      "Designed immersive audio transitions blending live festival soundscapes with dynamic music."
    ],
    software: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Adobe After Effects"],
    deliverables: ["16:9 Master Showcase Film", "Social Highlight Reel", "Color Timed Deliverable"],
    featured: true,
  },
  {
    slug: "bairan-motion-edit",
    title: "Bairan Cinematic Edit",
    client: "Independent Creative Music Edit",
    year: "2024",
    role: "Motion Designer & Finishing Artist",
    category: "Motion Graphics",
    aspect: "16:9",
    videoUrl: "/portfolio/bairan-edit.mp4",
    tagline: "Atmospheric landscape narrative edit with kinetic typography and celestial visual effects.",
    overview: "A stylized, high-impact landscape motion edit set to evocative music. Crafted using After Effects with custom optical transitions, expressive speed ramps, and atmospheric color timing.",
    creativeProcess: [
      "Assembled raw narrative clips tightly matching the lyrical cadence and vocal beats.",
      "Created custom motion blur transitions, optical glow flares, and film burn textures in After Effects.",
      "Applied cinematic warm-tone grading with contrasted shadow rolloffs.",
      "Composited kinetic title typography and celestial particle animations in 16:9 widescreen."
    ],
    software: ["Adobe After Effects", "Adobe Premiere Pro"],
    deliverables: ["16:9 Cinematic Master", "Full HD Master Cut", "Custom Motion Transitions"],
    featured: true,
  },
  {
    slug: "fronx-commercial",
    title: "Fronx Commercial Delivery",
    client: "Nexa Motors / Automotive Delivery",
    year: "2024",
    role: "Video Editor, Colorist & Sound Designer",
    category: "Commercial Editing",
    aspect: "16:9",
    videoUrl: "/portfolio/fronx-car-delivery.mp4",
    tagline: "High-octane commercial pacing with precision beat-matching and cinematic grade.",
    overview: "A sleek, cinematic commercial delivery film documenting the handover of the Maruti Suzuki Fronx. Engineered to feel dynamic, premium, and emotionally resonant through sharp match cuts, custom speed ramps, and multi-layered sound design.",
    creativeProcess: [
      "Ingested and color-managed multi-camera 4K Sony S-Log3 footage into DaVinci Resolve.",
      "Constructed an energetic rhythmic assembly tuned to high-energy bass and percussive transitions.",
      "Applied tailored automotive color grading with deep contrasted blacks and vibrant metallic highlights.",
      "Designed bespoke foley sound effects, engine swells, and whooshes to heighten tactile impact."
    ],
    software: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Adobe After Effects"],
    deliverables: ["1x 4K Master Commercial (16:9)", "3x Vertical Reels (9:16)", "Custom LUT Preset"],
    featured: true,
  },
  {
    slug: "dice-3d-motion",
    title: "Kinetic Dice 3D Simulation",
    client: "CGI & Motion Lab",
    year: "2024",
    role: "3D Motion Designer & Lighting Artist",
    category: "3D & CGI",
    aspect: "9:16",
    videoUrl: "/portfolio/dice-animation.mp4",
    tagline: "Complex rigid-body physics simulation with tactile procedural textures and hyper-stylized lighting.",
    overview: "A high-fidelity 3D motion exploration playing with physics, dynamic gravity, and macro camera movements. Built to explore physical collisions, reflective chromatic surfaces, and kinetic typography in vertical aspect ratio.",
    creativeProcess: [
      "Simulated realistic rigid body dynamics with micro-bounces and rotational torque.",
      "Crafted procedural glass and matte rubber materials with customized refractive dispersion.",
      "Orchestrated dramatic studio-grade key lighting and directional spotlights.",
      "Composited optical lens flares, subtle chromatic aberration, and film grain in After Effects."
    ],
    software: ["Blender 3D", "Cinema 4D", "Adobe After Effects"],
    deliverables: ["9:16 Ultra-HD Render", "Raw 3D Project Files", "Clean Loop Animation"],
    featured: true,
  },
  {
    slug: "navratri-cultural-film",
    title: "Navratri Cultural Showcase",
    client: "Cultural Heritage Media",
    year: "2024",
    role: "Lead Editor & Finishing Artist",
    category: "Commercial Editing",
    aspect: "16:9",
    videoUrl: "/portfolio/navratri-project.mp4",
    tagline: "Vibrant festival storytelling with immersive rhythmic editing and rich saturated color palette.",
    overview: "Capturing the raw energy, tradition, and vibrancy of Navratri celebrations. Designed with rhythmic editing that mirrors traditional folk percussion, paired with expressive color grading that preserves the deep warmth of nighttime festive lighting.",
    creativeProcess: [
      "Curated hours of raw documentary and event footage into an emotional narrative arc.",
      "Paced the edit tightly against high-tempo dhol rhythms and crowd dynamics.",
      "Neutralized mixed ambient stadium lights to bring out jewel-toned costume colors.",
      "Seamless speed transitions and subtle motion blur applied to accentuate movement."
    ],
    software: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Adobe After Effects"],
    deliverables: ["Cinematic Master Film", "Teaser Cuts for Socials", "Full Color Timed Deliverable"],
    featured: true,
  },
  {
    slug: "cgi-saregama-ad",
    title: "Saregama CGI Motion Spot",
    client: "Music & Entertainment Campaign",
    year: "2024",
    role: "3D Generalist & Motion Designer",
    category: "3D & CGI",
    aspect: "9:16",
    videoUrl: "/portfolio/cgi-saregama.mp4",
    tagline: "Bespoke CGI product reveal highlighting retro aesthetic with modern digital motion.",
    overview: "A commercial CGI spot built to spotlight musical nostalgia with modern motion design aesthetics. Features volumetric lighting, realistic mechanical button presses, and smooth orbital camera choreography.",
    creativeProcess: [
      "Detailed 3D modeling and texturing with accurate metallic knobs and acoustic speaker mesh.",
      "Camera path choreography utilizing easing curves to evoke premium product craftsmanship.",
      "Multi-pass render compositing (Beauty, Ambient Occlusion, Specular, Depth).",
      "Sound design integrated with synchronized tactile mechanical clicks and vinyl warmth."
    ],
    software: ["Cinema 4D", "Blender 3D", "Adobe After Effects"],
    deliverables: ["Vertical Commercial 9:16", "Still Renders for Print & Digital", "Clean Loopable Video"],
    featured: true,
  },
  {
    slug: "yps-brand-film",
    title: "YP's Restroo Brand Reel",
    client: "YP's Restroo & Hospitality",
    year: "2024",
    role: "Video Editor & Colorist",
    category: "Commercial Editing",
    aspect: "9:16",
    videoUrl: "/portfolio/yps-restroo.mp4",
    tagline: "Appetizing culinary showcase with kinetic cuts, sizzling sound design, and rich warm grading.",
    overview: "A fast-paced social media culinary reel designed to boost engagement and highlight signature dishes. Built with rhythmic cuts timed to modern beats, macro culinary close-ups, and immersive sizzling audio.",
    creativeProcess: [
      "Selected hero culinary moments and synchronized cuts with percussion hits.",
      "Enhanced food highlights with selective HSL qualification for mouth-watering appeal.",
      "Layered multi-track culinary foley (sizzles, pours, knife clinks) for sensory immersion.",
      "Mastered in 9:16 specifically optimized for Instagram Reels and TikTok engagement."
    ],
    software: ["Adobe Premiere Pro", "DaVinci Resolve Studio"],
    deliverables: ["9:16 Social Commercial Reel", "High-res Master Export", "Audio Stem Package"],
    featured: true,
  },
  {
    slug: "camera-tracking-vfx",
    title: "3D Camera Matchmove & VFX",
    client: "VFX Innovation Project",
    year: "2024",
    role: "VFX Artist & Compositor",
    category: "3D & CGI",
    aspect: "16:9",
    videoUrl: "/portfolio/tracking.mp4",
    tagline: "Seamless integration of virtual 3D elements into live-action handheld footage.",
    overview: "Demonstrating high-precision optical camera tracking, perspective matching, and photorealistic 3D asset compositing into dynamic real-world environments.",
    creativeProcess: [
      "Extracted 3D camera solve with sub-pixel error tolerances from complex moving camera footage.",
      "Built matching proxy geometry to catch accurate shadows and ground reflections.",
      "Matched real-world focal length, sensor distortion, and dynamic shutter angle.",
      "Composited depth passes, heat distortion, and realistic atmospheric haze."
    ],
    software: ["Adobe After Effects", "Blender 3D", "Boujou Matchmove"],
    deliverables: ["16:9 4K VFX Breakdown Reel", "Side-by-side Matchmove Comparison"],
    featured: true,
  },
  {
    slug: "obsidian-brand-film",
    title: "YASHFX Brand Manifesto",
    client: "Self-Initiated Brand Film",
    year: "2024",
    role: "Director, Motion Designer & Editor",
    category: "Motion Graphics",
    aspect: "16:9",
    videoUrl: "/portfolio/obsidian-draft-1.mp4",
    tagline: "Bold typography, brutalist geometry, and dark minimal motion aesthetic.",
    overview: "A personal creative manifesto showcasing the core philosophy of YASHFX: ruthless pacing, architectural composition, and visuals that move audiences.",
    creativeProcess: [
      "Developed the script, typography styleframes, and structural pacing guide.",
      "Animated kinetic type systems with custom easing curves and frame-by-frame flourishes.",
      "Engineered an original electronic soundscape featuring sub-bass drops and glitch textures.",
      "Mastered in wide 2.39:1 letterbox for maximum theatrical impact."
    ],
    software: ["Adobe After Effects", "Adobe Premiere Pro", "Cinema 4D"],
    deliverables: ["Cinematic Master Film", "Title Sequence Template", "Social Teasers"],
    featured: true,
  },
  {
    slug: "epic-journey-film",
    title: "Epic Journey Visual Montage",
    client: "Travel & Lifestyle Series",
    year: "2024",
    role: "Editor & Colorist",
    category: "Commercial Editing",
    aspect: "9:16",
    videoUrl: "/portfolio/epic-journey.mp4",
    tagline: "Panoramic travel storytelling compressed into an exhilarating vertical reel.",
    overview: "Taking viewers across breathtaking landscapes with seamless invisible cuts, whip pans, and emotional orchestral builds.",
    creativeProcess: [
      "Cataloged drone, gimbal, and action cam footage across diverse lighting conditions.",
      "Matched horizon lines and visual centroids to execute seamless zoom and whip cuts.",
      "Balanced disparate camera color profiles into a unified cinematic film emulation.",
      "Mixed spatial ambient audio layers for a sense of scale and atmosphere."
    ],
    software: ["Adobe Premiere Pro", "DaVinci Resolve Studio"],
    deliverables: ["9:16 Full Reel", "High Bitrate Master"],
    featured: false,
  },
  {
    slug: "mango-social-campaign",
    title: "Mango Social Motion Reel",
    client: "Beverage Brand Promo",
    year: "2024",
    role: "Motion Graphics Artist",
    category: "Motion Graphics",
    aspect: "9:16",
    videoUrl: "/portfolio/mango-reel.mp4",
    tagline: "Punchy commercial pop motion with playful kinetic type and vibrant palettes.",
    overview: "A vibrant social ad engineered to capture immediate thumbs on the feed within the first 0.5 seconds through high-contrast colors and kinetic animation.",
    creativeProcess: [
      "Illustrated vector elements and product lockups in Adobe Illustrator.",
      "Rigged kinetic bouncy transitions with custom secondary action dynamics.",
      "Synced punchy sound effects to each typographic pop and screen wipe.",
      "Exported optimized WebM and MP4 variants for multi-platform ad spend."
    ],
    software: ["Adobe After Effects", "Adobe Illustrator"],
    deliverables: ["9:16 Social Ad", "Story Variant", "Square 1:1 Feed Cut"],
    featured: false,
  },
  {
    slug: "v5-kinetic-reel",
    title: "V5 Kinetic Identity Showcase",
    client: "Creative Motion Experiment",
    year: "2024",
    role: "Kinetic Typographer & Motion Artist",
    category: "Motion Graphics",
    aspect: "9:16",
    videoUrl: "/portfolio/v5.mp4",
    tagline: "Experimental kinetic type study pushing velocity, scale, and brutalist layouts.",
    overview: "An exploration into how typography can convey momentum, weight, and emotion without vocal narration.",
    creativeProcess: [
      "Tested experimental typographic alignments, variable fonts, and geometric grid systems.",
      "Programmed expression-driven inertia and tracking adjustments in After Effects.",
      "Layered industrial mechanical audio textures to give digital text tangible mass.",
      "Color timed in clean monochrome with electric blue accents."
    ],
    software: ["Adobe After Effects", "Cinema 4D"],
    deliverables: ["9:16 Loop", "4K Vertical Master"],
    featured: false,
  },
  {
    slug: "priya-web-promo",
    title: "Priya Digital Interface Launch",
    client: "Product & Interface Showcase",
    year: "2024",
    role: "Motion Designer",
    category: "Motion Graphics",
    aspect: "9:16",
    videoUrl: "/portfolio/priya-web-promo.mp4",
    tagline: "Slick UI interaction motion design showcasing responsive digital products.",
    overview: "Bringing flat interface mockups to life with smooth scroll simulations, 3D device tilt, and dynamic cursor interactions.",
    creativeProcess: [
      "Prepared vectorized UI screen designs from Figma with layered hierarchy.",
      "Created isometric 3D device rigs with specular reflections and realistic shadows.",
      "Choreographed smooth user interaction flows and micro-interactions.",
      "Exported high-framerate video assets for social promotion."
    ],
    software: ["Adobe After Effects", "Figma"],
    deliverables: ["9:16 Promo Reel", "MP4 & GIF formats"],
    featured: false,
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
