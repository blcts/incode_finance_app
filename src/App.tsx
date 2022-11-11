import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SetFeaturesLoadingActionCreator } from './redux/features';
import { RootState } from './redux/store';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.features.token);
  const isLoading = useSelector((state: RootState) => state.features.isLoading);
  const error = useSelector((state: RootState) => state.features.error);

  useEffect(() => {
    dispatch(SetFeaturesLoadingActionCreator(true));
  });
 return null;
  // return (
    // <Routes>
    //   {
    //     token
    //     ?(<>
    //         <Route path="/" element={<SignIn />}>
    //           <Route index element={<SignIn />} />
    //           <Route path="authorization" element={<SignUp />} />
    //           <Route path="contact" element={<AccountCreated />} />
    //           <Route path="contact" element={<ResetPassword />} />
    //           <Route path="contact" element={<EmailToReset />} />
    //           <Route path="contact" element={<ChangedPassword />} />
    //           <Route path="*" element={<NoPage />} />
    //         </Route>
    //     </>)
    //     : (<>
    //     </>)

    //   }
    // </Routes>
  // );
}
