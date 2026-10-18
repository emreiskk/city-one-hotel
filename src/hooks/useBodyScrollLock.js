import { useEffect } from 'react';

/**
 * Senior-Grade Bulletproof Scroll Lock
 * - Fixed-body technique guarantees zero background shift or scroll
 * - Accounts for scrollbar width to prevent horizontal layout shift
 * - Event interceptor blocks scroll chaining at modal boundaries
 * - Safe reference counting for multiple stacked overlays
 */
let lockCount = 0;
let savedScrollY = 0;
let prevBodyPosition = '';
let prevBodyTop = '';
let prevBodyLeft = '';
let prevBodyRight = '';
let prevBodyWidth = '';
let prevBodyOverflow = '';
let prevHtmlOverflow = '';
let prevBodyPaddingRight = '';

export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    if (lockCount === 0) {
      savedScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      prevBodyPosition = document.body.style.position || '';
      prevBodyTop = document.body.style.top || '';
      prevBodyLeft = document.body.style.left || '';
      prevBodyRight = document.body.style.right || '';
      prevBodyWidth = document.body.style.width || '';
      prevBodyOverflow = document.body.style.overflow || '';
      prevHtmlOverflow = document.documentElement.style.overflow || '';
      prevBodyPaddingRight = document.body.style.paddingRight || '';

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.classList.add('modal-open');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    lockCount += 1;

    // Boundary scroll interceptor: prevents trackpad/mousewheel momentum from passing through
    const handleWheel = (e) => {
      const scrollable = e.target.closest('[data-modal-scrollable]');
      if (!scrollable) {
        e.preventDefault();
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = scrollable;
      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;

      if (isScrollingUp && scrollTop <= 0) {
        e.preventDefault();
      } else if (isScrollingDown && Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e) => {
      const scrollable = e.target.closest('[data-modal-scrollable]');
      if (!scrollable) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);

      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.documentElement.classList.remove('modal-open');
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overflow = prevBodyOverflow;
        document.body.style.position = prevBodyPosition;
        document.body.style.top = prevBodyTop;
        document.body.style.left = prevBodyLeft;
        document.body.style.right = prevBodyRight;
        document.body.style.width = prevBodyWidth;
        document.body.style.paddingRight = prevBodyPaddingRight;

        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, savedScrollY);
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      }
    };
  }, [isLocked]);
}

export default useBodyScrollLock;
