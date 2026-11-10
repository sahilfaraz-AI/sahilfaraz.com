/*
  Scout: a small guide on the homepage that answers questions about Sahil.

  It runs entirely in the browser and only knows what is written in TOPICS below
  (taken from this site and the resume). No server, no API key, nothing to host.

  To add or change an answer, edit TOPICS:
    id      unique name, also sent to analytics as the topic
    chip    short label shown as a suggestion button
    keys    phrases people might type (lowercase). More phrases = better matching
    a       the answer, as simple HTML (<p>, <ul>, <li>, <b>)
    acts    optional buttons: { label, href } for links, { label, copy } to copy text
    next    ids of topics to suggest afterwards
  Writing rules: no em dashes, plain words, only facts Sahil has published.
*/
(function () {
  'use strict';

  var EMAIL = 'sahil.faraz@gmail.com';
  var RESUME = 'Sahil_Faraz_Resume.pdf';

  var TOPICS = [
    {
      id: 'intro', chip: 'Who is Sahil?',
      keys: ['who is sahil', 'who is he', 'about sahil', 'tell me about him', 'tell me about sahil', 'introduce', 'summary', 'overview', 'elevator pitch', 'bio', 'background', 'what does he do', 'what does sahil do'],
      a: '<p><b>Sahil Faraz</b> is a product designer in Toronto with 10 years in design, user research and testing across cars, games, mobile apps and the web.</p><p>Today he is a feature lead at <b>Stellantis</b>, designing safety-critical driver assistance features for the instrument cluster. He also co-founded <b>MySleepyTale</b>, an AI bedtime-story app for kids.</p>',
      acts: [{ label: 'About Sahil', href: '#/about' }],
      next: ['stellantis', 'tester', 'work', 'contact']
    },
    {
      id: 'stellantis', chip: 'His role at Stellantis',
      keys: ['stellantis', 'current job', 'current role', 'where does he work', 'where does sahil work', 'job title', 'what is his role', 'employer', 'company', 'day job', 'adas', 'hmi', 'feature lead', 'speed control', 'cruise', 'speed limiter', 'speed limit assistance', 'traffic sign assist', 'automotive', 'car', 'vehicle', 'cluster', 'jeep', 'dodge', 'ram', 'maserati', 'alfa romeo', 'fiat', 'chrysler'],
      a: '<p>Since 2022 Sahil has been <b>UX Performance Lead, HMI Engineer</b> at Stellantis. He is the global ADAS feature lead across brands like Dodge, Jeep, RAM, Maserati and Alfa Romeo.</p><ul><li>Feature lead for <b>Speed Control</b>: Adaptive Cruise Control, Speed Limiter and Speed Limit Assistance, designed to work alongside L2 and L2++ systems</li><li>Feature lead for <b>Traffic Sign Assist</b>, to region-specific requirements and GSR regulations</li><li>Owns the ADAS continuous improvement loop, which delivered a <b>30% uplift in UX quality</b></li></ul>',
      acts: [{ label: 'Intelligent Cruise Control', href: '#/cruise-control' }],
      next: ['icc', 'impact', 'award', 'process']
    },
    {
      id: 'icc', chip: 'Intelligent Cruise Control',
      keys: ['intelligent cruise control', 'cruise control', 'icc', 'speed limit adjustment', 'adaptive cruise', 'acc', 'speed limit', 'cruise control case study', 'most important project', 'biggest project', 'flagship', 'simulator'],
      a: '<p><b>Intelligent Cruise Control</b> is cruise control that adopts the legal speed limit, with the driver still in charge. It is in production at Stellantis and has been Sahil’s main focus over the years.</p><p>He was the feature designer and continuous improvement lead, and tested it with drivers in a simulator. It has launched, and the next improvement loop is planned.</p><p>The case study is password protected because the work isn’t public yet. Email Sahil for access.</p>',
      acts: [{ label: 'Open the case study', href: '#/cruise-control' }, { label: 'Copy email', copy: EMAIL }],
      next: ['codesigner', 'research', 'stellantis']
    },
    {
      id: 'codesigner', chip: 'CoDesigner',
      keys: ['codesigner', 'co designer', 'ai tool', 'decision tool', 'evidence', 'design review', 'overspeed warning', 'proof of concept', 'co-designer'],
      a: '<p><b>CoDesigner</b> is an AI tool Sahil designed so HMI teams can settle design questions on evidence instead of the loudest voice in the room.</p><p>He was the sole designer, from research and workshops to the prototype and the pitch, and built it with Claude from his own specs and flows. It’s a proof of concept, shown to 60 people at Stellantis’ global UX design review, and the vision prototype is in development.</p>',
      acts: [{ label: 'Read the case study', href: '#/codesigner' }],
      next: ['ai', 'icc', 'mysleepytale']
    },
    {
      id: 'mysleepytale', chip: 'MySleepyTale',
      keys: ['mysleepytale', 'my sleepy tale', 'sleepy tale', 'bedtime', 'story app', 'stories', 'kids app', 'children', 'startup', 'co founder', 'cofounder', 'founder', 'side project', 'own product', 'entrepreneur', 'voice clone', 'business'],
      a: '<p><b>MySleepyTale</b> is an AI bedtime-story app that stars your child, in your family’s culture. Sahil co-founded it and owns product, design and brand.</p><ul><li>Voice narration, family voice clones and four languages</li><li>Research with parents at home, then in the streets</li><li>Built from paper sketches, then code with Claude</li></ul><p>Voice cloning came from research: parents found the stock AI voice a turn-off.</p>',
      acts: [{ label: 'Read the case study', href: '#/mysleepytale' }, { label: 'Visit mysleepytale.com', href: 'https://mysleepytale.com', ext: true }],
      next: ['ai', 'leadership', 'work']
    },
    {
      id: 'research-alerts', chip: 'Research Alerts',
      keys: ['research alerts', 'vpri', 'funding', 'grant', 'email digest', 'inbox', 'newsletter'],
      a: '<p><b>Research Alerts</b> is a University of Toronto funding alert service, nine years old, that Sahil’s team of six redesigned around where people read it: the inbox.</p><p>He did UX research and design. After 9 interviews on both sides of the service, the team replaced one email per alert with a weekly digest, and emotional low points in the journey dropped from 4 to 0.</p>',
      acts: [{ label: 'Read the case study', href: '#/research-alerts' }],
      next: ['aug-fice', 'education', 'research']
    },
    {
      id: 'aug-fice', chip: 'Aug-Fice',
      keys: ['aug fice', 'augfice', 'mixed reality', 'mr glasses', 'ar glasses', 'focus app', 'productivity', 'distraction', 'pomodoro'],
      a: '<p><b>Aug-Fice</b> is a focus app for mixed reality glasses: a quiet office you can wear. Sahil made it at the University of Toronto in 2021.</p><p>He did the storyboard, sketches, research, visual design and 11 hi-fi screens, and ran a 14-person background preference test.</p>',
      acts: [{ label: 'Read the case study', href: '#/aug-fice' }, { label: 'Read it on Medium', href: 'https://sahilfaraz.medium.com/exploring-augmented-reality-to-fight-distractions-and-improve-productivity-4f0db9fe4d9f', ext: true }],
      next: ['vr', 'research-alerts', 'work']
    },
    {
      id: 'work', chip: 'Show me his work',
      keys: ['projects', 'portfolio', 'case studies', 'case study', 'work samples', 'best work', 'selected work', 'what has he built', 'what has he designed', 'show me', 'examples', 'worked on', 'what has he made'],
      a: '<p>Here’s the selected work, newest first:</p><ul><li><b>Intelligent Cruise Control</b>, in production at Stellantis</li><li><b>CoDesigner</b>, an AI decision tool for HMI teams</li><li><b>MySleepyTale</b>, the app he co-founded</li><li><b>Research Alerts</b> and <b>Aug-Fice</b>, from his master’s at the University of Toronto</li></ul>',
      acts: [{ label: 'See the work', href: '#/work' }],
      next: ['icc', 'codesigner', 'mysleepytale']
    },
    {
      id: 'process', chip: 'How he works',
      keys: ['process', 'how does he work', 'how he works', 'approach', 'methodology', 'workflow', 'design process', 'philosophy', 'working style', 'workshop', 'alignment'],
      a: '<p>Sahil spent years breaking products as a tester before he designed them, and it shows in how he works:</p><ul><li>Get engineering, product and design in one room before opening a design file</li><li>Turn messy engineering problems into user journeys anyone can follow</li><li>Review designs like a tester, before users find the breaks</li><li>Use AI to learn faster, while research makes the call</li><li>Keep going after launch with a continuous improvement loop</li><li>Test with the people the product is for</li></ul>',
      acts: [{ label: 'How I work', href: '#/how' }],
      next: ['research', 'ai', 'impact']
    },
    {
      id: 'research', chip: 'Research and testing',
      keys: ['research', 'user research', 'usability', 'user testing', 'studies', 'study', 'interviews', 'methods', 'benchmarking', 'human factors', 'validation', 'data driven', 'participants'],
      a: '<p>Research is the backbone of his work. At Stellantis he grounds cluster guidance and alerts in user studies, OEM benchmarking and human factors research, including driver simulator studies, and oversees feature validation and usability testing through launch.</p><p>Elsewhere he has run parent research for MySleepyTale, interviews for Research Alerts, a preference test for Aug-Fice, and 12 VR user research sessions.</p>',
      next: ['process', 'accessibility', 'codesigner']
    },
    {
      id: 'tester', chip: 'From tester to designer',
      keys: ['tester', 'testing background', 'qa', 'quality assurance', 'qa infotech', 'uat', 'user acceptance', 'hike', 'adobe', 'emirates', 'esq', 'bugs', 'career change', 'how did he get into design', 'why design', 'career path'],
      a: '<p>Sahil started by testing other people’s products, and that’s how he fell for designing his own.</p><ul><li><b>QA InfoTech</b>, 2014 to 2019: led mobile QA at <b>Hike Messenger</b>, reporting 20% of all bugs and cutting crashes by 25% as it became India’s fastest-growing unicorn. He also reported the most bugs across <b>Adobe</b>’s UI localization teams, wrote user stories for an ATM platform at <b>ESQ</b>, and tested the <b>Emirates</b> website with vision-impaired engineers.</li><li><b>Ubisoft Toronto</b>, 2020: PlayStation 5 performance testing lead.</li></ul>',
      acts: [{ label: 'See the trail', href: '#/experience' }],
      next: ['games', 'education', 'process']
    },
    {
      id: 'experience', chip: 'Career timeline',
      keys: ['experience', 'career', 'timeline', 'history', 'work history', 'previous jobs', 'past jobs', 'how many years', 'years of experience', 'how long', 'seniority', 'senior'],
      a: '<p>10 years across design, research and testing:</p><ul><li>2010 to 2014: Bachelor of Technology, IT</li><li>2014 to 2019: Senior User Acceptance Tester, QA InfoTech</li><li>2020: Senior Development Tester, Ubisoft Toronto</li><li>2020 to 2022: Master of Information, UX Design, University of Toronto</li><li>2022 to now: UX Performance Lead, HMI Engineer, Stellantis</li></ul><p>Alongside: MySleepyTale and community projects.</p>',
      acts: [{ label: 'See the trail', href: '#/experience' }],
      next: ['stellantis', 'tester', 'resume']
    },
    {
      id: 'education', chip: 'Education',
      keys: ['education', 'degree', 'university', 'school', 'masters', 'master', 'studied', 'where did he study', 'uoft', 'u of t', 'toronto university', 'university of toronto', 'bachelor', 'btech', 'college', 'graduate'],
      a: '<ul><li><b>Master of Information, User Experience Design</b>, University of Toronto, 2020 to 2022. Research Alerts and Aug-Fice came from here, and he also took video game UX courses.</li><li><b>Bachelor of Technology, Information Technology</b>, Dr. A.P.J. Abdul Kalam Technical University, India, 2010 to 2014.</li></ul>',
      next: ['research-alerts', 'aug-fice', 'experience']
    },
    {
      id: 'games', chip: 'Games and PS5',
      keys: ['games', 'gaming', 'gamer', 'video games', 'ubisoft', 'playstation', 'ps5', 'sony', 'console', 'devkit', 'performance testing', 'play games', 'favourite game', 'favorite game'],
      a: '<p>Gaming is his oldest passion, going back to the 1990s in India, when gaming there was almost non-existent.</p><p>At <b>Ubisoft Toronto</b> in 2020 he led PlayStation 5 performance testing on the DevTester team. The team hit 100% of the promised performance targets, and he wrote next-gen tool guides. He spent more time performance testing games than playing them, and still plays more than he should.</p><p>Gamer tip: this site has a hidden code. Try it on the homepage.</p>',
      next: ['vr', 'tester', 'hobbies']
    },
    {
      id: 'ai', chip: 'How he uses AI',
      keys: ['ai', 'artificial intelligence', 'claude', 'llm', 'gpt', 'chatgpt', 'machine learning', 'prototype', 'prototyping', 'vibe coding', 'ai experience', 'code', 'coding', 'developer', 'build', 'technical'],
      a: '<p>AI speeds up his validation, benchmarking and prototypes, but research still makes the call. He prototypes from paper sketch to working app:</p><ul><li><b>CoDesigner</b>, built with Claude from his specs and flows, with no engineering team</li><li><b>MySleepyTale</b>, sketched on paper, then coded with Claude</li><li>AI filmmaking for clients in his video practice</li></ul>',
      next: ['codesigner', 'mysleepytale', 'hobbies']
    },
    {
      id: 'impact', chip: 'Results and numbers',
      keys: ['impact', 'results', 'numbers', 'metrics', 'achievements', 'accomplishments', 'outcomes', 'proud', 'kpi', 'success'],
      a: '<ul><li>Up to <b>60%</b> fewer overspeeding-related accidents projected across the Stellantis fleet</li><li><b>30%</b> uplift in UX quality from the continuous improvement loop he owns</li><li><b>20%</b> of all bugs reported and <b>25%</b> fewer crashes at Hike Messenger</li><li><b>100%</b> of promised PS5 performance targets met at Ubisoft</li><li>Admin tasks made <b>three times</b> easier for a not-for-profit</li><li>Sales grown up to <b>4x</b> for hospitality businesses in the Himalayas and Toronto</li></ul>',
      next: ['award', 'stellantis', 'community']
    },
    {
      id: 'award', chip: 'Awards',
      keys: ['award', 'awards', 'recognition', 'silent hero', 'prize', 'honour', 'honor'],
      a: '<p>Sahil received the <b>Silent Hero award</b> from Stellantis UX for his contribution to ADAS design. He’d rather let the work do the talking.</p>',
      next: ['stellantis', 'impact']
    },
    {
      id: 'leadership', chip: 'Leadership',
      keys: ['leadership', 'lead', 'leader', 'manage', 'manager', 'management', 'team', 'teams', 'direct reports', 'mentor', 'collaborate', 'collaboration', 'stakeholders', 'cross functional'],
      a: '<p>At Stellantis he leads without direct reports, aligning engineering, product and design across 14 brands, and working with Tier 1 suppliers and regulators. He managed a team at QA InfoTech, and manages people and owns the roadmap at MySleepyTale.</p>',
      next: ['process', 'stellantis', 'mysleepytale']
    },
    {
      id: 'accessibility', chip: 'Accessibility',
      keys: ['accessibility', 'accessible', 'a11y', 'inclusive', 'inclusion', 'disability', 'vision impaired', 'wcag'],
      a: '<p>He brings in the people who’ll actually use the product. At QA InfoTech he improved the accessibility of the <b>Emirates</b> website by testing it with vision-impaired engineers, and his in-vehicle work is built to be glanceable and safe at speed.</p>',
      next: ['research', 'process']
    },
    {
      id: 'vr', chip: 'AR and VR',
      keys: ['vr', 'ar', 'xr', 'virtual reality', 'augmented reality', 'headset', 'metaverse', 'spatial'],
      a: '<p>Sahil has led 12 VR user research sessions and shared the findings with the developer community. He also designed <b>Aug-Fice</b>, a focus app for mixed reality glasses.</p>',
      acts: [{ label: 'Read Aug-Fice', href: '#/aug-fice' }],
      next: ['aug-fice', 'games']
    },
    {
      id: 'hobbies', chip: 'Off the clock',
      keys: ['hobbies', 'hobby', 'free time', 'spare time', 'weekends', 'fun', 'interests', 'outside work', 'photography', 'photographer', 'camera', 'drone', 'video', 'film', 'filmmaker', 'videography', 'bcg', 'nokia', 'freelance'],
      a: '<p>He spends weekends behind a camera. He’s a photographer, video editor, drone pilot and AI filmmaker, for clients like <b>Boston Consulting Group</b>, <b>Nokia</b> and major event companies.</p><p>He also loves games, open source software and tinkering: he roots his Android phone and plays with mods.</p>',
      acts: [{ label: 'Off the clock', href: '#/play' }],
      next: ['games', 'vr', 'values']
    },
    {
      id: 'community', chip: 'Community work',
      keys: ['community', 'not for profit', 'nonprofit', 'non profit', 'volunteer', 'charity', 'hospitality', 'himalayas', 'style guide', 'restaurant', 'hotel', 'clients'],
      a: '<ul><li>A scalable UI and style guide for a not-for-profit that made everyday admin tasks three times easier</li><li>Digital work that helped hospitality businesses in the Himalayas and Toronto grow sales up to 4x</li><li>12 VR user research sessions, with findings shared back to developers</li></ul>',
      next: ['mysleepytale', 'impact']
    },
    {
      id: 'values', chip: 'What he cares about',
      keys: ['values', 'care about', 'cares about', 'believe', 'beliefs', 'passion', 'passionate', 'motivates', 'motivation', 'privacy', 'open source', 'ethics', 'personality', 'what is he like'],
      a: '<p>Safety first in the car, evidence over opinion in design reviews, and respect for users’ data. He once saw an employer collect customer data it didn’t need, felt that cheated people, and pushes against it. He also loves open source.</p>',
      next: ['process', 'hobbies']
    },
    {
      id: 'brands', chip: 'Brands he’s worked with',
      keys: ['brands', 'clients list', 'companies worked', 'worked with', 'who has he worked with', 'logos'],
      a: '<p><b>Stellantis</b> brands including Dodge, Jeep, RAM, Maserati and Alfa Romeo; <b>Ubisoft</b> and <b>Sony PlayStation</b>; <b>Hike Messenger</b>, <b>Adobe</b>, <b>Emirates</b> and <b>ESQ</b> through QA InfoTech; and <b>Boston Consulting Group</b> and <b>Nokia</b> for photo and film work.</p>',
      next: ['experience', 'hobbies']
    },
    {
      id: 'location', chip: 'Where he’s based',
      keys: ['location', 'where is he', 'where does he live', 'based', 'city', 'country', 'canada', 'toronto', 'brampton', 'ontario', 'remote', 'remotely', 'work from home', 'wfh', 'hybrid', 'relocate', 'relocation', 'time zone', 'timezone', 'onsite', 'office'],
      a: '<p>Sahil is in the Toronto area, in Ontario, Canada. He has worked fully remote since 2021, across time zones with teams around the world.</p><p>For relocation or office questions, ask him directly.</p>',
      acts: [{ label: 'Copy email', copy: EMAIL }],
      next: ['contact', 'hire']
    },
    {
      id: 'hire', chip: 'Is he open to roles?',
      keys: ['hire', 'hiring', 'open to work', 'open to', 'new roles', 'new job', 'looking for work', 'job search', 'available', 'availability', 'looking for', 'new role', 'job opportunity', 'opportunity', 'recruiter', 'interview', 'salary', 'compensation', 'notice period', 'start date', 'visa', 'work permit', 'sponsorship', 'why hire', 'why should we hire', 'strengths', 'good fit', 'freelance work', 'contract'],
      a: '<p>The best way to talk about a role is to write to him. Tell him what you’re working on, and he’ll reply himself. Questions like timing, compensation or work authorization are his to answer.</p><p>What he brings: a tester’s eye for where products break, research-led design for safety-critical features, and the habit of prototyping with AI to learn fast.</p>',
      acts: [{ label: 'Copy email', copy: EMAIL }, { label: 'Download resume', href: RESUME, ext: true }],
      next: ['impact', 'process', 'experience']
    },
    {
      id: 'contact', chip: 'Contact Sahil',
      keys: ['contact', 'email', 'reach', 'get in touch', 'message him', 'talk to him', 'phone', 'call', 'linkedin', 'connect', 'socials', 'medium', 'blog', 'writing'],
      a: '<p>Email him at <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>. He also writes on Medium.</p>',
      acts: [{ label: 'Copy email', copy: EMAIL }, { label: 'Contact section', href: '#/contact' }],
      next: ['hire', 'resume']
    },
    {
      id: 'resume', chip: 'Resume',
      keys: ['resume', 'cv', 'curriculum vitae', 'pdf', 'download'],
      a: '<p>His one-page resume covers experience, education and the numbers behind them.</p>',
      acts: [{ label: 'Download resume', href: RESUME, ext: true }, { label: 'Resume section', href: '#/resume' }],
      next: ['experience', 'contact']
    },
    {
      id: 'skills', chip: 'Skills',
      keys: ['skills', 'skill set', 'expertise', 'specialty', 'speciality', 'good at', 'tools', 'software', 'figma', 'strength', 'capabilities', 'what can he do'],
      a: '<ul><li>Safety-critical in-vehicle HMI: glanceable cluster guidance and alerts</li><li>User research, usability testing, OEM benchmarking and human factors</li><li>Alignment workshops and turning complex logic into near hi-fi designs</li><li>Requirements, use cases and roadmap input</li><li>AI prototyping from sketch to working app</li><li>QA, performance and accessibility testing</li></ul>',
      next: ['process', 'ai', 'research']
    },
    {
      id: 'autonomy', chip: 'Self-driving work?',
      keys: ['self driving', 'autonomous', 'autonomy', 'l2', 'l2 plus', 'level 2', 'sae', 'hands free', 'autopilot'],
      a: '<p>His Speed Control features are designed to work alongside L2 and L2++ systems, so he works closely with those teams. He didn’t lead the L2 systems themselves.</p>',
      next: ['stellantis', 'icc']
    },
    {
      id: 'site', chip: 'About this site',
      keys: ['this site', 'website', 'who made this', 'who designed this', 'off road', 'easter egg', 'secret', 'hidden', 'konami'],
      a: '<p>Sahil designed this site. A few things to try: move your pointer over the terrain at the top, and there’s a hidden code that classic gamers will know.</p>',
      next: ['games', 'work']
    },
    {
      id: 'bot', chip: 'Who are you?',
      keys: ['who are you', 'what are you', 'are you ai', 'are you a bot', 'are you real', 'are you human', 'your name', 'scout', 'how do you work', 'chatbot'],
      a: '<p>I’m Scout, a small guide built into Sahil’s site. I run in your browser and only know what’s on this site and his resume. I’m not Sahil, so for anything I can’t answer, email him.</p>',
      next: ['intro', 'contact']
    }
  ];

  var SMALL = [
    { id: 'hi', keys: ['hi', 'hello', 'hey', 'hiya', 'yo', 'good morning', 'good afternoon', 'good evening', 'sup'], a: '<p>Hi! Ask me about Sahil’s work, background or how to reach him.</p>', next: ['intro', 'work', 'contact'] },
    { id: 'thanks', keys: ['thanks', 'thank you', 'thx', 'cheers', 'great', 'cool', 'awesome', 'nice', 'perfect', 'ok', 'okay'], a: '<p>Happy to help. Anything else you’d like to know?</p>', next: ['work', 'hire', 'contact'] },
    { id: 'bye', keys: ['bye', 'goodbye', 'see you', 'later'], a: '<p>Thanks for stopping by. If something sparked an idea, Sahil would like to hear it.</p>', acts: [{ label: 'Copy email', copy: EMAIL }] }
  ];

  var FALLBACK = '<p>I don’t know that one yet. I only know what’s on this site and Sahil’s resume. Try one of these, or email him and he’ll answer himself.</p>';
  var START = ['intro', 'icc', 'mysleepytale', 'tester', 'hire', 'hobbies'];

  /* ------------------------------------------------------------------ matching */
  var STOP = { a: 1, an: 1, the: 1, is: 1, are: 1, was: 1, do: 1, does: 1, did: 1, he: 1, his: 1, him: 1, sahil: 1, faraz: 1, sahils: 1, me: 1, i: 1, you: 1, your: 1, to: 1, of: 1, in: 1, on: 1, for: 1, and: 1, or: 1, what: 1, whats: 1, can: 1, could: 1, tell: 1, about: 1, please: 1, any: 1, has: 1, have: 1, with: 1, at: 1, it: 1, this: 1, that: 1, there: 1, be: 1, so: 1, my: 1, know: 1 };
  var norm = function (s) { return (' ' + String(s).toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9+]+/g, ' ') + ' ').replace(/\s+/g, ' '); };
  var stem = function (w) {
    if (w.length > 4) w = w.replace(/(ies)$/, 'y').replace(/(ing|ed|es|s)$/, '');
    return w;
  };
  var toks = function (s) { return norm(s).trim().split(' ').filter(Boolean).map(stem); };
  var lev1 = function (a, b) { // true when a and b differ by at most one edit
    if (a === b) return true;
    var la = a.length, lb = b.length;
    if (Math.abs(la - lb) > 1) return false;
    var i = 0, j = 0, d = 0;
    while (i < la && j < lb) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++d > 1) return false;
      if (la > lb) i++; else if (lb > la) j++; else { i++; j++; }
    }
    return d + (la - i) + (lb - j) <= 1;
  };
  var ALL = TOPICS.concat(SMALL);
  var byId = {};
  ALL.forEach(function (t) {
    byId[t.id] = t;
    t._keys = t.keys.map(function (k) { return { raw: norm(k), t: toks(k) }; });
  });

  var match = function (q) {
    var nq = norm(q), qt = toks(q), whole = nq.trim();
    var content = qt.filter(function (w) { return !STOP[w]; });
    var has = function (w) {
      for (var i = 0; i < qt.length; i++) {
        if (qt[i] === w) return true;
        if (w.length >= 5 && qt[i].length >= 5 && lev1(qt[i], w)) return true;
      }
      return false;
    };
    var best = null, bestScore = 0;
    ALL.forEach(function (t) {
      var s = 0;
      t._keys.forEach(function (k) {
        var meaningful = k.t.filter(function (w) { return !STOP[w]; });
        if (!meaningful.length) { // phrases made only of small words, like "who are you"
          if (whole === k.raw.trim()) s += 4;
          return;
        }
        var hit = meaningful.filter(has).length;
        if (hit === meaningful.length) s += 1 + 1.5 * hit + (nq.indexOf(k.raw) > -1 ? 1 : 0) + (whole === k.raw.trim() ? 3 : 0);
        else if (meaningful.length > 2 && hit / meaningful.length >= .6) s += hit * .6;
      });
      // greetings and thanks only win when the message is short
      if (SMALL.indexOf(t) > -1 && content.length > 2) s *= .3;
      if (s > bestScore) { bestScore = s; best = t; }
    });
    return bestScore >= 2.5 ? best : null;
  };

  /* ------------------------------------------------------------------ UI */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var G = window.gsap || null;
  var botSVG = function () {
    return '<svg class="scout-bot" viewBox="0 0 64 64" aria-hidden="true" focusable="false">' +
      '<g class="sb-float"><g class="sb-head">' +
      '<line x1="32" y1="15" x2="32" y2="7.5" stroke="url(#sc-rim)" stroke-width="2" stroke-linecap="round"/>' +
      '<circle class="sb-ping" cx="32" cy="6" r="5" fill="none" stroke="#EBFC72" stroke-width="1.2"/>' +
      '<circle class="sb-tip" cx="32" cy="6" r="2.8" fill="url(#sc-eye)"/>' +
      '<rect x="3.5" y="28" width="5" height="12" rx="2.5" fill="#2A2D20"/>' +
      '<rect x="55.5" y="28" width="5" height="12" rx="2.5" fill="#2A2D20"/>' +
      '<rect x="7" y="14.5" width="50" height="40" rx="17" fill="url(#sc-shell)" stroke="url(#sc-rim)" stroke-width="1.6"/>' +
      '<rect x="13" y="22" width="38" height="22" rx="11" fill="#070804"/>' +
      '<path d="M15 26.5c1.6-2.4 4.4-3.8 7.4-3.8h8" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="1.6" stroke-linecap="round"/>' +
      '<g class="sb-look"><g class="sb-eyes" filter="url(#sc-glow)">' +
      '<rect class="sb-eye sb-eye-l" x="21.5" y="27.5" width="6.5" height="11" rx="3.25" fill="url(#sc-eye)"/>' +
      '<rect class="sb-eye sb-eye-r" x="36" y="27.5" width="6.5" height="11" rx="3.25" fill="url(#sc-eye)"/></g>' +
      '<g class="sb-happy" fill="none" stroke="url(#sc-eye)" stroke-width="2.6" stroke-linecap="round" filter="url(#sc-glow)">' +
      '<path d="M21.5 35c1-3 5.5-3 6.5 0"/><path d="M36 35c1-3 5.5-3 6.5 0"/></g>' +
      '<g class="sb-blush" fill="#FF8F7E"><ellipse cx="17.6" cy="39.4" rx="2.7" ry="1.6"/><ellipse cx="46.4" cy="39.4" rx="2.7" ry="1.6"/></g>' +
      '<path class="sb-mouth" d="M28.5 40.4Q32 43.4 35.5 40.4" fill="none" stroke="url(#sc-eye)" stroke-width="1.8" stroke-linecap="round" filter="url(#sc-glow)"/></g>' +
      '<rect x="27" y="48" width="10" height="2" rx="1" fill="#EBFC72" fill-opacity=".35"/>' +
      '</g></g></svg>';
  };
  var ic = function (id) { return '<svg class="ic" aria-hidden="true" focusable="false"><use href="#' + id + '"/></svg>'; };

  var root = document.createElement('div');
  root.className = 'scout';
  root.innerHTML =
    '<svg class="scout-defs" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="sc-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EBFC72"/><stop offset="1" stop-color="#8C9A22"/></linearGradient>' +
      '<linearGradient id="sc-eye" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F6FFB0"/><stop offset="1" stop-color="#EBFC72"/></linearGradient>' +
      '<linearGradient id="sc-shell" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2D20"/><stop offset="1" stop-color="#131409"/></linearGradient>' +
      '<filter id="sc-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '<symbol id="i-send-horizontal" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.4714 2.12L22 12L3.4714 21.88C2.7309 22.2749 1.8627 21.637 2.0182 20.8123L3.575 12.5559C3.6443 12.1885 3.6443 11.8115 3.575 11.4441L2.0182 3.1877C1.8627 2.363 2.7309 1.7251 3.4714 2.12ZM3.6799 12L22 12"/></symbol>' +
      '<symbol id="i-rotate-ccw" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.2117 10.0593C3.071 10.6966 3 11.3473 3 12C3 16.9706 7.0294 21 12 21C16.9706 21 21 16.9706 21 12C21 7.0294 16.9706 3 12 3C9.5169 3 7.1441 4.0259 5.4432 5.8349M4.2857 3L4.7293 6.105C4.7683 6.3784 5.0216 6.5683 5.295 6.5293L8.4 6.0857"/></symbol>' +
    '</defs></svg>' +
    '<section class="scout-panel" id="scout-panel" role="dialog" aria-modal="false" aria-labelledby="scout-title">' +
      '<header class="scout-head">' + botSVG() +
        '<div class="scout-head__t"><h2 id="scout-title">Ask Scout about Sahil</h2><p>Online</p></div>' +
        '<button class="scout-iconbtn" type="button" data-sc-reset aria-label="Start over">' + ic('i-rotate-ccw') + '</button>' +
        '<button class="scout-iconbtn" type="button" data-sc-close aria-label="Close">' + ic('i-x') + '</button>' +
      '</header>' +
      '<div class="scout-log" data-sc-log data-lenis-prevent role="log" aria-live="polite" tabindex="-1"></div>' +
      '<div class="scout-chips" data-sc-chips data-lenis-prevent role="group" aria-label="Suggested questions"></div>' +
      '<form class="scout-form" data-sc-form autocomplete="off">' +
        '<label class="sr-only" for="scout-q" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Ask a question about Sahil</label>' +
        '<input id="scout-q" name="q" type="text" maxlength="200" placeholder="Ask about his work, skills or background" enterkeyhint="send">' +
        '<button class="scout-send" type="submit" aria-label="Send" disabled>' + ic('i-send-horizontal') + '</button>' +
      '</form>' +
      '<p class="scout-foot">Scout knows this site. Sahil knows the rest.</p>' +
    '</section>' +
    '<div class="scout-tease" data-sc-tease role="status">' +
      '<button class="scout-tease__open" type="button" data-sc-open-tease>Hi, I’m <b>Scout</b>. Ask me anything about Sahil.</button>' +
      '<button class="scout-tease__x" type="button" data-sc-tease-x aria-label="Dismiss">' + ic('i-x') + '</button>' +
    '</div>' +
    '<button class="scout-launch" type="button" data-sc-launch aria-expanded="false" aria-controls="scout-panel" aria-label="Ask Scout about Sahil">' +
      botSVG() + '<span class="scout-launch__x">' + ic('i-x') + '</span></button>';
  document.body.appendChild(root);

  var $ = function (s) { return root.querySelector(s); };
  var panel = $('.scout-panel'), log = $('[data-sc-log]'), chips = $('[data-sc-chips]'), form = $('[data-sc-form]');
  var input = $('#scout-q'), send = $('.scout-send'), launch = $('[data-sc-launch]'), tease = $('[data-sc-tease]');
  var bots = Array.prototype.slice.call(root.querySelectorAll('.scout-bot'));
  var launchBot = launch.querySelector('.scout-bot'), headBot = panel.querySelector('.scout-bot');
  var isOpen = false, busy = false, greeted = false, history = [];
  var isPhone = function () { return window.matchMedia('(max-width: 600px)').matches; };

  var track = function (topic, unanswered) {
    try { if (window.gtag) window.gtag('event', 'scout_question', { topic: topic, answered: !unanswered }); } catch (e) {}
    try { if (window.clarity) window.clarity('event', 'scout_' + topic); } catch (e) {}
  };
  var save = function () { try { sessionStorage.setItem('sf-scout', JSON.stringify(history.slice(-40))); } catch (e) {} };

  /* ---------- character life ---------- */
  var setHappy = function (on) { bots.forEach(function (b) { b.classList.toggle('is-happy', on); }); };
  var blink = function () {
    if (G && !reduced) G.to(root.querySelectorAll('.sb-eye'), { scaleY: .1, duration: .09, yoyo: true, repeat: 1, ease: 'power1.inOut' });
    setTimeout(blink, 2600 + Math.random() * 3800);
  };
  var thinking = null;
  var think = function (on) {
    if (!G || reduced) return;
    var eyes = root.querySelectorAll('.sb-eye');
    if (thinking) { thinking.kill(); thinking = null; }
    if (on) {
      G.to(eyes, { scaleY: .45, duration: .2, ease: 'power2.out' });
      thinking = G.timeline({ repeat: -1, yoyo: true }).to(root.querySelectorAll('.sb-eyes'), { x: 3, duration: .35, ease: 'sine.inOut' }).to(root.querySelectorAll('.sb-eyes'), { x: -3, duration: .7, ease: 'sine.inOut' });
    } else {
      G.to(eyes, { scaleY: 1, duration: .25, ease: 'back.out(2)' });
      G.to(root.querySelectorAll('.sb-eyes'), { x: 0, duration: .3, ease: 'power2.out' });
    }
  };
  var ping = function () {
    if (!G || reduced) return;
    G.fromTo(root.querySelectorAll('.sb-ping'), { scale: .6, opacity: .9 }, { scale: 2.2, opacity: 0, duration: 1, ease: 'power2.out' });
  };
  var cheer = function () {
    setHappy(true); ping();
    if (G && !reduced) G.fromTo(headBot.querySelector('.sb-head'), { rotation: -6, transformOrigin: '50% 90%' }, { rotation: 0, duration: .8, ease: 'elastic.out(1, .45)' });
    setTimeout(function () { bots.forEach(function (b) { if (!looks || !looks.some(function (l) { return l.b === b && l.mood === 3; })) b.classList.remove('is-happy'); }); }, 1400);
  };
  if (G && !reduced) {
    bots.forEach(function (b, i) {
      G.to(b.querySelector('.sb-float'), { y: -2.5, duration: 1.6 + i * .3, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    });
    /* eyes follow the cursor; the closer it gets, the more excited Scout is
       0 calm (far) · 1 curious · 2 excited · 3 thrilled (cursor right on him) */
    var looks = bots.map(function (b) {
      var look = b.querySelector('.sb-look'), head = b.querySelector('.sb-head'), eyes = b.querySelector('.sb-eyes');
      var blush = b.querySelector('.sb-blush'), mouth = b.querySelector('.sb-mouth'), tip = b.querySelector('.sb-tip');
      G.set(head, { transformOrigin: '50% 80%' });
      G.set([eyes, mouth], { transformOrigin: '50% 50%' });
      G.set(blush, { opacity: 0 }); G.set(mouth, { opacity: 0, scaleX: .6 });
      return {
        b: b, eyes: eyes, blush: blush, mouth: mouth, tip: tip, head: head, mood: -1, hop: null, lastPing: 0,
        x: G.quickTo(look, 'x', { duration: .35, ease: 'power3.out' }),
        y: G.quickTo(look, 'y', { duration: .35, ease: 'power3.out' }),
        r: G.quickTo(head, 'rotation', { duration: .6, ease: 'power3.out' })
      };
    });
    var MOODS = [
      { eyes: 1, eyesY: 1, mouth: 0, mScale: .6, blush: 0, tip: 1 },
      { eyes: 1.06, eyesY: 1.1, mouth: 0, mScale: .6, blush: 0, tip: 1.25 },
      { eyes: 1.12, eyesY: 1.22, mouth: 1, mScale: 1, blush: .55, tip: 1.5 },
      { eyes: 1.12, eyesY: 1.22, mouth: 1, mScale: 1.35, blush: .95, tip: 1.7 }
    ];
    var setMood = function (l, m) {
      if (l.mood === m) return;
      var up = m > l.mood; l.mood = m;
      var c = MOODS[m];
      G.to(l.eyes, { scaleX: c.eyes, scaleY: c.eyesY, duration: .35, ease: up ? 'back.out(3)' : 'power2.out', overwrite: 'auto' });
      G.to(l.mouth, { opacity: c.mouth, scaleX: c.mScale, scaleY: c.mScale, duration: .3, ease: 'back.out(2.5)' });
      G.to(l.blush, { opacity: c.blush, duration: .4, ease: 'power2.out' });
      G.to(l.tip, { scale: c.tip, transformOrigin: '50% 50%', duration: .3, ease: 'back.out(3)' });
      l.b.classList.toggle('is-happy', m === 3);
      if (l.hop) { l.hop.kill(); l.hop = null; G.to(l.head, { y: 0, duration: .25, ease: 'power2.out' }); }
      if (m === 3) l.hop = G.timeline({ repeat: -1, repeatDelay: .25 }).to(l.head, { y: -3.5, duration: .16, ease: 'power2.out' }).to(l.head, { y: 0, duration: .32, ease: 'bounce.out' });
      if (m >= 2 && up) { var now = Date.now(); if (now - l.lastPing > 900) { l.lastPing = now; G.fromTo(l.b.querySelectorAll('.sb-ping'), { scale: .6, opacity: .9 }, { scale: 2.2, opacity: 0, duration: .9, ease: 'power2.out' }); } }
    };
    var react = function (e) {
      looks.forEach(function (l) {
        var r = l.b.getBoundingClientRect();
        if (!r.width) return;
        var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        var dx = e.clientX - cx, dy = e.clientY - cy;
        var d = Math.max(1, Math.hypot(dx, dy)), k = Math.min(1, d / 240);
        l.x(dx / d * 5 * k); l.y(dy / d * 3.6 * k); l.r(Math.max(-9, Math.min(9, dx / 45)));
        var reach = r.width / 2;
        setMood(l, d <= reach + 50 ? 3 : d <= reach + 200 ? 2 : d <= reach + 460 ? 1 : 0);
      });
    };
    window.addEventListener('pointermove', function (e) { if (e.pointerType !== 'touch') react(e); }, { passive: true });
    document.addEventListener('pointerleave', function () { looks.forEach(function (l) { setMood(l, 0); l.x(0); l.y(0); l.r(0); }); });
    // while he's excited, the antenna keeps pinging
    setInterval(function () {
      looks.forEach(function (l) {
        if (l.mood < 2 || !l.b.getBoundingClientRect().width) return;
        l.lastPing = Date.now();
        G.fromTo(l.b.querySelectorAll('.sb-ping'), { scale: .6, opacity: .9 }, { scale: 2.2, opacity: 0, duration: .9, ease: 'power2.out' });
      });
    }, 1400);
    setTimeout(blink, 1800);
  }

  /* ---------- messages ---------- */
  var scrollDown = function () { log.scrollTop = log.scrollHeight; };
  var addMsg = function (who, html, animate) {
    var el = document.createElement('div');
    el.className = 'scout-msg scout-msg--' + who;
    if (who === 'me') el.textContent = html; else el.innerHTML = html;
    log.appendChild(el);
    if (animate && G && !reduced) G.from(el, { y: 14, opacity: 0, scale: .96, transformOrigin: who === 'me' ? '100% 100%' : '0% 100%', duration: .55, ease: 'expo.out' });
    scrollDown();
    return el;
  };
  var addActs = function (acts, animate) {
    if (!acts || !acts.length) return;
    var wrap = document.createElement('div');
    wrap.className = 'scout-acts';
    acts.forEach(function (a) {
      var el;
      if (a.copy) {
        el = document.createElement('button'); el.type = 'button';
        el.innerHTML = ic('i-copy') + '<span>' + a.label + '</span>';
        el.addEventListener('click', function () {
          var done = function () { el.querySelector('span').textContent = 'Copied'; el.querySelector('use').setAttribute('href', '#i-check'); setTimeout(function () { el.querySelector('span').textContent = a.label; el.querySelector('use').setAttribute('href', '#i-copy'); }, 1800); };
          try { navigator.clipboard.writeText(a.copy).then(done, function () { location.href = 'mailto:' + a.copy; }); } catch (e) { location.href = 'mailto:' + a.copy; }
          track('copy_email');
        });
      } else {
        el = document.createElement('a'); el.href = a.href;
        el.innerHTML = '<span>' + a.label + '</span>' + ic(a.ext ? 'i-arrow-up-right' : 'i-arrow-right');
        if (a.ext) { el.target = '_blank'; el.rel = 'noopener'; }
        else el.addEventListener('click', function () {
          var isCase = !/^#\/(work|how|experience|play|about|resume|contact)$/.test(a.href);
          if (isCase || isPhone()) close();
          if (location.hash === a.href) { // same hash: nudge the router so it scrolls again
            try { window.dispatchEvent(new HashChangeEvent('hashchange')); } catch (e) {}
          }
        });
      }
      el.className = 'scout-act';
      wrap.appendChild(el);
    });
    log.appendChild(wrap);
    if (animate && G && !reduced) G.from(wrap.children, { y: 10, opacity: 0, duration: .5, stagger: .06, ease: 'expo.out', delay: .1 });
    scrollDown();
  };
  var setChips = function (ids) {
    chips.innerHTML = '';
    var asked = {};
    history.forEach(function (h) { if (h.t) asked[h.t] = 1; });
    var list = (ids || START).filter(function (id) { return byId[id] && byId[id].chip && !asked[id]; });
    if (list.length < 3) START.concat(['work', 'process', 'contact', 'skills']).forEach(function (id) { if (list.length < 4 && list.indexOf(id) < 0 && !asked[id]) list.push(id); });
    list.slice(0, 5).forEach(function (id) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'scout-chip'; b.textContent = byId[id].chip;
      b.addEventListener('click', function () { ask(byId[id].chip, id); });
      chips.appendChild(b);
    });
    chips.scrollLeft = 0;
    if (G && !reduced) G.from(chips.children, { x: 16, opacity: 0, duration: .5, stagger: .04, ease: 'expo.out' });
  };

  var answer = function (topic, animate) {
    var html = topic ? topic.a : FALLBACK;
    addMsg('bot', html, animate);
    if (topic) addActs(topic.acts, animate);
    else addActs([{ label: 'Copy email', copy: EMAIL }], animate);
    setChips(topic ? topic.next : START);
  };

  var ask = function (text, forcedId) {
    text = String(text || '').trim();
    if (!text || busy) return;
    busy = true;
    addMsg('me', text, true);
    input.value = ''; send.disabled = true;
    var topic = forcedId ? byId[forcedId] : match(text);
    history.push({ q: text, t: topic ? topic.id : null });
    save();
    track(topic ? topic.id : 'unanswered', !topic);
    var typing = document.createElement('div');
    typing.className = 'scout-msg scout-msg--bot scout-msg--typing';
    typing.setAttribute('aria-label', 'Scout is typing');
    typing.innerHTML = '<i></i><i></i><i></i>';
    log.appendChild(typing); scrollDown();
    think(true);
    var wait = reduced ? 0 : 450 + Math.min(700, (topic ? topic.a.length : 120) * 1.2);
    setTimeout(function () {
      typing.remove(); think(false);
      answer(topic, true);
      if (topic) cheer();
      busy = false;
    }, wait);
  };

  var greet = function () {
    if (greeted) return;
    greeted = true;
    var saved = [];
    try { saved = JSON.parse(sessionStorage.getItem('sf-scout') || '[]'); } catch (e) {}
    addMsg('bot', '<p>Hi, I’m Scout. I can tell you about Sahil’s work, his background and how to reach him. Pick a question or type your own.</p>', true);
    if (saved.length) {
      saved.forEach(function (h) { addMsg('me', h.q, false); answer(h.t ? byId[h.t] : null, false); history.push(h); });
    } else setChips(START);
  };

  /* ---------- open and close ---------- */
  var hideTease = function () {
    if (!tease.classList.contains('is-on')) return;
    tease.classList.remove('is-on');
    if (G && !reduced) G.to(tease, { opacity: 0, y: 8, duration: .3, ease: 'power2.in', onComplete: function () { tease.style.visibility = 'hidden'; } });
    else { tease.style.opacity = 0; tease.style.visibility = 'hidden'; }
  };
  var open = function () {
    if (isOpen) return;
    isOpen = true; hideTease();
    try { sessionStorage.setItem('sf-scout-seen', '1'); } catch (e) {}
    root.classList.add('is-open');
    launch.setAttribute('aria-expanded', 'true');
    launch.setAttribute('aria-label', 'Close Scout');
    greet();
    if (G && !reduced) {
      G.killTweensOf(panel);
      G.fromTo(panel, { opacity: 0, y: 24, scale: .9, clipPath: 'inset(30% 0% 0% 30% round 10px)' }, { opacity: 1, y: 0, scale: 1, clipPath: 'inset(0% 0% 0% 0% round 10px)', duration: .7, ease: 'expo.out' });
      G.from(panel.querySelectorAll('.scout-head > *'), { y: 10, opacity: 0, duration: .5, stagger: .05, ease: 'expo.out', delay: .12 });
    }
    setTimeout(cheer, 250);
    track('open');
    setTimeout(function () { if (!isPhone()) input.focus({ preventScroll: true }); else log.focus({ preventScroll: true }); }, 60);
  };
  var close = function () {
    if (!isOpen) return;
    isOpen = false;
    launch.setAttribute('aria-expanded', 'false');
    launch.setAttribute('aria-label', 'Ask Scout about Sahil');
    var finish = function () { root.classList.remove('is-open'); panel.style.clipPath = ''; };
    if (G && !reduced) G.to(panel, { opacity: 0, y: 16, scale: .94, duration: .32, ease: 'power3.in', onComplete: finish });
    else finish();
    if (panel.contains(document.activeElement)) launch.focus({ preventScroll: true });
  };

  launch.addEventListener('click', function () { isOpen ? close() : open(); });
  $('[data-sc-close]').addEventListener('click', close);
  $('[data-sc-open-tease]').addEventListener('click', open);
  $('[data-sc-tease-x]').addEventListener('click', function () { hideTease(); try { sessionStorage.setItem('sf-scout-seen', '1'); } catch (e) {} });
  $('[data-sc-reset]').addEventListener('click', function () {
    history = []; save(); log.innerHTML = ''; greeted = false; greet();
    if (G && !reduced) G.fromTo($('[data-sc-reset] svg'), { rotation: 0 }, { rotation: -360, duration: .6, ease: 'expo.out' });
  });
  input.addEventListener('input', function () { send.disabled = !input.value.trim(); });
  form.addEventListener('submit', function (e) { e.preventDefault(); ask(input.value); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen) close(); });
  document.addEventListener('pointerdown', function (e) { if (isOpen && !isPhone() && !root.contains(e.target)) close(); });

  // close when the visitor leaves the homepage
  new MutationObserver(function () { if (document.body.dataset.routeKind !== 'home') { close(); hideTease(); } })
    .observe(document.body, { attributes: true, attributeFilter: ['data-route-kind'] });

  /* ---------- entrance ---------- */
  var enter = function () {
    if (G && !reduced) G.from(launch, { y: 40, scale: .5, opacity: 0, rotation: -12, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity' });
    var MXs = !!(window.__MX && window.__MX.scout);
    var seen = false;
    try { seen = sessionStorage.getItem('sf-scout-seen') === '1'; } catch (e) {}
    if (seen) return;
    setTimeout(function () {
      if (isOpen || document.body.dataset.routeKind !== 'home') return;
      tease.classList.add('is-on'); tease.style.visibility = 'visible';
      if (G && !reduced) G.fromTo(tease, { opacity: 0, y: 12, scale: .92, transformOrigin: '100% 100%' }, { opacity: 1, y: 0, scale: 1, duration: .7, ease: 'expo.out' });
      else tease.style.opacity = 1;
      ping();
      if (MXs) {
        // V13: the greeting steps aside as soon as the visitor scrolls on
        var y0 = window.scrollY, onS = function () { if (Math.abs(window.scrollY - y0) > 140) { hideTease(); window.removeEventListener('scroll', onS); } };
        window.addEventListener('scroll', onS, { passive: true });
      }
      setTimeout(hideTease, MXs ? 7000 : 12000);
    }, MXs ? 6200 : 3800);
  };
  if (document.readyState === 'complete') setTimeout(enter, 900);
  else window.addEventListener('load', function () { setTimeout(enter, 900); });

  // exposed for quick testing in the console: __scout.match('where does he work')
  window.__scout = { match: function (q) { var t = match(q); return t ? t.id : null; }, open: open, close: close };
})();
