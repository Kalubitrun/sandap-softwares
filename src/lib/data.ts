export type MockupKind = "school" | "hospital" | "business";

export type Solution = {
  slug: string;
  index: string;
  name: string;
  label: string;
  title: string;
  titleAccent: string;
  summary: string;
  intro: string;
  problems: string[];
  modules: { name: string; desc: string }[];
  rollout: { title: string; desc: string }[];
  fit: string;
  mockup: MockupKind;
};

export const solutions: Solution[] = [
  {
    slug: "schools",
    index: "01",
    name: "Schools",
    label: "Education",
    title: "The school day,",
    titleAccent: "in one system.",
    summary:
      "Admissions, fees, attendance, exams, and parent communication — connected, so your office stops chasing spreadsheets.",
    intro:
      "A school runs on a hundred small handoffs: the front desk to accounts, the class teacher to the exam cell, the transport desk to parents. We build one system that holds the whole day together — and gives every team the view they need.",
    problems: [
      "Fee follow-ups scattered across WhatsApp and paper registers",
      "Attendance entered three times before it reaches a report",
      "Exam results assembled by hand at the end of every term",
      "Parents calling the office for answers a screen could give them",
    ],
    modules: [
      { name: "Admissions", desc: "Enquiries, applications, document checks, and seat offers in one pipeline." },
      { name: "Fees & receipts", desc: "Plans, part payments, reminders, receipts, and defaulter reports." },
      { name: "Attendance", desc: "Class, staff, and transport attendance with instant absence alerts." },
      { name: "Exams", desc: "Marks entry, grade rules, report cards, and progress analysis." },
      { name: "Parent app", desc: "Notices, fees, attendance, results, and teacher communication." },
      { name: "Transport", desc: "Routes, stops, vehicle allocation, and pickup notifications." },
      { name: "Staff & payroll", desc: "Timetables, leave, salaries, and department reporting." },
      { name: "Reports", desc: "Enrolment, collection, performance, and compliance dashboards." },
    ],
    rollout: [
      { title: "Walk the day", desc: "We sit with the office, accounts, and teachers to map how work really moves." },
      { title: "Agree the core", desc: "We choose the few workflows that matter most and design those first." },
      { title: "Build in weeks", desc: "Working screens every week, tested by the people who will use them." },
      { title: "Migrate & train", desc: "Student data, fee history, and staff training handled before go-live." },
      { title: "Stay close", desc: "A named contact, fast fixes, and a roadmap for the next term." },
    ],
    fit: "Best for schools with 300–5,000 students, growing multi-branch groups, and teams tired of stitching together five tools.",
    mockup: "school",
  },
  {
    slug: "hospitals",
    index: "02",
    name: "Hospitals",
    label: "Healthcare",
    title: "Less paperwork.",
    titleAccent: "More care.",
    summary:
      "From the front desk to the ward — appointments, patient records, billing, pharmacy, and lab in one continuous flow.",
    intro:
      "In a hospital, every minute spent re-entering information is a minute taken from a patient. We build hospital systems around the actual journey — registration, consultation, diagnostics, treatment, discharge, follow-up — so clinical teams can focus on care.",
    problems: [
      "The same patient details written on four different forms",
      "OPD queues that grow because the front desk is also on the phone",
      "Billing that waits on paper slips from the pharmacy or lab",
      "Discharge summaries assembled long after the patient has left",
    ],
    modules: [
      { name: "Appointments & OPD", desc: "Slot booking, walk-ins, tokens, and queue displays." },
      { name: "Patient records", desc: "A single history: visits, diagnoses, prescriptions, and files." },
      { name: "IPD & beds", desc: "Admissions, bed board, nursing notes, and discharge summaries." },
      { name: "Billing", desc: "OPD, IPD, packages, insurance, payments, and receipts." },
      { name: "Pharmacy", desc: "Stock, batches, expiry, prescriptions, and dispensing." },
      { name: "Laboratory", desc: "Orders, sample tracking, results, and report delivery." },
      { name: "Doctor schedules", desc: "Duty rosters, availability, and consultation loads." },
      { name: "Reports", desc: "Footfall, occupancy, revenue, and clinical activity." },
    ],
    rollout: [
      { title: "Shadow the flow", desc: "We follow patients and staff through registration, consultation, and discharge." },
      { title: "Fix the friction", desc: "We start with the queues and handoffs that cost the most time." },
      { title: "Build with clinicians", desc: "Screens are reviewed by the people at the desk and in the ward." },
      { title: "Run in parallel", desc: "Migration and pilot runs happen alongside existing systems, safely." },
      { title: "Support the floor", desc: "On-site or on-call support through the first weeks and beyond." },
    ],
    fit: "Best for single and multi-specialty hospitals, clinics, diagnostic centres, and growing healthcare groups.",
    mockup: "hospital",
  },
  {
    slug: "businesses",
    index: "03",
    name: "Businesses",
    label: "Operations",
    title: "Operations you",
    titleAccent: "can actually see.",
    summary:
      "ERP, CRM, inventory, invoicing, and field operations that match how your business actually works.",
    intro:
      "Most business software asks you to change how you work. We do the opposite. We map your sales, stock, purchasing, and collections — then build a system that follows the same path, with one source of truth and a clear view of what needs attention.",
    problems: [
      "Stock counts that disagree with the warehouse and the spreadsheet",
      "Orders confirmed on WhatsApp with no record of what was promised",
      "Invoices, payments, and follow-ups tracked in three places",
      "Reports that arrive after the decision has already been made",
    ],
    modules: [
      { name: "CRM", desc: "Leads, enquiries, follow-ups, quotations, and pipeline." },
      { name: "Inventory", desc: "Items, batches, warehouses, transfers, and stock counts." },
      { name: "Invoicing", desc: "Estimates, invoices, payments, credit notes, and reminders." },
      { name: "Purchases", desc: "Vendors, purchase orders, GRNs, and payables." },
      { name: "Field sales", desc: "Routes, visits, order capture, and collection tracking." },
      { name: "Payroll", desc: "Attendance, salaries, deductions, and payslips." },
      { name: "Approvals", desc: "Rules-based sign-offs for discounts, spend, and leave." },
      { name: "Dashboards", desc: "Sales, margin, stock, receivables, and team performance." },
    ],
    rollout: [
      { title: "Map the business", desc: "We trace a real order from enquiry to cash in the bank." },
      { title: "Find the leaks", desc: "We identify where information stalls, duplicates, or disappears." },
      { title: "Build the core", desc: "One workflow at a time, with clean data behind every screen." },
      { title: "Migrate & train", desc: "Existing records, opening stock, and team habits moved carefully." },
      { title: "Improve monthly", desc: "A working partnership, not a licence and a goodbye." },
    ],
    fit: "Best for distribution, manufacturing, retail, services, and multi-location businesses ready to replace disconnected tools.",
    mockup: "business",
  },
];

