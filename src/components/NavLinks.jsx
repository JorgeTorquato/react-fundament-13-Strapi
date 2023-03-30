import { useGlobalContext } from '../context';

const NavLinks = () => {
  const { sublinks, setPageId } = useGlobalContext();

  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
