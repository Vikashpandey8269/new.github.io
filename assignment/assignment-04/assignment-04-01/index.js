const input=(e)=>{
    const text=document.getElementById('read');
    const value=(e.target.value);
    text.innerHTML=value;
}



document.getElementById('input-work').addEventListener('input',input);