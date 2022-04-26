
import React, { useState } from 'react';
import './App.css';

// type TitleProps = {
//   name: string;
// }

interface TitleProps{
  name: string;
}
interface TitleProps{
  desc?: string;           //可擴充
}

const Title: React.FC<TitleProps> = ({name, desc}) => {
  return <p>{name}</p>
}

const App: React.FC = () => {
  const [title, setTitle] = useState<number | string>(9999);
  return (
    <div>
      <Title name='abcd' desc='12345'/>
    </div>
  );
}

export default App;
