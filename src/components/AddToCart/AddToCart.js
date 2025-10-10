
const getApp =()=>{
const appStr=localStorage.getItem("installList");

if(appStr){
    const appStrData=JSON.parse(appStr);
    return appStrData;
}else{
    return [];
}

}

const addToStorage =(id)=>{
    const oldData= getApp();

    if(oldData.includes(id)){
        alert('Already Installed')
    }else{
        oldData.push(id);
        const data =JSON.stringify(oldData);
        localStorage.setItem("installList",data);
    }
}

export {addToStorage,getApp};