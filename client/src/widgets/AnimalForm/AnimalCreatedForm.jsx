import React from 'react'
import { useState } from 'react';
export default function AnimalCreatedEditedFrom({animals}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(animals.title);
  const [description, setDescription] = useState(animals.description);


  return (
    <form onSubmit={"handleSubmit"} className="box">
      <h2 className="title">Новое животное</h2>
      <div className="field">
        <label className="label">Название</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Введите название"
            value={title}
            onChange={({target}) => setTitle(target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Описание</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Добавьте описание"
            value={description}
            onChange={({target}) => setDescription(target.value)}
            required
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">Фотографии</label>
        <div className="file has-name is-boxed">
          <label className="file-label">
            <input className="file-input" type="file" multiple accept="image/*" onChange={"handlePhotoUpload"} />
            <span className="file-cta">
              <span className="file-icon">
                📸
              </span>
              <span className="file-label">Выберите файлы…</span>
            </span>
          </label>
        </div>
        {/* {animals.photos.length > 0 && (
          <div className="mt-4">
            <div className="columns is-multiline">
              {photos.map((photo) => (
                <div className="column is-one-quarter" key={"photo.id"}>
                  <figure className="image is-128x128">
                    <img src={"photo.url"} alt="Загруженное фото" />
                  </figure>
                  <button className="button is-danger is-small mt-2" onClick={() => "handleRemovePhoto"("photo.id")}>
                    Удалить
                  </button>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-success" type="submit">
            Добавить
          </button>
        </div>
        <div className="control">
          <button className="button is-light" type="button" onClick={"onCancel"}>
            Очистить
          </button>
        </div>
      </div>
    </form>
  )
}
