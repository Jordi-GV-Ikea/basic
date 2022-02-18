import React from "react";
import { useGetTopicQuery } from "../services/ikea";

function IkeaGetData() {
    const {
      data: pages,
      isError,
      isLoading,
    } = useGetTopicQuery();
    return (
      <>
      <hr/>
      <h3>IKEA</h3>
      { isLoading && <p>Loading IKEA</p>}
      { isError && <p>Error</p>}
      { pages && (<>
      <p>Arrives data</p>
      <p>{JSON.stringify(pages)}</p>
      </>)}
      
      </>
    );
  }
  
export default IkeaGetData;