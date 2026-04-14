// Rise of AI — Episode Scripts & Production Config
// Editorial frame: Rushkoff-style structural analysis
// One constraint per episode. Follow it to the end.

export const EPISODES = [
  {
    id: 1,
    title: "The Grid Is the Limit",
    constraint: "Power & Grid Capacity",
    duration_target: "3:45",
    aspect_ratio: "9:16",  // LinkedIn vertical
    resolution: "1080p",

    // Rushkoff-style script: calm voice, intense implications
    // Data-anchored. No hedging. Follow the constraint to its end.
    script: `There's a number that explains everything happening in AI right now.

One thousand terawatt-hours.

That's how much electricity the world's data centers will consume in 2026. To put that in perspective — that's the entire annual output of Japan's power grid. Dedicated to running software.

The Big Tech capex figure is $660 billion. Not over a decade. This year.

Here's what the consensus missed: these companies aren't spending because the models work. They're spending because they're racing to lock up the one thing that can't be printed — physical power capacity. You can't code your way out of a grid constraint.

The second-order effect: every data center lease signed today is a bet against someone else's build-out. Microsoft signed enough power purchase agreements in 2025 to light three cities. Google matched them. When you see those numbers, you're not watching an AI arms race — you're watching a land grab for electrons.

What this means for portfolios: the companies that win the AI era won't necessarily be the ones with the best models. They'll be the ones with locked-in power at below-market rates. That's a moat that compounds.

Grid operators. Power infrastructure. The boring utilities attached to the right transmission lines. These are the picks-and-shovels play the market hasn't priced yet.

The constraint is the trade.`,

    // Seedance 2.0 B-roll prompts — cinematic environments
    // "I could be anywhere" — generate the world around the presenter
    broll: [
      {
        timestamp: "0:00-0:15",
        prompt: "Aerial cinematic shot of a massive data center complex at dusk, cooling towers emitting steam, surrounded by power transmission lines stretching to the horizon, dramatic golden hour light, photorealistic, 4K",
        duration: 8
      },
      {
        timestamp: "0:15-0:35",
        prompt: "Close-up of high-voltage electrical transmission towers at night, power lines humming, lightning storm in background, industrial atmosphere, cinematic grade, photorealistic",
        duration: 10
      },
      {
        timestamp: "0:45-1:10",
        prompt: "Interior of a hyperscale data center server room, rows of blinking server racks extending to infinity, blue light, fog, cinematic depth of field, photorealistic",
        duration: 15
      },
      {
        timestamp: "1:30-1:55",
        prompt: "Aerial shot of Japan at night from orbit, city lights forming a web across the islands, satellite perspective, cinematic, photorealistic",
        duration: 12
      },
      {
        timestamp: "2:15-2:45",
        prompt: "Time-lapse of construction workers building a massive data center facility in the Nevada desert, fast-motion, golden light, crane machinery, industrial scale, cinematic",
        duration: 18
      },
      {
        timestamp: "3:00-3:30",
        prompt: "A lone power utility substation on flat farmland at dusk, transmission lines fanning out, dramatic storm clouds, quiet power, cinematic wide shot",
        duration: 15
      }
    ]
  },

  {
    id: 2,
    title: "The Agent Moment",
    constraint: "AI Agents & Production Automation",
    duration_target: "3:45",
    aspect_ratio: "9:16",
    resolution: "1080p",

    script: `For three years, AI answered questions.

Now it does the work.

The distinction matters more than most people realize. A language model that answers is a sophisticated search engine. An agent that acts is a new category of employee — one that doesn't sleep, doesn't forget a process step, and doesn't need a manager to define its Monday morning.

40% of enterprise software shipped in 2026 has an embedded agent. That number was under 5% eighteen months ago.

Here's the structural shift: when agents go from answering to acting, the bottleneck moves. It was always: good idea, now who executes it? That question disappears. The new bottleneck is workflow design — who defines the process the agent runs? That's a different skill set than what most organizations have.

The $7.6 billion agent market figure understates what's happening. It counts platforms. It doesn't count the internal engineering hours being redirected from doing the work to defining the work. That reallocation is enormous and almost entirely invisible to external measurement.

Second-order effect: the companies that pull ahead won't be the ones with the best AI tools. They'll be the ones that redesigned their processes to be agent-native before their competitors started the conversation.

The window for that advantage is probably eighteen months. After that, it's table stakes.

The constraint isn't capability. It's organizational imagination.`,

    broll: [
      {
        timestamp: "0:00-0:20",
        prompt: "Abstract visualization of autonomous software agents as glowing nodes in a dark network, information flowing between nodes, cinematic, digital art style, photorealistic rendering",
        duration: 10
      },
      {
        timestamp: "0:30-1:00",
        prompt: "Modern open-plan office at night, empty chairs, screens glowing with running processes, autonomous work continuing without humans, atmospheric, cinematic",
        duration: 15
      },
      {
        timestamp: "1:15-1:45",
        prompt: "Close-up of multiple computer screens showing code execution, workflow diagrams, automated processes running simultaneously, cinematic depth of field",
        duration: 18
      },
      {
        timestamp: "2:10-2:40",
        prompt: "Futuristic factory floor with robotic arms and AI-controlled systems working in precise coordination, clean industrial aesthetic, blue lighting, cinematic",
        duration: 16
      },
      {
        timestamp: "3:00-3:30",
        prompt: "Dawn light hitting a modern corporate campus, lone engineer walking through glass corridors while systems operate autonomously in the background, cinematic",
        duration: 15
      }
    ]
  },

  {
    id: 3,
    title: "The Labor Reckoning",
    constraint: "Labor Market Disruption",
    duration_target: "3:45",
    aspect_ratio: "9:16",
    resolution: "1080p",

    script: `Companies aren't firing people because AI works.

They're firing people because AI might.

That distinction is crucial to understanding the labor numbers coming out of 2025 and 2026. 30,000 tech jobs cut in the first quarter of this year alone. But if you look at the actual capability-to-displacement correlation, it's weak. The displacement is happening ahead of demonstrated ROI.

What's actually going on is a confidence shift. A CFO doesn't need to prove AI replaces a function. They need to believe it might. And once that belief lands, the headcount conversation starts regardless of whether the model is ready.

LinkedIn's data shows 1.3 million new AI-related jobs created over the same period. The net math looks fine. The distribution math is brutal. The jobs being cut are concentrated in specific functions — mid-level knowledge work, content production, junior software development. The jobs being created require AI fluency most of those workers don't have.

This isn't a story about AI replacing jobs. It's a story about a skills gap that opened faster than any workforce transition can close.

The second-order effect for investors: companies that proactively reskilled their workforce are outperforming on retention metrics. That's a talent moat that's surprisingly durable — and almost impossible to build after you've already let people go.

The constraint isn't technology. It's transition velocity.`,

    broll: [
      {
        timestamp: "0:00-0:20",
        prompt: "Empty office cubicles in a large corporate floor, personal items still on desks, screens dark, afternoon light through windows, contemplative atmosphere, cinematic",
        duration: 12
      },
      {
        timestamp: "0:35-1:05",
        prompt: "Close-up of a person's hands typing code, split screen with AI completing the same task in milliseconds, tension between human and machine speed, cinematic",
        duration: 18
      },
      {
        timestamp: "1:20-1:50",
        prompt: "Corporate conference room, people in discussion, projection screen showing AI productivity metrics, serious mood, cinematic documentary style",
        duration: 16
      },
      {
        timestamp: "2:10-2:40",
        prompt: "A worker in a training center learning new technical skills, modern educational setting, hope and determination, cinematic, warm lighting",
        duration: 15
      },
      {
        timestamp: "3:00-3:30",
        prompt: "Aerial view of a city's financial district at golden hour, thousands of office windows lit, scale of the workforce inside, contemplative, cinematic wide shot",
        duration: 15
      }
    ]
  },

  {
    id: 4,
    title: "Atoms Are Fashionable Again",
    constraint: "Capital Narrative Shift & the HALO Trade",
    duration_target: "3:45",
    aspect_ratio: "9:16",
    resolution: "1080p",

    script: `For twenty years, software ate the world.

Now AI is eating software.

And here's what happens when software gets eaten: atoms become valuable again.

The capital narrative of the 2010s was dematerialization. SaaS, cloud, platform businesses. High margins, low physical overhead. Asset-light was the investment thesis that defined a generation of returns.

The AI transition has quietly inverted that. The $2.5 trillion in global AI spend forecast for 2026 — growing at 44% year-over-year — is not going into software licenses. It's going into chips, buildings, power contracts, cooling infrastructure, fiber. It's going into things you can touch.

The HALO trade — Hardware, AI infrastructure, Logistics, and Output layer — is the reemergence of physical capital as a competitive moat. NVIDIA isn't trading at a premium because the software is good. It's trading at a premium because the hardware is constrained and the timeline to alternative supply is long.

Here's the second-order effect the consensus is still processing: the companies positioned to win the AI era are increasingly those with manufacturing capability, supply chain control, and physical infrastructure. These are skills that venture-backed software companies systematically shed for thirty years.

The advantage went to the wrong side of the balance sheet for a generation. It's reversing.

Atoms are fashionable again. The question is whether you're positioned before or after the market figures that out.`,

    broll: [
      {
        timestamp: "0:00-0:20",
        prompt: "Extreme close-up of a GPU chip, microscopic circuits gleaming under precision lighting, chip manufacturing environment, cinematic macro photography",
        duration: 10
      },
      {
        timestamp: "0:30-1:00",
        prompt: "Aerial view of a semiconductor fabrication plant, clean room visible through skylights, industrial scale, Taiwan or Arizona landscape, golden hour, cinematic",
        duration: 18
      },
      {
        timestamp: "1:15-1:45",
        prompt: "Interior of a modern logistics and data infrastructure facility, racks of equipment being installed, workers in hard hats, industrial cinematic style",
        duration: 16
      },
      {
        timestamp: "2:10-2:40",
        prompt: "Stock trading floor with screens showing AI infrastructure companies' charts, busy atmosphere, cinematic documentary style",
        duration: 15
      },
      {
        timestamp: "3:00-3:30",
        prompt: "Vast shipping port at dusk, cranes loading cargo containers, global supply chain in motion, dramatic industrial scale, cinematic wide shot",
        duration: 15
      }
    ]
  },

  {
    id: 5,
    title: "The Verification Crisis",
    constraint: "Trust, Liability & EU AI Act Enforcement",
    duration_target: "3:45",
    aspect_ratio: "9:16",
    resolution: "1080p",

    script: `AI can now generate anything.

But nobody can prove it got it right.

This is the verification crisis. And it's arriving exactly as regulators run out of patience.

The EU AI Act enforcement date is August 2, 2026. That's not a soft deadline. That's a €35 million or 7% of global revenue fine per violation. The companies that have been treating AI governance as a communications exercise are about to discover it's a legal exposure.

72% of S&P 500 companies have already warned investors about AI-related risks in their disclosures. That number was under 20% two years ago. It's not that the risks got worse — it's that the legal teams finally read the regulation.

Here's the structural problem: the tools for verifying AI outputs don't scale at the same rate as AI output generation. Deepfake volume is up 900% since 2023. Synthetic content detection accuracy sits around 70% under controlled conditions. In the wild, it's much lower.

The second-order effect: organizations that haven't built verification workflows into their AI deployment pipelines are now carrying unquantified liability. The question isn't whether a harmful AI output will occur — it's whether you have a documented process for catching it.

This creates a category of company with a surprising moat: those that built the audit trail before the regulators asked for it. Compliance infrastructure is genuinely hard to retrofit.

The constraint isn't generating. It's proving.`,

    broll: [
      {
        timestamp: "0:00-0:20",
        prompt: "Split-screen of real and AI-generated faces, subtle differences highlighted, clinical examination atmosphere, cinematic, high contrast lighting",
        duration: 12
      },
      {
        timestamp: "0:30-1:00",
        prompt: "European Union Parliament building in Brussels, formal governmental atmosphere, legal weight, cinematic documentary style, overcast sky",
        duration: 16
      },
      {
        timestamp: "1:15-1:45",
        prompt: "Legal team in a modern office reviewing AI compliance documents on screens, serious atmosphere, high stakes, cinematic documentary style",
        duration: 18
      },
      {
        timestamp: "2:10-2:40",
        prompt: "Abstract visualization of digital fingerprinting and content verification systems, glowing verification chains, dark background, cinematic tech aesthetic",
        duration: 15
      },
      {
        timestamp: "3:00-3:30",
        prompt: "Corporate boardroom, executives reviewing audit documentation, regulatory compliance meeting, serious formal atmosphere, cinematic",
        duration: 15
      }
    ]
  }
];

// Seedance 2.0 model config via Fal.ai
export const SEEDANCE_CONFIG = {
  model: "fal-ai/seedance-v2",    // check fal.ai for exact model ID
  defaults: {
    duration: 10,
    aspect_ratio: "16:9",         // landscape for B-roll
    resolution: "1080p",
    motion_intensity: "medium"
  }
};

// HeyGen presenter config
export const PRESENTER_CONFIG = {
  // Set after calling: node pipeline.js list-avatars
  avatar_id: process.env.HEYGEN_AVATAR_ID || null,
  voice_id: process.env.HEYGEN_VOICE_ID || null,
  resolution: "1080p",
  aspect_ratio: "9:16",          // LinkedIn vertical
  expressiveness: "high",
  background: {
    type: "color",
    value: "#0A0A0A"              // Atelier near-black
  }
};
