import React, { useEffect, useState }  from "react";
import ReactPaginate from "react-paginate";
import { getMovies } from "../../api/tmdb-api";

const Paginator= (props)=>{




  return (
    <>

   <h1>PAGINATE</h1>
   <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={15}
          marginPagesDisplayed={4}
          onPageChange={props.clickFunction}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}


				/>
   </>

  );
}

export default Paginator;