import React,{useRef, useEffect} from 'react'
import '../cursor/style.css'

 const Cursor = () => {
  const delay = 18;
  const dot =useRef(null);
  const dotOutline = useRef(null)

  const cursorVisible = useRef(true);
  const cursorEnlarged =useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const  endY = useRef(window.innerHeight / 2);
  const _X = useRef(0);
  const _Y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent)
    document.addEventListener('mousemove', mouseMoveEvent)
    document.addEventListener('mouseenter', mouseEnterEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)

    animateOutline()
    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent)
      document.removeEventListener('mousemove', mouseMoveEvent)
      document.removeEventListener('mouseenter', mouseEnterEvent)
      document.removeEventListener('mouseleave', mouseLeaveEvent)

      cancelAnimationFrame(requestRef.current)
    }
  }, )

  const toggleCursorVisibility = () =>{
    if(cursorVisible.current){
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;

    }else{
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;     
    }

  }
  const toggleCursorSize = () =>{
    if(cursorEnlarged.current){
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }else{
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';     
    }
  }

  const mouseOverEvent= () =>{
    cursorEnlarged.current= true;
    toggleCursorSize();
  }
  const mouseOutEvent=()=>{
    cursorEnlarged.current = false;
    toggleCursorSize()
  }

  const mouseEnterEvent=()=>{
    cursorVisible.current= true;
    toggleCursorVisibility();
  }
  const mouseLeaveEvent=()=>{
    cursorVisible.current= false;
    toggleCursorVisibility();
  } 

  const mouseMoveEvent = e =>{
    cursorVisible.current = true;
    toggleCursorVisibility();

    endY.current = e.pageX;
    endX.current = e.pageY;

    dot.current.style.top = endX.current+'px'
    dot.current.style.left = endY.current+'px'
  }
  const animateOutline = () =>{
    _X.current += (endX.current - _X.current)/ delay;
    _Y.current += (endY.current - _Y.current)/ delay;

    dotOutline.current.style.top = _X.current+'px'
    dotOutline.current.style.left = _Y.current+'px'

    requestRef.current = requestAnimationFrame(animateOutline);
  }
    return (
        <>
          <div ref={dotOutline} className='cursor-outline'>
          </div>
          <div ref={dot} className='cursor'>
          </div>
        </>
    )
}
export default Cursor