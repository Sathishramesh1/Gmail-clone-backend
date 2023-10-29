import mongoose from "mongoose";


const EmailSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    inbox:[{
        from: String,
        to: String,
        subject: String,
        content: String,
        starred:{
            type:Boolean,
            default:false
        },
        important:{
            type:Boolean,
            default:false
        },
        date: String,
        attachment: String

    }],
    send:[{
        from: String,
        to: String,
        subject: String,
        content: String,
        starred:{
            type:Boolean,
            default:false
        },
        important:{
            type:Boolean,
            default:false
        },
        date: String,
        attachment: String

    }],
    draft:[{
        from: String,
        to: String,
        subject: String,
        content: String,
        starred:{
            type:Boolean,
            default:false
        },
        important:{
            type:Boolean,
            default:false
        },
        date: String,
        attachment: String

    }],
    trash:[{
        from: String,
        to: String,
        subject: String,
        content: String,
        starred:{
            type:Boolean,
            default:false
        },
        important:{
            type:Boolean,
            default:false
        },
        date: String,
        attachment: String

    }]


    
});

const Email=new mongoose.model("Email",EmailSchema);

export {Email}

export const date=new Date().toLocaleDateString + ""+new Date().toLocaleTimeString() ;