const getFeed = (req, res) =>{
    res.status(200).json({message:"Get feed"})
}

const postFeed = (req, res) =>{
    res.status(200).json({message:"Post feed"})
}

const putFeed = (req, res) =>{
    res.status(200).json({message:`Post feed ${req.params.id}`})
}

const deleteFeed = (req, res) =>{
    res.status(200).json({message:`Delete feed ${req.params.id}`})
}

module.exports = {getFeed, postFeed, putFeed, deleteFeed}