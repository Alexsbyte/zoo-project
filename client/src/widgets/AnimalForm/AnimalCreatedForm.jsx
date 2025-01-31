
import { useState, useRef } from 'react';
import { axiosInstance } from '../../shared/lib/axiosInstance';



export default function AnimalCreatedEditedFrom() {

  const [inputs , setInputs] = useState({title:'',description:''})
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

const handleReset = () => {
    setFiles([]); // Очищаем список файлов
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Принудительно очищаем input[type="file"]
    }
  };

const handleUpload = async (event) => {
  event.preventDefault()
  console.log(files,inputs );
  
  if (files.length === 0) {
    alert('Выберите файлы!');
    return;
  }

  const formData = new FormData();
  files.forEach((file) => {
    formData.append('photo', file);
  });
 formData.append('title',inputs.title)
formData.append('description', inputs.description)


  try {
    const response = await axiosInstance.post('/api/upload',formData, {
      headers: { 'Content-Type': 'multipart/form-data' , 'title': `${inputs.title}`},
    })
  } catch (error) {
    console.error("Error uploading data:", error);
  }

}


const handleFileChange = (event) => {
  setFiles((prevFiles)=>[...prevFiles,...event.target.files]); // Запоминаем файлы
  console.log(files);
  
};



  return (
    <form onSubmit={handleUpload} className="box" >
      <h2 className="title">Новое животное</h2>
      <div className="field">
        <label className="label">Название</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Введите название"
            value={inputs.title}
            onChange={({target}) => setInputs(()=>({...inputs, title: target.value}))}
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
            value={inputs.description}
            onChange={({target}) => setInputs(()=>({...inputs, description: target.value}))}
            required
          ></textarea>
        </div>
      </div>


<div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <input type="file"  multiple onChange={handleFileChange} />
      
      {/* Отображение списка выбранных файлов */}
      {files.length > 0 && (
        <div style={{ marginTop: '10px', textAlign: 'left' }}>
          <h4>Выбранные файлы:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>
          <button onClick={handleReset} style={{ marginTop: '5px', background: 'red', color: 'white' }}>
            Очистить
          </button>
        </div>
      )}
    </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-success" type="submit">
            Добавить
          </button>
        </div>
        <div className="control">
          <button className="button is-light" type="reset" onClick={()=>{setFiles([]), setInputs({title:'',description:''})}}>
            Очистить
          </button>
        </div>
      </div>
    </form>
  )
}
