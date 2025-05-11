import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/temp") //cb -> call back
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round (Math.random()*1E9)//changing of file name
        cb(null, file.fieldname + '-' + uniqueSuffix)
        //there are chances that user uploads files with same name which cause inconsistency 
    }
})

export const upload = multer({
    storage,
})