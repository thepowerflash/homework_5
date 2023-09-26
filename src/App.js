import React from 'react';

const PrototypeForm = {
  key1: 'Barbara',
  key2: 'Hepworth',
  key3: 'bhepworth@react.com',
  key4: 'love cats'
};

class DisplayForm extends React.Component {
  render() {
    const { key1, key2, key3, key4 } = PrototypeForm;
    
    const formStyles = {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#fff',
    };
    
    const labelStyles = {
      marginBottom: '8px',
      fontWeight: 'bold',
    };

    const dataStyles = {
      marginTop: '20px',
      textAlign: 'center',
    };
    
    return (
      <div style={formStyles}>
        <h2 style={{ textAlign: 'center' }}>Анкета</h2>
        <label style={labelStyles}>
          Имя:
          <input type="text" value={key1}/>
        </label>
        <label style={labelStyles}>
          Фамилия:
          <input type="text" value={key2}/>
        </label>
        <label style={labelStyles}>
          Email:
          <input type="email" value={key3}/>
        </label>
        <label style={labelStyles}>
          Любимое хобби:
          <input type="text" value={key4}/>
        </label>
        
        <div style={dataStyles}>
          <h3>Анкета:</h3>
          <p>{`Имя: ${key1}`}</p>
          <p>{`Фамилия: ${key2}`}</p>
          <p>{`Email: ${key3}`}</p>
          <p>{`Любимое хобби: ${key4}`}</p>
        </div>
      </div>
    );
  }
}

export default DisplayForm;