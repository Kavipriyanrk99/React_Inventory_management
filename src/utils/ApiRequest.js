const fetchItems = async(url = '', msg = null) => {
    try{
        const response = await fetch(url);
        if(!response.ok) throw Error('Did not recieve expected Data!');
        const listItems = await response.json();
        msg = { data: listItems, error: null };
        return msg;
    }catch(err){
        msg = { data: null, error: err.message };
        return msg;
    }
}

const handleItems = async(url = '', optionsObj = null, errMsg = null) => {
    try{
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error('Please reload the app');
    }catch(err){
        errMsg = err.message;
    }finally{
        return errMsg;
    }
} 

const ApiRequest = {
    fetchItems,
    handleItems
};
export default ApiRequest;