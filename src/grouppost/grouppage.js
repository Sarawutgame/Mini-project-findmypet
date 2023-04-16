import catim from '../images.jpg'
import './grouppage.css';
import TextField from '@mui/material/TextField';
import catpro from '../photo-1611915387288-fd8d2f5f928b.jpg';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import SearchIcon from '@mui/icons-material/Search';
import {data} from "../data/data";
import {doc, setDoc, updateDoc} from "firebase/firestore"
import { db } from '../firebase'

function UserComment(props){
    
    const {id_comment, timestemp, comment_des, name_create} = props;

    console.log(id_comment);
    return(
        <div className='comment-con'>
            <div className='user-comment-con'>
                <img src={catpro} alt='img-pro' className='img-pro-con'/>
                <h3 className='name-comment'>{name_create}</h3>
                <p className='pro-create'>{timestemp}</p>
            </div>
            <div className='content-comment'>
                {comment_des}
            </div>
        </div>
    );
}

function PostItem(props){
    const {id, timestemp, postdes, name_createpost} = props;
    console.log(id, ' ', timestemp)

    const [open, setOpen] = React.useState(false);
    function handleOpen() {setOpen(true)};
    function handleClose() {setOpen(false)};
    const [comment, setComment] = React.useState("")
    
    const mock_comment=[
        {id_comment:'1', timestemp:'15/04/2023 16.30', comment_des:'Meow Comment', name_create:'KongATC'},
        {id_comment:'2', timestemp:'15/04/2023 16.50', comment_des:'MeowMeow', name_create:'KongATC'}
    ]

    const submitform = async () => {
        await updateDoc(doc(db, "mypet", "PhSEAJ2b6ne9K62cnBan"), {
            timestemp:'15/04/2023 16.30',
            comment_des: comment,
            name_create: "USA",
            test:'aaa'

          });
        handleClose()
    }

    return(
        <div className='post-item'>
            <div className='img-contrainer'>
                <img src={catim} alt='img-show' className='img-post'/>
            </div>
            <div className='user-post-con'>
                <img src={catpro} alt='img-pro' className='img-pro'/>
                <p className='pro-create'>Create By</p>
                <h3 className='name-pro'>{name_createpost}</h3>
            </div>
            <div className='content-post'>
                {postdes}
            </div>
            <div className='button-con'>
                <button className='button-comment' onClick={handleOpen}>
                    <h2 style={{margin:'0'}}> comment </h2>
                </button>
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
                    <Box className='modal-comment'>
                        <div className='modal-head'>
                            <h1 style={{marginBottom:'0', marginLeft:"0"}}>Comment</h1>
                            <hr className='line2'/>
                        </div>
                        <div className='comment-box'>
                        {mock_comment.map((el_item)=>{
                            return <UserComment {...el_item} key={el_item.id_comment}/>
                        })}
                        </div>
                        
                        
                        <div className='form-in'>
                            <form>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>คอมเม้นกัน</h3>
                                    <textarea placeholder="พิมพ์ได้เลย" onChange={(e) => setComment(e.target.value)} rows={3} style={{width:'90%', borderRadius:'20px',padding:'2%'}}/>
                                </div>
                            </form>
                            <div className='button-con2'>
                                <button className='button-summit' onClick={submitform}>
                                    <h2 style={{margin: 0, fontWeight:300, color:'white'}}>Comment</h2>
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

function Group() {
    let box = data();
    console.log(box)
    console.log("aaa")
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


    const mock_post=[
        {id_post:'1', timestemp:'15/04/2023 16.14', postdes:'Meow ดิ้นๆ', name_createpost:'KongATC'},
        {id_post:'2', timestemp:'15/04/2023 16.15', postdes:'เเมวโครตน่ารัก', name_createpost:'Game'}
    ]

  return (
    <div className='contrainer'>
        <div className='head-contrainer'>
            <p style={{color:'gray',margin:'0'}}>Group Name:</p>
            <h1 style={{margin:'0'}}>Cute Cat</h1>
        </div>
        <hr className='line'></hr>
        <div className='group-post-tool'>
            <button className='create-button' onClick={handleOpen2}>
                <h2 style={{margin:'0'}}> + New Post</h2>
            </button>
            <div className='search-group'>
                <SearchIcon fontSize='large'/>
                <TextField id="outlined-basic" label="Search" variant="outlined" style={{marginLeft:'15px'}} />
            </div>
        </div>
        <div className='post-contrainer'>
            {box.map((el_item)=>{
                return <PostItem {...el_item} key={el_item.id}/>
            })}
        </div>

        <div>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open2}
            onClose={handleClose2}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                timeout: 500,
                },
            }}>
            <Fade in={open2}>
                <Box className='modal-new-post'>
                    <div className='modal-head'>
                        <h1 style={{marginBottom:'0', marginLeft:"0"}}>New Post</h1>
                        <hr className='line2'/>
                    </div>
                    <div className='form-in-newpost'>
                        <form>
                            <div style={{marginBottom:'2%'}}>
                                <h3 style={{margin:'0', marginLeft:'2%'}}>อัพรูปภาพ</h3>
                                <textarea placeholder="ใส่รูป" rows={3} style={{width:'90%', borderRadius:'20px',padding:'2%'}}/>
                            </div>
                            <div style={{marginBottom:'2%'}}>
                                <h3 style={{margin:'0', marginLeft:'2%'}}>รายระเอียดโฟส</h3>
                                <textarea placeholder="พิมพ์ได้เลย" rows={3} style={{width:'90%', borderRadius:'20px',padding:'2%'}}/>
                            </div>
                        </form>
                        <div className='button-con2'>
                            <button className='button-summit-newpost' onClick={handleClose2}>
                                <h2 style={{margin: 0, fontWeight:300, color:'white'}}>New Post</h2>
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

export default Group;
