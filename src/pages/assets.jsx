import React, { Suspense } from "react"
import { Button } from "@/components/ui/button" // small, keep static
import DynamicBreadcrumb from "@/components/dynamicBreadCrumb"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { useState, useEffect } from "react"

import { Dialog, DialogTrigger, DialogContent,DialogTitle } from "@/components/ui/dialog"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import TableComponent from "@/components/tanstack-table/TableComponent"

const AssetForm = React.lazy(() => import("@/components/AssetForm"))

export default function AssetsPage() {

    const [assets, setAssets] = useState([])
    const [columns, setColumns] = useState([
        { header: "Name", accessorKey: "name" },
        { header: "Type", accessorKey: "type" },
        { header: "Status", accessorKey: "status" },
        { header: "Assigned To", accessorKey: "assignedTo" },
    ])
    useEffect(() => {

        async function fetchData() {
            const apiAssetsDetail = await fetch('http://localhost:3001/assets');
            const data = await apiAssetsDetail.json();
            setAssets(data);
        }
        fetchData();
    }, [])

    return (
        <Suspense fallback={<div></div>}>
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
                    <TableComponent data={assets} columns={columns} actions={()=>(

                        <Dialog>
                            <DialogTitle title ="Add assets"/>
                            <DialogTrigger asChild>
                                <Button>Add Asset</Button>
                            </DialogTrigger>
                            <DialogContent aria-describedby ="asset-form">
                                <AssetForm />
                            </DialogContent>
                        </Dialog>
                    )

                    } />
                </SidebarInset>
                </div>
            </SidebarProvider>
        </Suspense>
    )
}






