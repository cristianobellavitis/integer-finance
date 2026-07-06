// import type { ReactNode } from "react";
// import React, { Fragment, isValidElement } from "react";

// interface Props {
//   icon: SVGSVGElement;
//   title: string;
//   description: string;
// }

// export default function IconCard({ icon, title, description }: Props) {
//   const isFragment = isValidElement(icon) && icon.type === Fragment;

//   return (
//     <div className="group relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-gray-900 dark:shadow-gray-700">
//       {icon && !isFragment && (
//         <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-r from-transparent to-gray-500/10 text-center text-gray-500 duration-500 group-hover:bg-gray-500/10">
//           <icon />
//         </div>
//       )}

//       <div className="content z-1 relative mt-6 flex-grow">
//         <h6 className="title text-primary text-lg font-semibold">{title}</h6>
//         <p className="mt-3 text-lg text-gray-400">{description}</p>
//       </div>

//       <div className="absolute -end-16 bottom-0">
//         <div className="size-48 text-gray-500 opacity-[0.04] duration-500 group-hover:opacity-10 dark:opacity-[0.04]"></div>
//       </div>
//     </div>
//   );
// }
