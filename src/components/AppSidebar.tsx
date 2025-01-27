import { FileText, Home, Settings, PieChart, Calendar, Bell, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

const items = [
  {
    title: "Overview",
    icon: Home,
    url: "/dashboard",
    description: "View your dashboard"
  },
  {
    title: "Contracts",
    icon: FileText,
    url: "#contracts",
    description: "Manage your contracts"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    url: "#analytics",
    description: "Contract insights"
  },
  {
    title: "Calendar",
    icon: Calendar,
    url: "#calendar",
    description: "Important dates"
  },
  {
    title: "Notifications",
    icon: Bell,
    url: "#notifications",
    badge: 3,
    description: "View updates"
  },
];

const bottomItems = [
  {
    title: "Settings",
    icon: Settings,
    url: "#settings",
    description: "Manage preferences"
  },
];

export function AppSidebar() {
  const location = useLocation();

  const MenuItem = ({ item }: { item: typeof items[0] }) => (
    <Link
      to={item.url}
      className={cn(
        "mb-1 flex items-center justify-between rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
        location.pathname === item.url && "bg-gray-100 text-gray-900 font-medium"
      )}
    >
      <div className="flex items-center gap-3">
        <item.icon className="h-5 w-5" />
        <div>
          <div className="text-sm font-medium">{item.title}</div>
          <div className="text-xs text-gray-500">{item.description}</div>
        </div>
      </div>
      {item.badge && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-600">
          {item.badge}
        </span>
      )}
    </Link>
  );

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarContent>
        <div className="px-6 py-5">
          <h2 className="text-2xl font-bold text-gray-900">ContractWise</h2>
          <p className="text-sm text-gray-500 mt-1">Contract Management</p>
        </div>

        <SidebarGroup>
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {items.map((item) => (
                <MenuItem key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="flex-1" />

        <SidebarGroup className="mt-auto border-t border-gray-200">
          <SidebarGroupContent className="px-2 py-4">
            <SidebarMenu>
              {bottomItems.map((item) => (
                <MenuItem key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}