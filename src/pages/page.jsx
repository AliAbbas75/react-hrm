// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { SectionCards } from "@/components/section-cards"
// import { ChartPieInteractive } from '@/components/pie-chart'
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import DynamicBreadcrumb from "@/components/dynamicBreadCrumb"

export default function Page() {

    // async function fetchData() {
    //     const data = await fetch('/src/data/data.json');
    //     return data.json();
    // }
    // const data = fetchData();

    return (
        <SidebarProvider
            className="flex h-screen w-full"
            defaultOpen
            defaultInsetOpen
        >
            {/* Sidebar */}
            <AppSidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1">


                <SiteHeader>
                </SiteHeader>

                <SidebarInset className="flex flex-col border border-border rounded-3xl bg-background">
                    <div className='px-10 py-2'>
                        <DynamicBreadcrumb />
                    </div>
                    {/* <div className="@container/main flex flex-col gap-2 p-4">
                        <div className="flex flex-col gap-4">
                            <SectionCards />
                            <div className="m-5">
                                <ChartPieInteractive />
                            </div>
                            <div className="flex flex-col gap-4">
                                <ChartAreaInteractive />
                            </div>

                        </div>
                    </div> */}

                </SidebarInset>
                </div>
        </SidebarProvider>
    )
}
