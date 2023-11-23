export async function getReviews({ order, offset, limit }) {
  // return 필수로 존재해야 한다 !! 없으면 데이터 못불러옴
  return await fetch(
    `https://learn.codeit.kr/0627/film-reviews?order=${order}&offset=${offset}&limit=${limit}`
  )
    .then((res) => res.json())
    .then((data) => data);
}
