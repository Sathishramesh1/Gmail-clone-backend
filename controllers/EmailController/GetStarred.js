import {Email} from '../../models/Email.js'


const GetStarred=async(req,res)=>{

    try {
      const StarredEmails= await Email.aggregate([
        {
        $match:{user:req.user._id}

        },
        {
          $project: {
            starredEmails: {
              $concatArrays: [
                {
                  $filter: {
                    input: '$inbox',
                    as: 'email',
                    cond: { $eq: ['$$email.starred', true] },
                  },
                },
                {
                  $filter: {
                    input: '$send',
                    as: 'email',
                    cond: { $eq: ['$$email.starred', true] },
                  },
                },
                {
                  $filter: {
                    input: '$draft',
                    as: 'email',
                    cond: { $eq: ['$$email.starred', true] },
                  },
                },
              ],
            },
          },
        },
      ])
const filteredStarredEmails = StarredEmails.filter(email => email.starredEmails.some(message => message.starred));

      
//    console.log(filteredStarredEmails);
res.status(200).json({filteredStarredEmails});
        
    } catch (error) {
     console.log(error);
     res.status(500).send('Internal Server Error');

    }

}

export {GetStarred}