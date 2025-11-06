import Image, { type StaticImageData } from "next/image"

import brainstationLogo from "../../public/img/work-logos/brainstation.png"
import githubLogo from "../../public/img/work-logos/github-logo.png"
import ibmLogo from "../../public/img/work-logos/ibm.png"
import paddleLogo from "../../public/img/work-logos/paddle.png"
import togetherLogo from "../../public/img/work-logos/together.png"
import tophatLogo from "../../public/img/work-logos/top-hat.png"  
import profoundLogo from "../../public/img/work-logos/profound-logo.png"

const workHistory = [
  {
    title: "Profound",
    role: "Product Designer",
    date: "2025-\u00a0\u00a0",
    img: profoundLogo,
    url: "https://www.tryprofound.com/",
  },
  {
    title: "GitHub",
    role: "Senior Product Designer",
    date: "2022-2025",
    img: githubLogo,
    url: "https://www.github.com/",
  },
  {
    title: "Together",
    role: "Head of Design / Founding Designer",
    date: "2019-2022",
    img: togetherLogo,
    url: "https://www.togetherplatform.com/",
  },
  {
    title: "Top Hat",
    role: "Senior Product Designer",
    date: "2017-19",
    img: tophatLogo,
    url: "https://tophat.com/",
  },
  {
    title: "Paddle HR",
    role: "Founding Designer",
    date: "2016-17",
    img: paddleLogo,
    url: "https://www.paddlehr.com/",
  },
  {
    title: "IBM",
    role: "User Experience Designer",
    date: "2015-16",
    img: ibmLogo,
    url: "https://www.ibm.com/products/openpages-with-watson",
  },
]

export default function SectionWorkList() {
  return (
    <div className="mt-5 mb-10 border-2 border-dotted rounded-lg border-primary">
      {workHistory.map((work) => (
        <a
          href={work.url}
          target="_blank"
          className="block border-b-2 border-dotted first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-0 border-primary transition duration-500 ease-in-out hover:bg-gray-100"
          key={work.title}
          rel="noreferrer noopener"
        >
          <div
            key={work.title}
            className="flex flex-col items-start justify-between p-3 md:items-center md:space-x-2 md:flex-row"
          >
            <EmployerItem title={work.title} src={work.img} />
            <div className="flex items-center justify-between w-full md:w-fit space-x-4">
              <span className="text-sm text-secondary">{work.role}</span>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm text-tertiary">
                  {work.date}
                </span>
                <span className="mb-1 leading-snug text-tertiary">↗</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

type EmployerItem = {
  title: string
  src: StaticImageData
}

export function EmployerItem({ title, src }: EmployerItem) {
  return (
    <div className="flex items-center flex-column md:flex-row md:space-x-3">
      <div className="hidden w-8 h-8 p-1 bg-white border rounded-full border-primary md:block">
        <Image src={src} alt={`${title} logo`} width={24} height={24} />
      </div>
      <h3 className="font-semibold text-md">{title}</h3>
    </div>
  )
}
