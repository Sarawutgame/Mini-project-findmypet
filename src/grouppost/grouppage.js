import catim from '../images.jpg'
import './grouppage.css';
import TextField from '@mui/material/TextField';
import catpro from '../photo-1611915387288-fd8d2f5f928b.jpg';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

function UserComment(){
    return(
        <div className='comment-con'>
            <div className='user-comment-con'>
                <img src={catpro} alt='img-pro' className='img-pro-con'/>
                <h3 className='name-comment'>KongATC</h3>
                <p className='pro-create'>15/04/2022 22.30</p>
            </div>
            <div className='content-comment'>
                dsaddadasdasdasdasdsadasdasdsadasdsadasdsadsasdsadasdasddsaddadasdasdasdasdsadasdassdasadasdsa
                dsaddadasdasdasdasdsadasdas
                dsaddadasdasdasdasdsadasdas
            </div>
        </div>
    );
}

function PostItem(){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className='post-item'>
            <div className='img-contrainer'>
                <img src={catim} alt='img-show' className='img-post'/>
            </div>
            <div className='user-post-con'>
                <img src={catpro} alt='img-pro' className='img-pro'/>
                <p className='pro-create'>Create By</p>
                <h3 className='name-pro'>KongATC</h3>
            </div>
            <div className='content-post'>
                dsaddadasdasdasdasdsadasdasdsadasdsadasdsadsasdsadasdasddsaddadasdasdasdasdsadasdassdasadasdsa
                dsaddadasdasdasdasdsadasdas
                dsaddadasdasdasdasdsadasdas
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
                            <UserComment/>
                            <UserComment/>
                            <UserComment/>
                        </div>
                        
                        
                        <div className='form-in'>
                            <form>
                                <div style={{marginBottom:'2%'}}>
                                    <h3 style={{margin:'0', marginLeft:'2%'}}>คอมเม้นกัน</h3>
                                    <textarea placeholder="พิมพ์ได้เลย" rows={3} style={{width:'90%', borderRadius:'20px',padding:'2%'}}/>
                                </div>
                            </form>
                            <div className='button-con2'>
                                <button className='button-summit' onClick={handleClose}>
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

    const [open2, setOpen2] = React.useState(true);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


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
                <h3 style={{margin:'0'}}>ic</h3>
                <TextField id="outlined-basic" label="Search" variant="outlined" style={{marginLeft:'15px'}} />
            </div>
        </div>
        <div className='post-contrainer'>
            <PostItem/>
            <PostItem/>
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
