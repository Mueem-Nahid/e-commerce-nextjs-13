import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../../components/sidebar/Sidebar"), {ssr: false});

export default function DashboardLayout({children}) {
   return (
      <>
         {children}
         <Sidebar/>
      </>
   );
}