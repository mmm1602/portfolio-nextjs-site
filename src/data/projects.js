// /src/data/projects.js

/**
 * This file contains the data for all the projects listed in the portfolio.
 * Each project is an object with detailed information about its purpose, impact, and the technologies used.
 * The projects are sorted by date, with the most recent ones appearing first.
 */

const rawProjects = [
  {
    title: 'VTOL Aircraft Propulsion System',
    period: 'Jan 2026 – Present',
    category: 'Aerospace · Propulsion',
    summary: 'Designing a propulsion architecture for a conceptual VTOL aircraft, focusing on vertical lift stability and transition-readiness under strict packaging and mass constraints.',
    impact: 'Led a 6-member team to achieve a 1.5:1 thrust-to-weight ratio, guiding system feasibility and reducing ambiguities in propulsion sizing.',
    tech: ['SolidWorks', 'Aerospace Propulsion', 'Mechanical Design', 'CAD Assembly'],
    highlights: [
      'Led a 6-member propulsion sub-team.',
      'Modeled a 3BSN thrust vectoring mechanism in SolidWorks.',
      'Defined propulsion-electronics constraints and a 1.5:1 thrust-to-weight target.',
    ],
    liveUrl: '',
    sourceUrl: '',
    media: {
      type: 'image',
      src: '/projects/JAS/F35B.jpg',
    },
    gallery: [],
  },
  {
    title: 'Autonomous Boat Navigation System',
    period: 'Jan 2025 – Apr 2025',
    category: 'Robotics · Controls',
    summary: 'Developed an autonomous vessel to navigate a 200-ft course using GPS/IMU feedback, closed-loop heading control, and obstacle-avoidance logic.',
    impact: 'Led a 4-member team to achieve fully autonomous course completion with repeatable obstacle avoidance, demonstrating robust control systems in variable water conditions.',
    tech: ['Fusion 360', 'Arduino', 'C++', 'MATLAB', '3D Printing', 'GPS/IMU'],
    highlights: [
      'Led a 4-member engineering team.',
      'Built the full vessel system, including 3D printed parts and soldered electronics.',
      'Demonstrated successful obstacle-avoiding navigation over a 200-ft course.',
    ],
    liveUrl: 'https://github.com/mmm1602/GNOR-RACE',
    sourceUrl: 'https://github.com/mmm1602/GNOR-RACE',
    media: {
      type: 'video',
      src: '/projects/GNOR/gnor-boat.mp4',
    },
    gallery: ['/projects/GNOR/Boat00.png', '/projects/GNOR/Boat01.png', '/projects/GNOR/Boat02.png'],
  },
  {
    title: 'Project STORM – Robotic Arm System',
    period: 'Jan 2025 – Apr 2025',
    category: 'Robotics · Mechanical Systems',
    summary: 'Designed and integrated a 6-DOF robotic arm for a rover, focusing on payload capacity, joint alignment, and static stability for manipulation tasks.',
    impact: 'Achieved a 5 kg payload lift capability and improved structural durability through iterative geometry and load-path refinements, enhancing the rover\'s operational capabilities.',
    tech: ['SolidWorks', 'Mechanical Design', 'Robotics Integration', 'Structural Analysis'],
    highlights: [
      'Designed and assembled a 6-DOF robotic arm.',
      'Optimized joint alignment and weight distribution for lifting stability.',
      'Integrated the arm system with the rover platform and iterated based on test results.',
    ],
    liveUrl: '',
    sourceUrl: '',
    media: {
      type: 'image',
      src: '/projects/Robotics%20Club/Arm.webp',
    },
    gallery: [
      '/projects/Robotics%20Club/IMG_5172.jpeg',
      '/projects/Robotics%20Club/IMG_5174.jpeg',
      '/projects/Robotics%20Club/IMG_5176.jpeg',
    ],
  },
  {
    title: 'Flite – UAV Mission Planning Platform',
    period: 'Oct 2025',
    category: 'Aerospace Software · Geospatial',
    summary: 'Built a UAV mission planning platform during a hackathon, combining a React interface with geospatial route optimization for efficient path generation.',
    impact: 'Delivered a functional prototype in under 24 hours and won the First-Time Hacker Award among 800+ participants, showcasing rapid development and problem-solving skills.',
    tech: ['React', 'JavaScript', 'Geospatial Algorithms'],
    highlights: [
      'Built the frontend platform in React under hackathon constraints.',
      'Implemented a geospatial route optimization flow.',
      'Won First-Time Hacker Award among 800+ participants.',
    ],
    liveUrl: '',
    sourceUrl: '',
    media: {
      type: 'image',
      src: '/projects/Software/IMG_5672.PNG',
    },
    gallery: [
      '/projects/Software/IMG_5673.PNG',
      '/projects/Software/IMG_5674.PNG',
    ],
  },
  {
    title: 'Hydrogen Propulsion Research (PERL Lab)',
    period: 'Feb 2026 – Present',
    category: 'Research · Clean Energy Propulsion',
    summary: 'Contributing to hydrogen-fueled axial propulsion research at UCF PERL Lab, with an emphasis on combustion behavior, instrumentation, and system reliability.',
    impact: 'Supported experimental setup and diagnostics, improving test readiness and reducing troubleshooting cycle time for ongoing hydrogen propulsion studies.',
    tech: ['Combustion Analysis', 'Lab Instrumentation', 'Experimental Propulsion', 'Thermal Analysis'],
    highlights: [
      'Supports the design and analysis of hydrogen-fueled axial propulsion systems.',
      'Assists in combustion troubleshooting and thermal/system analysis.',
      'Contributes to the experiment rig and equipment setup.',
    ],
    liveUrl: '',
    sourceUrl: '',
    media: {
      type: 'image',
      src: '/projects/PERL/engine.webp',
    },
    gallery: [],
  },
  {
    title: 'Engine Simulator App',
    period: '2024',
    category: 'Simulation · Desktop',
    summary: 'Developed a macOS simulation tool to visualize piston motion and combustion-cycle behavior with real-time parameter updates.',
    impact: 'Improved conceptual understanding of engine cycles by translating thermodynamic states into interactive visual feedback, reducing manual calculation time.',
    tech: ['Swift', 'C++', 'Simulation'],
    highlights: [
      'Created a real-time visualization of engine thermodynamics.',
      'Enabled interactive parameter adjustments for educational purposes.',
      'Optimized the rendering loop for smooth performance.',
    ],
    liveUrl: 'https://github.com/mmm1602/Engine-Simulator-macOS',
    sourceUrl: 'https://github.com/mmm1602/Engine-Simulator-macOS',
    media: {
      type: 'image',
      src: 'https://placehold.co/1200x800/111827/e5e7eb?text=Engine+Simulator+Preview',
    },
    gallery: [],
  },
];

// Mapping month names to numbers for date sorting
const monthMap = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

/**
 * Parses the period string of a project to create a Date object for sorting.
 * @param {string} period - The period string (e.g., "Jan 2026 – Present", "2024").
 * @returns {Date} A Date object representing the start of the project.
 */
function getProjectDate(period) {
  if (!period || period.toLowerCase().includes('present')) {
    return new Date(); // Sort "Present" projects as the most recent
  }

  const monthYearMatch = period.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/);
  if (monthYearMatch) {
    const month = monthMap[monthYearMatch[1]];
    const year = Number(monthYearMatch[2]);
    return new Date(year, month, 1);
  }

  const yearMatch = period.match(/\b(\d{4})\b/);
  if (yearMatch) {
    return new Date(Number(yearMatch[1]), 0, 1);
  }

  return new Date(0); // Fallback for any other format
}

// Sort projects by date in descending order
export const projects = [...rawProjects].sort((a, b) => getProjectDate(b.period) - getProjectDate(a.period));

// Export the first 3 projects as featured, though this is not currently used in the UI.
export const featuredProjects = projects.slice(0, 3);