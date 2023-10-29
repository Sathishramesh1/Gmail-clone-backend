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
        date: String

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
        date: String

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
        date: String

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
        date: String

    }]


    
});

const Email=new mongoose.model("Email",EmailSchema);

export {Email}