import './lostpage.css'
import catim from '../photo-1611915387288-fd8d2f5f928b.jpg'

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

function Hi(){
    return(console.log('Hi'));
}
// function Item_animal(){
//     return();
// }

function AnimalItem(props){
    const {ani_id, ani_name, ani_type, tel, dateloss} = props;
    console.log(ani_id);
    return(
        <div className='card-ani'>
            <div className='box-img'>
                <img src={catim} className='card-pic' alt='card-im'/>
            </div>
            <div className='info-text'>
                <h3 style={{fontSize:'24px', margin:'10px', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>ชื่อ : {ani_name}</h3>
                <h4 style={{margin:'5px', marginLeft:'10px'}}>พันธ์ : {ani_type}</h4>
                <h4 style={{fontSize:'16px', margin:'10px',marginTop:'5px', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>ติดต่อที่ : {tel}</h4>
                <h4 style={{fontSize:'16px', margin:'10px',marginTop:'5px', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>วันที่หาย : {dateloss}</h4>
            </div>
           
            <div className='button-contrainer'>
                <button className='link-button' onClick={Hi}><h4 style={{margin:'0', color:'white'}}>เพิ่มเติม...</h4></button>
            </div>
        </div>
    );
}

function Lostpage() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const ani_mock = [{ani_id:'1', ani_name:'ไอโบ้', ani_type:'หมาไทย', tel:'0811111111', dateloss:'16/04/2023'},
    {ani_id:'2', ani_name:'ไอโบ้2', ani_type:'หมาไทย', tel:'0811111111', dateloss:'16/04/2023'},
    {ani_id:'3', ani_name:'ไอโบ้3', ani_type:'หมาไทย', tel:'0811111111', dateloss:'16/04/2023'}]

    return (
        <div className='contrainer'>
            <div className='header-page'>
                <h1 style={{marginBottom:'0px'}}>ประกาศน้องหายย !</h1>
            </div>
            <div className='header-create'>
                <button className='create-button' onClick={handleOpen}>
                    <h1 style={{margin: 0, fontWeight:300, color:'white'}}>+ เเจ้งน้องหาย</h1>
                </button>
            </div>
            <div className='animallost-group'>
                {ani_mock.map((el_item) =>{
                    return <AnimalItem {...el_item} key={el_item.ani_id}/>
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
                }}>
                <Fade in={open}>
                <Box className='modal-create-group'>
                        <div className='modal-head'>
                            <h1 style={{marginBottom:'0', marginLeft:"0"}}>เเจ้งน้องหายไปป</h1>
                            <hr className='line2'/>
                        </div>
                        <div className='form-in'>
                            <form>
                                <div className='input-lost'>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>ชื่อน้อง</h3>
                                        <input type='text' placeholder="Ex. ไอโบ้" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>สายพันธ์ุ</h3>
                                        <input type='text' placeholder="Ex. หมามะพร้าว" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>เพศ</h3>
                                        <input type='text' placeholder="Ex. หมามะพร้าว" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>วันที่หาย</h3>
                                        <input type='date' placeholder="Ex. Date" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>ลักษณะของน้อง</h3>
                                        <textarea placeholder="Ex. สีอะไร มีบอกคอไหม" rows={2} style={{width:'90%', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>รายละเอียดการหาย</h3>
                                        <textarea placeholder="Ex.หายตอนไหน เเล้วตอนหลุดน้องมีอาการเป็นอย่างไร" rows={2} style={{width:'90%', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>เบอร์ที่สามารถติอต่อได้</h3>
                                        <input type='text' placeholder="Ex. Date" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>LineID</h3>
                                        <input type='text' placeholder="Ex. Date" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                    <div style={{marginBottom:'2%'}}>
                                        <h3 style={{margin:'0', marginLeft:'2%'}}>รูปกลุ่ม</h3>
                                        <input type='text' placeholder="Img file" style={{width:'50%', height:'40px', borderRadius:'20px',padding:'2%'}}/>
                                    </div>
                                </div>
                            </form>
                            <div className='button-con2'>
                                <button className='button-summit-newgroup' onClick={handleClose}>
                                    <h2 style={{margin: 0, fontWeight:300, color:'white'}}>เเจ้งหาย !</h2>
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
  