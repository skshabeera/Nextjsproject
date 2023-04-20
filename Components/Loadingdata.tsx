import { useEffect, useState } from 'react';
import Loading from './Loading';

import Alert from '@mui/material/Alert';


export default function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/idea')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading/> 


  }
  return (
    <div>
      {data && data.length &&
      data.map(item => (
        <div key={item.id}>{item.title}
        <Alert severity="success">This is a success alert — check it out!</Alert>
        </div>
      ))}
    </div>
  );
}
