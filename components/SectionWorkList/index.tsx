import Image from "next/image"

import tophatLogo from "../../public/img/work-logos/top-hat.png"

const workHistory = [
  {
    title: "Together",
    role: "Founding Product Designer",
    date: "2019-\u00a0\u00a0",
  },
  {
    title: "Top Hat",
    role: "Senior Product Designer",
    date: "2017-19",
  },
  {
    title: "Top Hat",
    role: "Senior Product Designer",
    date: "2017-19",
  },
]

export default function SectionWorkList() {
  return (
    <div className="mb-10 border rounded-lg md:mt-8 border-primary">
      {workHistory.map((work) => (
        <div
          key={work.title}
          className="flex items-center justify-between p-2 border-b last-of-type:border-0 space-x-2 border-primary"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 p-1 border rounded-full border-primary">
              <Image
                src={tophatLogo}
                alt="top hat logo"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-sm font-bold">{work.title}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-secondary">{work.role}</span>
            <span className="font-mono text-sm text-tertiary">{work.date}</span>
            {/* <ChevronRightIcon className="w-4 h-4 text-gray-400" /> */}
          </div>
        </div>
      ))}
    </div>
  )
}
