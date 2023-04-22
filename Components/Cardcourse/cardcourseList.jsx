import React, { useEffect, useState } from "react";
import Cardcourse from "./cardcourse";
import FilterCourseCard from "../filterCourseCard/filterCourseCard";
import { useRouter } from "next/router";
import axios from "axios";
import { useProducts } from "@/hooks/services";

const CardcourseList = ({router,per_page }) => {
  const [productCount, setProductCount] = useState(`per_page=${per_page}`)

  const { data, isLoading, isFetching,isSuccess } = useProducts(productCount)
  
  !isLoading && console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
      {router.route === "/courses" && <FilterCourseCard />}
      {isLoading && <h1>loading</h1>}
      {!isLoading && data.map((item, index) => (
        <div key={index}>
          <Cardcourse key={index} data={item} />
        </div>
      ))}
    </div>
  );
};


export default CardcourseList;
