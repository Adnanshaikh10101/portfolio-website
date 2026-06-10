import "../index.css";
import React , { useState } from "react";
function Contact(){
    const [form,setform]=useState({
        name:"",
        email:"",
        msg:""
    });
    const handleChange = (e)=>{
        setform({...form,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!form.name || !form.email || !form.msg){
            alert("All Field Required");
            return;
        }
        try{
            const res=await fetch("http://localhost:5000/contact",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(form)
            });
            const data =await res.json();
            alert(data.msg);
            setform({
                name:"",
                email:"",
                msg:""
            });
        }
        catch(err){
            alert("Error Sending message");
        }
    };


    return(
        <div className="Contact">
            <h1>Contact Me</h1>
            <form className="contact-container" onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"/><br/>
                <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"/><br/>
                <textarea   
                name="msg"
                value={form.msg}
                onChange={handleChange}
                placeholder="Enter Your Message"/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Contact;