import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-[#111827] text-white text-center p-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-2">
          <div className="p-2 md:p-8">
            <Link href="#">
              <div className="items-center">
                <span className="ml-4 text-lg font-bold">
                  Get Your Feedback
                </span>
              </div>
            </Link>
          </div>
          <div className="p-2 md:p-8 text-sm flex flex-wrap">
            Anshuman Sinha © 2024 Get Your Feedback,
            <br /> Inc. All rights reserved
          </div>

          <div className="w-auto p-2 md:p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <Link href="mailto:anshumansinha2001@gmail.com">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-white ">
                    <svg
                      fill="#000000"
                      width="800px"
                      height="800px"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>mail</title>
                      <path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="w-auto p-1.5">
                <Link
                  href="https://github.com/anshumansinha2001"
                  target="_blank"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border  bg-white ">
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>github</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z"
                        fill="#000000"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="w-auto p-1.5">
                <Link
                  href="https://www.linkedin.com/in/anshumansinha2001"
                  target="_blank"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-white ">
                    <svg
                      fill="#000000"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512"
                    >
                      <title>LinkedIn</title>
                      <g>
                        <path
                          d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7
                            c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4
                            c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8
                            c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4
                            c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                        />
                        <rect x="-8.5" y="348.4" width="49.9" height="159.7" />
                        <path
                          d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
                            C45.1,284.9,33.8,273,15.4,273z"
                        />
                        <path
                          d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
                            c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"
                        />
                      </g>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
