import './Column.css' 

export const Column = ({ title, items }) => (
    <div className='column'>
      <h3>{title}</h3>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );