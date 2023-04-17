import "./lostpage.css";
import catim from "../photo-1611915387288-fd8d2f5f928b.jpg";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import { useState } from "react";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import { dataLost } from "../data/data";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";



function Hi() {
  return console.log("Hi");
}
// function Item_animal(){
//     return();
// }

function AnimalItem(props) {
  const {
    id,
    ani_name,
    ani_type,
    tel,
    dateloss,
    gender,
    desc,
    lostdesc,
    lineID,
    comment_help,
  } = props;
  console.log(id);
  let navigate = useNavigate();
  return (
    <div className="card-ani">
      <div className="box-img">
        <img src={catim} className="card-pic" alt="card-im" />
      </div>
      <div className="info-text">
        <h3
          style={{
            fontSize: "24px",
            margin: "10px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          ชื่อ : {ani_name}
        </h3>
        <h4 style={{ margin: "5px", marginLeft: "10px" }}>
          พันธ์ : {ani_type}
        </h4>
        <h4
          style={{
            fontSize: "16px",
            margin: "10px",
            marginTop: "5px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          ติดต่อที่ : {tel}
        </h4>
        <h4
          style={{
            fontSize: "16px",
            margin: "10px",
            marginTop: "5px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          วันที่หาย : {dateloss}
        </h4>
      </div>

      <div className="button-contrainer">
        <button
          className="link-button"
          onClick={() => {
            navigate("/detail", {
              state: {
                id: id,
                name: ani_name,
                type: ani_type,
                tel: tel,
                dateloss: dateloss,
                gender: gender,
                desc: desc,
                lostdesc: lostdesc,
                lineID: lineID,
                commentH: comment_help,
              },
            });
          }}
        >
          <h4 style={{ margin: "0", color: "white" }}>เพิ่มเติม...</h4>
        </button>
      </div>
    </div>
  );
}

function Map() {
  const center = { lat: 44, lng: -80 };
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="place-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="contrainer-map"
      >
        {/* <MarkerF position={center} /> */}
        {selected && <MarkerF position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    console.log(address)
  };

  return (
    <>
      <input
        type="text"
        placeholder="Ex. หมามะพร้าว"
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "50%",
          height: "40px",
          borderRadius: "20px",
          padding: "2%",
        }}
      />
      <button onClick={handleSelect}>
        search
      </button>
    </>
  );
};

function Lostpage() {
  let box = dataLost();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  function handleClose() {
    setOpen(false);
  }

  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [date, setDate] = React.useState("");
  const [lostdesc, setLost] = React.useState("");
  const [line, setLine] = React.useState("");

  const createPost = () => {
    addDoc(collection(db, "lostpet"), {
      ani_name: name,
      ani_type: type,
      tel: phone,
      dateloss: date,
      gender: gender,
      desc: desc,
      lostdesc: lostdesc,
      lineID: line,
      comment_help: [],
    });
    handleClose();
  };
  // const ani_mock = [{ani_id:'1', ani_name:'ไอโบ้', ani_type:'หมาไทย', tel:'0811111111', dateloss:'16/04/2023'},
  // {ani_id:'2', ani_name:'ไอโบ้2', ani_type:'หมาไทย', tel:'0811111111', dateloss:'16/04/2023'},
  // {ani_id:'3', ani_name:'ไอโบ้3', ani_type:'หมาไทย', tel:'0811111111', dateloss:'16/04/2023'}]
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBq4bTmnk639n0aFAsqZyNjh5MEVffRWXs",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading . . .</div>;
  return (
    <div className="contrainer">
      <div className="header-page">
        <h1 style={{ marginBottom: "0px" }}>ประกาศน้องหายย !</h1>
      </div>
      <div className="header-create">
        <button className="create-button" onClick={handleOpen}>
          <h1 style={{ margin: 0, fontWeight: 300, color: "white" }}>
            + เเจ้งน้องหาย
          </h1>
        </button>
      </div>
      <div className="animallost-group">
        {box.map((el_item) => {
          return <AnimalItem {...el_item} key={el_item.id} />;
        })}
      </div>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box className="modal-create-group">
              <div className="modal-head">
                <h1 style={{ marginBottom: "0", marginLeft: "0" }}>
                  เเจ้งน้องหายไปป
                </h1>
                <hr className="line2" />
              </div>
              <div className="form-in">
                <form>
                  <div className="input-lost">
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>
                        ชื่อน้อง
                      </h3>
                      <input
                        type="text"
                        placeholder="Ex. ไอโบ้"
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          width: "50%",
                          height: "40px",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>
                        สายพันธ์ุ
                      </h3>
                      <input
                        type="text"
                        placeholder="Ex. หมามะพร้าว"
                        onChange={(e) => setType(e.target.value)}
                        style={{
                          width: "50%",
                          height: "40px",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>เพศ</h3>
                      <input
                        type="text"
                        placeholder="Ex. หมามะพร้าว"
                        onChange={(e) => setGender(e.target.value)}
                        style={{
                          width: "50%",
                          height: "40px",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>
                        วันที่หาย
                      </h3>
                      <input
                        type="date"
                        placeholder="Ex. Date"
                        onChange={(e) => setDate(e.target.value)}
                        style={{
                          width: "50%",
                          height: "40px",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>
                        ลักษณะของน้อง
                      </h3>
                      <textarea
                        placeholder="Ex. สีอะไร มีบอกคอไหม"
                        onChange={(e) => setDesc(e.target.value)}
                        rows={2}
                        style={{
                          width: "90%",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>
                        รายละเอียดการหาย
                      </h3>
                      <textarea
                        placeholder="Ex.หายตอนไหน เเล้วตอนหลุดน้องมีอาการเป็นอย่างไร"
                        onChange={(e) => setLost(e.target.value)}
                        rows={2}
                        style={{
                          width: "90%",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>
                        เบอร์ที่สามารถติอต่อได้
                      </h3>
                      <input
                        type="text"
                        placeholder="Ex. Date"
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          width: "50%",
                          height: "40px",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>LineID</h3>
                      <input
                        type="text"
                        placeholder="Ex. Date"
                        onChange={(e) => setLine(e.target.value)}
                        style={{
                          width: "50%",
                          height: "40px",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>
                        รูปกลุ่ม
                      </h3>
                      <input
                        type="text"
                        placeholder="Img file"
                        style={{
                          width: "50%",
                          height: "40px",
                          borderRadius: "20px",
                          padding: "2%",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "2%" }}>
                      <h3 style={{ margin: "0", marginLeft: "2%" }}>
                        สถานที่หายไป
                      </h3>
                      <Map />
                    </div>
                  </div>
                </form>
                <div className="button-con2">
                  <button
                    className="button-summit-newgroup"
                    onClick={createPost}
                  >
                    <h2 style={{ margin: 0, fontWeight: 300, color: "white" }}>
                      เเจ้งหาย !
                    </h2>
                  </button>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Lostpage;
