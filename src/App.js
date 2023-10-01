import { useEffect, useState } from 'react';
import { PushSpinner } from 'react-spinners-kit';
import RouterLinks from './router';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='fastoneApp'>
      {loading ? (
        <div className='pageLoader fixed justify-center items-center inset-0 flex'>
          <PushSpinner className='bg-accent' size={60} color='#284be5' />
        </div>
      ) : (
        <RouterLinks />
      )}
    </div>
  );
};

export default App;
