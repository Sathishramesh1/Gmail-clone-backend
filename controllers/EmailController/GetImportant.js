import {Email} from '../../models/Email.js'




const GetImportant=async(req,res)=>{

    try {
        const ImportantEmails= await Email.aggregate([
            {
              $project: {
                importantEmails: {
                  $concatArrays: [
                    {
                      $filter: {
                        input: '$inbox',
                        as: 'email',
                        cond: { $eq: ['$$email.important', true] },
                      },
                    },
                    {
                      $filter: {
                        input: '$send',
                        as: 'email',
                        cond: { $eq: ['$$email.important', true] },
                      },
                    },
                    {
                      $filter: {
                        input: '$draft',
                        as: 'email',
                        cond: { $eq: ['$$email.important', true] },
                      },
                    },
                  ],
                },
              },
            },
          ])
const filteredImportantEmails = ImportantEmails.filter(email => email.importantEmails.some(message => message.important));

    //    console.log(filteredImportantEmails);
    res.status(200).json({filteredImportantEmails});
    
        
    } catch (error) {
     console.log(error);
     res.status(500).send('Internal Server Error');

    }

}

export {GetImportant}
