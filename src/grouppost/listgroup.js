// import logo from './logo.svg';
import catim from '../images.jpg'
import './listgroup.css';
import TextField from '@mui/material/TextField';

function Hi(){
    return(console.log('Hi'));
}

function CardGroup(){
    return(
        <div className='card-g'>
            <div className='box-img'>
                <img src={catim} className='card-pic' alt='card-im'/>
            </div>
            <h3 style={{fontSize:'24px', margin:'10px', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>Sweet Cat</h3>
            <h4 style={{margin:'5px', marginLeft:'10px'}}>About Group</h4>
            <p style={{fontSize:'16px', margin:'10px',marginTop:'5px', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>สำหรับเเมวเมียวโดยเฉพาะ</p>
            <h4 style={{fontSize:'16px', margin:'10px',marginTop:'5px', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>By KongAtc</h4>
            <div className='button-contrainer'>
                <button className='link-button'><h4 style={{margin:'0', color:'white'}}>Go to Group...</h4></button>
            </div>
        </div>
    );
}

function GroupPage() {
  return (
    <div className='contrainer'>
        <div className='group-chat'>
            <h2 className='header'>Group In My Pet</h2>
            <hr className='line'></hr>
        </div>
        <div className='group-post-tool'>
            <button className='create-button' onClick={Hi}>
                <h2 style={{margin:'0'}}> + Create Group</h2>
            </button>
            <div className='search-group'>
                <h3 style={{margin:'0'}}>ic</h3>
                <TextField id="outlined-basic" label="Search" variant="outlined" style={{marginLeft:'15px'}} />
            </div>
        </div>
        <div className='card-group'>
            <CardGroup/>
            <CardGroup/>
            <CardGroup/>
            <CardGroup/>
            <CardGroup/>
            <CardGroup/>
        </div>
    </div>

  );
}

export default GroupPage;
