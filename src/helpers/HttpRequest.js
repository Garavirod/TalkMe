import axios from 'axios';
import Swal from 'sweetalert';
const request = {};


request.axiosCustomPost = async() => {
    const resp = await axios.post(endpoint,data)
    .then((res)=>{
        Swal('Registration','User was added successfuly!','success')
        return res;
    })
    .catch(err=>{
        console.log(err);
        return {ok:false}
    });
};


module.exports = {request}