"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import {
  Activity,
  Bell,
  Boxes,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FlaskConical,
  LayoutDashboard,
  Mic,
  Pill,
  ReceiptText,
  Search,
  Settings,
  Stethoscope,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MockupKind } from "@/lib/data";

const tabs: { id: MockupKind; label: string; address: string }[] = [
  { id: "school", label: "Schools", address: "sandap.app/school" },
  { id: "hospital", label: "Hospitals", address: "sandap.app/hospital" },
  { id: "business", label: "Businesses", address: "sandap.app/business" },
];

const sidebar: Record<
  MockupKind,
  { workspace: string; items: { label: string; icon: LucideIcon; active?: boolean }[] }[]
> = {
  school: [
    {
      workspace: "St. Mary's",
      items: [
        { label: "Overview", icon: LayoutDashboard, active: true },
        { label: "Admissions", icon: ClipboardList },
        { label: "Fees", icon: Wallet },
        { label: "Attendance", icon: CalendarDays },
        { label: "Exams", icon: ReceiptText },
        { label: "Parents", icon: Users },
      ],
    },
  ],
  hospital: [
    {
      workspace: "City Care",
      items: [
        { label: "Overview", icon: LayoutDashboard, active: true },
        { label: "OPD", icon: Stethoscope },
        { label: "Patients", icon: Users },
        { label: "Beds", icon: Activity },
        { label: "Billing", icon: CreditCard },
        { label: "Pharmacy", icon: Pill },
      ],
    },
  ],
  business: [
    {
      workspace: "Northline",
      items: [
        { label: "Overview", icon: LayoutDashboard, active: true },
        { label: "Sales", icon: ReceiptText },
        { label: "Inventory", icon: Boxes },
        { label: "Invoices", icon: CreditCard },
        { label: "Reports", icon: FlaskConical },
        { label: "Team", icon: Users },
      ],
    },
  ],
};

