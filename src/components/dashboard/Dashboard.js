"use client"

import {Chart, initTE} from "tw-elements";
import {useEffect} from "react";

const Dashboard = () => {
   useEffect(() => {
      initTE({Chart});
   }, []);

   return (
      <div className="mx-auto w-3/5 overflow-hidden mt-5">
         <canvas
            data-te-chart="line"
            data-te-dataset-label="Traffic"
            data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
            data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]">
         </canvas>
      </div>
   );
};

export default Dashboard;