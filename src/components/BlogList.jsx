import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useEffect, useState } from "react";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [pageSize, setPageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPaginationData, setCurrentPaginationData] = useState([]);

  const updateRowsPerPage = (selectedSize) => {
    if (pageSize === Number(selectedSize)) {
      return;
    }
    setPageSize(Number(selectedSize));
  };
  const updatePage = (newPage) => {
    if (currentPage === Number(newPage)) {
      return;
    }
    setCurrentPage(Number(newPage));
  };

  useEffect(() => {
    const start = (currentPage - 1) * 15;
    const end = start + pageSize;
    setCurrentPaginationData(blogs.posts.slice(start, end));
  }, [pageSize, currentPage]);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
