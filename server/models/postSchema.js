
const postSchema = {
    text:string,
    required:true,
}

const Status = monggose.model('Status', postSchema)

module.export = Status
