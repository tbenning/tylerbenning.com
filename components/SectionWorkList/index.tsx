import { ArrowNarrowRightIcon } from "@heroicons/react/solid"
import Image from "next/image"

import brainstationLogo from "../../public/img/work-logos/brainstation.png"
import ibmLogo from "../../public/img/work-logos/ibm.png"
import paddleLogo from "../../public/img/work-logos/paddle.png"
import togetherLogo from "../../public/img/work-logos/together.png"
import tophatLogo from "../../public/img/work-logos/top-hat.png"

const workHistory = [
  {
    title: "Together",
    role: "Founding Designer",
    date: "2019-\u00a0\u00a0",
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
    title: "Brainstation",
    role: "UX Teaching Assistant",
    date: "2016-17",
    img: brainstationLogo,
    url: "https://brainstation.io/",
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
    <div className="mb-10 border rounded-lg md:mt-8 border-primary">
      {workHistory.map((work) => (
        <a
          href={work.url}
          target="_blank"
          className="block border-b first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-0 border-primary transition duration-500 ease-in-out hover:bg-gray-100"
          key={work.title}
          rel="noreferrer noopener"
        >
          <div
            key={work.title}
            className="flex flex-col items-start justify-between p-3 md:items-center md:space-x-2 md:flex-row"
          >
            <div className="flex items-center flex-column md:flex-row md:space-x-3">
              <div className="hidden w-8 h-8 p-1 bg-white border rounded-full border-primary md:block">
                <Image
                  src={work.img}
                  alt={`${work.title} logo`}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="font-semibold text-md">{work.title}</h3>
            </div>
            <div className="flex items-center justify-between w-full md:w-fit space-x-4">
              <span className="text-md text-secondary">{work.role}</span>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-md text-tertiary">
                  {work.date}
                </span>
                <ArrowNarrowRightIcon className="w-4 h-4 text-gray-400 -rotate-45" />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
