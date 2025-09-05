import { useEffect, useState } from 'react';
import { sideBarItems, fontAwesomeIcons } from '@services/utils/static.data';
import { useLocation, useNavigate, createSearchParams} from 'react-router-dom';
import '@components/sidebar/Sidebar.scss';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState([]);
  const {profile} = useSelector((state)=>state);
  const location = useLocation();
  const navigate = useNavigate();

  const checkUrl = (url) => {
    return location.pathname.startsWith(url);
  };

  const navigateToPage=(name,url) =>{
    if(name === 'Profile'){
      url=`${url}/${profile?.username}?${createSearchParams ({ id: profile?._id, uId: profile?.uId })}`;
    }
    navigate(url);
  };

  useEffect(() => {
    setSidebar(sideBarItems);
  }, []);

  return (
    <div className="app-side-menu">
      <div className="side-menu">
        <ul className="list-unstyled">
          {sidebar.map((data) => (
            <li key={data.index} data-testid="sidebar-list">
              <div
                className={`sidebar-link ${checkUrl(data.url) ? 'active' : ''}`}
                onClick={() => navigateToPage(data.name, data.url)}
              >
                <div className="menu-icon">{fontAwesomeIcons[data.iconName]}</div>
                <div className="menu-link">
                  <span>{data.name}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;