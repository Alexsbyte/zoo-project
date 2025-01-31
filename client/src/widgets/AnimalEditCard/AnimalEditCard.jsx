
import { useState , useRef} from 'react';
import { axiosInstance } from '../../shared/lib/axiosInstance';

export default function AnimalEditCard({animals, setAnimals}) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(animals.title);
  const [description, setDescription] = useState(animals.description);
  const [photos, setPhotos] = useState(animals.photos);
  

 

    const handleRemovePhoto = (id) => {
        //тут прописываем запрос на сервер на удаление фото из БД
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onUpdate({ ...animals, title, description, photos });
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

  const onDelete = async (id) =>{
    try {
      console.log(id)
      const {data} = await axiosInstance.delete(`/api/animals/${id}`,)
      console.log(data)
      setAnimals((prevState) => 
        prevState.filter((el)=> el.id !== id)
      )
    } catch (error) {
      console.log(error);

    }
  
  }

  return (
    
    <div className="card">
      {/* Фотографии: компактные миниатюры */}
      <div className="card-image px-3 pt-3">
        <div className="is-flex is-flex-wrap-wrap">
          {photos.map((photo) => (
            <div className="mr-2 mb-2" key={photo.id}>
              <figure className="image is-128x128 is-relative">
                {isEditing && (
                  <button
                    className="delete is-small"
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onClick={() => handleRemovePhoto(photo.id)}
                  ></button>
                )}
                <img className="is-rounded" src={`${import.meta.env.VITE_IMAGES}/public/images${photo.url}`} alt={`Фото ${title}`} />
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
