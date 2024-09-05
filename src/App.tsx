import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [room, setRoom] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('src/assets/Ellipse 2.png'); // Caminho da imagem padrão

  const handleSave = () => {
    alert(`Nome: ${name}\nSenha: ${password}\nID: ${id}\nSala: ${room}\nEmail: ${email}`);
  };

  // Função para trocar a imagem de perfil
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = URL.createObjectURL(event.target.files[0]); 
      setImage(selectedImage); // Atualiza a imagem de perfil
    }
  };

  return (
    <div className="container dark">
      <div className="Titulo01">
        <h1>Editar Perfil</h1>
      </div>
      <div className="IconFoto">
        <label htmlFor="fileInput" className="file-label">
          <img src={image} alt="Profile" className="file-image" />
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
      <div className="WriteFormsUm">
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Digite seu ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="room">Sala:</label>
            <input
              type="text"
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              placeholder="Digite sua sala"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
          </div>
          <button type="button" onClick={handleSave}>Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
};

export default App;
