import RotatingIcon from "@/components/ui/rotating-icon";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar";
import { IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";


export default function CollapsibleNavItem({ itemLabel, subItem, mainIcon }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <SidebarMenu>
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton asChild>
                            <div className="flex items-center gap-2 w-full cursor-pointer">
                                {mainIcon}
                                <p>{itemLabel}</p>
                                <RotatingIcon open={isOpen} />
                            </div>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                </SidebarMenuItem>

                <CollapsibleContent>
                    {subItem.map(
                        (item, index) => (
                            <SidebarMenuItem key={index}>
                                <Link to={`${item.link}`}>
                                    <SidebarMenuButton asChild>
                                        <div key={index} className="flex flex-row gap-2 w-full">
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                </CollapsibleContent>
            </SidebarMenu>
        </Collapsible >
    )
}

// <SidebarMenuItem>
//                         <Link to={"/employees"}>
//                             <SidebarMenuButton asChild>
//                                 <div className="flex flex-row gap-2 w-full">
//                                     <IconCube3dSphere />
//                                     <span>{subItemTitles[0]}</span>
//                                 </div>
//                             </SidebarMenuButton>
//                         </Link>
//                     </SidebarMenuItem>

//                     <SidebarMenuItem>
//                         <Link to={"/department"}>
//                             <SidebarMenuButton asChild>
//                                 <div className="flex flex-row gap-2 w-full">
//                                     <IconUserBolt />
//                                     <span>{subItemTitles[1]}</span>
//                                 </div>
//                             </SidebarMenuButton>
//                         </Link>
//                     </SidebarMenuItem>

//                     <SidebarMenuItem>
//                         <Link to={"/designation"}>
//                             <SidebarMenuButton asChild>
//                                 <div className="flex flex-row gap-2 w-full">
//                                     <IconCube3dSphere />
//                                     <span>{subItemTitles[2]}</span>
//                                 </div>
//                             </SidebarMenuButton>
//                         </Link>
//                     </SidebarMenuItem>