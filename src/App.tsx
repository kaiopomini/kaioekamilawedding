import { Navigate, Route, Routes } from 'react-router-dom';

import Confirmation from './components/Confirmation';
import Page from './components/Page';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Page />} />
          <Route path="confirm">
            <Route index element={<Navigate to="/" replace={true} />} />
            <Route path=":inviteId" element={<Confirmation></Confirmation>} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
