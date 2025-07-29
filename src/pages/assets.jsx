import React, { Suspense } from "react"
import { Button } from "@/components/ui/button" // small, keep static
import DynamicBreadcrumb from "@/components/dynamicBreadCrumb"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { useState, useEffect } from "react"
import DeleteRow from "@/components/department/DeleteRow"

import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import TableComponent from "@/components/tanstack-table/TableComponent"
import { CircleXIcon, LoaderCircle, SquarePenIcon } from "lucide-react"
import UpdateAsset from "@/components/asset/UpdateAsset"

const AssetForm = React.lazy(() => import("@/components/AssetForm"))

export default function AssetsPage() {

    const [assets, setAssets] = useState([])
    const [columns, setColumns] = useState([
        { header: "Name", accessorKey: "name" },
        { header: "Type", accessorKey: "type" },
        { header: "Status", accessorKey: "status" },
        { header: "Assigned To", accessorKey: "assignedTo" },
    ])
    const [deleteRow, setDeleteRow] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    useEffect(() => {

        async function fetchData() {
            const apiAssetsDetail = await fetch('http://localhost:3001/assets');
            const data = await apiAssetsDetail.json();
            setAssets(data);
        }
        fetchData();
    }, [])

    return (
        <Suspense fallback={<div><LoaderCircle /></div>}>
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
                        <div className="w-full justify-center">
                            <Dialog>
                                <DialogTitle title="Add assets" />
                                <DialogTrigger asChild>
                                    <Button>Add Asset</Button>
                                </DialogTrigger>
                                <DialogContent aria-describedby="asset-form">
                                    <AssetForm />
                                </DialogContent>
                            </Dialog>
                        </div>
                        <DeleteRow
                            rowData={deleteRow}
                            onClose={() => setDeleteRow(null)}
                            endpoint={"assets"}
                            onSuccess={() => {
                                setDeleteRow(null)
                                refetch?.()
                            }} />
                        <UpdateAsset
                            rowData={selectedRow}
                            onClose={()=> setSelectedRow(null)}
                            endpoint={"assets"}
                            onSuccess={()=>{
                                setSelectedRow(null)
                                refetch?.()
                            }}/>

                        <TableComponent data={assets} columns={columns} actions={(row) => (
                            <div className="flex flex-row gap-3 justify-center">
                                <Button asChild variant={'ghost'} onClick = {()=>setSelectedRow(row.original)}>

                                    <div><SquarePenIcon /></div>
                                </Button>
                                <Button asChild variant={'destructive'} onClick = {()=>setDeleteRow(row.original)}>

                                    <div><CircleXIcon /></div>
                                </Button>
                            </div>

                        )

                        } />
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </Suspense>
    )
}






