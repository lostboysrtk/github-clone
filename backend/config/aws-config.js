const AWS = require("aws-sdk");

AWS.config.update({ region: "eu-north-1" });

const s3 = new AWS.S3();
const S3_BUCKET = "demobucketmine";

module.exports = { s3, S3_BUCKET };




// {
// 	"Version": "2012-10-17",
// 	"Statement": [
// 		{
// 			"Effect": "Allow",
// 			"Principal": {
// 			    "AWS":"arn:aws:iam::831926617248:user/demouser"
// 			},
// 			"Action": "s3:*",
// 			"Resource":[
//                 "arn:aws:s3:::demobucketmine",
//                 "arn:aws:s3:::demobucketmine/*"
//             ]
// 	    }
//    ]
// }