export type Project = {
  slug: string;
  index: string;
  name: string;
  sector: string;
  year: string;
  tagline: string;
  summary: string;
  brief: string;
  scope: string[];
  modules: { name: string; desc: string }[];
  decisions: string[];
  cover: MockupKind;
};

export const projects: Project[] = [
  {
    slug: "vidya",
    index: "01",
    name: "Vidya",
    sector: "School operations",
    year: "Concept 2026",
    tagline: "A school that runs on one screen.",
    summary:
      "A connected school platform covering admissions, fees, attendance, exams, and the parent relationship.",
    brief:
      "School offices usually run on a patchwork of registers, spreadsheets, and messaging groups. Vidya explores what happens when every handoff lives in one calm system — one record per student, one view per role.",
    scope: ["Product strategy", "Interface design", "Design system", "Front-end build"],
    modules: [
      { name: "Admissions", desc: "Enquiry pipeline, applications, and document checks." },
      { name: "Fees", desc: "Plans, reminders, part payments, and collection reports." },
      { name: "Attendance", desc: "Class and staff registers with absence alerts." },
      { name: "Exams", desc: "Marks, grades, report cards, and performance trends." },
      { name: "Parent app", desc: "Notices, results, fees, and teacher messages." },
    ],
    decisions: [
      "One student record, visible differently to the office, teacher, and parent.",
      "Fee status is shown as a clear number, not a buried report.",
      "Every screen is built for a shared front-desk device and a busy morning.",
      "Print-ready receipts and report cards, because schools still need paper.",
    ],
    cover: "school",
  },
  {
    slug: "arogya",
    index: "02",
    name: "Arogya",
    sector: "Hospital management",
    year: "Concept 2026",
    tagline: "Calmer wards. Shorter queues.",
    summary:
      "A hospital command centre for OPD flow, patient records, beds, billing, pharmacy, and lab work.",
    brief:
      "A hospital's software should follow the patient, not the department. Arogya explores a single thread from registration to discharge, with each team seeing only what they need and nothing they don't.",
    scope: ["Service design", "Interface design", "Data modelling", "Front-end build"],
    modules: [
      { name: "OPD", desc: "Appointments, tokens, and live queue status." },
      { name: "Records", desc: "One patient history across visits and departments." },
      { name: "IPD", desc: "Bed board, admissions, nursing notes, and discharge." },
      { name: "Billing", desc: "Packages, insurance, payments, and receipts." },
      { name: "Pharmacy & lab", desc: "Stock, prescriptions, samples, and results." },
    ],
    decisions: [
      "Queue position is the largest element on the front-desk screen.",
      "Clinical notes stay one tap away from the patient's current visit.",
      "Billing reflects pharmacy and lab activity without manual re-entry.",
      "Colour is reserved for status and urgency, not decoration.",
    ],
    cover: "hospital",
  },
  {
    slug: "gati",
    index: "03",
    name: "Gati",
    sector: "Business operations",
    year: "Concept 2026",
    tagline: "Operations you can see.",
    summary:
      "An operations platform for inventory, invoicing, purchasing, field sales, and collections.",
    brief:
      "Growing businesses rarely fail for lack of software; they fail because the software doesn't match the way work moves. Gati explores a single operating picture for a multi-location business, from first enquiry to money received.",
    scope: ["Process mapping", "Interface design", "Design system", "Front-end build"],
    modules: [
      { name: "CRM", desc: "Leads, quotations, and follow-ups in one pipeline." },
      { name: "Inventory", desc: "Stock across warehouses with low-stock alerts." },
      { name: "Invoicing", desc: "Invoices, payments, credit notes, and reminders." },
      { name: "Field sales", desc: "Routes, visits, orders, and collections." },
      { name: "Dashboards", desc: "Revenue, margin, stock, and receivables at a glance." },
    ],
    decisions: [
      "The dashboard answers one question: what needs attention today?",
      "Stock and receivables are shown together, because cash is tied to both.",
      "Approvals live inside the workflow instead of in email.",
      "Works on a phone in the field and a desktop in the office.",
    ],
    cover: "business",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    desc: "We sit with the people who use the system every day. We watch the handoffs, the workarounds, and the spreadsheet nobody admits to keeping.",
  },
  {
    number: "02",
    title: "Design",
    desc: "We map the workflow, then design the screens around it. You see clickable direction before a line of production code is written.",
  },
  {
    number: "03",
    title: "Build",
    desc: "We ship in weekly increments. Real screens, real data, real feedback — so there are no surprises at the end.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "We migrate data, train teams, and run the new system alongside the old one until everyone is confident.",
  },
  {
    number: "05",
    title: "Support",
    desc: "We stay on after go-live. A named contact, fast fixes, and a roadmap that grows with your organisation.",
  },
];

export const principles = [
  {
    title: "Custom, not configured",
    desc: "We start from your workflow, not a template with fields to rename. If the system needs to work a certain way, we build it that way.",
  },
  {
    title: "One team, end to end",
    desc: "The people who design your system are the people who build it and support it. No handoffs, no account managers relaying messages.",
  },
  {
    title: "You own everything",
    desc: "Your data, your code, your hosting. No lock-in, no per-seat surprises, and no hostage negotiations if you want to move.",
  },
  {
    title: "Support that answers",
    desc: "Software doesn't stop being important after launch. We stay close, respond quickly, and keep improving the system in use.",
  },
  {
    title: "Built for real conditions",
    desc: "Shared devices, patchy networks, busy front desks, and staff who have no time for a manual. The system has to survive the real day.",
  },
  {
    title: "Small on purpose",
    desc: "A focused studio means direct access, honest timelines, and decisions made by the people doing the work.",
  },
];
