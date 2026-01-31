"use client";

import { SidebarProvider, useSidebar } from "../components/SidebarProvider";
import Sidebar from "../components/Sidebar";

function LayoutContent({ children }: { children: React.ReactNode }) {
    const { isOpen, closeSidebar } = useSidebar();

    return (
        <div className="flex bg-background-light dark:bg-background-dark min-h-screen font-display relative">
            {/* Sidebar */}
            <Sidebar />

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden glass-dark"
                    onClick={closeSidebar}
                    aria-hidden="true"
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 md:ml-64 transition-all duration-300 relative w-full">
                {children}
            </div>
        </div>
    );
}

export default function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <LayoutContent>{children}</LayoutContent>
        </SidebarProvider>
    );
}
