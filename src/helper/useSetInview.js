import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux'
import { setSection } from '../store/intersection/IntersectionSlicer';

const useSetInview = (key) => {
  const dispatch = useDispatch();
  const {ref,inView} = useInView();

  useEffect(() => {
    dispatch(setSection({key : key,value : inView}))
  }
  ,[inView])

  return ref
}

export default useSetInview