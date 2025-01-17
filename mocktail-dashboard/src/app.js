import { useEffect } from 'react';
import Dashboad from './containers/Dashboard';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import useToastify from './hooks/useToastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

function App() {
  const frenchToast = useToastify();

  useEffect(() => {
    frenchToast.toastProps &&
      toast[frenchToast.toastProps.toastType](frenchToast.toastProps.message);
    frenchToast.reset();
  }, [frenchToast, frenchToast.toastProps]);
  return (
    <div className="content">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Dashboad frenchToast={frenchToast} />
    </div>
  );
}

export default App;
