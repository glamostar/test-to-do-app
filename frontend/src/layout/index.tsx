import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import CustomDialog from 'components/CustomDialog';
import Loading from './Loading';
import ConfirmDialog from 'components/ConfirmDialog';
import { useAppSelector } from 'store/hooks';
import Notistack from 'components/Notistack';

const Layout: React.FC = () => {
  const loading = useAppSelector(state => state.loading.value);

  return (
    <div className='w-100 bg-blue-100' style={{minHeight: "100vh"}}>
      {
        loading &&
        <Loading />
      }
      <Header />
      <Outlet />
      <CustomDialog />
      <ConfirmDialog />
      <Notistack />
    </div>
  )
}
export default Layout;
