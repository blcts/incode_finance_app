import { SidebarContainer } from "../../styles/App/SidebarContainer";
import { Logo } from "../../styles/Logo";
import { ReactComponent as Dash } from '../../images/sidebar/Dash.svg';
import { ReactComponent as Analytics } from '../../images/sidebar/Analytics.svg';
import { ReactComponent as Categories } from '../../images/sidebar/Categories.svg';
import { ReactComponent as Setting } from '../../images/sidebar/Setting.svg';
import LogoSVG from '../../images/auth/Logo.svg';
import { Avatar, Tab, Tabs, Typography } from "@mui/material";
import { stringAvatar } from "../../utils/app/stringAvatar";
import { SidebarTab } from "../../styles/App/SidebarTab";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SidebarTabs } from "../../styles/App/SidebarTabs";
import { AvatarContainer } from "../../styles/App/AvatarContainer";
import { theme } from "../../styles/Theme";

enum MyTabs  {
  Dashboard='dashboard',
  Analytics='analytics',
  Categories='categories',
  Settings='settings'
}
interface Props {
   fullname: string
 }
export const Sidebar: React.FC<Props> = (props) => {
  const { fullname } = props;
  const navigate = useNavigate();
  const [selection, setSelection] = useState(MyTabs.Dashboard);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: MyTabs) => {
    setSelection(newValue);
    navigate(`/${newValue}`);
  }
  return <SidebarContainer>
    <Logo alt="logo" image={LogoSVG} />
  
    <SidebarTabs
      orientation="vertical"
      value={selection}
      onChange={handleChange}
      TabIndicatorProps={{
        style: {transition: 'none'}
      }}
    >
      <SidebarTab 
        disableRipple={true}
        icon={<Dash />}
        iconPosition="start"
        label='Dashboard'
        value={MyTabs.Dashboard} 
      />
      <SidebarTab 
        disableRipple={true}
        icon={<Analytics />} 
        iconPosition="start" 
        label='Analytics' 
        value={MyTabs.Analytics} 
      />
      <SidebarTab
        disableRipple={true}
        icon={<Categories />} 
        iconPosition="start" 
        label='Categories' 
        value={MyTabs.Categories} 
      />
      <SidebarTab 
        disableRipple={true}
        icon={<Setting />} 
        iconPosition="start" 
        label ='Settings' 
        value={MyTabs.Settings} 
      />
    </SidebarTabs>

    <AvatarContainer>
      <Avatar {...stringAvatar(fullname)} sx={{opacity: 1, bgcolor: theme.palette.primary.light, color: theme.palette.primary.dark, }} />

      <Typography sx={{
        typography: theme.typography.p3,
        color: theme.palette.primary.light
      }}>
        {fullname}
      </Typography>
    </AvatarContainer>
  </SidebarContainer>;
}