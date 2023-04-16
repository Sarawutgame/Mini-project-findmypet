import './lostdetail.css'
import React, { useState }  from 'react';
import {GoogleMap, useLoadScript, Marker, MarkerF} from "@react-google-maps/api"

import catim from '../photo-1611915387288-fd8d2f5f928b.jpg'
import {data} from "../data/data";

function Hi(){
  return(console.log('hi'));
}

function HintItem(props){
  const {id_hint, create_hint_name, datetime, hint_des} = props
  console.log(id_hint)
  return(
    <div className='hint-con'>
      <div className='user-hint-con'>
        <img src={catim} alt='img-pro' className='img-pro-con'/>
        <h3 className='name-hint'>{create_hint_name}</h3>
        <p className='pro-create'>{datetime}</p>
      </div>
      <div className='content-hint'>
        {hint_des}
      </div>
    </div>
  );
}


function Map(){
  const center={lat:44, lng:-80}
  const [selected, setSelected] = useState(null);

  return(
    <>
    <GoogleMap zoom={10} center={center} mapContainerClassName='contrainer-map'>
      <MarkerF position={center} />        
      
    </GoogleMap>
    </>

  );
}

function Lostdetail() {
  const {isLoaded} = useLoadScript({ 
    googleMapsApiKey: "AIzaSyBq4bTmnk639n0aFAsqZyNjh5MEVffRWXs"})
    if(!isLoaded) return <div>Loading . . .</div>
  const hint_mock = [
    {id_hint:'1', create_hint_name:'GamePoro', datetime:'16/0402023 22.20', hint_des:'อาจจะอยู่ที่เเถวสวน'},
    {id_hint:'2', create_hint_name:'GamePoro', datetime:'16/0402023 22.20', hint_des:'อาจจะอยู่ที่เเถวสวนหน้าซอย'}]

  return (
    <div className='contrainer'>
        <div className='header-name'>
          <h1 style={{marginTop:'20px', marginBottom:'20px'}}>ชื่อน้อง : Name</h1>
        </div>
        
        <div className='img-header'>
          <h2 className='header-img-text'>รูปของน้อง</h2>
        </div>
        <div className='img-contrainer'>
          <img src={catim} alt='img-show' className='img-detail'/>
        </div>
        <div className='detail-box'>
          <div className='header-box'>
            <h1 style={{margin:'0px'}}>รายระเอียดของน้อง</h1>
            <hr/>
          </div>
          <div className='detail-content'>
            <div className='contrain-info'>
              <div className='contrain-info1'>
                <h4 className='text-detail'>ชื่อ : Name</h4>
                <h4 className='text-detail'>สายพันธ์ุ : Name</h4>
                <h4 className='text-detail'>เพศ : Male</h4>
                <h4 className='text-detail'>วันที่หาย : 16/04/2023</h4>
                <h4 className='text-detail'>เจ้าของ/ผู้ที่เเจ้ง : ก้อง ห้วยไร่</h4>
              </div>
              <div className='contrain-info2'>
                <h2 style={{margin:'0px'}}>ช่องทางการติอต่อ</h2>
                <h4 className='text-detail'>Tel : 0811111111</h4>
                <h4 className='text-detail'>Line : gameza123</h4>
                <h4 className='text-detail'>Facebook : Mena Manae</h4>
              </div>
            </div>
            <div className='contrain-info3'>
              <div className='longdetail1'>
                <h4 style={{margin:'0px', marginBottom:'5px'}}>ลักษณะเด่น :</h4>
                มีสี................................................................
              </div>
              <div className='longdetail1'> 
                <h4 style={{margin:'0px', marginBottom:'5px'}}>รายละเอียดการหาย : </h4>
                หายจากบ้านออกไปตอนประมาน 4 โมง
              </div>
            </div>
          </div>
        </div>
        
          

            <Map />
          
        
        <div className='hint-contrainer'>
          <h2 style={{margin:'0px'}}>เบาะเเสช่วยหาน้อง</h2>
          <hr/>
        </div>
        <div className='hint-box'>
          {hint_mock.map((el_item) =>{
            return <HintItem {...el_item} key={el_item.id_hint}/>
          })}
        </div>
        <form>
          <div style={{marginBottom:'2%', marginLeft:'5%'}}>
            <h3 style={{margin:'0', marginLeft:'2%'}}>เเจ้งเบาะเเสช่วยหาน้อง</h3>
            <textarea placeholder="Ex. เห็นน้องอยู่เเนวหน้าซอย" rows={3} style={{width:'90%', borderRadius:'20px',padding:'2%'}}/>
          </div>
        </form>
        <div className='button-con2'>
          <button className='button-summit' onClick={Hi}>
          <h2 style={{margin: 0, fontWeight:300, color:'white'}}>เเจ้ง</h2>
          </button>
        </div>
    </div>

  );
}

export default Lostdetail;
