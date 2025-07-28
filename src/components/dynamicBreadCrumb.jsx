import { useLocation, Link } from "react-router-dom"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function DynamicBreadcrumb() {
    const location = useLocation()
    const pathnames = location.pathname.split("/").filter(Boolean)
    const toTitle = (str) =>
        str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ")

    return (
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                const isLast = index === pathnames.length - 1

                return (
                    <div key={routeTo} className="flex flex-row items-center gap-2">
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {isLast ? (
                                <BreadcrumbLink aria-current="page">{toTitle(name)}</BreadcrumbLink>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link to={routeTo}>{toTitle(name)}</Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </div>
                )
            })}
        </BreadcrumbList>
        </Breadcrumb>
    )
}
