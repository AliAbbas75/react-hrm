// // import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// // import { SectionCards } from "@/components/section-cards"
// // import { ChartPieInteractive } from '@/components/pie-chart'
// import React from "react"
// const ChartAreaInteractive = React.lazy(()=>import("@/components/chart-area-interactive").then((module)=>(
//     {default: module.ChartAreaInteractive}
// )))
// const SectionCards = React.lazy(()=>import("@/components/section-cards").then((module)=>(
//     {default: module.SectionCards}
// )))
// const ChartPieInteractive = React.lazy(()=>import("@/components/pie-chart").then((module)=>(
//     {default: module.ChartPieInteractive}
// )))
// import { AppSidebar } from "@/components/app-sidebar"
// import { SiteHeader } from "@/components/site-header"
// import {
//     SidebarInset,
//     SidebarProvider,
// } from "@/components/ui/sidebar"

// import DynamicBreadcrumb from "@/components/dynamicBreadCrumb"

// export default function Page() {

//     // async function fetchData() {
//     //     const data = await fetch('/src/data/data.json');
//     //     return data.json();
//     // }
//     // const data = fetchData();

//     return (
//         <SidebarProvider
//             className="flex h-screen w-full"
//             defaultOpen
//             defaultInsetOpen
//         >
//             {/* Sidebar */}
//             <AppSidebar />

//             {/* Main Content */}
//             <div className="flex flex-col flex-1">


//                 <SiteHeader>
//                 </SiteHeader>

//                 <SidebarInset className="flex flex-col border border-border rounded-3xl bg-background">
//                     <div className='px-10 py-2'>
//                         <DynamicBreadcrumb />
//                     </div>
//                     <div className="@container/main flex flex-col gap-2 p-4">
//                         <div className="flex flex-col gap-4">
//                             <SectionCards />
//                             <div className="m-5">
//                                 <ChartPieInteractive />
//                             </div>
//                             <div className="flex flex-col gap-4">
//                                 <ChartAreaInteractive />
//                             </div>

//                         </div>
//                     </div>

//                 </SidebarInset>
//                 </div>
//         </SidebarProvider>
//     )
// }

import React, { Suspense } from "react"

const ChartAreaInteractive = React.lazy(() =>
    import("@/components/chart-area-interactive").then((module) => ({
        default: module.ChartAreaInteractive,
    }))
)
const SectionCards = React.lazy(() =>
    import("@/components/section-cards").then((module) => ({
        default: module.SectionCards,
    }))
)
const ChartPieInteractive = React.lazy(() =>
    import("@/components/pie-chart").then((module) => ({
        default: module.ChartPieInteractive,
    }))
)

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import DynamicBreadcrumb from "@/components/dynamicBreadCrumb"

export default function Page() {
    return (
        <SidebarProvider className="flex h-screen w-full" defaultOpen defaultInsetOpen>
            {/* Sidebar */}
            <AppSidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <SiteHeader />

                <SidebarInset className="flex flex-col border border-border rounded-3xl bg-background">
                    <div className="px-10 py-2">
                        <DynamicBreadcrumb />
                    </div>

                    <div className="flex flex-col gap-2 p-4">
                        <Suspense fallback={<div className="text-center text-muted">Loading widgets...</div>}>
                            <div className="flex flex-col gap-4">
                                <div className="">
                                    <SectionCards />
                                </div>
                                <div className="m-5">
                                    <ChartPieInteractive />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <ChartAreaInteractive />
                                </div>
                            </div>
                        </Suspense>
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}

