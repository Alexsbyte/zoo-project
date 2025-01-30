import React from 'react'
import { useState , useRef} from 'react';

export default function AnimalEditCard({animals}) {
const url = 'http://localhost:3000'
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(animals.title);
  const [description, setDescription] = useState(animals.description);
  const [photos, setPhotos] = useState(animals.photos);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);



    const handleRemovePhoto = (id) => {
        //тут прописываем запрос на сервер на удаление фото из БД
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onUpdate({ ...animal, title, description, photos });
    }
  };
  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPhoto = {
        id: Date.now(), // Временный ID
        url: URL.createObjectURL(file), // Создаем превью
      };
      setPhotos([...photos, newPhoto]);
    }
  };


  return (
    
    <div className="card">
      {/* Фотографии: компактные миниатюры */}
      <div className="card-image px-3 pt-3">
        <div className="is-flex is-flex-wrap-wrap">
          {photos.map((photo) => (
            <div className="mr-2 mb-2" key={photo.id}>
              <figure className="image is-64x64 is-relative">
                {isEditing && (
                  <button
                    className="delete is-small"
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onClick={() => handleRemovePhoto(photo.id)}
                  ></button>
                )}
                <img className="is-rounded" src={`${import.meta.env.VITE_IMAGES}/public${photo.url}`} alt={`Фото ${title}`} />
              </figure>
            </div>
          ))}
          
        </div>
      </div>
    {/* Контент карточки */}
    <div className="card-content">
      {isEditing ? (
        <>
          <div className="field">
            <label className="label">Название</label>
            <input className="input" type="text" value={title} onChange={({target}) => setTitle(target.value)} />
          </div>

          <div className="field">
            <label className="label">Описание</label>
            <textarea className="textarea" value={description} onChange={({target}) => setDescription(target.value)} />
          </div>
        </>
      ) : (
        <>
          <p className="title">{title}</p>
          <p className="content">{description}</p>
        </>
      )}
    </div>
    {isEditing && (
        <button 
          className="button is-link card-footer-item" 
          style={{ backgroundColor: '#B8872C', color: 'white' }} 
          onClick={toggleEdit}
        >
          Добавить Фото
        </button>
      )}
    {/* Кнопки управления */}
    <div className="card-footer">
      <button className="button is-success card-footer-item" onClick={toggleEdit}>
        {isEditing ? "Сохранить" : "Изменить"}
      </button>
      <button
        className={`button card-footer-item ${isEditing ? "is-light" : "is-danger"}`}
        onClick={isEditing ? () => setIsEditing(false) : () => onDelete(animals.id)}
      >
        {isEditing ? "Отмена" : "Удалить"}
      </button>
    </div>
  </div>
  )
}
