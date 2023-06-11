import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';

const App = () => {
  const [error, setError] = useState(null);
  const [DataFirebase, setDataFirebase] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [image1, setImage] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [imageOne, setImageOne] = useState("");
  const [mh, setManHinh] = useState("App");
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);

  // Luon chạy đầu tiên khi mở app
  useEffect(() => {
    FB();
    GetData();
    // window.FBInstant.initializeAsync().then(() => {
    //   const player = window.FBInstant.getPlayer();
    //   setAvatar(player.getPhoto());
    // });
  }, []);
  // cấu hình để upload lên instant game facebook
  const FB = () => {
    const script = document.createElement('script');
    script.src = "https://connect.facebook.net/en_US/fbinstant.6.2.js";
    script.id = "fbinstant";
    document.body.appendChild(script);
     script.onload = () => {
      window.FBInstant.getLoginStatus(response => {
        if (response.status === "connected") {
          window.FBInstant.initializeAsync().then(() => {
            window.FBInstant.player.getPhoto().then(photo => {
              setPhoto(photo);
            });
          });
        }
      });
     };
  }

  // lấy dữ liệu trên mockapi
  const GetData = () => {
    fetch("https://63b2526e5e490925c516ce9f.mockapi.io/item")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDataFirebase(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }
  var newIndex = Math.floor(Math.random() * 10)
  // id trang hiện tại không thể = 0 nên cần gán giá trị = 1 để tránh lỗi
  if (newIndex == 0) {
    newIndex = newIndex + 1;
  }
  const GetDataOne = () => {
    console.log(newIndex);
    fetch("https://63b2526e5e490925c516ce9f.mockapi.io/item/" + newIndex)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setImageOne(result.image)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }
  const Click = (bien) => {
    setImage(bien);
    GetDataOne();
    // console.log(avatar);
  }
  console.log(newIndex);
  return (
    <div className="App" style={{ padding: 5, backgroundColor: "#f1f1f1", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
     
      <img src={photo} alt="Player Photo" />
    </div>
      {DataFirebase.map((item) => {
        return <div key={item.id}>
          <button style={{ backgroundColor: "#fff", borderRadius: 5, borderWidth: 0, cursor: "pointer", marginLeft: 5, marginRight: 5, marginTop: 10, marginBottom: 10 }} onClick={() => Click(item.image)}>
            <div style={{ overflow: "hidden", textDecoration: "blink" }}>
              <figure style={{ margin: 0, padding: 5, borderRadius: 5 }}>
                <img src={item.image} style={{ width: "100%", borderRadius: 5, display: "block" }} />
              </figure>
              <p style={{ color: "black", fontWeight: 700, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, fontSize: 18, lineHeight: 1.3 }}>{item.id}</p>
            </div>
          </button>
        </div>
      })}
    </div>
  );
}
export default App;
