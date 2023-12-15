export function filterData(searchInput, News) {
    // console.log(News)
    // console.log(searchInput)
  const filterData = News.filter((news) =>
    news?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
//   console.log(filterData);
  return filterData;
}
