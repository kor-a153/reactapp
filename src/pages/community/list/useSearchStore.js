import { create } from "zustand";
import { combine } from "zustand/middleware";

const useSearchStore = create(combine(
  {
    order1 : 0, //제목 = 0, 제목+내용 = 1, 내용 = 2, 작성자 = 3, 댓글 = 4
    order2 : 0, //최신순 = 0, 좋아요 순 = 1, 조회 순 = 2
    category : 0, //전체 = 0, 공부/취업 = 1, 시장/창업 = 2, 인간관계 = 3, 건강/루틴 = 4, 기타 = 5
    content : "",
    page : 1
  },
  (set) => ({
    // increase: () => set((state) => ({count: state.count + 1})),
    // decrease: () => set((state) => ({count: state.count - 1}))
    setOrder1: (num) => set((state) => ({order1: num})),
    setOrder2: (num) => set((state) => ({order2: num})),
    setCategory: (num) => set((state) => ({category: num})),
    setContent: (data) => set((state) => ({content: data})),
    setPage: (num) => set((state) => ({page: num}))
  })
))

export default useSearchStore;