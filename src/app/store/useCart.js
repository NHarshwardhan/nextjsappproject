import  { create } from 'zustand'

const useCart = create((set)=>({
    count:0,
    addToCart:()=>set((state)=>({count:state.count+1}))

}))
export default useCart