import React, { Suspense } from "react";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import DynamicBreadcrumb from "@/components/dynamicBreadCrumb"
const TableComponent = React.lazy(() => import("@/components/tanstack-table/TableComponent"));
export default function Designation() {
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

                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}