function Sidebar({ kind }: { kind: MockupKind }) {
  const data = sidebar[kind][0];

  return (
    <aside className="hidden w-[168px] shrink-0 flex-col border-r border-[#E7E0D3] bg-[#F7F3EB] p-3 md:flex">
      <div className="flex items-center gap-2 px-1.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-[7px] bg-ink text-[10px] font-semibold text-paper">
          {data.workspace.slice(0, 1)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold tracking-[-0.01em] text-ink">
            {data.workspace}
          </p>
          <p className="text-[8px] uppercase tracking-[0.12em] text-[#9A9183]">
            Workspace
          </p>
        </div>
      </div>

      <nav className="mt-5 flex flex-col gap-0.5">
        {data.items.map((item) => (
          <span
            key={item.label}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] ${
              item.active
                ? "bg-white font-medium text-ink shadow-[0_1px_2px_rgba(20,18,15,0.06)]"
                : "text-[#7B7365]"
            }`}
          >
            <item.icon className="h-3 w-3" strokeWidth={1.7} />
            {item.label}
          </span>
        ))}
      </nav>

      <div className="mt-auto space-y-1 border-t border-[#E7E0D3] pt-2">
        <span className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] text-[#7B7365]">
          <Settings className="h-3 w-3" strokeWidth={1.7} />
          Settings
        </span>
        <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-clay-soft text-[8px] font-semibold text-clay-deep">
            AS
          </span>
          <span className="text-[9px] text-[#7B7365]">Asha S.</span>
        </div>
      </div>
    </aside>
  );
}

function DashboardChrome({
  kind,
  children,
}: {
  kind: MockupKind;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[430px] overflow-hidden rounded-[1.05rem] border border-[#E7E0D3] bg-[#FCFAF6] md:min-h-[552px]">
      <Sidebar kind={kind} />
      <div className="min-w-0 flex-1 p-4 sm:p-5">{children}</div>
    </div>
  );
}

function TopRow({
  title,
  subtitle,
  initials = "AS",
}: {
  title: string;
  subtitle: string;
  initials?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
          {title}
        </h3>
        <p className="mt-0.5 text-[9.5px] text-[#9A9183]">{subtitle}</p>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="hidden items-center gap-1.5 rounded-full border border-[#E7E0D3] bg-white px-2 py-1 text-[8.5px] text-[#9A9183] sm:flex">
          <Search className="h-2.5 w-2.5" />
          Search
        </span>
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-[#E7E0D3] bg-white">
          <Bell className="h-2.5 w-2.5 text-[#7B7365]" />
          <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-clay" />
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[7.5px] font-semibold text-paper">
          {initials}
        </span>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  delta,
  tone = "up",
}: {
  label: string;
  value: string;
  delta: string;
  tone?: "up" | "warn" | "neutral";
}) {
  const deltaColor =
    tone === "warn"
      ? "text-clay bg-clay/10"
      : tone === "neutral"
        ? "text-[#7B7365] bg-[#F1ECE2]"
        : "text-[#2D6A4F] bg-[#E7F0E9]";

  return (
    <div className="rounded-lg border border-[#ECE5D8] bg-white p-2.5">
      <p className="text-[8px] uppercase tracking-[0.13em] text-[#9A9183]">
        {label}
      </p>
      <p className="mt-1 text-[17px] font-semibold tracking-[-0.03em] text-ink">
        {value}
      </p>
      <span
        className={`mt-1.5 inline-flex rounded-full px-1.5 py-0.5 text-[7.5px] font-medium ${deltaColor}`}
      >
        {delta}
      </span>
    </div>
  );
}

function AreaChart() {
  return (
    <div className="mt-3">
      <svg viewBox="0 0 320 104" className="h-[92px] w-full" role="img" aria-label="Fee collection trend">
        <defs>
          <linearGradient id="school-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#AD4F27" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#AD4F27" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 45, 70].map((y) => (
          <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#EEE7DA" strokeWidth="1" />
        ))}
        <path
          d="M0 78 C24 74 38 58 60 60 C82 62 92 44 116 47 C140 50 152 35 176 38 C200 41 210 22 236 26 C262 30 280 16 320 12 L320 104 L0 104 Z"
          fill="url(#school-area)"
        />
        <path
          d="M0 78 C24 74 38 58 60 60 C82 62 92 44 116 47 C140 50 152 35 176 38 C200 41 210 22 236 26 C262 30 280 16 320 12"
          fill="none"
          stroke="#AD4F27"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="320" cy="12" r="2.6" fill="#AD4F27" />
        <circle cx="320" cy="12" r="5" fill="none" stroke="#AD4F27" strokeOpacity="0.25" />
      </svg>
      <div className="mt-1 flex justify-between text-[7px] uppercase tracking-[0.1em] text-[#B0A798]">
        {["Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function SchoolDashboard() {
  return (
    <DashboardChrome kind="school">
      <TopRow title="Good morning, Principal" subtitle="Monday, 12 January · Academic year 2025–26" />
      <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
        <Stat label="Students" value="1,248" delta="+24 this term" />
        <Stat label="Fees collected" value="₹4.2L" delta="91% of target" />
        <Stat label="Attendance" value="94.6%" delta="+1.2% this week" />
        <Stat label="Staff present" value="58 / 62" delta="4 on leave" tone="neutral" />
      </div>

      <div className="mt-3 grid gap-2 lg:grid-cols-[1.55fr_1fr]">
        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-ink">Fee collection</p>
            <span className="text-[8px] text-[#9A9183]">Last 6 months</span>
          </div>
          <AreaChart />
        </div>

        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-ink">Recent payments</p>
            <span className="text-[8px] text-clay">View all</span>
          </div>
          <div className="mt-2 divide-y divide-[#F0EADD]">
            {[
              { name: "A. Sharma", detail: "Class VIII · UPI", amount: "₹18,500", status: "Paid" },
              { name: "R. Iyer", detail: "Class V · Cash", amount: "₹9,250", status: "Partial" },
              { name: "K. Verma", detail: "Class XI · UPI", amount: "₹24,000", status: "Paid" },
            ].map((row) => (
              <div key={row.name} className="flex items-center justify-between gap-2 py-2">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F1ECE2] text-[7px] font-semibold text-[#7B7365]">
                    {row.name.slice(0, 1)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[9px] font-medium text-ink">{row.name}</p>
                    <p className="truncate text-[7.5px] text-[#9A9183]">{row.detail}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-medium text-ink">{row.amount}</p>
                  <p className={`text-[7px] ${row.status === "Paid" ? "text-[#2D6A4F]" : "text-clay"}`}>
                    {row.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 hidden items-center justify-between rounded-lg border border-[#ECE5D8] bg-white px-3 py-2 sm:flex">
        <div className="flex items-center gap-2">
          <Mic className="h-3 w-3 text-clay" />
          <p className="text-[8.5px] text-[#7B7365]">
            <span className="font-medium text-ink">Fee reminder</span> sent to 34 parents
          </p>
        </div>
        <span className="text-[7.5px] text-[#B0A798]">Just now</span>
      </div>

      <div className="mt-2 hidden gap-2 sm:grid sm:grid-cols-2">
        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <p className="text-[10px] font-medium text-ink">Today&apos;s schedule</p>
          <div className="mt-2 space-y-1.5">
            {[
              ["08:00", "Morning assembly", "All classes"],
              ["15:30", "Staff briefing", "Staff room"],
              ["16:00", "Parent meeting", "Room 2"],
            ].map(([time, title, place]) => (
              <div key={title} className="flex items-center gap-2">
                <span className="w-8 shrink-0 text-[7.5px] font-medium text-clay">{time}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[8.5px] text-ink">{title}</p>
                  <p className="text-[7px] text-[#9A9183]">{place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <p className="text-[10px] font-medium text-ink">Attendance by class</p>
          <div className="mt-2 space-y-1.5">
            {[
              ["Class VI", 96],
              ["Class VII", 92],
              ["Class VIII", 95],
              ["Class IX", 89],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-12 shrink-0 text-[7.5px] text-[#7B7365]">{label}</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#F1ECE2]">
                  <div className="h-full rounded-full bg-pine" style={{ width: `${value}%` }} />
                </div>
                <span className="w-6 text-right text-[7px] text-[#7B7365]">{value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardChrome>
  );
}

function HospitalDashboard() {
  const queue = [
    { token: "A-24", name: "Meera Nair", doctor: "Dr. Menon", wait: "6 min", status: "In consult" },
    { token: "A-25", name: "Rakesh Patel", doctor: "Dr. Rao", wait: "11 min", status: "Waiting" },
    { token: "A-26", name: "Sunita Das", doctor: "Dr. Menon", wait: "14 min", status: "Waiting" },
    { token: "A-27", name: "Imran Khan", doctor: "Dr. Shah", wait: "3 min", status: "Checked in" },
  ];

  return (
    <DashboardChrome kind="hospital">
      <TopRow title="OPD command" subtitle="Live · Monday, 12 January · 11:42 AM" initials="RM" />
      <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
        <Stat label="In OPD" value="42" delta="+8 since 10 AM" tone="neutral" />
        <Stat label="Average wait" value="14 min" delta="-6 min today" />
        <Stat label="Beds occupied" value="82%" delta="9 available" tone="warn" />
        <Stat label="Labs pending" value="17" delta="4 urgent" tone="warn" />
      </div>

      <div className="mt-3 grid gap-2 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-ink">OPD queue</p>
            <span className="inline-flex items-center gap-1 text-[8px] text-[#2D6A4F]">
              <span className="h-1 w-1 rounded-full bg-[#2D6A4F]" /> Live
            </span>
          </div>
          <div className="mt-2 divide-y divide-[#F0EADD]">
            {queue.map((row) => (
              <div key={row.token} className="flex items-center gap-2 py-2">
                <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded-md bg-[#F1ECE2] text-[8px] font-semibold text-ink">
                  {row.token}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-medium text-ink">{row.name}</p>
                  <p className="text-[7.5px] text-[#9A9183]">{row.doctor}</p>
                </div>
                <span className="text-[8px] text-[#7B7365]">{row.wait}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[7px] ${
                    row.status === "In consult"
                      ? "bg-[#E7F0E9] text-[#2D6A4F]"
                      : row.status === "Checked in"
                        ? "bg-[#F1ECE2] text-[#7B7365]"
                        : "bg-clay/10 text-clay-deep"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <p className="text-[10px] font-medium text-ink">Bed occupancy</p>
          <div className="mt-3 flex items-center gap-3">
            <div
              className="relative flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full"
              style={{ background: "conic-gradient(#17342C 0 82%, #EDE6D8 82% 100%)" }}
            >
              <div className="flex h-[54px] w-[54px] flex-col items-center justify-center rounded-full bg-white">
                <span className="text-[14px] font-semibold text-ink">82%</span>
                <span className="text-[6.5px] uppercase tracking-[0.1em] text-[#9A9183]">Full</span>
              </div>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "General", value: "46 / 52" },
                { label: "ICU", value: "8 / 10" },
                { label: "Private", value: "12 / 18" },
              ].map((ward) => (
                <div key={ward.label} className="flex items-center justify-between gap-4">
                  <span className="text-[8px] text-[#7B7365]">{ward.label}</span>
                  <span className="text-[8px] font-medium text-ink">{ward.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 rounded-md bg-[#F7F3EB] p-2">
            <p className="text-[7.5px] leading-relaxed text-[#7B7365]">
              <span className="font-medium text-ink">2 discharges</span> expected by 1 PM. Housekeeping notified.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2 hidden gap-2 sm:grid sm:grid-cols-2">
        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <p className="text-[10px] font-medium text-ink">Recent admissions</p>
          <div className="mt-2 space-y-1.5">
            {[
              ["W-108", "Anil Kumar", "General · Bed 12"],
              ["W-109", "Fatima Sheikh", "Private · Bed 4"],
              ["W-110", "Joseph Mathew", "ICU · Bed 3"],
            ].map(([id, name, bed]) => (
              <div key={id} className="flex items-center gap-2">
                <span className="w-10 shrink-0 rounded bg-[#F1ECE2] px-1 py-0.5 text-center text-[7px] font-medium text-ink">
                  {id}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[8.5px] text-ink">{name}</p>
                  <p className="text-[7px] text-[#9A9183]">{bed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <p className="text-[10px] font-medium text-ink">Lab results</p>
          <div className="mt-2 space-y-1.5">
            {[
              ["CBC · Meera Nair", "Ready", "text-[#2D6A4F]"],
              ["Lipid · Rakesh P.", "Ready", "text-[#2D6A4F]"],
              ["Thyroid · Sunita D.", "Pending", "text-clay"],
            ].map(([label, status, color]) => (
              <div key={label} className="flex items-center justify-between gap-2 rounded-md bg-[#FBF8F1] px-2 py-1.5">
                <span className="truncate text-[8px] text-ink">{label}</span>
                <span className={`shrink-0 text-[7px] ${color}`}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardChrome>
  );
}

function BusinessDashboard() {
  const bars = [38, 52, 44, 66, 58, 78, 63, 88, 72, 94, 81, 100];

  return (
    <DashboardChrome kind="business">
      <TopRow title="Operations" subtitle="FY 2025–26 · All locations" initials="NV" />
      <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
        <Stat label="Revenue" value="₹68.4L" delta="+18.2% YoY" />
        <Stat label="Orders" value="312" delta="+41 this month" />
        <Stat label="Low stock" value="8 SKUs" delta="Reorder needed" tone="warn" />
        <Stat label="Receivables" value="₹12.2L" delta="3 overdue" tone="warn" />
      </div>

      <div className="mt-3 grid gap-2 lg:grid-cols-[1.55fr_1fr]">
        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-ink">Revenue by month</p>
            <span className="text-[8px] text-[#9A9183]">₹ lakh</span>
          </div>
          <div className="mt-3 flex h-[96px] items-end gap-[5px]">
            {bars.map((height, index) => (
              <div key={index} className="group flex flex-1 items-end">
                <div
                  className={`w-full rounded-t-[2px] ${
                    index === bars.length - 1 ? "bg-clay" : "bg-[#D9CFBE]"
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-1.5 flex justify-between text-[7px] uppercase tracking-[0.1em] text-[#B0A798]">
            {["A", "M", "J", "J", "A", "S", "O", "N", "D", "J", "F", "M"].map((m, i) => (
              <span key={`${m}-${i}`}>{m}</span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-ink">Needs attention</p>
            <span className="rounded-full bg-clay/10 px-1.5 py-0.5 text-[7px] text-clay-deep">3</span>
          </div>
          <div className="mt-2 space-y-2">
            {[
              { icon: Boxes, title: "8 SKUs below reorder", detail: "Inventory · North warehouse", tone: "clay" },
              { icon: ReceiptText, title: "3 invoices overdue", detail: "₹2.4L · oldest 18 days", tone: "clay" },
              { icon: Activity, title: "PO-1042 delayed", detail: "Vendor confirmed Friday", tone: "neutral" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-2 rounded-md bg-[#FBF8F1] p-2">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded ${
                    item.tone === "clay" ? "bg-clay/10 text-clay-deep" : "bg-[#F1ECE2] text-[#7B7365]"
                  }`}
                >
                  <item.icon className="h-2.5 w-2.5" />
                </span>
                <div>
                  <p className="text-[8.5px] font-medium text-ink">{item.title}</p>
                  <p className="text-[7px] text-[#9A9183]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 hidden items-center justify-between rounded-lg border border-[#ECE5D8] bg-white px-3 py-2 sm:flex">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E7F0E9]">
            <CreditCard className="h-2.5 w-2.5 text-[#2D6A4F]" />
          </span>
          <p className="text-[8.5px] text-[#7B7365]">
            <span className="font-medium text-ink">₹4.8L</span> received today across 11 payments
          </p>
        </div>
        <span className="text-[7.5px] text-[#B0A798]">Updated now</span>
      </div>

      <div className="mt-2 hidden gap-2 sm:grid sm:grid-cols-2">
        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <p className="text-[10px] font-medium text-ink">Recent invoices</p>
          <div className="mt-2 space-y-1.5">
            {[
              ["INV-2041", "Sharma Traders", "₹1,24,000", "Paid"],
              ["INV-2042", "Nova Interiors", "₹68,500", "Due"],
              ["INV-2043", "Verma & Co.", "₹42,000", "Paid"],
            ].map(([id, client, amount, status]) => (
              <div key={id} className="flex items-center gap-2">
                <span className="w-12 shrink-0 text-[7px] text-[#9A9183]">{id}</span>
                <span className="min-w-0 flex-1 truncate text-[8.5px] text-ink">{client}</span>
                <span className="text-[7.5px] font-medium text-ink">{amount}</span>
                <span className={`w-6 text-right text-[7px] ${status === "Paid" ? "text-[#2D6A4F]" : "text-clay"}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#ECE5D8] bg-white p-3">
          <p className="text-[10px] font-medium text-ink">Top products</p>
          <div className="mt-2 space-y-1.5">
            {[
              ["Modular desk", 84],
              ["Storage unit", 66],
              ["Task chair", 51],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-16 shrink-0 text-[7.5px] text-[#7B7365]">{label}</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#F1ECE2]">
                  <div className="h-full rounded-full bg-clay" style={{ width: `${value}%` }} />
                </div>
                <span className="w-5 text-right text-[7px] text-[#7B7365]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardChrome>
  );
}

const dashboards: Record<MockupKind, () => React.ReactNode> = {
  school: SchoolDashboard,
  hospital: HospitalDashboard,
  business: BusinessDashboard,
};

export function ProductWindow({
  initial = "school",
}: {
  initial?: MockupKind;
}) {
  const [active, setActive] = useState<MockupKind>(initial);
  const reduce = useReducedMotion();

  const Dashboard = dashboards[active];
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <div className="relative">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:flex">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-clay" />
          Live product preview
        </p>

        <div
          role="tablist"
          aria-label="Product previews"
          className="flex w-full gap-0.5 rounded-full border border-line bg-paper/70 p-1 backdrop-blur sm:w-auto"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`relative flex-1 rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors sm:flex-none sm:px-4 ${
                active === tab.id ? "text-paper" : "text-ink-soft hover:text-ink"
              }`}
            >
              {active === tab.id && (
                <motion.span
                  layoutId="product-tab-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.4rem] border border-line-strong/60 bg-paper-2 shadow-[0_50px_100px_-50px_rgba(20,18,15,0.55)]">
        <div className="flex h-9 items-center gap-3 border-b border-line bg-[#EFE8DA] px-3.5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#D4A28B]" />
            <span className="h-2 w-2 rounded-full bg-[#D9C79E]" />
            <span className="h-2 w-2 rounded-full bg-[#A9BFA9]" />
          </div>
          <div className="mx-auto flex h-5 w-full max-w-[260px] items-center justify-center gap-1.5 rounded-md border border-line bg-paper/70 px-2 text-[8.5px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2D6A4F]" />
            {current.address}
          </div>
          <span className="hidden rounded-full border border-line bg-paper/60 px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.12em] text-muted sm:block">
            Concept preview
          </span>
        </div>

        <div className="p-2 sm:p-2.5">
          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            initial={reduce ? false : { opacity: 0.4, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Dashboard />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-line bg-paper px-3 py-2 shadow-[0_18px_40px_-24px_rgba(20,18,15,0.5)] sm:flex">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink text-[9px] font-semibold text-paper">
          S
        </span>
        <div>
          <p className="text-[9px] font-medium leading-none text-ink">Built around your workflow</p>
          <p className="mt-1 text-[7.5px] leading-none text-muted">Not the other way around</p>
        </div>
      </div>
    </div>
  );
}
