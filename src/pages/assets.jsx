import React, { Suspense } from "react"
import { Button } from "@/components/ui/button" // small, keep static
import { useAssetStore } from "@/store/assetStore"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"

const AssetTable = React.lazy(() => import("@/components/AssetTable"))
const AssetForm = React.lazy(() => import("@/components/AssetForm"))
const AssetFilter = React.lazy(() => import("@/components/AssetFilter"))

export default function AssetsPage() {
    return (
        <Suspense fallback={<div></div>}>
            <SidebarProvider
                className="bg-background w-screen min-w-full"
                defaultOpen
                defaultInsetOpen
                defaultVariant="floating"
            >
                <AppSidebar variant="floating" />
                <SidebarInset className="border border-border rounded-3xl mr-8 w-full bg-background">
                    <SiteHeader title="Assets" btnText="View Source" />
                    <div className="p-6 space-y-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>Add Asset</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <AssetForm />
                            </DialogContent>
                        </Dialog>
                        <AssetFilter />
                        <AssetTable />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </Suspense>
    )
}






