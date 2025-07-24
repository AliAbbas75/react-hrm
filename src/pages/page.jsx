import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import { ChartPieInteractive } from '@/components/pie-chart'

export default function Page() {

    // async function fetchData() {
    //     const data = await fetch('/src/data/data.json');
    //     return data.json();
    // }
    // const data = fetchData();

    return (
        <SidebarProvider
            className="bg-background w-screen min-w-full"
            defaultOpen
            defaultInsetOpen
            defaultVariant="floating"
        >
            <AppSidebar variant="floating" />
            <SidebarInset className="border border-border rounded-3xl mr-8 w-full bg-background">
                <SiteHeader title="Dashboard" btnText="View Source" />

                <div className="@container/main flex flex-col gap-2 p-4">
                    <div className="flex flex-col gap-4">
                        <SectionCards />
                        <div className="m-5">
                            <ChartPieInteractive />
                        </div>
                        <div className="flex flex-col gap-4">
                            <ChartAreaInteractive />
                        </div>

                    </div>
                </div>

            </SidebarInset>
        </SidebarProvider>
    )
}
